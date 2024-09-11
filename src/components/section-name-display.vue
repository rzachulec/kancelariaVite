<template>
    <div class="overflow-hidden overflow-x-clip relative z-20 m-0">
    <div class="h-screen absolute -top-1/4 bg-transparent" ref="initialSection">
        <!-- Initial state content (could be empty or some placeholder) -->
    </div>
    <offerComponent ref="section1" />
    <aboutComponent ref="section2" />
    <opinionsComponent ref="section3" />
    <contactComponent ref="section4" />
        <div ref="contentElement" class="">
            <div
                class="lg:flex-col flex  items-center justify-between lg:bg-transparent bg-white/20 w-full fixed lg:top-0 top-[10vh] lg:left-24 left-0 lg:h-screen h-min lg:w-1/4 backdrop-blur-2xl opacity-100">
                <div class="relative w-full font-semibold top-0 lg:top-1/3 left-0 m-0 2xl:text-6xl xl:text-5xl lg:text-4xl text-2xl text-slate-700 p-3 text-balance break-words hyphens-auto"
                    ref="titleElement">
                    <h>{{ dynamicContent.text }}</h>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import offerComponent from './offerComponent.vue';
import aboutComponent from './aboutComponent.vue';
import opinionsComponent from './reviewsComponent.vue';
import contactComponent from './contactHome.vue';

import { defineComponent, ref, onMounted, reactive } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
    // name: 'textBoxTitle',
    components: {
            offerComponent,
            aboutComponent,
            opinionsComponent,
            contactComponent
    },

    setup() {

        const initialSection = ref<HTMLElement | null>(null);
        const section1 = ref<HTMLElement | null>(null);
        const section2 = ref<HTMLElement | null>(null);
        const section3 = ref<HTMLElement | null>(null);
        const section4 = ref<HTMLElement | null>(null);

        const contentElement = ref<HTMLElement | null>(null);
        const textElement = ref<HTMLElement | null>(null);
        const textBoxTitleButton = ref<HTMLElement | null>(null);
        const dynamicContent = reactive({ text: 'Initial State Content' });
        const buttonContent = reactive({ text: 'Kontakt' });
        const buttonTarget = reactive({ text: '/' });

        const sections = [
            { ref: initialSection, content: '', button: 'Jak możemy pomóc?', buttonTarget: '#kontakt' },
            { ref: section1, content: 'Postaw na doświadczenie.', button: 'Jak możemy pomóc?', buttonTarget: '#kontakt' },
            { ref: section2, content: 'O kancelarii', button: 'Zobacz więcej', buttonTarget: '#kontakt' },
            { ref: section3, content: 'Opinie klientów', button: 'Zobacz więcej', buttonTarget: '#kontakt' },
            { ref: section4, content: 'Kontakt', button: 'Zobacz więcej', buttonTarget: '#kontakt' },
        ];

        const changeContent = (newContent: string, buttonNewContent: string, buttonNewTarget: string) => {
            if (contentElement.value) {
                gsap.to(textBoxTitleButton.value, {
                    opacity: 0, duration: 0.1
                });
                gsap.to(textElement.value, {
                    opacity: 0, duration: 0.1, onComplete: () => {
                        dynamicContent.text = newContent;
                        buttonContent.text = buttonNewContent;
                        buttonTarget.text = buttonNewTarget;
                        gsap.to(textElement.value, { opacity: 1, duration: 1.5 });
                        gsap.to(textBoxTitleButton.value, {
                            opacity: 1, duration: 0.2
                        });
                    }
                });
            }
        };

        onMounted(() => {

            sections.forEach((section) => {
                if (section.ref.value && contentElement.value) {
                    ScrollTrigger.create({
                        trigger: section.ref.value,
                        start: 'top center',
                        end: 'bottom center',
                        onEnter: () => {
                            changeContent(section.content, section.button, section.buttonTarget);
                        },
                        onEnterBack: () => {
                            changeContent(section.content, section.button, section.buttonTarget);
                        },
                    });
                }
            });

            if (initialSection.value) {
                ScrollTrigger.create({
                    trigger: initialSection.value,
                    start: 'top top',
                    end: 'bottom bottom',
                    onLeave: () => {
                        gsap.to(initialSection.value, { autoAlpha: 0 });
                    },
                    onEnterBack: () => {
                        gsap.to(initialSection.value, { autoAlpha: 1 });
                    },
                });
            }
        });

        return {
            initialSection,
            section1,
            section2,
            section3,
            section4,
            contentElement,
            textElement,
            dynamicContent,
            buttonContent,
            buttonTarget,
            textBoxTitleButton
        };
    },
});
;

</script>

<style scoped>
.contact-grid {
    background-color: #ffffff88;
    border-radius: 0.75rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 2rem;
    padding: 2rem;
    -webkit-filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
    filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
    transition: 0.2s all;

    h3 {
        font-size: 1.5rem;
    }
}

.contact-grid:hover {
    background-color: #ffffffbb;
    -webkit-filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    transition: 0.2s all;
}
</style>