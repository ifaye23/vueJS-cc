<template>
  <Navbar />
  <section>
    <component :is="currentComponent" />
  </section>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import tabsHandler from '@/composables/tabsHandler';

const { currentComponent } = tabsHandler();
</script>
