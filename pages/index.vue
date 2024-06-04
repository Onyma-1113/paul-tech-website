<script setup>
definePageMeta({

  layout: 'mainlayout'
})
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';


import { ref, onMounted } from 'vue';
import { gsap } from 'gsap'
import Typed from "typed.js";
const typedRef = ref(null);


const clickToUseTyped = () => {
  if (typedRef.value) {
    new Typed(typedRef.value, {
      strings: ["Cloud", "Observability", "Process digitalization", "Cybersecurity", "Artificial Intelligence"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });
  }
};

// animation 


const reasonAnimation = () => {
  let tl = gsap.timeline()

  tl.to('.reason-img',
    {
      opacity: 1,
      duration: 1,
      // stagger: 0.5

    })
  tl.to('.reason-text',
    {
      opacity: 1,
      y: -100,
      duration: 1,
      // stagger: 0.5

    })
}
//transition

const homeTransitionAnimation = () => {
  let tl = gsap.timeline()
  setTimeout(() => {
    tl.to('.transition-wait', {
      duration: 0.5,
      opacity: 1
    })

  }, 4000);


}

onMounted(() => {
  clickToUseTyped()
  typedRef.value = ref.typedRef;

  cardShowAnimation({ element: '.card-container' })


});





</script>

<template>
  <div>

    <!-- <ThePrealoder/> -->

    <div class="h-screen w-full flex items-center  mx-auto px-site max-2xl:px-16 max-md:px-5">

      <Hero title="We are a growth and transformation consulting firm."
        description="Prophet is dedicated to helping you unlock uncommon growth—growth that is anchored in purpose, is transformative and sustainable over time. We partner with you to manage disruption, bringing the rigor and expertise required to uncover and realize transformative opportunities."
        showarrow='true' 
        redirectiontitle="ABOUT"
        redirection="/about"
        redirectiontitle2="SERVICES"
        redirection2="/services"/>

      <AbstractAnimation1 />

    </div>

    <!-- compagny that trust us -->
    <div class="w-full h-three-quart-vh max-2xl:gap-10  bg-white flex flex-col gap-32 justify-center items-center">
      <!-- col compagnie that trust us -->
      <div class="flex justify-center items-center gap-20 max-2xl:gap-0">
        <img src="../assets/img/Website_Relaunch_Logo2_MP-Electrolux-1.png" alt="" srcset="" class="w-96 max-2xl:w-72">
        <img src="../assets/img/Website_Relaunch_Logos2_MP-Chick-Fil-A.png" alt="" srcset="" class="w-96 max-2xl:w-72">

        <img src="../assets/img/Website_Relaunch_Logos2_MP-GE.png" alt="" srcset="" class="w-96 max-2xl:w-72">


      </div>

      <div class="flex justify-center items-center gap-20 max-2xl:gap-0">
        <img src="../assets/img/Website_Relaunch_Logos2_MP-GE.png" alt="" srcset="" class="w-96 max-2xl:w-72">
        <img src="../assets/img/Website_Relaunch_Logo2_MP-Electrolux-1.png" alt="" srcset="" class="w-96 max-2xl:w-72">
        <img src="../assets/img/Website_Relaunch_Logos2_MP-Chick-Fil-A.png" alt="" srcset="" class="w-96 max-2xl:w-72">




      </div>

    </div>
    <!-- case studies -->
    <div class="h-screen max-2xl:my-20 max-2xl:h-auto w-full flex items-center mx-auto px-site max-2xl:px-16 max-md:px-5">
      <PreviewDetail />
    </div>

    <!-- preview testomonial -->
    <div class="h-80 w-full flex mx-auto px-site max-2xl:px-16 max-md:px-5">
      <CardTestimonial2 />
    </div>

    <!-- redirection team -->
    <!-- avant c etait h-fifty-vh -->
    <div class="w-full  h-eighy-vh  bg-sky-400 flex flex-col px-site justify-center items-center">

      
    <CardTestomonial3/>



    </div>

  </div>

  <!-- <TransitionComponent /> -->


  <!-- section 7 contact redirection -->





  <!-- </div> -->



</template>
<style>
.px-site {
  padding-left: 34rem;
  padding-right: 34rem;
}
@media  screen and (max-width: 2200px){
  .px-site {
  padding-left: 20rem;
  padding-right: 20rem;
}
}
@media  screen and (max-width: 1800px){
  .px-site {
  padding-left: 15rem;
  padding-right: 15rem;
}
}
@media  screen and (max-width: 1600px){
  .px-site {
  padding-left: 5rem;
  padding-right: 5rem;
}
}
@font-face {
  font-family: Graphik;
  src: url('../assets/fonts/Graphik-Regular-Trial.otf');
}

body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #000000;
  font-family: Graphik;



}

.section-1 {}

li {
  list-style-type: none;
}

.p-accordion {


  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 70px;

}

.p-accordion-header {
  font-size: 2em;
  border: 3px solid black;
  border-radius: 30px;
  padding: 0.7em
}

.p-accordion-content {
  padding-left: 2vw;
  font-size: 2em;
}

.h-container {
  height: 90vh;
}

.min-h-container {
  min-height: 90vh;
}

.h-eighy-vh {
  height: 80vh;
}

.h-thirdy-vh {
  height: 30vh;
}

.h-fourty-vh {
  height: 45vh;
}

.h-fifty-vh {
  height: 50vh;
}

.h-three-quart-vh {
  height: 75vh;
}

.min-h-three-quart-vh {
  min-height: 75vh;
}

.h-one-quart-vh {
  height: 25vh;
}

.btn-get-in-touch {
  transition: 0.3s
}

.btn-get-in-touch:hover {
  background-color: #37bdf8;
  color: black
}

/* .mission-img {
  height: 70%;
  width: 100%;
  
} */

svg {
  color: rgb(146, 145, 145);
}

.ts {
  transform: scaleY(0);
  transform-origin: bottom center;
}

.transition-text {
  position: absolute;
  top: 50vh;
  left: 5vw;
}

.transition-text-span-div {
  overflow: hidden;
}

.hidden-transition {
  display: none;
}

/* lenis */
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}

/* page transition for the id page */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
