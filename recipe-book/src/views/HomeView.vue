<template>
  <div>
    <h1>Home</h1>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 1 } }">Recipe 1</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 9000 } }">Recipe 9000</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'not-found' }">Error</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { RouterLink } from 'vue-router';

const recipeStore = useRecipeStore();
</script>
