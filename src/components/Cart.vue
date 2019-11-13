<template>
  <v-container>
    <V-layout>
      <v-data-iterator
      :items="sessionCart"
      hide-default-footer>
        <template v-slot:default="props">
          <v-row>
            <v-col
              v-for="prod in props.items"
              :key="prod.id"
              :cols="12"
            >
              <v-card>
                {{ prod }}
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </V-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data: () => ({
    dialog: false,
    description: {},
  }),
  computed: {
    ...mapGetters([
      "sessionCart",
      "cardsShopPageOne",
      "cardsShopPageTwo"
    ])
  },
}
</script>