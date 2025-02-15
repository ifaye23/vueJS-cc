<template>
  <SectionnedCard>
    <template #header>{{ title }}</template>
    <template #date>{{ date }}</template>
    <template #description>{{ description }} </template>
    <template #book>
      <BaseButton>Book Event !</BaseButton>
    </template>
  </SectionnedCard>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue';
import SectionnedCard from './SectionnedCard.vue';
defineEmits(['book']);
defineProps({
  title: String,
  date: String,
  description: String,
});
</script>
