<script setup lang="ts">
import topBar from '../components/topBar.vue'
import landing from '../components/landing.vue'
import offerComponent from '../components/offerComponent.vue';
import aboutComponent from '../components/aboutComponent.vue';
import reviewsComponent from '../components/reviewsComponent.vue';
import contactComponent from '../components/contactHome.vue';
import { reactive, ref, onMounted } from 'vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
// import sectionNameDisplay from '../components/section-name-display.vue';

const changeContent = (newTitle: string, newText: string) => {
    gsap.to(titleElement.value, {
        opacity: 0, duration: 0.1, onComplete: () => {
            gsap.to(textElement.value, { opacity: 0, duration: 0 });
            dynamicTitle.text = newTitle;
            dynamicText.text = newText;
            gsap.to(titleElement.value, { opacity: 1, duration: 0.5, onComplete: () => {
                gsap.to( textElement.value, { opacity: 1, duration: 1} )
            } });
        }
    });
};

const section0 = ref<HTMLElement | null>(null);
const section1 = ref<HTMLElement | null>(null);
const section2 = ref<HTMLElement | null>(null);
const section3 = ref<HTMLElement | null>(null);
const section4 = ref<HTMLElement | null>(null);
const contentElement = ref<HTMLElement | null>(null);
const titleElement = ref<HTMLElement | null>(null);
const textElement = ref<HTMLElement | null>(null);

const sections = [
    { ref: section0, content: '', text: '' },
    { ref: section1, content: 'Doświadczenie, które procentuje.', text: 'Setki zakończonych spraw dają nam możliwość rozpatrywania szerokiego wachlarza problemów w świetle własnych, sprawdzonych rozwiązań.' },
    { ref: section2, content: 'Nasza Kancelaria', text: 'Od lat budujemy zaufanie, łącząc wysoką jakość usług z niezachwianą reputacją na rynku prawniczym.' },
    { ref: section3, content: 'Opinie klientów', text: 'Najlepszym potwierdzeniem naszej skuteczności i profesjonalizmu są opinie osób, które nam zaufały:' },
    { ref: section4, content: 'Kontakt', text: 'Zapraszamy do kontaktu drogą telefoniczą lub mailową. Wizyty w kancelarii prosimy uprzednio umawiać w celu ustalenia dostępności. Mogą państwo również skorzystać z formularza kontatktowago: po otrzymaniu zgłoszenia skontaktujemy się z państwem mailowo lub, w przypadku podania numeru kontaktowego, telefonicznie.' }
];

const dynamicTitle = reactive({ text: 'initial' })
const dynamicText = reactive({ text: ''})

onMounted(() => {

    let i = 0;
    sections.forEach((section) => {
        console.log('created trigger for section ', i)
        ScrollTrigger.create({
            trigger: section.ref.value,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => {
                changeContent(section.content, section.text)
            },
            onEnterBack: () => {
                changeContent(section.content, section.text)
            },
        });
        i += 1;
    })
})

</script>

<template>
    <topBar />
    <div ref="section0">
        <landing />
    </div>
    <div ref="section1">
        <offerComponent  />
    </div>
    <div ref="section2" >
        <aboutComponent />
    </div>
    <div ref="section3">
        <reviewsComponent  />
    </div>
    <div ref="section4">
        <contactComponent  />
    </div>
    <div ref="contentElement" class="">
        <div
            class="lg:flex-col flex  items-center justify-between lg:bg-transparent bg-white/20 w-full fixed lg:top-0 top-[10vh] lg:left-24 left-0 lg:h-screen h-min lg:w-1/4 backdrop-blur-3xl opacity-100">
            <div class="relative w-full font-semibold top-0 lg:top-1/3 left-0 m-0 2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl text-slate-700 p-3 text-balance break-words hyphens-auto"
                ref="titleElement">
                <h1>{{ dynamicTitle.text }}</h1>
                <div class="mt-12 text-2xl font-normal text-left" ref="textElement">
                    <p>
                        {{  dynamicText.text }}
                    </p>
                </div>
        
            </div>
        </div>
    </div>
</template>