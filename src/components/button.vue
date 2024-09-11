<template>
    <a :href="props.href" class="inline-block px-5 py-3 m-2 text-2xl bg-indigo-900 bg-opacity-0 text-slate-700 font-semibold rounded-full hover:bg-white/40 transition-all" rel="noopener noreferrer">
      {{ props.text }}
    </a>
  </template>
  
  <script setup lang="ts">
  
  // Define the props for the component
  const props = defineProps<{
    href: string;
    text: string;
  }>();
  </script>