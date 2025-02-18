<template>
  <SectionnedCard>
    <div class="flex flex-row justify-between items-center">
      <div class="flex gap-3 items-center">
        <p>{{ eventTitle }}</p>
        <svg
          v-if="status === 'confirmed'"
          class="size-5"
          viewBox="0 0.5 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
              stroke="#FCF596"
              stroke-width="2"
            ></path>
            <path
              d="M9 12L10.6828 13.6828V13.6828C10.858 13.858 11.142 13.858 11.3172 13.6828V13.6828L15 10"
              stroke="#FCF596"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        <svg
          v-else-if="status === 'failed'"
          class="size-5"
          viewBox="0 -1 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12 15H12.01M12 12V9M4.98207 19H19.0179C20.5615 19 21.5233 17.3256 20.7455 15.9923L13.7276 3.96153C12.9558 2.63852 11.0442 2.63852 10.2724 3.96153L3.25452 15.9923C2.47675 17.3256 3.43849 19 4.98207 19Z"
              stroke="#EB5B00"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        <svg
          v-else
          class="animate-spin size-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612"
              stroke="#FFB200"
              stroke-width="2.5"
              stroke-linecap="round"
            ></path>
          </g>
        </svg>
      </div>
      <BaseButton variant="danger" @click="$emit('cancel')">Cancel</BaseButton>
    </div>
  </SectionnedCard>
</template>

<script setup>
import SectionnedCard from '@/components/SectionCard.vue';
import BaseButton from '@/components/BaseButton.vue';
// import BaseButton from '@/components/BaseButton.vue';

defineEmits(['cancel']);
defineProps({
  eventTitle: String,
  status: {
    type: String,
    default: 'pending',
  },
});
</script>
