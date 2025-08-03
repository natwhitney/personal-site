<script setup lang="ts">
import { VDivider, VBtn, VRow, VCol } from 'vuetify/components'
</script>

<template>
  <div style="overflow: hidden">
    <h1 style="float: left">nwhitney.dev</h1>
    <h3 style="float: right">Self Hosting is Cool!</h3>
  </div>
  <v-divider></v-divider>
  <div>
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
  </div>
</template>
