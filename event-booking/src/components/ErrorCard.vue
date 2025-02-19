<template>
  <section
    class="flex justify-center gap-4 items-center col-span-2 bg-zinc-800 text-center text-zinc-400 p-5.5 rounded-sm"
  >
    <slot></slot>
    <div
      v-if="retry"
      class="text-white bg-indigo-500 hover:bg-indigo-600 p-2 rounded-full transition-colors"
      @click="retry"
    >
      <component :is="RefreshCcw" class="size-5"></component>
    </div>
  </section>
</template>

<script setup>
import { RefreshCcw } from 'lucide-vue-next';

defineProps({
  retry: {
    type: Function,
    required: false,
  },
});
</script>
