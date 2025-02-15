<script setup>
import BookingCard from '@/components/BookingCard.vue';
import EventCard from '@/components/EventCard.vue';
</script>

<template>
  <main class="container mx-auto my-8 space-y-8">
    <h1 class="text-4xl font-medium">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
        <section class="grid grid-cols-2 gap-8">
            <EventCard 
                v-for="i in 8" 
                :key="i" 
                title="Boombox Master" 
                date="29-06-2003" 
                description="Welcome to the DJs"
                @book="console.log('This event has been registered')"/>
        </section>
    <h2 class="text-2xl font-medium">Your Bookings</h2>
        <section class="flex flex-col gap-5">
            <BookingCard v-for="i in 3" :key="i" @cancel="console.log('The booking has been canceled')">
                This is a test
            </BookingCard>
        </section>
  </main>
</template>