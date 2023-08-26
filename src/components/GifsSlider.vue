<script setup lang='ts'>
import GifCard from "./GifCard.vue"

interface PropsItem {
  id: string,
  images: {
    preview_webp: {
      url: string
    }
  },
  title: string,
  embed_url: string
}
defineProps<{
  items: PropsItem[],
  title: string
}>()
</script>

<template>
  <h2 class='text-center mb-3'>{{ title }}</h2>
  <v-carousel hide-delimiters height='280' class='rounded-lg'>
    <v-carousel-item
      v-for='gif in items'
      :key='gif.id'
    >
      <GifCard
        :item='gif'
        :height='280'
      />
    </v-carousel-item>
  </v-carousel>
</template>
