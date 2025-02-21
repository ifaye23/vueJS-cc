<template>
  <Navbar />
  <section>
    <Transition mode="out-in" name="fade">
      <component :is="currentComponent" />
    </Transition>
  </section>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import tabsHandler from '@/composables/tabsHandler';

const { currentComponent } = tabsHandler();
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-out;
}
</style>
