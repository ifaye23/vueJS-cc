<template>
  <button
    :class="[
      'text-sm py-2 px-4 rounded-sm hover:font-bold transition-all',
      variants[variant] ?? variants.default,
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const variants = {
  danger: 'bg-red-500 hover:bg-red-600',
  default: 'bg-indigo-500 hover:bg-indigo-600',
};

defineProps({
  variant: {
    type: String,
    default: 'default',
  },
});
defineEmits(['click']);
</script>
