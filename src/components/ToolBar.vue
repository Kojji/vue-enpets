<template>
  <v-layout wrap>
    <v-app-bar app
    fixed
    :extended = "isExtended"
    dark
    color="pink darken-1"
    >
      <v-toolbar-title class="headline text-uppercase" @click="redirectLoja" id="Enpets">
        <span>EN</span>
        <span class="font-weight-light">PETS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text :to="redirects.redirectHome">Sobre Nós</v-btn>
        <v-btn text >Adote</v-btn> <!-- redirecionar para pagina de adoção -->
        <v-btn text :to="redirects.redirectParticipe">Participe</v-btn>
        <v-btn text :to="redirects.redirectShop1">Loja</v-btn>
        <v-btn text :to="redirects.redirectLogin" v-show = "!logged">Entrar</v-btn>
        <v-btn text :to="redirects.redirectUserPage" v-show = "logged">Usuário</v-btn>
      </v-toolbar-items>
      <template v-if="isExtended" #extension>
        <v-toolbar-items v-if="inShopRoute">
          <v-btn text :to="redirects.redirectShop1"><v-icon>{{ toolBarIcons.dogIcon }}</v-icon></v-btn>
          <v-btn text :to="redirects.redirectShop2"><v-icon>{{ toolBarIcons.ownerIcon }}</v-icon></v-btn>
          <v-btn text :to="redirects.redirectCart"><v-icon>{{ toolBarIcons.cartIcon }}</v-icon></v-btn>
        </v-toolbar-items>
        <v-toolbar-items v-if="inUserRoute">
          <v-btn text><v-icon>{{ toolBarIcons.forumIcon }}</v-icon></v-btn>
          <v-btn text><v-icon>{{ toolBarIcons.albumIcon }}</v-icon></v-btn>
          <v-btn text><v-icon>{{ toolBarIcons.exchangeIcon }}</v-icon></v-btn> <!-- trocar pontos de compras -->
          <v-btn text :to="redirects.redirectCart"><v-icon>{{ toolBarIcons.cartIcon }}</v-icon></v-btn>
          <v-btn text><v-icon>{{ toolBarIcons.helpIcon }}</v-icon></v-btn>
          <v-btn text @click="deslogar"><v-icon>{{ toolBarIcons.exitIcon }}</v-icon></v-btn>
        </v-toolbar-items>
      </template>
    </v-app-bar>
  </v-layout>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "ToolBar",
  data() {
    return {
      };
  },
  mounted() {
  },
  computed: {
    ...mapGetters([
      "inShopRoute",
      "inUserRoute",
      "isExtended",
      "toolBarIcons",
      "logged",
      "redirects"
    ])
    
  },
  methods: {
    redirectLoja() {
      this.$router.push('/us')
    },
    deslogar() {
      alert("Simula o logoff de usuário")
      this.$store.dispatch('userLogoff')
        .then(()=>{
          this.$router.push('/login')
        })
    }
  }
};
</script>
<style scoped>
#Enpets {
  cursor: pointer;
}
</style>

