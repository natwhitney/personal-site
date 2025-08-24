<script setup lang="ts">
import PostContainer from '@/components/PostContainer.vue'
import { useBlogStore } from '@/stores/blog'
import { storeToRefs } from 'pinia'

const props = defineProps({
  year: { type: String, required: true },
  month: { type: String, required: true },
  day: { type: String, required: true },
  title: { type: String, required: true },
})

const store = useBlogStore()

store.fetchCurrentBlogPost(
  props.title,
  new Date(Number(props.year), Number(props.month), Number(props.day)),
)

const { currentBlogPost, validBlogPost } = storeToRefs(store)
</script>

<template>
  <PostContainer v-if="validBlogPost" :title="currentBlogPost.title"></PostContainer>
</template>
