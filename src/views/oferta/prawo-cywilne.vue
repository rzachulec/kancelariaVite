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
      <p>
        Jedną z podstawowych zasad postępowania cywilnego jest zasada kontradyktoryjności. Dla opisania tej zasady
        często używa się sformułowania, iż gospodarzami sporu są strony (powód i pozwany) i tylko do nich należy
        inicjatywa w przedstawianiu twierdzeń i zarzutów w procesie oraz dowodów na ich poparcie. Rolą sądu, poza
        pewnymi wyjątkami, jest jedynie rozstrzygnięcie sporu. Co do zasady oznacza to więc, że będąc stroną
        postępowania sądowego nie wystarczy tylko mieć rację – trzeba jeszcze tę rację wykazać. Dotyczy to zarówno
        powoda, jak i pozwanego.
      </p>
      <p>
        Kancelaria adwokacka świadczy profesjonalną pomoc prawną na etapie przedsądowym (w postaci porad lub opinii),
        sądowym oraz egzekucyjnym.
      </p>

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