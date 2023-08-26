<script setup lang='ts'>
import ShareBtn from "./ShareBtn.vue"

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
  item: PropsItem,
  height: number
}>()
</script>

<template>
  <v-hover v-slot='{ isHovering, props }'>
    <v-card
      v-bind='props'
      variant='flat'
      class='card'
    >
      <router-link :to='{name: "SingleGifPage", params: {gifId: item.id}}'>
        <v-img
          :src='item.images.preview_webp.url'
          :alt='item.title'
          :title='item.title'
          :height='height'
          cover
          class='rounded-lg'
        />
      </router-link>
      <ShareBtn
        v-if='isHovering'
        :info='{title: item.title, url: item.embed_url}'
        class='card__share'
      />
    </v-card>
  </v-hover>
</template>

<style scoped lang='scss'>
.card {
  position: relative;
  &__share {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
