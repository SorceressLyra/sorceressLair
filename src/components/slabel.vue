<template>
    <div class="relative rounded-full m-1 bg-emerald-700 inline-block px-2 shadow-lg">
        <p class="text-sm text-white font-bold">{{ props.text }}</p>   
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['text'])

</script>