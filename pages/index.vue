<script setup>
definePageMeta({

  layout: 'mainlayout'
})
useHead({
  title: 'PaulTech | Home',
  meta: [
    { name: 'description', property:'og:description',content: "Paultech Inc. is a startup specializing in process digitalization, AI, observability, and cloud adoption. We offer innovative solutions that enable businesses to modernize and optimize their IT environments efficiently and securely. Our services help clients fully leverage the benefits of cloud computing, automate their business processes, and maximize the advantages of AI. With our customer-centric approach and commitment to excellence, we are the ideal partner to support your digital transformation." }
  ]
})



import { ref, onMounted } from 'vue';
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

let images = [
      "https://picsum.photos/id/237/1024/800",
      "https://picsum.photos/id/238/1024/800",
      "https://picsum.photos/id/239/1024/800"
    ]

let active = 0

const carousel = () =>{
  let i = 0;
    setInterval(() => {
      if (i > images.length - 1) {
        i = 0;
      }
      active = i;
      i++;
    }, 2000);
}

onMounted(() => {
  clickToUseTyped()
  typedRef.value = ref.typedRef;
  cardShowAnimation({ element: '.card-container' })


 carousel()
  


});



const { locale, setLocale } = useI18n()

</script>

<template>
  <div>
    
    <!-- <ThePrealoder/> -->

    <div
      class="h-ninety-vh  w-full flex items-end max-lg:flex-col max-lg:pt-28 max-lg:h-auto max-lg:justify-center  mx-auto px-site overflow-hidden max-2xl:px-16 max-md:px-5">

      <!-- <Hero :title="$t('home_title')"
        :description="$t('home_description')"
        showarrow='true' :redirectiontitle="$t('redirection_title_about')" redirection="/about" :redirectiontitle2="$t('redirection_title_services')"
        redirection2="/services" />

      <AbstractAnimation1 /> -->
      <img src="../assets/img/page1 img1.png" class="h-screen w-full relative top-52" alt="">
      <div class="absolute ml-2 mb-5 backdrop-blur-sm bg-black/50 flex items-center justify-center p-20  w-3/6 text-5xl">
        <h1>{{ $t('about_description') }}</h1>
      </div>
      <div class="absolute h-full w-full flex items-end justify-end pr-10 mb-10 gap-5">
        <NuxtLink to="https://www.instagram.com/"> <img src="../assets/img/pngwing.com (1).png" alt="" srcset="" class="h-10"></NuxtLink>
        <NuxtLink to="https://www.instagram.com/"> <img src="../assets/img/pngwing.com (1).png" alt="" srcset="" class="h-10"></NuxtLink>

        <NuxtLink to="https://www.instagram.com/"> <img src="../assets/img/pngwing.com (1).png" alt="" srcset="" class="h-10"></NuxtLink>


      </div>
      <!-- <div class="relative slide">
    <div class="carousel-indicators absolute bottom-0 flex bg-yellow-100 h-24 w-full justify-center items-center">
      <ol class="z-50 flex w-4/12 justify-center">
        <li v-for="(img, i) in images" :key="i" class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer mx-2"></li>
      </ol>
    </div>
    <div class="carousel-inner relative overflow-hidden w-full">
      <div v-for="(img, i) in images" :id="`slide-${i}`" :key="i" :class="`${active === i ? 'active' : 'left-full'}`" class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out">
        <img class="block w-full" :src="img" alt="First slide" />
      </div>
    </div>
  </div> -->

    </div>

    <!-- compagny that trust us -->
    <div
      class="w-full h-fifty-vh max-2xl:gap-10  flex-col  flex max-lg:flex-row gap-32 justify-center items-center">
      <!-- col compagnie that trust us -->
      <div class="flex max-lg:flex-col justify-center items-center  w-1/2 gap-20 max-2xl:gap-0">
      <h2 class="text-6xl">
        {{ $t('about_title') }}
      </h2>


      </div>

     

    </div>
    <!-- case studies -->
    <div
      class="h-screen  bg-[#DFE5F5] max-2xl:my-20 max-2xl:h-auto w-full flex  mx-auto  max-2xl:px-16 max-md:px-5 text-black overflow-hidden">
      <!-- <PreviewDetail :firstText="$t('home_title_case')"/> -->
      <div class=" h-full w-full flex   ">
        <div class="w-1/2 h-full flex flex-col justify-center gap-20 px-site-nav">
          <h2 class="text-6xl">{{ $t('about_title_who_are_we') }}</h2>
          <p class="text-4xl">{{ $t('about_title_who_are_we_description') }}</p>
          <p class="text-4xl">{{ $t('about_title_who_are_we_description_2') }}</p>
          <div class="flex w-full justify-end text-[#0067f4] underline text-2xl">
            <NuxtLink to="/about"> more</NuxtLink>

          </div>
        </div>
        <div class="w-1/2 h-full">
          <img src="../assets/img/page1 img2.jpg" alt="" srcset="" class="h-full w-full">
        </div>
      </div>
       
    </div>

    <!-- preview testomonial -->
    <div class="h-fifty-vh max-2xl:h-auto max-2xl:mb-20 w-full flex flex-col mx-auto px-site max-2xl:px-16 max-md:px-5">
      <!-- <CardTestimonial2 image="/_nuxt/assets/img/Prophet_Website22_Logos_MeUndies-white-2-600x121.webp" name="Andres Engel " :position="$t('testomonial_1_post')"
        :title="$t('testomonial_1_title')" /> -->
        <div>
          <h2 class="text-6xl">{{ $t('about_title_who_are_we') }}</h2>
        </div>
        <div class="flex items-center justify-center gap-10">
          <div>
            <img src="../assets/img/Consumer-Demand.png" alt="" srcset="" class="h-32 w-32 ">
          </div>
        </div>
       

    </div>

    <!-- redirection team -->
    <!-- avant c etait h-fifty-vh -->
    <div
      class="w-full  h-eighy-vh  max-2xl:h-auto  max-2xl:mb-20 bg-[#0067f4]  flex flex-col px-site justify-center items-center">


      <CardTestomonial3
        :title="$t('testomonial_2_title')" />



    </div>

  </div>

  <!-- <TransitionComponent /> -->


  <!-- section 7 contact redirection -->





  <!-- </div> -->



