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
        <v-col cols=12>
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <v-card-text>
              <span>Nossos Parceiros</span><br>
            </v-card-text>
            <v-row>
              <v-col
                v-for="partner in partnersArray"
                :key="partner.id"
                cols="3"
              >
                <v-card @click="goTo(partner.link)">
                  <v-card-text>
                    <span>{{partner.name}}</span><br>
                  </v-card-text>
                  <v-img
                    class="white--text"
                    :height="partner.height"
                    :src="partner.src"
                  ></v-img>
                </v-card>

              </v-col>
            </v-row>
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
      "cardsAboutPage",
      "partnersArray"
    ])
  },
  mounted() {
  },
  methods: {
    goTo(link) {
      window.open(link, '_blank');
    }
  }
};
</script>
