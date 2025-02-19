<template>
  <SectionnedCard>
    <div class="flex flex-row justify-between items-center">
      <div class="flex gap-3 items-center">
        <p>{{ eventTitle }}</p>
        <component
          :is="icon"
          :class="{
            'size-5': true,
            'animate-spin text-amber-400':
              props.status !== 'confirmed' && props.status !== 'failed',
            'text-lime-200': props.status === 'confirmed',
            'text-[#EB5B00]': props.status === 'failed',
          }"
        ></component>
      </div>
      <BaseButton variant="danger" @click="$emit('cancel')">Cancel</BaseButton>
    </div>
  </SectionnedCard>
</template>

<script setup>
import { computed } from 'vue';
import { LoaderCircle, SquareCheck, TriangleAlert } from 'lucide-vue-next';
import SectionnedCard from '@/components/SectionCard.vue';
import BaseButton from '@/components/BaseButton.vue';

const icons = {
  pending: LoaderCircle,
  confirmed: SquareCheck,
  failed: TriangleAlert,
};
const icon = computed(() => {
  return icons[props.status];
});

defineEmits(['cancel']);
const props = defineProps({
  eventTitle: String,
  status: {
    type: String,
    default: 'pending',
  },
});
</script>
