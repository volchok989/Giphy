<script setup lang='ts'>
import {computed} from "vue"
import Fetch from "../../fetch.ts"

const {data: randomImages} = await Fetch.get('search', {
  q: 'not found',
  limit: 20
})
const imageSrc = computed(() => randomImages[Math.floor(Math.random() * 20)].images.preview_webp.url)
</script>

<template>
  <v-img
    :src='imageSrc'
    max-width='400'
    width='100%'
    max-height='300'
    class='mx-auto'
  />
</template>

<style scoped>

</style>
