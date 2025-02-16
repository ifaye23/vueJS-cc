<template>
  <button
    :class="[
      'text-xs py-2 px-4 rounded-sm hover:font-bold transition-all',
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
  default: 'bg-orange-600 hover:bg-orange-700',
};

defineProps({
  variant: {
    type: String,
    default: 'default',
  },
});
defineEmits(['click']);
</script>
