<template>
  <v-app>
    <v-app-bar app height="100px">
      <v-toolbar-title class="headline text-uppercase">
        <Logo style="padding: 50px;"/>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <span class="mr-2">Demo, vernieuwend/bruikbaar</span>
    </v-app-bar>
    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';
import Logo from "./components/logo.vue";

export default {
  name: 'App',
  components: {
    Home, Logo
  },
};
</script>
