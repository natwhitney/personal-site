<script setup lang="ts">
import SiteCard from '@/components/usefulSites/SiteCard.vue'
import { useUsefulSitesStore } from '@/stores/usefulSites'

const store = useUsefulSitesStore()

store.getSites()
</script>

<template>
  <div v-for="site in store.sites" :key="site.site">
    <site-card :site="site.site" :text="site.description"></site-card>
  </div>
</template>
