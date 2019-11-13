<template>
  <v-card class="mx-auto">
    <v-container
      class="pa-2"
      fluid
    >
      <v-data-iterator
        :items="cardsShopPageOne"
        :items-per-page.sync="itemsPerPage"
        :footer-props="footerProps"
      >
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="card in props.items"
              :key="card.id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
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
        </template>
      </v-data-iterator>
      <v-dialog
        v-model="dialog"
        max-width="310"
      >
        <v-card>
          <v-card-title class="headline">{{ description.title }}</v-card-title>
          <v-img
            class="white--text"
            :src="description.src"
          ></v-img>
          
          <v-card-text>
          <v-spacer></v-spacer>
            <span>{{ description.text }}</span>
            <v-spacer></v-spacer>
            <span>{{ description.price }}</span>
          </v-card-text>

          <v-card-actions>
            <v-text-field
              v-model="shopQuantity"
              class="mx-4"
              label="Quantidade"
              :max="description.available"
              min="1"
              step="1"
              style="width: 125px"
              type="number"
            ></v-text-field>
            <v-spacer />
            <v-text-field
            label="disponível"
            disabled
            :value="description.available"
            >
            </v-text-field>
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
// import Axios from 'axios'
import {mapGetters} from 'vuex'
export default {
  data: () => ({
    dialog: false,
    description: {},
    snackbar: false,
    itemsPerPage: 12,
    footerProps: {
      itemsPerPageOptions: [6,12,24,-1],
      itemsPerPageText: 'Itens por página'
    },
    shopQuantity: 1
  }),
  computed: {
    ...mapGetters([
      "cardsShopPageOne"
    ])
  },
  created() {
    this.$store.dispatch("getShopOne")
  },
  methods: {
    showDescription(product) {
      this.dialog = true
      this.description = product
    },
    addToCart(product) {
      this.dialog = false
      Object.assign(product,{quantidade: parseInt(this.shopQuantity, 10)})
      this.$store.dispatch("shopAddToCart", product)
      this.shopQuantity = 1
      this.snackbar = true
    }
  }
};
</script>
