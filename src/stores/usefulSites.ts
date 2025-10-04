import { defineStore } from 'pinia'
import { ref } from 'vue'

export type sitesObject = { site: string; description: string; addtinfo?: string; image?: string }

export const useUsefulSitesStore = defineStore('usefulSites', () => {
  const sites = ref([] as sitesObject[])

  function getSites() {
    sites.value = [
      {
        site: 'addr.tools',
        description: 'A bunch of different internet tools with a bunch of useful stuff for DNS.',
      },
      {
        site: 'site.second',
        description: 'A placeholder site until I get the backend working lol',
      },
    ]
  }

  return { sites, getSites }
})
