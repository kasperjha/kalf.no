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
        <div v-for="drawing in drawings" class="flex flex-col items-center gap-3">
          <Kalf :kalf="drawing"/>
          <NuxtLink
            v-if="drawing.credit.byLink"
            :to="drawing.credit.byLink"
            class="text-gray-500 underline lowercase"
          >
            {{ drawing.credit.by }}
          </NuxtLink>
          <p v-else class="text-gray-500 lowercase">
            {{ drawing.credit.by }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
