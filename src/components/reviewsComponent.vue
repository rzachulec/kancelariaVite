<template>
    <div class="h-[800px] linear-bg-2 w-full" ref="section3">
        <div class="absolute right-0 backdrop-blur-xl h-2/3 w-24 mr-6 z-10"></div>
        <div class="absolute left-[36%] backdrop-blur-xl h-2/3 w-24 mr-6 z-10"></div>
        <div class="flex h-1/2 top-1/4 w-3/5 px-20 relative m-auto mr-12 overflow-x-scroll overflow-y-hidden">
            <div v-for="review in reviewsList">
                <div class="w-[500px] p-6 mx-12 bg-white/10 rounded-lg h-400 inset-10 shadow-md drop-shadow-xl">
                    <div>
                        <h3>{{ review.name }}</h3>
                        <p>Opinia zamieszczona {{ review.date.getDate() }}-{{ review.date.getMonth() }}-{{ review.date.getFullYear() }} w serwisie <a :href=review.link>{{ review.source }} </a></p>
                        <div v-html=addStars(review.numberOfStars) ></div>
                    </div>
                    <div>
                        <p>{{ review.text }}</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
let reviewsList: review[] = []

type review = {
    name: string,
    date: Date,
    source: string,
    numberOfStars: number,
    link: string,
    text: string
}

let review = {
    name: "John Doe",
    date: new Date(2022, 4, 13),
    source: "Google",
    numberOfStars: 4,
    link: "",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, lectus eget varius fringilla, magna augue dictum velit, vitae cursus risus tortor non libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, lectus eget varius fringilla, magna augue dictum velit, vitae cursus risus tortor non libero."
}

let review1 = {
    name: "Weronika Puterko",
    date: new Date(2022, 4, 13),
    source: "Google",
    numberOfStars: 5,
    link: "https://g.co/kgs/C4DQfGJ",
    text: "Współpracę z Panią Mecenas oceniam wzorowo. Fachowe doradztwo i ilość poświęconego czasu sprawiło, że poczułam się w pełni zaopiekowana."
}

let review2 = {
    name: "Mariola Litwinska",
    date: new Date(2022, 4, 13),
    source: "Google",
    link: "https://g.co/kgs/B6bdf3W",
    numberOfStars: 5,
    text: "Polecam z całego serca. Dzięki pani mecenas uwierzyłam w sprawiedliwość i przestałam się bać. Problem z jakim się zmierzyłam dla mnie był jak walka z wiatrakami. Ale wystarczyło jedno spotkanie i strach minął. Pełen profesjonalizm i przede wszystkim widzą na wysokim poziomie spowodowały że nie jestem sama. Jestem Wdzięczna, bo wiem że podejmując słuszną decyzje być może inne osoby nie dadzą się oszukać. Gorąco polecam kancelarię pani Mecenas. Jest to kobieta o wielkim sercu, która każdą sprawę prowadzi od początku do końca."
}

let n = 0;
    while (n < 7) {
        reviewsList[n] = review
        n++;
    }
    reviewsList[0] = review2;
    reviewsList[1] = review1;

function addStars(numIn: number) {
    let num = Math.min(numIn, 5);
    let int = Math.floor(num);
    let dec = num - int;
    let i = int
    let empty = 5 - Math.floor(num);
    let starsCode = ``;
    while (i > 0) {
        starsCode += `<span class="material-icons">star</span>`
        i--
    }
    if (dec >= 0.5) {
        starsCode += `<span class="material-icons">star_half</span>`
        empty--;
    }
    while (empty > 0) {
        starsCode += `<span class="material-icons">star_border</span>`
        empty--;
    }

    return starsCode;
}

</script>