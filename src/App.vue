<script setup lang="ts">

import Footer from './components/footer.vue';

</script>

<template>
  <main>
      <router-view />
  </main>
  <iframe class="w-full h-80 relative z-20 bg-slate-400 pointer-events-none border-0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1100.1570867878227!2d17.022714861485266!3d51.10610862100682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc20cc7d4dafd%3A0x4b9c7aba2476e6be!2sS%C4%85dowa%204%2C%2050-046%20Wroc%C5%82aw%2C%20Poland!5e0!3m2!1sen!2sit!4v1712756785085!5m2!1sen!2sit"
    allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  <div>
    <Footer />
  </div>
</template>

<style>
/* Define the transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
