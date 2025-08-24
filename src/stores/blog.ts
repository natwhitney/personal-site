import { defineStore } from 'pinia'
import { ref } from 'vue'

export type blogPostsObject = { title: string; date: Date; image?: string; previewText: string }

export const useBlogStore = defineStore('blogs', () => {
  const blogPosts = ref([] as blogPostsObject[])

  function getBlogPosts() {
    blogPosts.value = [
      { title: 'badass blog post', date: new Date(), previewText: 'even more badass' },
      {
        title: 'badass blog post 2 electric boogaloo',
        date: new Date(),
        previewText: 'even more badass',
      },
    ]
  }

  return { blogPosts, getBlogPosts }
})
