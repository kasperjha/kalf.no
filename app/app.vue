<template>
  <div class="flex flex-col min-h-[100svh] p-10">
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>

useSeoMeta({
  'title': 'kalf.no',
  description: 'collection of single line drawings curated by kasper alfarnes',
  ogTitle: 'kalf.no',
  ogDescription: 'collection of single line drawings curated by kasper alfarnes',
})

useHead({
  script: [
    { defer: true, src: 'https://plausible.kakk.dev/js/script.js', 'data-domain': 'kalf.no' }
  ]
})
</script>
