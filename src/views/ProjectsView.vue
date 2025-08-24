<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import { useProjectStore } from '@/stores/projects'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useProjectStore()

store.getProjectPosts()
</script>

<template>
  <div
    v-for="projectPost in store.projectPosts"
    :key="projectPost.title"
    v-on:click="
      router.push(
        `projects/${projectPost.date.toLocaleString(undefined, { day: 'numeric', month: 'numeric', year: 'numeric' })}/${projectPost.title.replaceAll(' ', '-')}`,
      )
    "
  >
    <post-card
      :title="projectPost.title"
      :date="projectPost.date"
      :image-link="projectPost.image"
      :preview-text="projectPost.previewText"
    ></post-card>
  </div>
</template>
