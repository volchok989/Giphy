<script setup lang='ts'>
import GifCard from "./GifCard.vue"
import Pagination from "./Pagination.vue"
import NotFound from "./NotFound.vue"

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
const props = defineProps<{
  items: PropsItem[],
  isLoading: boolean
}>()
const emit = defineEmits(['go-to-page'])
</script>

<template>
  <div v-if='!props.isLoading'>
    <v-row v-if='items.length'>
      <v-col
        v-for='item in items'
        :key='item.id'
        cols='6'
        md='4'
        lg='3'
      >
        <GifCard
          :item='item'
          :height='200'
        />
      </v-col>
      <v-col>
        <Pagination @go-to-page='e => emit("go-to-page", e)'/>
      </v-col>
    </v-row>
    <NotFound v-else/>
  </div>
  <v-row v-else>
    <v-col
      v-for='i in 16'
      :key='i'
      cols='6'
      md='4'
      lg='3'
    >
      <v-skeleton-loader height='200'/>
    </v-col>
  </v-row>
</template>
