<template>
  <SectionCard>
    <template #header>{{ title }}</template>
    <template #date>{{ date }}</template>
    <template #default>
      <p class="pb-6">
        {{ description }}
      </p>
      <section class="flex flex-row justify-end">
        <BaseButton @click="$emit('book')" class="flex gap-2">
          <span>Book</span>
        </BaseButton>
      </section>
    </template>
  </SectionCard>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue';
import SectionCard from './SectionCard.vue';
defineEmits(['book']);
defineProps({
  title: String,
  date: String,
  description: String,
});
</script>
