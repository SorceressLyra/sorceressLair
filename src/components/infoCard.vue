<template>

    <div class="mx-auto my-5 max-w-md overflow-hidden rounded-xl bg-stone-100 shadow-md md:max-w-xl">
        <div class="md:flex">
            <div v-if="profilePhoto !== null" class="md:shrink-0 justify-center items-center flex">
                <img class="h-48 w-48 mt-5 object-cover rounded-full md:m-0 md:rounded-xl md:h-full md:w-48 " :src="profilePhoto"/>
            </div>
            <div class="p-8 font-medium">
                <div class="font-semibold tracking-wide text-emerald-700 text-2xl">
                    <slot name="header"></slot>
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    profilePhoto: {
        type: String,
        required: false,
        default: null
    }
})
</script>