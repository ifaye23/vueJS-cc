<template>
  <div>Add form</div>
  <form @submit.prevent="addRecipe">
    <div>
      <input type="text" name="" id="" placeholder="Recipe name" v-model="recipeName" />
    </div>
    <div>
      <textarea name="" id="" placeholder="Recipe description" v-model="recipeDescription" />
    </div>
    <button type="submit">Add</button>
  </form>
</template>

<script setup="" lang="ts">
import { useRouter } from 'vue-router';
import { useRecipeStore } from '@/stores/recipe.ts';
import { ref } from 'vue';

const recipeName = ref('');
const recipeDescription = ref('');

const router = useRouter();
const store = useRecipeStore();

const addRecipe = () => {
  const newRecipe = store.addRecipe({
    name: recipeName.value,
    description: recipeDescription.value,
  });

  router.push({
    name: 'recipe',
    params: {
      id: newRecipe.id,
    },
  });
};
</script>
