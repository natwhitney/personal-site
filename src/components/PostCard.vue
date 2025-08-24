<script setup lang="ts">
defineProps({
  title: String,
  date: Date,
  imageLink: String,
  previewText: String,
})
</script>

<template>
  <v-card variant="tonal" style="margin: 20px">
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-subtitle>
      {{ date?.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }) }}
    </v-card-subtitle>
    <v-img v-if="imageLink" :src="imageLink"></v-img>
    <v-card-text>
      {{ previewText }}
    </v-card-text>
  </v-card>
</template>
