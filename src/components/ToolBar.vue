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
        <v-btn text :to="redirects.redirectAdoptOng">Adote</v-btn> <!-- redirecionar para pagina de adoção -->
        <v-btn text :to="redirects.redirectParticipe">Participe</v-btn>
        <v-btn text :to="redirects.redirectShop1">Loja</v-btn>
        <v-btn text :to="redirects.redirectEvents">Eventos</v-btn>
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
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on"><v-icon>{{ toolBarIcons.forumIcon }}</v-icon></v-btn>
            </template>
            <span>Chats</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on"><v-icon>{{ toolBarIcons.catIcon }}</v-icon></v-btn>
            </template>
            <span>Postar</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on"><v-icon>{{ toolBarIcons.albumIcon }}</v-icon></v-btn>
            </template>
            <span>Inventário</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on"><v-icon>{{ toolBarIcons.exchangeIcon }}</v-icon></v-btn> <!-- trocar pontos de compras -->
            </template>
            <span>Pontos</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on" :to="redirects.redirectCart"><v-icon>{{ toolBarIcons.cartIcon }}</v-icon></v-btn>
            </template>
            <span>Carrinho</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on" ><v-icon>{{ toolBarIcons.donationIcon }}</v-icon></v-btn>
            </template>
            <span>Doações</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on"><v-icon>{{ toolBarIcons.helpIcon }}</v-icon></v-btn>
            </template>
            <span>Ajuda</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on" @click="deslogar"><v-icon>{{ toolBarIcons.exitIcon }}</v-icon></v-btn>
            </template>
            <span>Sair</span>
          </v-tooltip>
        </v-toolbar-items>
        <v-toolbar-items v-if="inAdoptRoute">
          <v-btn text :to="redirects.redirectAdoptOng">Ong's</v-btn>
          <v-btn text :to="redirects.redirectAdoptPeople">Pessoas</v-btn>
          <v-btn text :to="redirects.redirectAdoptHelp"><v-icon>{{ toolBarIcons.helpIcon }}</v-icon></v-btn>
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
  computed: {
    ...mapGetters([
      "inShopRoute",
      "inUserRoute",
      "inAdoptRoute",
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
      if(confirm("Tem certeza que deseja sair do sistema?")) {
        this.$store.dispatch('userLogoff')
          .then(()=>{
            this.$router.push('/login')
          })
      }
    },
  },
};
</script>
<style scoped>
#Enpets {
  cursor: pointer;
}
</style>

