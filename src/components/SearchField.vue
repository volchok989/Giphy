<script setup lang='ts'>
import {ref} from "vue";

defineProps<{
  isSearching: boolean
}>()
const emit = defineEmits(['search'])

const searchValue = ref()
const searchTimer = ref()

function emitSearchValue(value: string) {
  clearTimeout(searchTimer.value)
  searchTimer.value = setTimeout(() => emit('search', value), 1000)
}
</script>

<template>
  <v-text-field
    v-model='searchValue'
    :readonly='isSearching'
    variant='outlined'
    hide-details
    placeholder='Search'
    prepend-inner-icon='mdi-magnify'
    single-line
    @update:model-value='emitSearchValue'
  >
    <template #append-inner>
      <v-progress-circular
        v-if='isSearching'
        indeterminate
        width='4'
        color='black'
        size='26'
      ></v-progress-circular>
    </template>
  </v-text-field>
</template>
