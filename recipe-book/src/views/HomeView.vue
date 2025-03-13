<template>
  <div>
    <h1>Recipe Book</h1>
    <div>
      <input type="text" placeholder="Search recipes..." v-model="queryString" />
    </div>
    <div v-if="filteredRecipes.length > 0">
      <nav>
        <ul>
          <li v-for="recipe in filteredRecipes" :key="recipe.id">
            <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }">
              {{ recipe.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <div v-else>Recipes not found !</div>
  </div>
</template>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';

const recipeStore = useRecipeStore();

const queryString = ref('');
const filteredRecipes = computed(() => recipeStore.filterRecipes(queryString.value));
</script>
