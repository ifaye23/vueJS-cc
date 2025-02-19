<template>
  <section class="flex flex-col gap-5">
    <template v-if="!loading">
      <template v-if="bookings.length">
        <BookingCard
          v-for="book in bookings"
          :key="book.id"
          :eventTitle="book.eventTitle"
          :status="book.status"
          @cancel="cancelBooking(book.id)"
        >
        </BookingCard>
      </template>
      <template v-else>
        <EmptyState>No bookings yet...</EmptyState>
      </template>
    </template>
    <template v-else>
      <LoadingBookingCard></LoadingBookingCard>
    </template>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import BookingCard from '@/components/BookingCard.vue';
import LoadingBookingCard from '@/components/LoadingBookingCard.vue';
import EmptyState from '@/components/EmptyState.vue';
import useBookings from '@/composables/useBookings.js';

const { loading, bookings, fetchBookings, cancelBooking } = useBookings();

onMounted(() => {
  fetchBookings();
});
</script>
