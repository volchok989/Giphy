<script setup lang='ts'>
const imageSrc: string = new URL('/images/logo.png', import.meta.url).href
</script>

<template>
  <router-link to='/' class='logo d-block mx-auto mx-md-0'>
    <v-img
      :src='imageSrc'
      alt='Giphy logo'
      title='Giphy'
      width='182'
      height='56'
    />
  </router-link>
</template>

<style scoped lang='scss'>
.logo {
  max-width: fit-content;
}
</style>
