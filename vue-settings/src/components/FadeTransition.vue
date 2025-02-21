<template>
  <Transition mode="out-in" name="fade">
    <slot></slot>
  </Transition>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: translate(30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translate(-30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-out;
}
</style>
