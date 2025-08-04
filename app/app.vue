<template>
  <div class="flex flex-col h-screen p-10">
    <h1 class="font-mono text-4xl">kalf.no</h1>

    <div class="flex flex-col items-center justify-center flex-grow">

      <button
        ref="kalf-drawing"
        id="kalf-drawing"
        class="flex items-center justify-center w-64 h-64 cursor-default touch-manipulation"
        v-html="drawing.svg"
      />

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

        <button @click="drawKalf" :disabled="isDrawing" class="p-4 text-black underline transition duration-300 touch-manipulation">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
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
const drawingContainer = useTemplateRef('kalf-drawing')
const isDrawing = ref(false);

function nextDrawing() {
  isDrawing.value = false
  drawingIdx.value = (drawingIdx.value + 1) % drawings.length
  setTimeout(drawKalf, 20)
}

function prevDrawing() {
  isDrawing.value = false
  drawingIdx.value = drawingIdx.value == 0 ? drawings.length - 1 : drawingIdx.value - 1;
  setTimeout(drawKalf, 20)
}


function drawPath(path: SVGPathElement, duration: number, delay: number) {
  let pathLength = path.getTotalLength();
  path.style.strokeDasharray = pathLength.toString();
  path.style.strokeDashoffset = pathLength.toString();

  let numSteps = (duration / delay);

  const step = () => {
    pathLength -= pathLength / numSteps;
    path.style.strokeDashoffset = pathLength.toString();

    if(1 <= numSteps ) {
      numSteps -= 1;
      setTimeout(step, delay);
    }
  }

  step()
}

function drawKalf() {
  if(!drawingContainer.value) {
    throw new Error('Drawing container is undefined.')
  }
  const path = drawingContainer.value.querySelector('path') as SVGPathElement;
  drawPath(path, 2500, 15);
}
</script>

<style>
  /* https://stackoverflow.com/questions/37112218/css3-100vh-not-constant-in-mobile-browser/72245072#72245072 */
  a {
    text-decoration: underline;
  }
  #kalf-drawing {
    > svg {
      width: 100%;
      height: 100%;
    }
  }
</style>
