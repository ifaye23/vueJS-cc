import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

interface Recipe {
  id: string;
  name: string;
  description: string;
}

type NewRecipe = Omit<Recipe, 'id'>;

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([]);
  const favoriteIds = ref<string[]>([]);
  const addRecipe = (newRecipe: NewRecipe) => {
    const recipe = {
      id: Date.now().toString(),
      ...newRecipe,
    };

    recipes.value.push(recipe);

    return recipe;
  };

  const getRecipeById = (id: string) => recipes.value.find((recipe) => recipe.id === id);

  const filterRecipes = (searchQuery: string) =>
    recipes.value.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
    );

  const isFavorite = (id: string) => favoriteIds.value.includes(id);

  const toggleFavorite = (id: string) => {
    if (!isFavorite(id)) {
      favoriteIds.value.push(id);
      console.log(`Added favorite id : ${id}`);
    } else {
      favoriteIds.value = favoriteIds.value.filter((i) => i !== id);
      console.log(`Removed favorite id : ${id}`);
    }
  };

  return {
    recipes,
    favoriteIds,
    isFavorite,
    addRecipe,
    getRecipeById,
    filterRecipes,
    toggleFavorite,
  };
});
