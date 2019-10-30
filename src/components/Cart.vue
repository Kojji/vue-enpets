<template>
  <v-container>
    <V-layout>
      <h3>{{ sessionCart }}</h3>
    </V-layout>
  </v-container>
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
      "sessionCart"
    ])
  },
}
</script>