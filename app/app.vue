<template>
  <div class="flex flex-col min-h-[100svh] p-10">
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
useHead({
  script: [
    { defer: true, src: 'https://plausible.kakk.dev/js/script.js', 'data-domain': 'kalf.no' }
  ]
})
</script>
