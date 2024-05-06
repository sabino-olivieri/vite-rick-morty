<template>
  <AppHeader />
  <AppMain :arrayCharacters="arrayCharacters" />
</template>

<script>
import axios from "axios"

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      arrayCharacters: []
    }
  },

  created() {
    axios.get('https://rickandmortyapi.com/api/character').then((resp) => {
      console.log(resp);
      this.arrayCharacters = resp.data.results;
    });
  }

}
</script>

<style></style>