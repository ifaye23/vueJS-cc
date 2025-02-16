<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl font-medium">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <section class="grid grid-cols-2 gap-8">
      <template v-if="!isLoadingEvent">
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
        <LoadingEventCard v-for="i in 4" :key="i" />
      </template>
    </section>
    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <section class="flex flex-col gap-5">
      <template v-if="!isLoadingBooking">
        <BookingCard
          v-for="book in bookings"
          :key="book.id"
          :eventTitle="book.eventTitle"
          @cancel="console.log('The booking has been canceled')"
        >
        </BookingCard>
      </template>
      <template v-else>
        <LoadingBookingCard></LoadingBookingCard>
      </template>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BookingCard from '@/components/BookingCard.vue';
import EventCard from '@/components/EventCard.vue';
import LoadingEventCard from '@/components/LoadingEventCard.vue';
import LoadingBookingCard from '@/components/LoadingBookingCard.vue';

const events = ref([]);
const isLoadingEvent = ref(false);
const isLoadingBooking = ref(false);

const bookings = ref([]);

const fetchBookings = async () => {
  isLoadingBooking.value = true;
  try {
    const response = await fetch('http://localhost:3001/bookings');
    bookings.value = await response.json();
    bookings.value.reverse();
  } finally {
    isLoadingBooking.value = false;
  }
};

const addBooking = async (event) => {
  const newBooking = {
    id: Date.now().toString(),
    userId: 1,
    eventId: event.id,
    eventTitle: event.title,
  };

  bookings.value.unshift(newBooking);

  try {
    isLoadingBooking.value = true;
    await fetch('http://localhost:3001/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newBooking, status: 'confirmed' }),
    });
  } finally {
    isLoadingBooking.value = false;
  }
};

const fetchEvents = async () => {
  isLoadingEvent.value = true;
  try {
    const response = await fetch('http://localhost:3001/events');
    events.value = await response.json();
  } finally {
    isLoadingEvent.value = false;
  }
};

onMounted(() => {
  fetchEvents();
  fetchBookings();
});
</script>
