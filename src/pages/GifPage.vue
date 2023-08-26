<script setup lang='ts'>
import {ref, watch} from "vue"
import {useRoute} from "vue-router"
import Fetch from "../../fetch.ts"
import ShareBtn from "../components/ShareBtn.vue"
import GifsSlider from "../components/GifsSlider.vue"

const route = useRoute()
watch(() => route.path, async () => await getGifInfo())

const gifInfo = ref()
const isLoading = ref(false)

async function getGifInfo() {
  isLoading.value = true
  const {data} = await Fetch.get(`${route.params.gifId}`, {})
  gifInfo.value = data
  isLoading.value = false
}

await getGifInfo()
const {data: sliderGifs} = await Fetch.get('trending', {
  limit: 10,
  offset: Math.floor(Math.random() * 62) * 16
})
</script>

<template>
  <v-card max-width='600' class='mx-auto pt-10' variant='flat'>
    <div class='mb-16'>
      <div v-if='!isLoading'>
        <h1 class='text-center mb-16'>{{ gifInfo.title }}</h1>
        <v-img
          :src='gifInfo.images.preview_webp.url'
          :alt='gifInfo.title'
          :title='gifInfo.title'
          width='100%'
          max-height='500'
        />
        <div class='d-flex align-center mt-1'>
          <router-link
            v-if='gifInfo.username'
            :to='{name: "SingleAuthorPage", params: {username: gifInfo.username}, query: {id: gifInfo.id}}'
            class='text-black hover-underline'
          >
            <v-card-title class='px-0'>@{{ gifInfo.username }}</v-card-title>
          </router-link>
          <ShareBtn
            :info='{title: gifInfo.title, url: gifInfo.embed_url}'
            class='ml-auto'
          />
        </div>
      </div>
      <v-skeleton-loader
        v-else
        width='100%'
        height='500'
      />
    </div>
    <GifsSlider
      :items='sliderGifs'
      title='Related GIFs'
    />
  </v-card>
</template>
