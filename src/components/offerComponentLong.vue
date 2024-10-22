<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style>

ul {
    list-style-type: disc;
    margin-left: 20px;
    /* Ensures the bullets are indented properly */
}

li {
    font-family: 'DM Serif Display', 'Times New Roman', Times, serif;
    ;
    font-size: larger;
    margin-top: 1rem;

    p {
        font-family: 'SF-Pro-Display', -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        font-size: medium;
        margin-top: 3px;
    }
}

p, h2{
    margin-top: 1rem;
}
</style>

<template>
    <div class="h-[60vh] w-screen relative custom-radial-gradient1 top-0 overflow-hidden">
        <div class="relative top-1/3 w-3/5 m-auto text-left text-7xl z-20 p-12 pl-12 bg-white/30 backdrop-blur-md rounded-3xl text-slate-700">
            <h1>
                Oferta
            </h1>
            <ul class="text-2xl">
                <li>
                    <a href="#czym-sie-zajmujemy">Czym się zajmujemy?</a>
                </li>
                <li>
                    <a href="#co-oferujemy">Co oferujemy?</a>
                </li>
                <li>
                    <a href="#cennik">Cennik</a>
                </li>
            </ul>
        </div>
        <div class="w-3/4 mix-blend-screen z-0 absolute -top-[20vh] right-0 grayscale">
            <img class="w-full" src="../assets/ladyJustice.png" alt="">
        </div>
    </div>
    <div class="h-fit linear-bg-2" ref="section1" id="offer">
        <div class="lg:w-3/5 w-auto relative lg:m-auto m-6 flex-col items-center">
            <div class="mb-12 mt-24">
                <div class="my-6" id="czym-sie-zajmujemy">
                    <h2>Czym się zajmujemy?</h2>
                    <p>
                        W naszej kancelarii wierzymy, że każda sprawa jest wyjątkowa i wymaga starannie dobranej
                        strategii. Dzięki wieloletniemu doświadczeniu w prowadzeniu różnorodnych spraw z zakresu prawa
                        rodzinnego, spadkowego, cywilnego i innych, jesteśmy w stanie zaproponować Państwu kompleksowe i
                        profesjonalne wsparcie prawne.
                    </p>
                    <p>
                        Skupiamy się na analizie Państwa unikalnej sytuacji, aby móc zaproponować rozwiązania, które
                        najlepiej zabezpieczą Wasze interesy. W skomplikowanych lub nietypowych sytuacjach oferujemy
                        doradztwo prawne, które pozwala znaleźć optymalny kierunek działania.
                    </p>
                    <p>
                        Zachęcamy do kontaktu, aby wspólnie znaleźć rozwiązania, które będą najlepiej dostosowane do
                        Państwa potrzeb.
                    </p>
                    <p>
                        Równocześnie zachęcamy do przeczytania poniższych artykułów, które mogą pomóc Państwu lepiej
                        zrozumieć swoją sytuację:
                    </p>

                </div>

                <div class="grid lg:grid-cols-2 lg:grid-rows-3 grid-cols-1 grid-rows-4 gap-6 min-h-[800px]">
                    <div data-aos="fade-down"
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-10 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo rodzinne </h2>
                        <i class="fas fa-users  absolute right-12 top-12 text-xl"></i>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4 overflow-hidden">
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
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-10 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo spadkowe</h2>
                        <i class="fas fa-scroll  absolute right-12 top-12 text-xl"></i>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4">
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
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-10 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo karne</h2>
                        <i class="fas fa-gavel  absolute right-12 top-12 text-xl"></i>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4">
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
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-10 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo administracyjne</h2>
                        <i class="fas fa-landmark  absolute right-12 top-12 text-xl"></i>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4">
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
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-10 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo cywilne</h2>
                        <i class="fas fa-balance-scale  absolute right-12 top-12 text-xl"></i>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4">
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
                        class="hover:drop-shadow-lg drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-10 p-6 hover:bg-white/80 transition-all">
                        <h2>Prawo pracy</h2>
                        <i class="fas fa-briefcase  absolute right-12 top-12 text-xl"></i>
                        <div class="flex-col justify-between h-full w-full">
                            <div class="relative my-4">
                                <p>Prawo pracy stanowi ogół norm prawnych związanych ze stosunkiem pracy, które określają
                                    prawa i obowiązki pracowników oraz pracodawców. Jest to bardzo istotna dziedzina
                                    prawa, ponieważ dotyczy...</p>
                            </div>
                            <div class="mt-8 relative w-full">
                                <RouterLink class="w-full relative bg-white rounded-full p-3 px-8"
                                    to="/oferta/prawo-pracy">
                                    Zobacz więcej</RouterLink>
                            </div>
                        </div>
                    </div>


                </div>
                <section class="py-12" id="co-oferujemy">
                    <h2>Co oferujemy?</h2>
                    <p>Zatrudnienie naszej kancelarii to gwarancja profesjonalizmu, zaangażowania i skuteczności w
                        działaniu. Oto, co nas wyróżnia:</p>

                    <ul>
                        <li>
                            <strong>Indywidualne podejście</strong>
                            <p>Każda sprawa, którą prowadzimy, jest dla nas priorytetem. Zawsze dokładnie analizujemy
                                potrzeby klienta, by dostosować strategię działania do unikalnej sytuacji prawnej.</p>
                        </li>

                        <li>
                            <strong>Bogate doświadczenie</strong>
                            <p>Nasz zespół adwokatów może pochwalić się wieloletnim doświadczeniem w prowadzeniu spraw z
                                zakresu prawa rodzinnego, spadkowego, cywilnego, karnego i wielu innych. Rozumiemy
                                złożoność przepisów prawnych i skutecznie wykorzystujemy swoją wiedzę na rzecz klientów.
                            </p>
                        </li>

                        <li>
                            <strong>Skuteczność i zaangażowanie</strong>
                            <p>Naszym celem jest osiągnięcie jak najlepszych rezultatów dla naszych klientów. Zawsze
                                dążymy do wygrania sprawy lub uzyskania najkorzystniejszych możliwych rozwiązań.</p>
                        </li>

                        <li>
                            <strong>Stały kontakt i wsparcie</strong>
                            <p>Dbamy o regularny kontakt z klientem na każdym etapie sprawy. Wierzymy, że transparentna
                                komunikacja to klucz do budowania zaufania oraz efektywnej współpracy.</p>
                        </li>

                        <li>
                            <strong>Zrozumienie i empatia</strong>
                            <p>Wiemy, jak trudne mogą być niektóre sprawy prawne, zwłaszcza te związane z życiem
                                rodzinnym czy dziedziczeniem. Dlatego podchodzimy do naszych klientów z empatią,
                                starając się zapewnić im komfort i spokój na każdym etapie postępowania.</p>
                        </li>

                        <li>
                            <strong>Przejrzyste zasady współpracy</strong>
                            <p>Zawsze informujemy o wszelkich kosztach i szczegółach związanych z prowadzeniem sprawy,
                                aby nasi klienci czuli się pewnie, korzystając z naszych usług.</p>
                        </li>
                    </ul>
                </section>
                <h2 class="pt-12" id="cennik">Cennik</h2>
                <section>
                    <p>
                        Nasza wieloletnia praktyka adwokacka nauczyła nas jednej kluczowej zasady – każda sprawa jest
                        wyjątkowa i wymaga indywidualnego podejścia. Problemy, z którymi Państwo się do nas zwracają,
                        zawsze niosą za sobą unikalny kontekst oraz specyfikę, a na adwokacie ciąży odpowiedzialność za
                        prawidłowe zrozumienie tych okoliczności. Dlatego każda sprawa wymaga szczegółowej analizy, a
                        uwzględniając Państwa oczekiwania, doradzamy najwłaściwsze kroki, które
                        należy podjąć, by skutecznie dochodzić swoich praw przed odpowiednimi organami. Z tego względu,
                        nie jest możliwe ustalenie sztywnego cennika za nasze usługi prawne świadczone zarówno na
                        terenie Wrocławia, jak i w innych regionach kraju.
                    </p>

                    <p>
                        Wyceniając sprawę, adwokat bierze pod uwagę szereg zmiennych. Najważniejszym czynnikiem jest
                        stopień skomplikowania sprawy. Oczywiste jest, że sprawy wymagające większego nakładu pracy,
                        licznych działań prawnych i formalnych, będą związane z wyższymi kosztami. Dodatkowo, liczba
                        stron i świadków zaangażowanych w postępowanie może wpłynąć na jego długość, a tym samym na
                        wynagrodzenie. Uczciwie informujemy również, że czynności wykonywane poza granicami Wrocławia
                        wiążą się z dodatkowym kosztem dojazdu. Aby uzyskać wstępną wycenę za prowadzenie Państwa
                        sprawy, zachęcamy do bezpośredniego kontaktu telefonicznego.
                    </p>

                    <h2>
                        Sposoby rozliczeń
                    </h2>
                    <p>
                        W zależności od potrzeb i charakteru sprawy oferujemy następujące formy rozliczenia:
                    </p>
                    <ul>
                        <li>
                            Wynagrodzenie ryczałtowe – <p>
                                ustalane z góry po wstępnej analizie dokumentacji. Preferowane w sprawach mniej
                                skomplikowanych, gdzie czas pracy adwokata oraz zakres czynności można wstępnie
                                oszacować.
                            </p>
                        </li>
                        <li>
                            Wynagrodzenie oparte na stawce godzinowej –
                            <p>
                                stosowane w sprawach, w których niemożliwe jest określenie z góry wymaganego nakładu
                                pracy, jak również w usługach prawnych świadczonych dla podmiotów gospodarczych.
                                Wynagrodzenie stanowi iloczyn przepracowanych godzin oraz ustalonej w umowie stawki.

                            </p>
                        </li>

                    </ul>
                    <h2>
                        Porady prawne
                    </h2>
                    <p>
                        Koszt jednorazowej porady prawnej jest uzależniony od stopnia złożoności sprawy i wynosi od 150
                        zł do 250 zł brutto.
                    </p>
                </section>

            </div>
        </div>
    </div>
</template>