<script setup lang='ts'>
const props = defineProps<{
  info: object
}>()

async function share() {
  try {
    navigator.share ? await navigator.share(props.info) : alert('The Web Share API is not supported in this browser')
  } catch (e) {
    alert(e)
  }
}
</script>

<template>
  <v-btn
    icon='mdi-share-circle'
    variant='text'
    color='#FF5722'
    title='Share'
    @click='share'
  />
</template>
