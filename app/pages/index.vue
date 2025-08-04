<template>
  <h1 class="font-mono text-4xl">kalf.no</h1>
  <p class="mt-1 text-gray-500">by <NuxtLink class="underline" to="https://alfarnes.dev">kasper alfarnes</NuxtLink> </p>

  <div class="flex items-center justify-center flex-grow">
    <Kalf ref="kalf-drawing" :kalf="drawing" />
  </div>

  <footer class="grid items-center grid-cols-3">
    <div>
      <p>Drawn by</p>
      <NuxtLink
        v-if="drawing.credit.byLink"
        :to="drawing.credit.byLink"
        class="text-gray-500 underline lowercase"
      >
        {{ drawing.credit.by }}
      </NuxtLink>
      <p v-else class="text-gray-500 lowercase">
        {{ drawing.credit.by}}
      </p>
    </div>
    <div class="flex items-center justify-center gap-4">
      <NuxtLink to="/gallery" class="flex flex-col items-center gap-1">
        <Icon name="humbleicons:view-grid"  class="size-5" />
        <p class="text-xs">Browse</p>
      </NuxtLink>
      <button @click="randomDrawing" class="flex flex-col items-center gap-1">
        <Icon name="humbleicons:refresh"  class="size-5" />
        <p class="text-xs">Random</p>
      </button>
      <button @click="redraw" class="flex flex-col items-center gap-1">
        <Icon name="humbleicons:pencil"  class="size-5" />
        <p class="text-xs">Redraw</p>
      </button>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { drawings } from '../drawings';
import type { KalfSubmission } from '../types/KalfSubmission';

const drawingIdx = ref(0);
const drawing = computed(() => drawings[drawingIdx.value] as KalfSubmission)
const kalfDrawing = useTemplateRef('kalf-drawing')

function randomIndex() {
  return Math.floor(Math.random() * drawings.length);
}

function randomDrawing() {
  drawingIdx.value = randomIndex()
}

function redraw() {
  console.log(kalfDrawing.value)
  kalfDrawing.value.redraw()
}
</script>

