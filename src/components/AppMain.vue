<template>
    <main>
        <div class="container-md">
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                <div class="col" v-for="character in store.arrayCharacters">
                    <AppCard :character="character"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { store } from '../store';

import AppCard from './AppCard.vue'
export default {
    components: { AppCard },

    data() {
        return {
            store,
        }
    }

}
</script>

<style lang="scss" scoped>

</style>