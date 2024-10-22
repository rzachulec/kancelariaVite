<template>
    <div class="flex-col w-screen h-fit bg-gray-900 relative xl:px-60 md:p-24 py-12 px-6 z-20 text-slate-300 justify center">
        <div class="flex mb-5">
            <img src="../assets/kancelaria.ico" alt="Logo kancelarii" class="h-14 pr-3">
            <h2>Kancelaria Adwokacka Violetta Lis</h2>
        </div>
        <div class="flex justify-start">
            <div>
                <h3>Data wpisu na listę adwokatów: 1997-01-23</h3>
                <h3>Telefon: 508 241 320</h3>
                <h3>Email: violetta.lis@ska.pl</h3>
                <h3>NIP: 8991530423</h3>
                <h3>REGON: 931038430</h3>
                <h3>ul. Sądowa 4</h3>
                <h3>50-046 Wrocław</h3>
            </div>
            <div class="md:flex justify-evenly mx-12 w-1/2">
                <div>
                    <h3>
                        <RouterLink to="/">Strona głowna</RouterLink>
                        <!-- <a href="index.html">Strona głowna</a> -->
                    </h3>
                    <h3>
                        <RouterLink to="/oferta">Oferta</RouterLink>
                    </h3>
                    <h3>
                        <RouterLink to="/o-kancelarii">O kancelarii</RouterLink>
                    </h3>
                    <h3>
                        <a href="#kontakt">Kontakt</a>
                    </h3>
                    <h3>
                        <RouterLink to="/polityka-prywatnosci">Polityka prywatności</RouterLink>
                    </h3>
                </div>
                <div>
                    <h3>
                        <a href="">Prawo Rodzinne</a>
                    </h3>
                    <h3>
                        <a href="">Prawo Cywilne</a>
                    </h3>
                    <h3>
                        <a href="">Prawo Karne</a>
                    </h3>
                    <h3>
                        <a href="">Prawo Pracy</a>
                    </h3>
                    <h3>
                        <a href="">Prawo Gospodarcze</a>
                    </h3>
                </div>
            </div>
        </div>
        <div class="text-center mt-20 md:text-sm text-xs text-gray-400">
            © Kancelaria Violetta Lis 2024. Wszelkie prawa zastrzeżone. Realzacja: O'cornerCode
        </div>
    </div>
</template>

<style scoped>
h2 {
    margin-bottom: 0.75rem;
    font-size: 1.5rem;
}

h3 {
    font-size: medium;
}

@media (max-width: 768px) {
    h2 {
        font-size: 1rem;
    }

    h3 {
        font-size: small;
    }
}
</style>