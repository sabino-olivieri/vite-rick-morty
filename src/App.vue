<template>
  <AppHeader />
  <AppMain />
  <AppLoad v-if="!isLoad" />
</template>

<script>
import axios from "axios"

import { store } from "./store";

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppLoad from './components/AppLoad.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppLoad,
  },

  data() {
    return {
      isLoad: false,
      store,
    }
  },

  methods: {
    getList() {
      axios.get('https://rickandmortyapi.com/api/character').then((resp) => {
      console.log(resp.data.results);
      this.isLoad = true;
      this.store.arrayCharacters = resp.data.results;
    });
    }
  },

  created() {
    this.getList();
  }

}
</script>

<style></style>