<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import { useProjectStore } from '@/stores/projects'

const store = useProjectStore()

store.getProjectPosts()
</script>

<template>
  <div v-for="projectPost in store.projectPosts" :key="projectPost.title">
    <post-card
      :title="projectPost.title"
      :date="projectPost.date"
      :image-link="projectPost.image"
      :preview-text="projectPost.previewText"
    ></post-card>
  </div>
</template>
