import { defineStore } from "pinia";
import {ref, computed } from 'vue';

interface Recipe {
    id: string,
    name: string,
    description: string
}

type NewRecipe = Omit<Recipe, 'id'>

export const useRecipeStore = defineStore('recipe', ()  => {
    const recipes = ref<Recipe[]>([])

    const addRecipe =  (newRecipe : NewRecipe) => {
        const recipe = {
            id : Date.now().toString(),
            ...newRecipe
        }

        recipes.value.push(recipe)

        return recipe
    }

    const getRecipeById = (id : string) => recipes.value.find(
        (recipe) => recipe.id === id
    )

    const filterRecipes = (searchQuery : string) => recipes.value.filter(
        (recipe) => recipe.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    )

    return { recipes, addRecipe, getRecipeById, filterRecipes }
});