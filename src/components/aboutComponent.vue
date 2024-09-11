<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="h-[1000px] linear-bg-1" ref="section2" id="about">
        <div class="lg:m-24 m-6 w-full">
            <div class="h-full absolute lg:w-3/5 w-full right-32 lg:flex flex mt-32" data-aos="fade-down">
                <img src="../assets/mecenas.jpg" alt="" class="w-full h-fit mr-16 lg:w-2/3">
                <div class="w-2/3">
                    <h1 class="text-6xl italic">
                        ,,To sąd 1. instancji wrzucił to gówno do wiatraka!"
                    </h1>
                    <p class="my-6">Każdy dobry Mecenas ma obowiązek przestrzegać norm etycznych, chronić prawa i
                        wolności
                        obywatelskie,
                        zapewniać wysoki standard usług prawnych oraz dbać o interes Klienta. Te zasady są dla nas
                        najważniejsze
                        niezmienne od lat.</p>

                    <p>Specjalizujemy się przede
                        wszystkim w prawie rodzinnym, w tym prowadzeniu spraw rozwodowych, alimentacyjnych, dotyczących
                        władzy
                        rodzicielskiej i podziału majątku. Dzięki szerokiej wiedzy i wszechstronnej praktyce zawodowej,
                        z
                        powodzeniem reprezentujemy klientów także w
                        sprawach karnych, cywilnych oraz gospodarczych. Dbamy o to, aby każda osoba korzystająca z
                        naszej pomocy
                        czuła
                        się pewnie i miała pełne wsparcie na każdym etapie postępowania.</p>
                    <RouterLink to="/o-kancelarii">
                        <div
                            class="w-full h-fit p-3 mt-8 backdrop-blur-2xl rounded-full text-slate-600 bg-gradient-to-r from-white/25 to-white/50 hover:bg-white/60 transition-all overflow-hidden flex items-center justify-between pr-8 hover:pr-0 text-xl" >
                            <div class="ml-4">
                                Zobacz więcej
                            </div>
                            <span class="material-icons text-3xl mr-4 p-0 mt-0.5">arrow_forward
                            </span>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>