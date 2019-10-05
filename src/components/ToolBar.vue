<template>
  <v-layout wrap>
    <v-toolbar
    :extended = "inShopRoute"
    dark
    color="pink darken-1"
    >
      <v-toolbar-title class="headline text-uppercase" @click="redirectLoja" id="nomeApp">
        <span>EN</span>
        <span class="font-weight-light">PETS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!-- colocar dados usuário -->
        <v-btn text :to="redirectHome">Sobre Nós</v-btn>
        <v-btn text :to="participeRoute">Participe</v-btn>
        <v-btn text :to="lojaRoute">Loja</v-btn>
        <v-btn text :to="loginRoute">Entrar</v-btn> <!-- trocar por sair -->
      </v-toolbar-items>
      <template v-if="inShopRoute" #extension>
        <v-toolbar-items>
          <v-btn text>Link 1</v-btn>
          <v-btn text>Link 2</v-btn>
          <v-btn text>Link 3</v-btn>
        </v-toolbar-items>
      </template>
      
    </v-toolbar>
  </v-layout>
</template>

<script>
//import firebase from "firebase";
//import noLoginPhoto from "../assets/noLoginPhoto.png";
import {mapGetters} from "vuex"

export default {
  name: "ToolBar",
  data() {
    return {
      loginRoute: "/login",
      lojaRoute: "/shop",
      participeRoute: "/participate",
      redirectHome: "/us",
      };
  },
  mounted() {
  },
  computed: {
    ...mapGetters([
      "inShopRoute"
    ])
    
  },
  methods: {
    redirectLoja() {
      this.$router.push('/us')
    },
    getPhoto() {

    },
    getUser() {
      
    }
  }
};
</script>
<style scoped>
#nomeApp {
  cursor: pointer;
}
</style>