</template>
<style>
/* nav */

@media screen and (max-width: 1800px) {
  /* .p-breadcrumb-list{
  padding-top: 5vh;
    display: flex;
    
    flex-direction: row;
    gap:2px; width:100px;
    
} */
}

/* .p-breadcrumb-list{
  padding-top: 10vh;
    display: flex;
    
    flex-direction: row;
    gap:2px; width:100px;
} */
.px-site-nav {
  padding-left: 2rem;
  padding-right: 2rem;
}
.px-site {
  padding-left: 0rem;
  padding-right: 0rem;
}

@media screen and (max-width: 2200px) {
  .px-site {
    padding-left: 20rem;
    padding-right: 20rem;
  }
}

@media screen and (max-width: 1800px) {
  .px-site {
    padding-left: 15rem;
    padding-right: 15rem;
  }
}

@media screen and (max-width: 1600px) {
  .px-site {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

@media screen and (max-width: 1000px) {
  .px-site {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* @font-face {
  font-family: Graphik;
  src: url('../assets/fonts/Graphik-Regular-Trial.otf');
} */
@font-face {
  font-family: Roboto;
  src: url('../assets/fonts/Roboto-Regular.ttf');
}

body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;

  background-color: #010923;

  font-family: Arial, Helvetica, sans-serif;



}



li {
  list-style-type: none;
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
.h-ninety-vh {
  height: 90vh;
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



/**
 * nav
 */

.router-link-active {
  color: #0067f4;
  /* background: -webkit-linear-gradient(#0067f4, #DFE5F5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}



.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
</style>
