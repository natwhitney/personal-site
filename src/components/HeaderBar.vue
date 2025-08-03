<script setup lang="ts">
import { VDivider, VBtn, VRow, VCol } from 'vuetify/components'
</script>

<template>
  <div class="app-header">
    <v-container fluid class="d-flex justify-space-between align-center py-4">
      <h1>nwhitney.dev</h1>
      <h3>Self Hosting is Cool!</h3>
    </v-container>
    <v-divider></v-divider>
    <v-container fluid class="py-2">
      <v-row>
        <v-col cols="auto">
          <v-btn variant="text" to="/about">About</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn variant="text" to="/blog">Blog</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn variant="text" to="/projects">Projects</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn variant="text" to="/useful-sites">Useful Sites</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
}
</style>
