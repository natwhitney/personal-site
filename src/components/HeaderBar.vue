<script setup lang="ts">
import { VDivider, VBtn, VRow, VCol, VAppBar, VContainer } from 'vuetify/components'
</script>

<template>
  <v-app-bar density="prominent" style="min-height: 130px">
    <v-container>
      <v-row justify="space-between">
        <v-col><h1>nwhitney.dev</h1></v-col>
        <v-col style="text-align: right" align-self="end"><h3>Self Hosting is Cool!</h3></v-col>
      </v-row>
      <v-row>
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-container fluid style="padding: 7px">
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
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped></style>
