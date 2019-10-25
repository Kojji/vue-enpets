<template>
  <v-card class="mx-auto">
    <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <v-col
          v-for="card in cardsShopPageOne"
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
    </v-container>
  </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data: () => ({
    dialog: false,
    description: {}
  }),
  computed: {
    ...mapGetters([
      "cardsShopPageOne"
    ])
  },
  methods: {
    showDescription(product) {
      this.dialog = true
      this.description = product
    },
    addToCart(product) {
      this.dialog = false
      // eslint-disable-next-line
      console.log(product)
    }
  }
};
</script>
