<script lang="ts">
import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
let show = Boolean;
const menuIcon = ref<HTMLElement | null>(null);
const iconCode = reactive({ text: "fas fa-bars" })


export default {
    name: "topBar",
    setup() {
    },
    data() {
        return {
            show: false,
            iconCode,
        };
    },
    methods: {
        toggle() {
            this.show = !this.show;
            iconCode.text = this.show ? "fas fa-times" : "fas fa-bars";
        }
    }
};
</script>

<template>

    <div
        class="flex w-screen backdrop-blur-2xl h-[10vh] fixed top-0 z-50 items-center justify-between bg-white/40 shadow-md">
        <div class="flex h-full justify-center items-center">
            <RouterLink to="/" class="flex h-full justify-center items-center">
                <img src="../assets/kancelariaLogo.png" class="h-[80%] mx-3" alt="VL-logo">
                <div
                    class="items-start flex-col justify-center mx-4  before:absolute before:left-24 before:w-0.5 before:bg-black before:content-empty before:h-16 before:top-4 font-bold text-2xl font-serif lg:visible ">
                    <div>
                        <h>Violetta Lis</h>
                    </div>
                    <h>Kancelaria Adwokacka</h>
                </div>
            </RouterLink>
        </div>
        <div class="absolute right-0 mx-4 flex justify-center items-center">
            <div
                class="lg:inline-block px-5 py-3 m-2 text-2xl bg-indigo-900 bg-opacity-0 text-slate-700 font-semibold rounded-full hover:bg-white/40 transition-all hidden lg:visible">
                <RouterLink to="/oferta">Oferta</RouterLink>
            </div>
            <div
                class="lg:inline-block px-5 py-3 m-2 text-2xl bg-indigo-900 bg-opacity-0 text-slate-700 font-semibold rounded-full hover:bg-white/40 transition-all hidden lg:visible">
                <RouterLink to="/about">O nas</RouterLink>
            </div>
            <div
                class="lg:inline-block px-5 py-3 m-2 text-2xl bg-indigo-900 bg-opacity-0 text-slate-700 font-semibold rounded-full hover:bg-white/40 transition-all hidden lg:visible">
                <a href="#kontakt" rel="noopener noreferrer">
                    Kontakt
                </a>
            </div>
            <button @click="toggle"
                class="inline-block p-4 m-2 text-2xl bg-indigo-900 bg-opacity-0 text-slate-700 font-semibold rounded-full   visible lg:hidden absolute right-0"
                rel="noopener noreferrer">
                <div ref="menuIcon">
                    <i :class='iconCode.text'></i>
                </div>
            </button>
        </div>
        <transition name="slide-menu">
            <div v-show="show" class="slideLayer top-[10vh] w-screen flex-col fixed h-screen right-0">
                <div class="flex-col w-full bg-white/40 backdrop-blur-md p-6 text-center transition-all">
                    <div class="px-5 py-3 m-4 text-2xl text-slate-700 font-semibold hover:bg-white/40 transition-all lg:hidden visible rounded-full"
                        @click="toggle">
                        <RouterLink to="/#offer">Oferta</RouterLink>
                    </div>
                    <div class="px-5 py-3 m-4 text-2xl text-slate-700 font-semibold hover:bg-white/40 transition-all lg:hidden visible rounded-full"
                        @click="toggle">
                        <RouterLink to="/#about">O huj</RouterLink>
                    </div>
                    <div class="px-5 py-3 m-4 text-2xl text-slate-700 font-semibold hover:bg-white/40 transition-all lg:hidden visible rounded-full"
                        @click="toggle">
                        <a href="#kontakt" rel="noopener noreferrer">
                            Kontakt
                        </a>
                    </div>
                </div>
                <div class="w-full h-full backdrop-blur bg-slate-900/30 transition-all" @click="toggle">

                </div>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.slide-menu-enter-from {
    transform: translate(0, -20px);
    -webkit-transform: translate(0, -20px);
    opacity: 0;

}

.slide-menu-enter-to {
    opacity: 100;
}

.slide-menu-leave-to {
    transform: translate(0, -20px);
    -webkit-transform: translate(0, -20px);
    opacity: 0;
}

.slideLayer {
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
}
</style>