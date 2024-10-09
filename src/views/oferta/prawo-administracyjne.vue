<script setup lang="ts">
import topBar from '../../components/topBar.vue';
import contactGeneral from '../../components/contactGeneral.vue'
import articleHeader from '../../components/articleHeader.vue'
import ArticleSideMenu from '../../components/articleSideMenu.vue';

</script>

<template>
  <topBar />
  <div class="z-0 relative top-24">
    <articleHeader title="Prawo administracyjne" subheading="adwokat Wrocław"/>
  </div>
  <div class="h-fit w-3/5 relative m-auto z-20 p-12 pt-48 text-pretty">
    <div >
      <h2>Adwokat do spraw administracyjnych Wrocław</h2>
      <p>
        Prawo pracy stanowi ogół norm prawnych związanych ze stosunkiem pracy, które określają prawa i obowiązki pracowników oraz pracodawców. Jest to bardzo istotna dziedzina prawa, ponieważ dotyczy w zasadzie każdego z nas – niezależnie od tego czy wykonujemy pracę na rzecz pracodawcy, czy prowadzimy własną firmę i zatrudniamy pracowników. W czym może Ci pomóc adwokat prawo pracy Wrocław?
      </p>
    </div>
    <ArticleSideMenu />
  </div>
  <contactGeneral />
</template>