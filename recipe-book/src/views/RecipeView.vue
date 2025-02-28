<template>
  <div>
    Recipe {{ $route.params.id }}
    <h2>Recipe : {{ recipe?.name }}</h2>
    <p>desc : {{ recipe?.description }}</p>
  </div>
  <nav>
    <ul>
      <li>
        <RouterLink :to="{ name: 'recipe', params: { id: 1 } }">Recipe 1</RouterLink>
      </li>

      <li>
        <RouterLink :to="{ name: 'recipe', params: { id: 3 } }">Recipe 3</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useRecipeStore } from '@/stores/recipe';
import { computed } from 'vue';

const route = useRoute();
const store = useRecipeStore();

// onMounted(() => console.log('Fetching data from onMonted hook'));

// assign a function to route.params.id to track changes of the default string served
// adding immediate param for value initialization
// watch(
//   () => route.params.id,
//   () => console.log('Fetching data from watch function'),
//   { immediate: true },
// );

const recipe = computed(() => store.getRecipeById(route.params.id as string));
</script>
