import { defineStore } from 'pinia'
import { ref } from 'vue'

export type projectPostsObject = { title: string; date: Date; image?: string; previewText: string }

export const useProjectStore = defineStore('projects', () => {
  const projectPosts = ref([] as projectPostsObject[])

  function getProjectPosts() {
    projectPosts.value = [
      { title: 'badassProject', date: new Date(), previewText: 'even more badass project' },
    ]
  }

  return { projectPosts, getProjectPosts }
})
