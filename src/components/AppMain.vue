<template>
    <main>
        <div class="container-md">
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                <div class="col" v-for="character in arrayCharacters">
                    <AppCard :character="character"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import AppCard from './AppCard.vue'
export default {
    components: { AppCard },
    props: {
        arrayCharacters: Array,
    }

}
</script>

<style lang="scss" scoped>

</style>