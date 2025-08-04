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

function load() {
  console.log('loading kalf');

  if(!container.value) {
    throw new Error('Drawing container is undefined.')
  }

  const path = container.value.querySelector('path') as SVGPathElement;
  console.log(path)
  drawPath(path, 2500, 25)
}

defineExpose({
  redraw: load,
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
  }

  step()
}

watch(props, () => setTimeout(load, 50))
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
