<template>
  <div>Recipe : {{ $route.params.id }}</div>
  <nav>
    <ul>
      <li>
        <RouterLink :to="{ name: 'recipe', params: { id: 2 } }">Recipe 2</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'recipe', params: { id: 25 } }">Recipe 25</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { onMounted, watch } from 'vue';

const route = useRoute();

// onMounted(() => console.log('Fetching data from onMonted hook'));

// assign a function to route.params.id to track changes of the default string served
// adding immediate param for value initialization
watch(
  () => route.params.id,
  () => console.log('Fetching data from watch function'),
  { immediate: true },
);
</script>
