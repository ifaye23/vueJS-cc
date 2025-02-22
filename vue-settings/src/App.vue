<template>
  <Navbar />
  <section>
    <FadeTransition>
      <KeepAlive>
        <component :is="currentComponent" />
      </KeepAlive>
    </FadeTransition>
  </section>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import tabsHandler from '@/composables/tabsHandler';
import FadeTransition from '@/components/FadeTransition.vue';

const { currentComponent } = tabsHandler();
</script>
