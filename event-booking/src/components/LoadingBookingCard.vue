<template>
  <BaseCard>
    <div class="flex justify-between items-center pl-8">
      <div class="flex flex-col gap-2">
        <div class="h-3 p-1 w-100 bg-zinc-700 animate-pulse"></div>
        <div class="h-3 p-1 w-65 bg-zinc-700 animate-pulse"></div>
      </div>
      <div class="flex justify-end p-5">
        <div class="p-5 w-20 h-4 bg-zinc-700 animate-pulse rounded-sm"></div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/BaseCard.vue';
</script>
