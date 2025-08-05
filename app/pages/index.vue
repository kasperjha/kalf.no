<template>
  <h1 class="font-mono text-4xl">kalf.no</h1>

  <div class="flex items-center justify-center flex-grow" >
    <Kalf v-if="drawing" ref="kalf-drawing" :kalf="drawing" />
  </div>

  <footer class="grid items-center gap-10 sm:grid-cols-3">
    <div>
      <p>Drawn by</p>
      <NuxtLink
        v-if="drawing"
        :to="drawing.credit.byLink"
        :key="drawing"
        class="text-gray-500 lowercase"
        :class="{ 'underline': drawing.credit.byLink }"
      >
        {{ drawing.credit.by }}
      </NuxtLink>
    </div>
    <div class="flex items-center justify-center gap-4">
      <NuxtLink to="/gallery" class="flex flex-col items-center gap-1 touch-manipulation">
        <Icon name="humbleicons:view-grid"  class="size-5" />
        <p class="text-xs">Browse</p>
      </NuxtLink>
      <button @click="randomDrawing" class="flex flex-col items-center gap-1 touch-manipulation">
        <Icon name="humbleicons:refresh"  class="size-5" />
        <p class="text-xs">Random</p>
      </button>
      <button @click="redraw" class="flex flex-col items-center gap-1 touch-manipulation">
        <Icon name="humbleicons:pencil"  class="size-5" />
        <p class="text-xs">Redraw</p>
      </button>
      <button @click="share" v-if="canShare()" class="flex flex-col items-center gap-1 touch-manipulation">
        <Icon name="humbleicons:share"  class="size-5" />
        <p class="text-xs">Share</p>
      </button>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter()

const {drawing, randomDrawing, setDrawing} = useDrawing()
const kalfDrawing = useTemplateRef('kalf-drawing')

function updateDrawing() {
  if (route.query.by) {
    setDrawing(route.query.by.toString())
  }
}

function updateRoute() {
  if (!drawing.value || !drawing.value.credit) {
    return;
  }
  router.push({
    query: { by: drawing.value.credit.by }
  })
}

onMounted(() => {
  randomDrawing()
  watch(route, updateDrawing, { immediate: true })
  watch(drawing, updateRoute, { immediate: true })
})

function redraw() {
  kalfDrawing.value.redraw()
}

function getShareData() {
  if(!drawing.value) {
    throw new Error('No drawing loaded.')
  }

  return {
    url: `https://kalf.no/?by=${drawing.value.credit?.by}`,
    text: `kalf drawn by ${drawing.value.credit?.by}`
  }
}

function canShare() {
  try {
    const data = getShareData()
    return navigator.canShare(data)
  } catch {
    return false;
  }
}

function share() {
  const data = getShareData()
  navigator.share(data)
}
</script>

