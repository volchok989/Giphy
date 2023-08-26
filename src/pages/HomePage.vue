<script setup lang='ts'>
import {provide, ref} from "vue"
import Fetch from "../../fetch.ts"
import Logo from "../components/Logo.vue"
import SearchField from "../components/SearchField.vue"
import GifsList from "../components/GifsList.vue"

const gifs = ref([])
const paginationMeta = ref()
provide('paginationMeta', paginationMeta)
const params = {
  limit: 16,
  offset: Math.floor(Math.random() * 62) * 16,
  q: ''
}
const isListLoading = ref(false)
const isSearching = ref(false)


async function getRandomGifs() {
  isListLoading.value = true
  const {data, pagination} = await Fetch.get('trending', {
    limit: params.limit,
    offset: params.offset
  })
  gifs.value = data
  paginationMeta.value = pagination
  isListLoading.value = false
}

async function onSearch(value: string) {
  params.q = value
  params.offset = 0
  params.q.length ? await searchGifs() : await getRandomGifs()
}

async function searchGifs() {
  isSearching.value = true
  isListLoading.value = true
  const {data, pagination} = await Fetch.get('search', params)
  gifs.value = data
  paginationMeta.value = pagination
  isListLoading.value = false
  isSearching.value = false
}

async function changePage(page: number) {
  params.offset = (page - 1) * paginationMeta.value.count
  params.q.length ? await searchGifs() : await getRandomGifs()
}

await getRandomGifs()
</script>

<template>
  <v-row>
    <v-col cols='12' md='4' lg='3'>
      <Logo/>
    </v-col>
    <v-col cols='12' md='8' lg='9'>
      <SearchField
        :is-searching='isSearching'
        @search='onSearch'
      />
    </v-col>
  </v-row>
  <GifsList
    :items='gifs'
    :is-loading='isListLoading'
    class='mt-16'
    @go-to-page='changePage'
  />
</template>
