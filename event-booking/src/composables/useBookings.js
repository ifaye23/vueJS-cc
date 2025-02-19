import { ref } from 'vue';

const loading = ref(false);
const bookings = ref([]);

const fetchBookings = async () => {
  loading.value = true;
  try {
    const response = await fetch('http://localhost:3001/bookings');
    bookings.value = await response.json();
    bookings.value.reverse();
  } finally {
    loading.value = false;
  }
};

const getBookingById = (id) => bookings.value.findIndex((book) => book.id === id);

const addBooking = async (event) => {
  const newBooking = {
    id: Date.now().toString(),
    userId: 1,
    eventId: event.id,
    eventTitle: event.title,
    status: 'pending',
  };

  if (
    bookings.value.some(
      (booking) => booking.eventId === newBooking.eventId && booking.userId === newBooking.userId,
    )
  ) {
    alert('Already registered for this event.');
    return;
  }

  bookings.value.unshift(newBooking);

  try {
    const response = await fetch('http://localhost:3001/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newBooking, status: 'confirmed' }),
    });
    if (response.ok) {
      const index = getBookingById(newBooking.id);
      if (index !== -1) bookings.value[index].status = 'confirmed';
    } else {
      throw new Error('Failed to confirm booking');
    }
  } catch (error) {
    // handle error
    const index = getBookingById(newBooking.id);
    if (index !== -1) bookings.value[index].status = 'failed';
    console.error(`An error has occurred : ${error}`);
  }
};

const cancelBooking = async (id) => {
  const index = getBookingById(id);
  console.log(index);
  const bookingToCancel = bookings.value[index];
  bookings.value.splice(index, 1);

  try {
    const response = await fetch(`http://localhost:3001/bookings/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to cancel booking !');
    }
  } catch (error) {
    console.error(`An error has occured : ${error}`);
    bookings.value.splice(index, 0, bookingToCancel);
    bookings.value[index].status = 'failed';
  }
};

export default function useBookings() {
  return {
    loading,
    bookings,
    fetchBookings,
    addBooking,
    cancelBooking,
  };
}
