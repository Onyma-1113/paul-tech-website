<template>
    <!-- <TransitionComponent /> -->
    <div class="">

        <div class="h-fifty-vh   w-full flex mx-auto px-site max-2xl:px-16 max-md:px-5">
            <HeroPage title="Prophet unleashes the power of people, businesses and brands to move society forward."
                description="Our interdisciplinary experts across consulting, experience and creative capabilities enable us to quickly implement and accelerate our clients’ growth goals." />
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