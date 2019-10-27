<template>
  <v-card class="mx-auto">
    <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <v-col
          v-for="card in cardsShopPageTwo"
          :key="card.id"
          :cols="card.flex"
        >
          <v-card
            class="pa-2"
            outlined
            tile
            @click.stop="showDescription(card)"
          >
            <v-img
              class="white--text"
              height="200px"
              :src="card.src"
            ></v-img>


            <v-card-text>
              <span class="text--primary">
                <span>{{card.title}}</span><br>
                <span>{{card.price}}</span><br>
              </span>
            </v-card-text>

            <v-card-actions>
              <v-btn
                text
                color="orange"
                @click.stop="addToCart(card)"
              >
                comprar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">{{ description.title }}</v-card-title>

          <v-card-text>
            <span>{{ description.text }}</span>
            <span>{{ description.price }}</span>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              text
              color="orange"
              @click.stop="addToCart(description)"
            >
              comprar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-snackbar
        v-model="snackbar"
        :timeout="1500"
      >
        Item Adicionado ao Carrinho
        <v-btn
          color="blue"
          text
          @click="snackbar = false"
        >
          Fechar
        </v-btn>
      </v-snackbar>
    </v-container>
  </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data: () => ({
    dialog: false,
    description: {},
    snackbar: false
  }),
  computed: {
    ...mapGetters([
      "cardsShopPageTwo"
    ])
  },
  created() {
    this.$store.dispatch("getShopTwo")
  },
  methods: {
    showDescription(product) {
      this.dialog = true
      this.description = product
    },
    addToCart(product) {
      this.dialog = false
      this.$store.dispatch("shopAddToCart", product)
      this.snackbar = true
    }
  }
};
</script>
