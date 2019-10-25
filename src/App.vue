<template>
  <v-app>
    <ToolBar />
    <v-content>
      <v-container>
        <template>
          <v-dialog v-model="dialog" persistent max-width="350">
            <v-card>
              <v-card-title class="headline">Sobre o Enpets</v-card-title>
              <v-card-text>Este sistema foi feito somente como um protótipo, para fins educacionais para os próprios desenvolvedores, por isto ele não tem um servidor para prove-lo com informações, o que resulta em algumas páginas sem dados e a impossibilidade de fazer login</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="pink darken-1" dark text @click="dialog = false">Entendi</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <router-view class="routerView"></router-view>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import ToolBar from "./components/ToolBar";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    ToolBar,
    Footer,
  },
  data: () => ({
    dialog: false,
  }),
  created() {
    this.dialog = true;
  },
};
</script>

<style scoped>
.routerView {
  max-width: 1020px;
}
</style>
