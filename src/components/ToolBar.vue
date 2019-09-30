<template>
  <v-layout wrap>
    <v-toolbar app dense dark color="pink darken-1">
      <v-toolbar-title class="headline text-uppercase" @click="redirectHome" id="nomeApp">
        <span>EN</span>
        <span class="font-weight-light">PETS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!-- colocar dados usuário -->
        <v-btn text @click="redirectHome">Quem Somos</v-btn>
        <v-btn text :to="participeRoute">Participe</v-btn>
        <v-btn text :to="lojaRoute">Loja</v-btn>
        <v-btn text :to="loginRoute">Entrar</v-btn> <!-- trocar por sair -->
      </v-toolbar-items>
    </v-toolbar>
  </v-layout>
</template>

<script>
//import firebase from "firebase";
//import noLoginPhoto from "../assets/noLoginPhoto.png";

export default {
  name: "ToolBar",
  data() {
    return {
      loginRoute: "/login",
      lojaRoute: "/loja",
      participeRoute: "/participe",
      };
  },
  mounted() {
  },
  computed: {
    /* ...mapGetters([
      'storeUserInfo'
    ]) */
    
  },
  methods: {
    redirectHome() {
      this.$router.push('/');
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

