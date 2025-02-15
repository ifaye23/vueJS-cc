<template>
    <DefaultCard>
        <h2 class="text-xl font-medium p-4 border-b border-amber-600">{{title}}</h2>
        <p class="border-b border-amber-600 p-4 text-sky-400">{{date}}</p>
        <p class="p-4 text-lime-200 border-b border-amber-600">{{description}}</p>
        <section class="flex justify-end p-4">
            <BookButton @click="$emit('book')">
                Book Event !
            </BookButton>
        </section>
    </DefaultCard>
</template>

<script setup>
    import BookButton from '@/components/BaseButton.vue';
    import DefaultCard from '@/components/BaseCard.vue';
    defineEmits(['book'])
    defineProps({
        title: String,
        date: String,
        description: String,
    })
</script>