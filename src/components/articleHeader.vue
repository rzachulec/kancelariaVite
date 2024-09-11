<template>
    <div class="h-[50vh] w-screen relative custom-radial-gradient1 top-0 overflow-hidden">
        <div class="relative top-1/3 left-48 w-1/3 text-7xl z-20 p-12">
            <h1>
                {{ props.title }}
            </h1>
            <h2>
                {{ props.subheading }}
            </h2>
        </div>
        <div class="w-3/4 mix-blend-screen z-0 absolute -top-[20vh] right-0 grayscale">
            <img class="w-full" src="../assets/ladyJustice.png" alt="">
        </div>
    </div>

</template>

<script setup lang="ts">
    const props = defineProps<{
        title: string,
        subheading: string,
    }>()
</script>