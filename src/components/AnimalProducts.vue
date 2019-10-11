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
              >
                comprar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data: () => ({
    
  }),
  computed: {
    ...mapGetters([
      "cardsShopPageOne"
    ])
    
  },
};
</script>
