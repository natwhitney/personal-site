<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VThemeProvider, VApp, VMain } from 'vuetify/components'
import HeaderBar from './components/HeaderBar.vue'
import PageContainer from './components/PageContainer.vue'
</script>

<template>
  <VThemeProvider theme="dark">
    <v-app>
      <HeaderBar />
      <v-main>
        <PageContainer>
          <router-view />
        </PageContainer>
      </v-main>
    </v-app>
  </VThemeProvider>
</template>

<style scoped></style>
