<template>
  <Teleport to="body">
    <div class="fixed right-5 bottom-5 h-auto flex flex-col-reverse gap-3">
      <div
        v-for="notif in notifications"
        :key="notif.id"
        class="rounded-md bg-neutral-700 overflow-hidden"
      >
        <div class="flex gap-5 items-center p-5">
          <div>
            <p>{{ notif.message }}</p>
          </div>
          <div>
            <SubmitButton @click="removeNotification(notif.id)">OK</SubmitButton>
          </div>
        </div>
        <div class="h-0.5 bg-white timer-bar"></div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import notifsHandler from '@/composables/notifsHandler';
import SubmitButton from './SubmitButton.vue';
const { notifications, removeNotification } = notifsHandler();
</script>

<style scoped>
@keyframes slideTimer {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

.timer-bar {
  animation: slideTimer 5s linear forwards;
}
</style>
