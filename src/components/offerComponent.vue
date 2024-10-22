<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="h-[1400px]" ref="section1" id="offer">
        <div class="lg:w-3/5 w-auto absolute right-0 lg:m-24 m-6 flex-col items-center">
            <div class="mb-12 mt-24">
                <div class="mb-6 ">
                    <h3>Zobacz czym się zajmujemy:</h3>
                </div>

                <div class="grid lg:grid-cols-2 lg:grid-rows-4 grid-cols-1 grid-rows-7 gap-6 h-[1100px]">
                    <div data-aos="fade-down"
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-12 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo rodzinne </h2>
                        <i class="fas fa-users absolute right-12 top-12 text-xl"></i>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4 h-12 overflow-clip">
                                <p>Adwokat rodzinny zdejmie z Ciebie konieczność samodzielnego prowadzenia sprawy i
                                    zabezpieczy Twoje interesy w toku sprawy rodzinnej. Sporządzi dla Ciebie niezbędne
                                    dokumenty, w szczególności...</p>
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
                        <i class="fas fa-scroll absolute right-12 top-12 text-xl"></i>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4 h-12 overflow-clip">
                                <p>W polskim porządku prawnym istnieją dwa modele dziedziczenia – ustawowy i
                                    testamentowy. Kodeks cywilny – w dziale dotyczącym prawa spadkowego – reguluje
                                    zasady spadkobrania w tych reżimach – łącznie z instytucjami...</p>
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
                        <i class="fas fa-gavel absolute right-12 top-12 text-xl"></i>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4 h-12 overflow-clip">
                                <p>Prawo karne to dziedzina prawa, która określa czyny będące przestępstwami, grożące za
                                    popełnienie przestępstwa kary i środki karne oraz środki zabezpieczające, które mogą
                                    zostać zastosowane na skutek naruszenia...
                                </p>
                            </div>
                            <div class="mt-8 relative w-full">
                                <RouterLink class="w-full relative bg-white rounded-full p-3 px-8"
                                    to="/oferta/prawo-karne">
                                    Zobacz więcej</RouterLink>
                            </div>
                        </div>

                    </div>

                    <div data-aos="fade-down"
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-12 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo administracyjne</h2>
                        <i class="fas fa-landmark absolute right-12 top-12 text-xl"></i>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4 h-12 overflow-clip">
                                <p>Reprezentuję moich Klientów przed organami administracji publicznej oraz Sądami
                                    administracyjnymi.</p>
                            </div>
                            <div class="mt-8 relative w-full">
                                <RouterLink class="w-full relative bg-white rounded-full p-3 px-8"
                                    to="/oferta/prawo-administracyjne">
                                    Zobacz więcej</RouterLink>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-down"
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-12 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo cywilne</h2>
                        <i class="fas fa-balance-scale absolute right-12 top-12 text-xl"></i>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4 h-12 overflow-clip">
                                <p>Jedną z podstawowych zasad postępowania cywilnego jest zasada kontradyktoryjności.
                                    Dla opisania tej zasady często używa się sformułowania, iż gospodarzami sporu są
                                    strony (powód i pozwany) i tylko do nich należy...</p>
                            </div>
                            <div class="mt-8 relative w-full">
                                <RouterLink class="w-full relative bg-white rounded-full p-3 px-8"
                                    to="/oferta/prawo-cywilne">
                                    Zobacz więcej</RouterLink>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-down"
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-12 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo pracy</h2>
                        <i class="fas fa-briefcase absolute right-12 top-12 text-xl"></i>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4 h-12 overflow-clip">
                                <p>Prawo pracy stanowi ogół norm prawnych związanych ze stosunkiem pracy, które
                                    określają prawa i obowiązki pracowników oraz pracodawców. Jest to bardzo istotna
                                    dziedzina prawa, ponieważ dotyczy...</p>
                            </div>
                            <div class="mt-8 relative w-full">
                                <RouterLink class="w-full relative bg-white rounded-full p-3 px-8"
                                    to="/oferta/prawo-pracy">
                                    Zobacz więcej</RouterLink>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down"
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/60 lg:col-span-2 rounded-xl h-fit lg:p-12 p-6 hover:bg-white/80 transition-all">
                        <div class="flex w-full justify-between flex-wrap">
                            <h2>Nie widzisz odpowiedniej opcji?</h2>
                            <div class="relative w-1/3 text-xl">
                                <RouterLink to="/oferta">
                                    <div
                                        class="w-full h-fit p-2 rounded-full text-slate-800 bg-gradient-to-r from-white/25 to-white/50 hover:bg-white/60 transition-all overflow-hidden flex items-center justify-between pr-8 hover:pr-0 text-xl">
                                        <div class="ml-4">
                                            Sprawdź pełną ofertę
                                        </div>
                                        <span class="material-icons text-2xl mr-4 p-0 mt-0.5">arrow_forward
                                        </span>
                                    </div>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>