<template>
    <div class="h-[1200px] linear-bg-1 overflow-hidden pt-12 flex" ref="section4" id="kontakt">
        <div
            class="lg:flex-col flex  items-center justify-between lg:bg-transparent bg-white/20 w-full relative lg:top-screen top-[10vh] lg:left-48 left-0 lg:h-screen h-min lg:w-1/4 opacity-100">
            <div class="relative w-full font-semibold top-0 left-0 m-0 2xl:text-7xl xl:text-5xl lg:text-4xl text-2xl text-slate-700 p-3 text-balance "  >
                <h1>Kontakt</h1>
                <div class="text-2xl mt-12 font-medium">
                    <div class="mb-6">
                        <p>
                            Zapraszamy do kontaktu drogą telefoniczą lub mailową. Wizyty w kancelarii prosimy uprzednio umawiać w celu ustalenia dostępności.  
                        </p>
                    </div>
                        <p>
                        Mogą państwo również skorzystać z formularza kontatktowago: po otrzymaniu zgłoszenia skontaktujemy się z państwem mailowo lub, w przypadku podania numeru kontaktowego, telefonicznie.
                    </p>
                </div>
            </div>
        </div>
        <div class="lg:m-24 p-6">
            <div class="lg:w-1/2 w-[90vw] absolute right-48 flex-col items-center">
                <div data-aos="fade-left">
                    <h2>Skontaktuj się bezpośrednio:</h2>
                    <div class="grid lg:grid-cols-2 grid-rows-2 grid-cols-1 my-16 gap-6">
                        <div class="bg-white/60 flex items-center rounded-lg lg:text-2xl text-xl">
                            <a href="tel:508241320" class="w-full flex justify-between items-center lg:p-8 p-3 px-6">
                                <i class="fas fa-phone"></i>
                                <p>+48 508 241 320</p>
                            </a>
                        </div>
                        <div class="bg-white/60 flex items-center rounded-lg lg:text-2xl text-xl">
                            <a href="mailto:violetta.lis@ska.pl"
                                class="w-full flex justify-between items-center lg:p-8 p-3 px-6">
                                <i class="fas fa-envelope"></i>
                                <p>violetta.lis@ska.pl</p>
                            </a>
                        </div>
                        <div class="lg:col-span-2 bg-white/60 flex items-center rounded-lg lg:text-2xl text-xl">
                            <a href="https://maps.app.goo.gl/PpV9SPBXeQWNd9t49" target="_blank"
                                class="w-full flex justify-between items-center lg:p-8 p-3 px-6">
                                <i class="fas fa-location-dot"></i>
                                <div class="flex flex-wrap text-right justify-end">
                                    <p>ul. Sądowa 4,</p>
                                    <p class="ml-2">50-046 Wrocław</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>


                <div data-aos="fade-left">
                    <h2>Lub wypełnij formularz:</h2>
                    <div id="contact-form"
                        class="drop-shadow-sm bg-white/50 rounded-xl h-full lg:p-12 p-6 transition-all my-16 flex-col w-full">
                        <form action="#" method="post">
                            <div class="grid md:grid-cols-2 md:grid-rows-4 grid-cols-1 grid-rows-6 gap-6">
                                <div>
                                    <input type="text" id="fname" placeholder="Imię" required
                                        class="w-full p-3 rounded-lg"><br>
                                </div>
                                <div>
                                    <input type="text" id="lname" placeholder="Nazwisko" required
                                        class="w-full p-3 rounded-lg"><br>
                                </div>
                                <div>
                                    <input type="email" id="email" placeholder="Email" required
                                        class="w-full p-3 rounded-lg"><br>
                                </div>
                                <div>
                                    <input type="tel" id="phone" placeholder="Telefon (opcjonalnie)"
                                        class="w-full p-3 rounded-lg"><br>
                                </div>
                                <div class="md:col-span-2 row-span-2">
                                    <textarea id="message" placeholder="W czym możemy pomóc..." style="resize: none;"
                                        required class="w-full p-3 rounded-lg min-h-full"></textarea><br>
                                </div>
                            </div>
                            <div class="flex flex-wrap min-h-12 w-full justify-between">
                                <div class="md:w-[calc(50%-0.75rem)] w-full mt-6">
                                    <div class="g-recaptcha" data-sitekey="6LerZ_gpAAAAAE5QdXEOHCR0EPyw8LTDc9ifg7qn">
                                    </div>
                                </div>
                                <div class="md:w-[calc(50%-0.75rem)] w-full mt-6">
                                    <input type="submit" id="submit" value="Wyślij"
                                        class="w-full bg-white hover:drop-shadow-lg cursor-pointer rounded-lg min-h-12 h-full">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>