<template>
  <v-card class="mx-auto">
    <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: .5
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-col
          class="cards"
          v-for="event in eventList"
            :key="event.id"
            :cols="flex"
          >
            <v-card
              class="pa-2"
              outlined
              tile
              @click.stop="showDescription(event)"
            >
              <v-img
              class="white--text"
              height="100px"
              :src="event.src"
              ></v-img>
              <v-card-text>
                <span>{{ event.title }}</span>
                <v-spacer></v-spacer>
                <span>{{ event.date }} - {{ event.shortDescription }}</span>
                <v-spacer></v-spacer>
              </v-card-text>
            </v-card>
          </v-col>
        </v-lazy>
      </v-row>
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
    isActive: false
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
