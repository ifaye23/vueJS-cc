<template>
  <div
    :class="{
      'text-center transition-all p-5': true,
      'text-gray-500 hover:text-white hover:font-bold': !active,
      'text-white border-b border-b-white': active,
    }"
    @click="$emit('click')"
  >
    {{ tab.key }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Tab, TabKey } from '@/types.ts';

const active = computed(() => {
  return props.currentTab === props.tab.key;
});

const props = defineProps<{
  currentTab: TabKey;
  tab: {
    key: TabKey;
    label: string;
  };
}>();

defineEmits<{
  click: [];
}>();
</script>
