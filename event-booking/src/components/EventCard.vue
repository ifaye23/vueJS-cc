<template>
  <SectionnedCard>
    <template #header>{{ title }}</template>
    <template #date>{{ date }}</template>
    <template #default>
      <p class="text-lime-200 pb-4">
        {{ description }}
      </p>
      <section class="flex flex-row justify-end">
        <BaseButton @click="$emit('book')">Book Event !</BaseButton>
      </section>
    </template>
  </SectionnedCard>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue';
import SectionnedCard from './SectionCard.vue';
defineEmits(['book']);
defineProps({
  title: String,
  date: String,
  description: String,
});
</script>
