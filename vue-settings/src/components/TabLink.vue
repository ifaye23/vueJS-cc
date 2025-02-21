<template>
  <div
    :class="{
      'text-center transition-colors p-5 cursor-pointer': true,
      'text-neutral-500 hover:text-white hover:font-bold': !active,
      'text-white border-b-2 border-b-white': active,
    }"
    @click="$emit('click')"
  >
    {{ label }}
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import { computed } from 'vue';
import type { Tab, TabKey } from '@/types.ts';

const active = computed(() => props.currentTab === props.tabKey);

const props = defineProps<{
  currentTab: TabKey;
  tabKey: TabKey;
  label: string;
}>();

defineEmits<{
  click: [];
}>();
</script>
