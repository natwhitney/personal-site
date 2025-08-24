import { defineStore } from 'pinia'
import { ref } from 'vue'

export type blogPostsObject = { title: string; date: Date; image?: string; previewText: string }

export const useBlogStore = defineStore('blogs', () => {
  const blogPosts = ref([] as blogPostsObject[])

  function getBlogPosts() {
    blogPosts.value = [{ title: 'badass', date: new Date(), previewText: 'even more badass' }]
  }

  return { blogPosts, getBlogPosts }
})
