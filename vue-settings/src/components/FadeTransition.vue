<template>
  <Transition mode="out-in" name="fade">
    <slot></slot>
  </Transition>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s ease-out;
}
</style>
