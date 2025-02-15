<template>
    <div class="bg-zinc-800 border border-amber-600 rounded-md">
        <h2 class="text-xl font-medium p-4 border-b border-amber-600">{{title}}</h2>
        <p class="border-b border-amber-600 p-4 text-sky-400">{{date}}</p>
        <p class="p-4 text-lime-200 border-b border-amber-600">{{description}}</p>
        <section class="flex justify-end p-4">
            <button class="bg-amber-700  
                text-xs py-2 px-4 rounded-sm 
                hover:bg-orange-700 hover:text-sm hover:font-bold transition-all" 
                @click="$emit('book')">Book event !
            </button>
        </section>
    </div>
</template>

<script setup>
    defineProps({
        title: String,
        date: String,
        description: String,
    })

    defineEmits(['book'])
</script>