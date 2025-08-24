<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VThemeProvider, VApp, VMain, VContainer } from 'vuetify/components'
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <VThemeProvider theme="dark">
    <v-app>
      <HeaderBar />
      <v-main>
        <v-container max-width="920px">
          <router-view></router-view>
        </v-container>
      </v-main>
      <footer-bar></footer-bar>
    </v-app>
  </VThemeProvider>
</template>

<style scoped></style>
