<template>
    <div class="ms_card mb-4 text-center">
        <div class="ms_img-card p-3 mb-2">
            <img class="img-fluid rounded-circle shadow" :src="character.image" alt="">
        </div>
        <div>
            <h5 class="mb-2">{{ character.name }}</h5>
            <p class="mb-0">{{ character.status }}</p>
            <p class="mb-0">{{ character.species }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        character: Object,
    }
}
</script>

<style lang="scss" scoped>

    .ms_card {
        transition: all 0.5S;
    }

    .ms_card:hover {
        transform: scale(110%);
        background-color: lightgoldenrodyellow;
        border-radius: 20px;
    }
</style>