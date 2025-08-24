<script setup lang="ts">
import PostContainer from '@/components/PostContainer.vue'

const props = defineProps({
  year: { type: String, required: true },
  month: { type: String, required: true },
  day: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<template>
  <PostContainer :title="props.title"></PostContainer>
</template>
