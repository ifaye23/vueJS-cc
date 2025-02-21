<template>
  <section>
    <ul class="flex flex-row bg-neutral-800 justify-around mb-10">
      <li v-for="tab in tabs" :key="tab.key">
        <TabLink
          :current-tab="currentTab"
          :tab-key="tab.key"
          :label="tab.label"
          @click="toggleTab(tab.key)"
        >
        </TabLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import TabLink from '@/components/TabLink.vue';
import tabsHandler from '@/composables/tabsHandler';
const { tabs, currentTab, toggleTab } = tabsHandler();
</script>
