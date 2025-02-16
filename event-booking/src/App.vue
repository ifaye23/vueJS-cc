<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl font-medium">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <section class="grid grid-cols-2 gap-8">
      <EventCard
        v-for="event in events"
        :key="event.id"
        :title="event.title"
        :date="event.date"
        :description="event.description"
        @book="console.log('This event has been registered')"
      />
    </section>
    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <section class="flex flex-col gap-5">
      <BookingCard v-for="i in 3" :key="i" @cancel="console.log('The booking has been canceled')">
      </BookingCard>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BookingCard from '@/components/BookingCard.vue';
import EventCard from '@/components/EventCard.vue';

const events = ref([]);

const fetchEvents = async () => {
  const response = await fetch('http://localhost:3001/events');
  events.value = await response.json();
  console.log(events.value);
};

onMounted(() => fetchEvents());
</script>
