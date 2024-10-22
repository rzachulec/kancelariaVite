<template>
    <div class="h-[60vh] w-screen relative custom-radial-gradient1 top-0 overflow-hidden">
        <div class="relative top-1/3 left-48 w-1/2 text-left text-7xl z-20 p-12 text-slate-700">
            <h1>
                {{ props.title }}
            </h1>
            <h2>
                {{ props.subheading }}
            </h2>
        </div>
        <div class="w-3/4 mix-blend-screen z-0 absolute -top-[20vh] right-0 grayscale">
            <img class="w-full" src="../assets/tooth.png" alt="">
        </div>
    </div>

</template>

<script setup lang="ts">
    const props = defineProps<{
        title: string,
        subheading: string,
    }>()
</script>