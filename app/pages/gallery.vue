<script setup lang="ts">
import { drawings } from '~/drawings';

</script>

<template>
  <div class="space-y-10">
    <div class="space-y-1">
      <h1 class="font-mono text-4xl">kalf.no</h1>
      <NuxtLink class="flex items-center gap-1 text-gray-500 underline" to="/">
        <Icon name="humbleicons:arrow-left"></Icon>
        <p>go back</p>
      </NuxtLink>
    </div>

    <div class="flex justify-center">
      <div class="grid gap-20 sm:grid-cols-2 md:grid-cols-3">
        <NuxtLink v-for="drawing in drawings" :to='`/?by=${drawing.credit.by}`' class="flex flex-col items-center gap-3 cursor-pointer">
          <Kalf :kalf="drawing" class="cursor-pointer"/>
          <p class="text-gray-500 lowercase">
            {{ drawing.credit.by }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
