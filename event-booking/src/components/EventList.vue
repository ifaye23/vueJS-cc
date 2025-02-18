<template>
  <h2 class="text-2xl font-medium">All Events</h2>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <template v-if="error">
      <EmptyState class="flex justify-center gap-4 items-center">
        <p>Error loading events, try again</p>
        <button
          class="flex justify-center items-center w-8 h-8 bg-indigo-500 hover:bg-indigo-600 p-1.5 rounded-full transition-all"
          @click="fetchEvents"
        >
          <svg fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M27.1 14.313V5.396L24.158 8.34c-2.33-2.325-5.033-3.503-8.11-3.503C9.902 4.837 4.901 9.847 4.899 16c.001 6.152 5.003 11.158 11.15 11.16 4.276 0 9.369-2.227 10.836-8.478l.028-.122h-3.23l-.022.068c-1.078 3.242-4.138 5.421-7.613 5.421a8 8 0 0 1-5.691-2.359A7.993 7.993 0 0 1 8 16.001c0-4.438 3.611-8.049 8.05-8.049 2.069 0 3.638.58 5.924 2.573l-3.792 3.789H27.1z"
              ></path>
            </g>
          </svg>
        </button>
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
