<script setup lang='ts'>
import {computed, inject} from "vue"

const paginationMeta: any = inject('paginationMeta')
const emit = defineEmits(['go-to-page'])

const pageNumber = computed<number>(() => paginationMeta.value.offset ? paginationMeta.value.offset / paginationMeta.value.count + 1 : 1)
const totalPagesCount = computed<number>(() => Math.ceil(paginationMeta.value.total_count / paginationMeta.value.count))
</script>

<template>
  <v-pagination
    v-if='totalPagesCount > 1'
    :model-value='pageNumber'
    :length='totalPagesCount'
    :total-visible='7'
    @update:model-value='emit("go-to-page", $event)'
  />
</template>
