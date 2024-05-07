<template>
  <AppHeader />
  <AppSearchBar @filterStatus="filterStatus" />
  <AppMain />
  <AppLoad v-if="!isLoad" />
</template>

<script>
import axios from "axios";

import { store } from "./store";

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppLoad from './components/AppLoad.vue';
import AppSearchBar from "./components/AppSearchBar.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppLoad,
    AppSearchBar,
  },

  data() {
    return {
      isLoad: false,
      store,
    }
  },

  methods: {
    getList() {
      this.isLoad = false;
      let paramObj = {
        status: ""
      }

      if(store.selectedStatus !== "All"){
        paramObj = {
        status: store.selectedStatus
      }
      }
      

      axios.get('https://rickandmortyapi.com/api/character', {
        params : paramObj,
      }).then((resp) => {
      console.log(resp.data.results);
      this.isLoad = true;
      this.store.arrayCharacters = resp.data.results;
    });
    },

    filterStatus() {
      this.getList();  
    }
  },

  created() {
    this.getList();
  }

}
</script>

<style></style>