<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="h-[1400px] linear-bg-2" ref="section1" id="offer">
        <div class="lg:w-3/5 w-auto absolute right-0 lg:m-24 m-6 flex-col items-center">
            <div class="mb-12 mt-24">
                <div class="mb-6 ">
                    <h3>Zobacz czym się zajmujemy:</h3>
                </div>

                <div class="grid lg:grid-cols-2 lg:grid-rows-4 grid-cols-1 grid-rows-4 gap-6 h-[1100px]">
                    <div data-aos="fade-down"
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-12 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo rodzinne</h2>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4">
                                <p>Szczególną uwagę podczas wykonywania praktyki zawodowej poświęcam sprawom rodzinnym i
                                    opiekuńczym.</p>
                            </div>
                            <div class="mt-8 relative w-full">
                                <RouterLink class="w-full relative bg-white rounded-full p-3 px-8"
                                    to="/oferta/prawo-rodzinne">
                                    Zobacz więcej</RouterLink>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down"
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-12 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo spadkowe</h2>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4">
                                <p>Świadczę usługi prawne z zakresu prawa spadkowego (dziedziczenie ustawowe i
                                    testamentowe).</p>
                            </div>
                            <div class="mt-8 relative w-full">
                                <RouterLink class="w-full relative bg-white rounded-full p-3 px-8"
                                    to="/oferta/prawo-spadkowe">
                                    Zobacz więcej</RouterLink>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-down"
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-12 p-6 hover:bg-white/80 transition-all">

                        <h2>Prawo karne</h2>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4">
                                <p>Prowadzę szeroką praktykę zawodową we wszystkich sprawach karnych i karnoskarbowych.
                                </p>
                            </div>
                            <div class="mt-8 relative w-full">
                                <RouterLink class="w-full relative bg-white rounded-full p-4 px-8"
                                    to="/oferta/prawo-karne">
                                    Zobacz więcej</RouterLink>
                            </div>
                        </div>

                    </div>

                    <div data-aos="fade-down"
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-12 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo administracyjne</h2>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4">
                                <p>Reprezentuję moich Klientów przed organami administracji publicznej oraz Sądami
                                    administracyjnymi.</p>
                            </div>
                            <div class="mt-8 relative w-full">
                                <RouterLink class="w-full relative bg-white rounded-full p-4 px-8"
                                    to="/oferta/prawo-administracyjne">
                                    Zobacz więcej</RouterLink>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-down"
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-12 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo cywilne</h2>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4">
                                <p>Udzielam kompleksowego wsparcia prawnego z zakresu szeroko rozumianego prawa
                                    cywilnego.</p>
                            </div>
                            <div class="mt-8 relative w-full">
                                <RouterLink class="w-full relative bg-white rounded-full p-4 px-8"
                                    to="/oferta/prawo-cywilne">
                                    Zobacz więcej</RouterLink>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-down"
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-12 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo pracy</h2>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4">
                                <p>Udzielam kompleksowego wsparcia prawnego z zakresu szeroko rozumianego prawa
                                    cywilnego.</p>
                            </div>
                            <div class="mt-8 relative w-full">
                                <RouterLink class="w-full relative bg-white rounded-full p-4 px-8"
                                    to="/oferta/prawo-pracy">
                                    Zobacz więcej</RouterLink>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>