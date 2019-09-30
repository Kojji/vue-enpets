<template>
  <v-layout wrap>
    <v-toolbar app dark color="deep-orange lighten-1">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase" @click="redirectHome" id="nomeApp">
        <span>EN</span>
        <span class="font-weight-light">PETS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn round large flat :to="loginRoute">Login</v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="getPhoto()" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ getUser() }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import firebase from "firebase";
//import noLoginPhoto from "../assets/noLoginPhoto.png";

export default {
  name: "ToolBar",
  data() {
    return {
      loginRoute: "/login",
      drawer: null,
      profilePic: "",
      items: [
        { title: "Home", icon: "home", link: "/" },
        { title: "Conta", icon: "settings", link: "/conta" },
        { title: "notificação", icon: "notifications", link: "/notifConfig" },
        { title: "Compartilhar", icon: "share", link: "/share" },
        { title: "Extensão", icon: "extension", link: "/extConfig" },
        { title: "Ajuda", icon: "help", link: "/help" },
        { title: "Sair", icon: "exit_to_app", link: "/exit" }
      ]
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
      /* var user = firebase.auth().currentUser;
      if (user) {
        this.$store.commit('storeUserInfo', user);
        return this.storeUserInfo.photo;
      } else {
        return noLoginPhoto;
      } */
    },
    getUser() {
      /* var user = firebase.auth().currentUser;
      if (user) {
        this.$store.commit('storeUserInfo', user);
        return this.storeUserInfo.displayName;
      } else {
        return 'Usuário';
      } */
    }
  }
};
</script>
<style scoped>
#nomeApp {
  cursor: pointer;
}
</style>

