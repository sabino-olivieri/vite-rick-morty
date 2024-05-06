<template>
  <AppHeader />
  <AppMain :arrayCharacters="arrayCharacters" />
  <AppLoad v-if="!isLoad" />
</template>

<script>
import axios from "axios"

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
      arrayCharacters: [],
      isLoad: false,
    }
  },

  mounted() {
    axios.get('https://rickandmortyapi.com/api/character').then((resp) => {
      console.log(resp.data.results);
      this.isLoad = true;
      this.arrayCharacters = resp.data.results;
    });
  }

}
</script>

<style></style>