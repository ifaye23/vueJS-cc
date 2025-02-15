<template>
    <div class="bg-zinc-800 border border-amber-600 rounded-md">
        <h2 class="text-xl font-medium p-4 border-b border-amber-600">{{title}}</h2>
        <p class="border-b border-amber-600 p-4 text-sky-400">{{date}}</p>
        <p class="p-4 text-lime-200">{{description}}</p>
    </div>
</template>

<script setup>
    defineProps({
        title: String,
        date: String,
        description: String,
    })
</script>