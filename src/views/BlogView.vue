<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import { useBlogStore } from '@/stores/blog'

const store = useBlogStore()
store.getBlogPosts()
</script>

<template>
  <div v-for="blogPost in store.blogPosts" :key="blogPost.title">
    <post-card
      :title="blogPost.title"
      :date="blogPost.date"
      :image-link="blogPost.image"
      :preview-text="blogPost.previewText"
    ></post-card>
  </div>
</template>
