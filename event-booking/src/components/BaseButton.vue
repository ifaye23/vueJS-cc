<template>
  <button
    class="text-xs py-2 px-4 rounded-sm hover:font-bold transition-all"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineEmits(['click']);
</script>
