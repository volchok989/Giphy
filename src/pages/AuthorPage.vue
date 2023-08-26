<script setup lang='ts'>
import {useRoute} from "vue-router"
import Logo from "../components/Logo.vue"
import Fetch from "../../fetch.ts"

const route = useRoute()

const {data: {user}} = await Fetch.get(`${route.query.id}`, {})
</script>

<template>
  <Logo/>
  <div class='mt-16'>
    <v-btn
      :to='{name: "SingleGifPage", params: {gifId: route.query.id}}'
      variant='flat'
    >
      <v-icon icon='mdi-keyboard-backspace' class='mr-2'/>
      Back
    </v-btn>
    <v-row class='mt-10'>
      <v-col cols='12' class='text-center'>
        <v-img
          :src='user.avatar_url'
          max-width='400'
          width='100%'
          height='400'
          cover
          class='mx-auto rounded-circle mb-5'
        />
        <h1>{{ user.display_name }}</h1>
        <h3 class='mb-5'>@{{ user.username }}</h3>
        <a
          :href='user.profile_url'
          target='_blank'
          class='hover-underline'
        >
          Profile on giphy.com
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>

</style>
