<script setup lang="ts">
import PostCard from '@/components/PostCard.vue'
import { useBlogStore } from '@/stores/blog'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useBlogStore()
store.getBlogPosts()

// const computedKey = computed(() => {
//   return (
//     blogPost.date.toLocaleString(undefined, { day: 'numeric', month: 'numeric', year: 'numeric' }) +
//     '/' +
//     blogPost.title
//   )
// })
</script>

<template>
  <div
    v-for="blogPost in store.blogPosts"
    :key="blogPost.title"
    v-on:click="
      router.push(
        `blog/${blogPost.date.toLocaleString(undefined, { day: 'numeric', month: 'numeric', year: 'numeric' })}/${blogPost.title.replaceAll(' ', '-')}`,
      )
    "
  >
    <post-card
      :title="blogPost.title"
      :date="blogPost.date"
      :image-link="blogPost.image"
      :preview-text="blogPost.previewText"
    ></post-card>
  </div>
</template>
