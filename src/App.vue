<template>
  <v-app class='pb-16'>
    <v-layout>
      <v-main>
        <v-container>
          <Suspense>
            <router-view/>
          </Suspense>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>
