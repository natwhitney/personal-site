<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VThemeProvider, VApp, VMain } from 'vuetify/components'
import HeaderBar from './components/HeaderBar.vue'
</script>

<template>
  <VThemeProvider theme="dark">
    <v-app>
      <HeaderBar />
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </VThemeProvider>
</template>

<style scoped></style>
