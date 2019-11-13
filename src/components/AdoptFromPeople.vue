<template>
  <v-card class="mx-auto">
    <v-container
      class="pa-2"
      fluid
    >
      <v-data-iterator
        :items="adoptPeopleList"
        :items-per-page.sync="itemsPerPage"
        :footer-props="footerProps"
      >
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="animal in props.items"
              :key="animal.id"
              :cols="flex"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card
                class="pa-2"
                outlined
                tile
                @click.stop="showDescription(animal)"
              >
                <v-img
                class="white--text"
                height="200px"
                :src="animal.photo"
                ></v-img>
                <v-card-text>
                  <span>{{ animal.name }}</span>
                  <v-spacer></v-spacer>
                  <span>{{ animal.sex }}</span>
                  <v-spacer></v-spacer>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
      <v-dialog
        v-model="dialog"
        max-width="310"
      >
        <v-card>
          <v-card-title class="headline">{{ description.name }}</v-card-title>
          <v-card-text>
            <span>{{ description.age }}</span>
            <v-spacer></v-spacer>
            <span>{{ description.description }}</span>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
            <v-btn
              text
              color="pink"
              @click.stop="enterChat(description)"
            >
              Chat
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="chatWindow"
        max-width="720"
        persistent
      >
        <v-card>
          <v-app-bar
            dark
            color="pink"
          >
            <v-toolbar-title>{{ identifyUser }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="chatWindow = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-app-bar>
          <div class="d-flex flex-column">
            <v-card-text>
              <v-card
                v-for="message in activeChatMessage"
                :key="message.id"
                @click="showUser(message.userName)"
                class="pr-1"
                :color="messageColor(message.userId)"
                shaped
              >
                <div class="d-flex flex-row ma-4">
                  <div class="d-flex flex-column">
                    <v-card-text>
                      <span style="font-size: 14px">{{ message.userName }}   </span><span style="font-size: 12px; overflow: auto">{{ message.time }}</span>
                      <div class="subtitle-1">{{ message.message }}</div>
                    </v-card-text>
                  </div>
                </div>
              </v-card>  
            </v-card-text>
            <div class="d-flex flex-row ma-4">
              <v-textarea
                :disabled="!logged"
                v-model="chatMessage"
                :label="message"
                auto-grow
                rows="1"
                row-height="12"
              ></v-textarea>
              <v-btn icon class=" align-self-center">
                <v-icon>mdi-map</v-icon>
              </v-btn>
              <v-btn icon class=" align-self-center">
                <v-icon>mdi-emoticon</v-icon>
              </v-btn>
              <v-btn icon @click="sendMessage" class=" align-self-center">
                <v-icon>mdi-send</v-icon>
              </v-btn>

            </div>
          </div>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="userInfo"
      >
      <v-card>
        <v-card-title>{{userInformation}}</v-card-title>
        <v-card-text>foto, cidade, email</v-card-text>
        <v-card-actions>
          <v-btn>Enviar Mensagem</v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
    </v-container>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  data: () => ({
    flex: 3,
    dialog: false,
    activeChat: null,
    userInformation: null,
    userInfo: false,
    description: {},
    itemsPerPage: 12,
    chatWindow: false,
    chatMessage: "",
    footerProps: {
      itemsPerPageOptions: [6,12,24,-1],
      itemsPerPageText: 'Itens por página'
    },
  }),
  computed: {
    ...mapGetters([
      "adoptPeopleList",
      "userData",
      "activeChatMessage",
      "logged"
    ]),
    message() {
      if(this.logged) { return "Mensagem "}
      else { return "É preciso fazer login para enviar mensagens!"}
    },
    identifyUser() {
      if(this.userData) { return this.userData[0].userName }
      else { return "Usuário" } 
    }
  },
  methods: {
    messageColor(userId) {
      if(this.logged) {
        if(this.userData[0].id == userId) { return "green lighten-4" }
        else { return "indigo lighten-5"}
      }
        else { return "indigo lighten-5"}
    },
    showDescription(card) {
      this.dialog = true
      this.description = card
    },
    enterChat(animal) {
      this.chatWindow = true
      this.activeChat = animal.id
      this.$store.dispatch("accessMessages", animal)
    },
    sendMessage() {
      let time = new Date()
      this.$store.dispatch("sendChatMessage", {chatId: this.activeChat, message: this.chatMessage, userData:this.userData, time: time})
      .then(()=>{
        this.$store.dispatch("accessMessages", {id: this.activeChat})
        this.chatMessage = ""
      })
    },
    showUser(userName) {
      this.userInformation = userName
      this.userInfo = true
    }
  }
}
</script>

<style scoped>
.dateConfig{
  font-size: 14px;
}
</style>
