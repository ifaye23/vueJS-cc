<template>Link</template>

<script setup lang="ts">
const props = defineProps<{
  currentTab: string;
  tab: {
    key: string;
    label: string;
  };
}>();

defineEmits<{
  click: [];
}>();
</script>
