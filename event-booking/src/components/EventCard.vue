<template>
    <div class="bg-zinc-800 border border-amber-600 rounded-md">
        <h2 class="text-xl font-medium p-4 border-b border-amber-600">{{title}}</h2>
        <p class="border-b border-amber-600 p-4 text-sky-400">{{date}}</p>
        <p class="p-4 text-lime-200 border-b border-amber-600">{{description}}</p>
        <section class="flex justify-end p-4">
            <BookButton label="Book Event !"/>
        </section>
    </div>
</template>

<script setup>
    import BookButton from '@/components/BookButton.vue';

    defineProps({
        title: String,
        date: String,
        description: String,
    })
</script>