<template>
  <main>Hello world !</main>
</template>

<script setup lang="ts">
import type { Tab, TabKey } from '@/types.ts';
import { ref } from 'vue';

const currentTab = ref<TabKey>('General');

const tabs: Tab[] = [
  {
    key: 'General',
    label: 'General',
  },
  {
    key: 'Notifications',
    label: 'Notifications',
  },
  {
    key: 'Privacy',
    label: 'Privacy',
  },
];
</script>
