<template>
  <AppHeader />
  <AppSearchBar @filterStatus="filterStatus" />
  <AppMain @scrollBottom="nextPage" />
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

  mounted() {
    window.addEventListener('scroll', this.nextPage);
  },

  methods: {
    getList() {
      this.isLoad = false;
      let paramObj = {
        status: ""
      }

      if (store.selectedStatus !== "All") {
        paramObj = {
          status: store.selectedStatus
        }
      }

      setTimeout(() => {
        axios.get(this.store.linkApi, {
          params: paramObj,
        }).then((resp) => {

          this.store.linkApi = resp.data.info.next;

          this.isLoad = true;

          this.store.arrayCharacters = this.store.arrayCharacters.concat(resp.data.results);
        });
      }, 1000);
    },

    filterStatus() {
      this.store.linkApi = "https://rickandmortyapi.com/api/character"
      this.store.arrayCharacters = [];
      this.getList();
    },

    nextPage() {
      if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight && this.store.linkApi !== null) {

        this.getList();
      }
    }
  },

  created() {
    this.getList();
  }

}
</script>

<style></style>