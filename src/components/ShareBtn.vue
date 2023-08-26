<script setup lang='ts'>
const props = defineProps<{
  info: object
}>()

async function share() {
  try {
    await navigator.share(props.info)
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
