import { defineStore } from 'pinia'
import { ref } from 'vue'

export type blogPostsObject = { title: string; date: Date; image?: string; previewText: string }

export const useBlogStore = defineStore('blogs', () => {
  const blogPosts = ref([] as blogPostsObject[])

  const currentBlogPost = ref({} as { title: string; date: Date })

  const validBlogPost = ref(false)

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

  // Have this hit api at some point
  async function fetchCurrentBlogPost(postTitle: string, postDate: Date) {
    currentBlogPost.value.title = postTitle.replaceAll('-', ' ')
    currentBlogPost.value.date = postDate
    validBlogPost.value = true
  }

  return { blogPosts, getBlogPosts, currentBlogPost, fetchCurrentBlogPost, validBlogPost }
})
