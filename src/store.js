import {reactive} from 'vue';

export const store = reactive ({
    arrayCharacters: [],
    selectedStatus: "All",
    linkApi: "https://rickandmortyapi.com/api/character"

})