<template>
  <h2 class="text-2xl font-medium">All Events</h2>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <template v-if="error">
      <EmptyState class="flex justify-center gap-4 items-center">
        <p>Error loading events, try again</p>
        <div
          class="text-white bg-indigo-500 hover:bg-indigo-600 p-2 rounded-full transition-colors"
          @click="fetchEvents"
        >
          <component :is="RefreshCcw" class="size-5"></component>
        </div>
      </EmptyState>
    </template>
    <template v-else>
      <template v-if="!loading">
        <template v-if="events.length">
          <EventCard
            v-for="event in events"
            :key="event.id"
            :title="event.title"
            :date="event.date"
            :description="event.description"
            @book="addBooking(event)"
          />
        </template>
        <template v-else>
          <EmptyState>No events yet...</EmptyState>
        </template>
      </template>
      <template v-else>
        <LoadingEventCard v-for="i in 4" :key="i" />
      </template>
    </template>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RefreshCcw } from 'lucide-vue-next';
import EventCard from '@/components/EventCard.vue';
import LoadingEventCard from '@/components/LoadingEventCard.vue';
import EmptyState from '@/components/EmptyState.vue';
import useBookings from '@/composables/useBookings';

const { addBooking } = useBookings();

const events = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchEvents = async () => {
  error.value = null;
  loading.value = true;
  try {
    const response = await fetch('http://localhost:3001/events');
    events.value = await response.json();
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchEvents();
});
</script>
