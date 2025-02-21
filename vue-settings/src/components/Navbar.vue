<template>
  <section class="flex bg-neutral-800 justify-around mb-10">
    <TabLink
      v-for="tab in tabs"
      :current-tab="currentTab"
      :tab-key="tab.key"
      :label="tab.label"
      @click="toggleTab(tab.key)"
    >
    </TabLink>
  </section>
</template>

<script setup lang="ts">
import TabLink from '@/components/TabLink.vue';
import tabsHandler from '@/composables/tabsHandler';
const { tabs, currentTab, toggleTab } = tabsHandler();
</script>
