<script setup lang="ts">
import topBar from '../../components/topBar.vue';
import contactGeneral from '../../components/contactGeneral.vue'
import articleHeader from '../../components/articleHeader.vue'
import ArticleSideMenu from '../../components/articleSideMenu.vue';

</script>

<template>
  <topBar />
  <div class="z-0 relative top-24">
    <articleHeader title="Prawo rodzinne" subheading="adwokat Wrocław" />
  </div>
  <div class="h-fit w-3/5 relative m-auto z-20 p-12 pt-48 text-pretty">
    <div>
      <h2>Adwokat do spraw cywilnych Wrocław</h2>

    </div>
    <ArticleSideMenu />
  </div>
  <contactGeneral />
</template>

<style scoped>
p {
  margin-top: 1rem;
}

h2 {
  margin-top: 2rem;
}
</style>