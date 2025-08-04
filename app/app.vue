<template>
  <div class="flex flex-col h-screen p-10">
    <h1 class="font-mono text-4xl">kalf.no</h1>
    <p class="mt-1 text-gray-500">by <NuxtLink to="https://alfarnes.dev">kasper alfarnes</NuxtLink> </p>

    <div class="flex items-center justify-center flex-grow">
      <Kalf :kalf="drawing"/>
    </div>

    <footer class="grid items-center grid-cols-3">
      <div>
        <p>Drawn by</p>
        <NuxtLink
          v-if="drawing.credit.byLink"
          :to="drawing.credit.byLink"
          class="text-gray-500 lowercase"
        >
          {{ drawing.credit.by }}
        </NuxtLink>
        <p v-else class="text-gray-500 lowercase">
          {{ drawing.credit.by}}
        </p>
      </div>
      <div class="flex items-center justify-center gap-4">
        <!-- <button class="flex flex-col items-center gap-1">
          <Icon name="humbleicons:view-grid"  class="size-5" />
          <p class="text-xs">Browse</p>
        </button> -->
        <button @click="randomDrawing" class="flex flex-col items-center gap-1">
          <Icon name="humbleicons:refresh"  class="size-5" />
          <p class="text-xs">Random</p>
        </button>
      </div>
    </footer>

  </div>
</template>

<script lang="ts" setup>
useHead({
  script: [
    { defer: true, src: 'https://plausible.kakk.dev/js/script.js', 'data-domain': 'kalf.no' }
  ]
})

import { drawings } from './drawings';
import type { KalfSubmission } from './types/KalfSubmission';

const drawingIdx = ref(0);
const drawing = computed(() => drawings[drawingIdx.value] as KalfSubmission)

function randomIndex() {
  return Math.floor(Math.random() * drawings.length);
}

function randomDrawing() {
  drawingIdx.value = randomIndex()
}
</script>

<style>
  /* https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser/72245072#72245072 */
  a {
    text-decoration: underline;
  }
</style>
