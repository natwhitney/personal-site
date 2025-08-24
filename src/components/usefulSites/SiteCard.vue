<script setup lang="ts">
const props = defineProps({
  site: String,
  text: String,
  imageLink: String,
})

const siteLink = 'https://' + props.site
</script>

<template>
  <v-card :href="siteLink" variant="tonal" style="margin: 20px">
    <v-card-title>
      {{ site }}
    </v-card-title>
    <v-img v-if="imageLink" :src="imageLink"></v-img>
    <v-card-text>
      {{ text }}
    </v-card-text>
  </v-card>
</template>
