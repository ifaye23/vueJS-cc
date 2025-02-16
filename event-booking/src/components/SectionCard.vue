<template>
  <BaseCard>
    <h2 v-if="$slots.header" class="text-xl font-medium p-4 border-b border-amber-600">
      <slot name="header"></slot>
    </h2>
    <div v-if="$slots.date" class="p-4 text-sky-400 border-b border-amber-600">
      <slot name="date"></slot>
    </div>
    <div class="p-4">
      <slot></slot>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from '@/components/BaseCard.vue';
</script>
