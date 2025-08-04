<template>
  <button
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
  drawPath(path, 2500, 25)
}

defineExpose({
  redraw: load,
  isDrawing: isDrawing,
})

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

    if(numSteps === 0) {
      isDrawing.value = false;
    }
  }

  step()
}

watch(props, () => {
  isDrawing.value = false;
  setTimeout(load, 50)
})
onMounted(() => {
  setTimeout(load, 50)
})
</script>

<style>
#kalf-drawing > svg {
  width: 100%;
  height: 100%;
}
</style>
