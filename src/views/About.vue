<template>
  <v-card class="mx-auto">
    <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <v-col
          v-for="card in cardsAboutPage"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <v-img
              class="white--text"
              :height="card.height"
              :src="card.src"
            ></v-img>


            <v-card-text>
              <span>{{card.title}}</span><br>
              <span v-html="card.text" class="text--primary"></span><br>
            </v-card-text>

            <v-card-actions v-if="card.button">
              <v-btn
                text
                :to="card.redirect"
                color="orange"
              >
                {{ card.button }}
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
      "cardsAboutPage"
    ])
    
  },
};
</script>
