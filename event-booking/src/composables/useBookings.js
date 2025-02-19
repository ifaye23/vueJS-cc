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

export default function useBookings() {
  return {
    loading,
    bookings,
    fetchBookings,
  };
}
