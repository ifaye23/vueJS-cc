<template>
  <section class="flex flex-col gap-5">
    <template v-if="error">
      <ErrorCard :retry="fetchBookings"> Error loading bookings, try again </ErrorCard>
    </template>
    <template v-else>
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
          <ErrorCard>No bookings yet...</ErrorCard>
        </template>
      </template>
      <template v-else>
        <LoadingBookingCard></LoadingBookingCard>
      </template>
    </template>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import BookingCard from '@/components/BookingCard.vue';
import LoadingBookingCard from '@/components/LoadingBookingCard.vue';
import ErrorCard from '@/components/ErrorCard.vue';
import useBookings from '@/composables/useBookings.js';

const { loading, bookings, error, fetchBookings, cancelBooking } = useBookings();

onMounted(() => {
  fetchBookings();
});
</script>
