<template>
  <div>
    <h2>Recipe : {{ recipe?.name }}</h2>
    Recipe {{ $route.params.id }}
    <p>desc : {{ recipe?.description }}</p>
    <button
      name="favoriteCheck"
      id="favoriteCheck"
      v-if="recipe"
      @click="toggleFavorite(recipe.id)"
    >
      {{ isFavorite ? 'Remove from favorites' : 'Add to favorites' }}
    </button>
  </div>
  <nav>
    <ul>
      <li v-for="otherRecipe in recipes.filter((r) => r.id !== recipe?.id)">
        <RouterLink :to="{ name: 'recipe', params: { id: otherRecipe.id } }">{{
          otherRecipe.name
        }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useRecipeStore } from '@/stores/recipe';
import { computed, ref, toValue } from 'vue';

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
const recipes = store.recipes;
const toggleFavorite = store.toggleFavorite;
const isFavorite = computed(() => (recipe.value ? store.isFavorite(recipe.value.id) : false));
</script>
