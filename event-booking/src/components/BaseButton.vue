<template>
    <button 
        class="bg-orange-600  
        text-xs py-2 px-4 rounded-sm 
        hover:bg-orange-700 hover:font-bold transition-all" 
        @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script setup>
   defineEmits(['click'])
</script>