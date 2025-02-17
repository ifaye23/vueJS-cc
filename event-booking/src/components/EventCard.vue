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
          <svg class="size-5" viewBox="0 1.5 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4.5 10V7C4.5 6.44772 4.94772 6 5.5 6H7.3125M4.5 10V20C4.5 20.5523 4.94772 21 5.5 21H18.5C19.0523 21 19.5 20.5523 19.5 20V10M4.5 10H19.5M19.5 10V7C19.5 6.44772 19.0523 6 18.5 6H16.2188M7.3125 6V3M7.3125 6H16.2188M16.2188 6V3"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8 14L16 14"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
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
