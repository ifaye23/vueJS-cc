<script setup lang="ts"></script>

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
          <RouterLink :to="'not-found'">Error</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
