<template>
  <SectionnedCard>
    <div class="flex flex-row justify-between items-center">
      <p>This is some dummy text</p>
      <BaseButton variant="danger">Cancel</BaseButton>
    </div>
  </SectionnedCard>
</template>

<script setup>
import SectionnedCard from '@/components/SectionCard.vue';
import BaseButton from '@/components/BaseButton.vue';
// import BaseButton from '@/components/BaseButton.vue';

defineEmits(['cancel']);
</script>
