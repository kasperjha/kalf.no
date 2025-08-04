<template>
  <div class="flex flex-col h-screen p-10">
    <h1 class="font-mono text-4xl">kalf.no</h1>

    <div class="flex flex-col items-center justify-center flex-grow">

      <Kalf :kalf="drawing"/>

      <p v-if="drawing.credit" id="kalf-credit" class="h-10 mb-6 text-sm text-center text-gray-600">
        <NuxtLink v-if="drawing.credit.byLink" :to="drawing.credit.byLink">
          {{ drawing.credit.by }}
        </NuxtLink>
        <p v-else>
          {{ drawing.credit.by }}
        </p>
        <p v-if="drawing.credit.date">
          {{ drawing.credit.date }}
        </p>
      </p>

      <div>
        <button @click="prevDrawing" class="p-4 text-gray-600 underline touch-manipulation">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" />
          </svg>
        </button>

        <button @click="nextDrawing" class="p-4 text-gray-600 underline touch-manipulation">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>

    </div>

    <footer>
      <p>Kasper Alfarnes</p>
      <p class="text-gray-500">Freelance Developer</p>
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

function nextDrawing() {
  drawingIdx.value = (drawingIdx.value + 1) % drawings.length
}

function prevDrawing() {
  drawingIdx.value = drawingIdx.value == 0 ? drawings.length - 1 : drawingIdx.value - 1;
}
</script>

<style>
  /* https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser/72245072#72245072 */
  a {
    text-decoration: underline;
  }
</style>
