import { defineStore } from 'pinia'
import { ref } from 'vue'

export type sitesObject = { site: string; description: string; addtinfo?: string; image?: string }

export const useUsefulSitesStore = defineStore('usefulSites', () => {
  const sites = ref([] as sitesObject[])

  function getSites() {
    sites.value = [
      { site: 'addr.tools', description: 'cool description here' },
      {
        site: 'site.second',
        description: 'second cool description',
      },
    ]
  }

  return { sites, getSites }
})
