<template>
  <v-card class="mx-auto">
    <v-container
      class="pa-2"
      fluid
    >
      <v-data-iterator
        :items="eventList"
        :items-per-page.sync="itemsPerPage"
        :footer-props="footerProps"
      >
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="item in props.items"
              :key="item.id"
              cols="12"
              
            >
              <v-card
                outlined
                tile
                @click.stop="showDescription(item)"
              >
                <v-img
                  class="white--text"
                  height="100px"
                  :src="item.src"
                ></v-img>
                <v-card-text>
                  <span>{{ item.title }}</span>
                  <v-spacer></v-spacer>
                  <span>{{ item.date }} - {{ item.shortDescription }}</span>
                  <v-spacer></v-spacer>
                </v-card-text>
                <v-divider></v-divider>
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
          <v-card-title class="headline">{{ description.title }}</v-card-title>
        </v-card>
      </v-dialog>
    </v-container>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  data: () => ({
    flex: 12,
    dialog: false,
    description: {},
    itemsPerPage: 4,
    footerProps: {
      itemsPerPageOptions: [4,8,12,-1],
      itemsPerPageText: 'Itens por página'
    },
  }),
  computed: {
    ...mapGetters([
      "eventList"
    ])
  },
  methods: {
    showDescription(card) {
      this.dialog = true
      this.description = card
    }
  }
}
</script>
<style scoped>
.cards {
 max-width: 1020px;
}
</style>
