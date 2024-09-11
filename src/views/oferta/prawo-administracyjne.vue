<script setup lang="ts">
import { useRoute } from 'vue-router'
import topBar from '../../components/topBar.vue';
import contactGeneral from '../../components/contactGeneral.vue'
import articleHeader from '../../components/articleHeader.vue'
const route = useRoute()
</script>

<template>
  <topBar />
  <div class="z-0 relative top-24">
    <articleHeader title="Prawo administracyjne" subheading="adwokat Wrocław"/>
  </div>
  <div class="h-screen w-full relative z-20 p-48">
    <div >
      <h2>Adwokat do spraw administracyjnych Wrocław</h2>
      <p>
        Prawo pracy stanowi ogół norm prawnych związanych ze stosunkiem pracy, które określają prawa i obowiązki pracowników oraz pracodawców. Jest to bardzo istotna dziedzina prawa, ponieważ dotyczy w zasadzie każdego z nas – niezależnie od tego czy wykonujemy pracę na rzecz pracodawcy, czy prowadzimy własną firmę i zatrudniamy pracowników. W czym może Ci pomóc adwokat prawo pracy Wrocław?
      </p>
    </div>
  </div>
  <p>
    <strong>Current route path:</strong> {{ route.fullPath }}
  </p>
  <contactGeneral />
</template>