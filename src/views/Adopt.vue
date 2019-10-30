<template>
  <v-container>
    <router-view />
    <template>
      <v-dialog v-model="dialog" max-width="350">
        <v-card>
          <v-card-title class="headline">Adoção</v-card-title>
          <v-card-text>Por regras estabelecidas pelas Ong's ao realizar a doação de animais, a adoção de animais das Ong's apresentam algumas peculiaridades que podem ser conferidas na página de ajuda sobre as adoções.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="pink darken-1" dark text :to="redirects.redirectAdoptHelp" @click="dialog = false">Ajuda</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    dialog: false,
  }),
  computed: {
    ...mapGetters([
      "redirects"
    ])
    
  },
  created() {
    this.dialog = true
  },
}
</script>