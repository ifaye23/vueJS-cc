<template>
  <section class="flex bg-zinc-800 justify-around">
    <TabLink v-for="tab in tabs" :current-tab="currentTab" :tab="tab" @click="toggleTab(tab.key)">
    </TabLink>
  </section>
</template>

<script setup lang="ts">
import type { Tab, TabKey } from '@/types.ts';
import TabLink from '@/components/TabLink.vue';
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

const toggleTab = (key: TabKey) => {
  currentTab.value = key;
};
</script>
