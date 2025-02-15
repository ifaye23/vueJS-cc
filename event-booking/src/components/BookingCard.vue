<template>
  <DefaultCard class="flex flex-row justify-between px-4 py-3 items-center">
    <section>
      <slot></slot>
    </section>
    <section>
      <BaseButton class="bg-red-500 hover:bg-rose-600" @click="$emit('cancel')">
        Cancel
      </BaseButton>
    </section>
  </DefaultCard>
</template>

<script setup>
import DefaultCard from '@/components/BaseCard.vue';
import BaseButton from '@/components/BaseButton.vue';

defineEmits(['cancel']);
</script>
