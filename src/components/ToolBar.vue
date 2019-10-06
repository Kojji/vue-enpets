<template>
  <v-layout wrap>
    <v-toolbar
    :extended = "inShopRoute"
    dark
    color="pink darken-1"
    >
      <v-toolbar-title class="headline text-uppercase" @click="redirectLoja" id="Enpets">
        <span>EN</span>
        <span class="font-weight-light">PETS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!-- colocar dados usuário -->
        <v-btn text :to="redirectHome">Sobre Nós</v-btn>
        <v-btn text :to="redirectParticipe">Participe</v-btn>
        <v-btn text :to="redirectShop1">Loja</v-btn>
        <v-btn text :to="redirectLogin">Entrar</v-btn> <!-- trocar por sair -->
      </v-toolbar-items>
      <template v-if="inShopRoute" #extension>
        <v-toolbar-items>
          <v-btn text :to="redirectShop1"><v-icon>{{ toolBarIcons.dogIcon }}</v-icon></v-btn>
          <v-btn text :to="redirectShop2"><v-icon>{{ toolBarIcons.ownerIcon }}</v-icon></v-btn>
          <v-btn text :to="redirectCart"><v-icon>{{ toolBarIcons.cartIcon }}</v-icon></v-btn>
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
      redirectLogin: "/login",
      redirectParticipe: "/participate",
      redirectHome: "/us",
      redirectShop1: "/shop/category1",
      redirectShop2: "/shop/category2",
      redirectCart: "/shop/cart"
      };
  },
  mounted() {
  },
  computed: {
    ...mapGetters([
      "inShopRoute",
      "toolBarIcons"
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

