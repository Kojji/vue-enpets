<template>
  <v-card class="mx-auto">
    <v-container
      class="pa-2"
      fluid
    >
      <v-data-iterator
        :items="adoptOngList"
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
    description: {},
    itemsPerPage: 12,
    footerProps: {
      itemsPerPageOptions: [6,12,24,-1],
      itemsPerPageText: 'Itens por página'
    },
  }),
  computed: {
    ...mapGetters([
      "adoptOngList"
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