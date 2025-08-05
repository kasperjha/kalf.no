<template>
  <button
    v-show="isReady"
    ref="kalf-drawing"
    id="kalf-drawing"
    class="flex items-center justify-center w-64 h-64 cursor-default touch-manipulation"
    v-html="kalf.svg"
  />
</template>

<script lang="ts" setup>
import type { KalfSubmission } from '~/types/KalfSubmission';

interface Props {
  kalf: KalfSubmission
}

const props = defineProps<Props>()
const container = useTemplateRef('kalf-drawing')
const isReady = ref(false)
const isDrawing = ref(false)

function load() {
  if(!container.value) {
    throw new Error('Drawing container is undefined.')
  }

  const path = container.value.querySelector('path') as SVGPathElement;

  if(isDrawing.value === true) {
    return;
  }

  isDrawing.value = true;
  drawPath(path, 0.3)
}

defineExpose({
  redraw: load,
  isDrawing: isDrawing,
})

/**
 * Animate SVG path to be drawn incrementally.
 */
function drawPath(path: SVGPathElement, speed: number = 20) {
  const length = path.getTotalLength()
  path.style.strokeDasharray = length.toString()
  path.style.strokeDashoffset = length.toString()

  let start: number | undefined = undefined;

  const step = (timestamp: number) => {
    if (start === undefined) {
      start = timestamp;
    }
    const shift = Math.min((timestamp - start) * speed, length)
    path.style.strokeDashoffset = `${length - shift}`;

    if (shift < length) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

watch(props, () => {
  isReady.value = false;
  isDrawing.value = false;
  setTimeout(() => {
    isReady.value = true;
    load()
  }, 50)
})
onMounted(() => {
  setTimeout(() => {
    isReady.value = true;
    load()
  }, 200)
})
</script>

<style>
#kalf-drawing > svg {
  width: 100%;
  height: 100%;
}
</style>
