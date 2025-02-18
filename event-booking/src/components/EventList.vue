<template>
  <h2 class="text-2xl font-medium">All Events</h2>
  <section class="grid grid-cols-2 gap-8">
    <template v-if="!loading">
      <template v-if="events.length">
        <EventCard
          v-for="event in events"
          :key="event.id"
          :title="event.title"
          :date="event.date"
          :description="event.description"
          @book="$emit('book', event)"
        />
      </template>
      <template v-else>
        <EmptyState>No events yet...</EmptyState>
      </template>
    </template>
    <template v-else>
      <LoadingEventCard v-for="i in 4" :key="i" />
    </template>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import EventCard from '@/components/EventCard.vue';
import LoadingEventCard from '@/components/LoadingEventCard.vue';
import EmptyState from '@/components/EmptyState.vue';

defineEmits(['book']);

const events = ref([]);
const loading = ref(false);

const fetchEvents = async () => {
  loading.value = true;
  try {
    const response = await fetch('http://localhost:3001/events');
    events.value = await response.json();
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchEvents();
});
</script>
