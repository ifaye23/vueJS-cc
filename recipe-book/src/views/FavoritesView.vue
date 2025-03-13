<template>
  <div>
    <h1>Favorite Recipes</h1>
    <div v-if="favoriteRecipes.length > 0">
      <nav>
        <ul>
          <li v-for="recipe in favoriteRecipes" :key="recipe?.id">
            <RouterLink :to="{ name: 'recipe', params: { id: recipe?.id } }">
              {{ recipe?.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <div v-else>Add some recipes to your favorites !</div>
  </div>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';

const recipeStore = useRecipeStore();
const favoriteRecipes = computed(() =>
  recipeStore.favoriteIds.map((id) => recipeStore.getRecipeById(id)).filter(Boolean),
);
const queryString = ref('');
</script>
