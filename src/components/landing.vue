<template>
    <div class="h-screen w-screen relative z-30 custom-radial-gradient1" ref="initialSection">
        <div
            class="flex sticky z-20 bg-transparent lg:top-60 top-20 lg:left-24 lg:p-0 p-8 left-0 h-fit lg:w-1/3 w-full  items-start opacity-100 backdrop-blur-lg">
            <div class="flex-col h-1/2 w-full">
                <div
                    class="relative font-semibold top-0 left-0 2xl:text-7xl xl:text-6xl text-4xl h-2/3 text-slate-700 p-6 text-balance">
                    <h1>Od ponad 25 lat chronimy Twoje prawa.</h1>
                </div>
                <div class="xl:text-3xl md:text-2xl text-xl m-6 font-normal">
                    <button onclick="location.href='#kontakt'"
                        class="w-full h-fit p-3 mt-4 backdrop-blur-2xl rounded-full text-slate-600 bg-gradient-to-r from-white/25 to-white/50 hover:bg-white/60 transition-all overflow-hidden flex items-center justify-between pr-8 hover:pr-0">
                        <div class="ml-4">
                            Skontaktuj się
                        </div>
                        <span
                            class="material-icons text-3xl mr-4 p-0 mt-0.5">arrow_forward
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div
            class="absolute bottom-0 right-0 lg:w-4/5 md:w-[600px] m-0 p-0 max-h-screen mix-blend-screen overflow-hidden">
            <img src="../assets/ladyJustice.png" alt="">
        </div>
    </div>
</template>


<style scoped>
.custom-radial-gradient {
    background: hsla(220, 63%, 73%, 1);

    background: radial-gradient(circle, hsla(220, 63%, 73%, 1) 0%, hsla(219, 35%, 87%, 1) 100%);

    background: -moz-radial-gradient(circle, hsla(220, 63%, 73%, 1) 0%, hsla(219, 35%, 87%, 1) 100%);

    background: -webkit-radial-gradient(circle, hsla(220, 63%, 73%, 1) 0%, hsla(219, 35%, 87%, 1) 100%);

    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr="#8DAAE5", endColorstr="#D3DBEA", GradientType=1);
}

.material-icons {
    font-family: 'Material Icons';
}

.shine {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(120deg, rgba(57, 57, 57, 0), rgba(220, 96, 96, 0.4), rgba(50, 50, 50, 0));
    transform: rotate(45deg);
    animation: shine 4s infinite;

}

@keyframes shine {
    0% {
        transform: rotate(45deg) translate(-100%, -100%);
    }

    50% {
        transform: rotate(45deg) translate(100%, 100%);
    }

    100% {
        transform: rotate(45deg) translate(-100%, -100%);
    }
}
</style>