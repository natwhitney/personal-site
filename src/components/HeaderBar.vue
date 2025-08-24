<script setup lang="ts">
import { VDivider, VBtn, VRow, VCol, VAppBar, VContainer } from 'vuetify/components'

const flavorText = ['Self Hosting is Cool!', 'How did you get here?']
</script>

<template>
  <v-app-bar density="prominent" style="min-height: 130px">
    <v-container>
      <v-row justify="space-between">
        <v-col><h1>nwhitney.dev</h1></v-col>
        <v-col style="text-align: right" align-self="end">
          <h3>
            {{ flavorText[Math.floor(Math.random() * flavorText.length)] }}
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-container style="padding: 7px">
          <v-row justify="center">
            <v-col cols="auto">
              <v-btn slim variant="text" to="/about">About</v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn slim variant="text" to="/blog">Blog</v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn slim variant="text" to="/projects">Projects</v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn slim variant="text" to="/useful-sites">Useful Sites</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped></style>
