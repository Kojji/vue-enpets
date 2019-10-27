<template>
  <v-card class="mx-auto">
    <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <v-col
        v-for="animal in adoptOngList"
          :key="animal.id"
          :cols="flex"
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
              <span>{{ animal.age }}</span>
              <v-spacer></v-spacer>
              <span>{{ animal.description }}</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog
        v-model="dialog"
        max-width="310"
      >
        <v-card>
          <v-card-title class="headline">{{ description.nome }}</v-card-title>
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
    description: {}
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