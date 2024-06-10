<template>
    <!-- <TransitionComponent /> -->
    <div class="">

        <div class=" max-lg:flex-col max-lg:pt-28 max-lg:h-auto h-screen w-full flex items-center  mx-auto px-site  max-2xl:px-16 max-md:px-5">
            <HeroPage title="Paultech harnesses the potential of individuals, enterprises, and brands to propel progress within society."
                description="Leveraging our cross-disciplinary expertise in consulting and experience fields, we facilitate the rapid realization and amplification of our clients growth aspirations." />
            <AbstractAnimation2 />
        </div>
        <!-- preview testomonial -->
        <div class="h-96 max-lg:h-screen w-full flex mx-auto mt-10 px-site max-2xl:px-16 max-md:px-5">
            <CardReason />
        </div>

        <div class=" max-2xl:h-auto mb-56 w-full flex mx-auto px-site max-2xl:px-16 max-md:px-5 mt-52">
            <PreviewServices />
        </div>

        <!-- redirection team -->
        <div class="w-full h-eighy-vh  max-2xl:h-auto max-2xl:mb-20 bg-sky-400 flex flex-col px-site justify-center items-center">

            <CardTestomonial3 title="“PaulTech is a perceptive consulting agency. Their dedicated team is a pleasure to collaborate with and delivers practical advice. They offer a distinctive blend of both strategic analysis and innovative ideas.”"/>
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

    // aboutAnimation()
})
</script>