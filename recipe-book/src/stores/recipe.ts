import { defineStore } from "pinia";
import {ref, computed } from 'vue';

interface Recipe {
    id: string,
    name: string,
    description: string
}

export const useRecipeStore = defineStore('recipe', ()  => {
    const recipes = ref<Recipe[]>([])

    return { recipes }
});