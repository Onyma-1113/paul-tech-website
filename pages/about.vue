<template>
    <TransitionComponent />
    <div class="transition-wait opacity-0">

        <Hero title="About"
            description="Our business expertise, marketing prowess, and technological foundation empower us to address your digital modernization needs. By prioritizing customer experience, we create impactful digital solutions that drive profitability." />
        <div class="gap-20 flex flex-col">
            <ShowDetail title="Our Values" title1="Human" title2="Responsible" title3="Performance-Driven"
                description1="We prioritize the human aspect in all we do, fostering relationships built on trust, transparency, and respect. Whether it's our customers, employees, or communities, our commitment to being human-centric ensures everyone feels heard, valued, and supported."
                description2=""
            </ShowDetail>
            <ShowDetail title="Our Values"></ShowDetail>


            <!-- <p class="text-4xl mb-0 text-sky-400"> Human</p>
        <p>

          We prioritize the human aspect in all we do, fostering relationships built on trust, transparency, and respect. Whether it's our customers, employees, or communities, our commitment to being human-centric ensures everyone feels heard, valued, and supported..</p>
        <p class="text-4xl mb-0 text-sky-400" > Responsible </p>
        <p>

          Our commitment to responsibility encompasses accountability, integrity, and sustainability. Guided by ethical choices and transparent communication, we strive to inspire positive change and contribute to a better world
          experiences for everyone involved.</p>
        <p class="text-4xl mb-0 text-sky-400"> Performance-Driven </p>
        <p>

          We are driven by performance. Committed to excellence, we push boundaries to achieve optimal outcomes for our
          clients. Our relentless pursuit of success ensures every action contributes to our objectives, enhancing the
          value we provide.</p> -->
        </div>
        <div class="w-full min-h-screen">
            <!-- <CardTitle justify="justify-center" align="text-center" title="Our Team"/> -->
            <SubTitle title="Our Team" justify="justify-center" align="text-center" />
            <div class="w-full  mx-auto mb-64">

                <div class="-mx-3 lg:flex items-center justify-center ">
                    <div class="px-3 lg:w-1/3 mb-64">
                        <div class="look opacity-100">
                            <CardTeam title="Chef executif - john doe"
                                description="Il s'occupe de la qualité client et le bon fonctionnement du déroulement " />
                        </div>

                    </div>


                </div>

                <div class="-mx-3 lg:flex items-center card-container">
                    <div class="px-3 lg:w-1/3">
                        <div class="look opacity-0">
                            <CardTeam title="Chef executif - john doe"
                                description="Il s'occupe de la qualité client et le bon fonctionnement du déroulement " />
                        </div>
                        <div class="look-2 opacity-0">
                            <CardTeam title="Chef executif - john doe"
                                description="Il s'occupe de la qualité client et le bon fonctionnement du déroulement " />
                        </div>
                    </div>
                    <div class="px-3 lg:w-1/3">
                        <div class="look opacity-0">
                            <CardTeam title="Chef executif - john doe"
                                description="Il s'occupe de la qualité client et le bon fonctionnement du déroulement " />
                        </div>
                        <div class="look-2 opacity-0">
                            <CardTeam title="Chef executif - john doe"
                                description="Il s'occupe de la qualité client et le bon fonctionnement du déroulement " />
                        </div>
                    </div>
                    <div class="px-3 lg:w-1/3">
                        <div class="look opacity-0">
                            <CardTeam title="Chef executif - john doe"
                                description="Il s'occupe de la qualité client et le bon fonctionnement du déroulement " />
                        </div>
                        <div class="look-2 opacity-0">
                            <CardTeam title="Chef executif - john doe"
                                description="Il s'occupe de la qualité client et le bon fonctionnement du déroulement " />
                        </div>
                    </div>
                </div>
            </div>


        </div>


    </div>


</template>
<script setup>
definePageMeta({
    layout: 'mainlayout'
})

import { gsap } from 'gsap'
import { ref, onMounted } from 'vue';


// burger menu


let tl = gsap.timeline()
const aboutAnimation = () => {
    setTimeout(() => {
        tl.to('.transition-wait', {
            duration: 0.5,
            opacity: 1
        })

    }, 4000);

    cardServiceAnimation({ element: '.card-container', element2: ".look", element3: ".look-2" })
}



onMounted(() => {

    aboutAnimation()
})
</script>