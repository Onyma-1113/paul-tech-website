<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap'

// burger menu
const isActive = ref(true)
const activeClass = ref('contai')
const errorClass = ref('change')
const toggleClass = () => {

    let tl = gsap.timeline()
    let tl2 = gsap.timeline()
    isActive.value = !isActive.value
    if (isActive.value === false) {
        tl.to('.menu-phone', {

            scaleY: 1,
            // transformOrigin:'left center',
            transformOrigin: 'top center',
            duration: 1,
            ease: 'power2.inOut',
        })
        tl.from('.li-phone', 1, {
            y: 250,
            stagger: 0.15,
            ease: 'expo.out',

        })
    }
    if (isActive.value === true) {
        tl2.to('.li-phone-container', 1, {
            opacity: 0,
            ease: 'expo.out',

        })
        tl2.to('.menu-phone', {

            scaleY: 0,
            // transformOrigin:'left center',
            transformOrigin: 'top center',
            duration: 1,
            ease: 'expo.out',
        })
        tl2.to('.li-phone-container', 0.1, {
            opacity: 1,
            ease: 'expo.out',

        })
    }
}

// const { $gsap } = useNuxtApp()

import {useI18n} from "vue-i18n";
        
const i18n = useI18n();

const links = [
    { href: '/about', text: i18n.t('redirection_title_about') },
    { href: '/services', text: i18n.t('redirection_title_services') },
    { href: '/caseStudies', text: i18n.t('redirection_title_case') },
    { href: '/careers', text: i18n.t('redirection_title_careers') },
    // {href:'/client' ,text:'Client'}
]

const toggleLinks = () => {
    general.isTransitionFinish = false
    console.log(general.isTransitionFinish)
}

import Breadcrumb from 'primevue/breadcrumb';

// const home = ref({
//     icon: 'pi pi-home'
// });
// const items = ref([
//     { label: 'Electronics' }, 
//     { label: 'Computer' }, 
//     { label: 'Accessories' }, 
//     { label: 'Keyboard' }, 
//     { label: 'Wireless' }
// ]);
defineProps({
    itemss:Object
})

//translation
const { locale, setLocale } = useI18n()
const isOn = ref(true)
const toggleLanguage = () =>{
isOn.value = !isOn.value
console.log(isOn.value)

}
</script>
<template>
    <div class="">
        <div>

        
        <nav
            class="h-28 w-screen mx-auto bg-[#010923] px-site-nav flex justify-center items-center max-2xl:h-auto max-2xl:px-16  max-md:px-5 fixed z-20 max-lg:hidden ">
            <ul
                class="h-1/2 w-full flex flex-row justify-between items-center text-white rounded-3xl text-lg ul-nav ">
                <div class="flex items-center"> 
                    <li class="pr-16 text-4xl font-bold max-2xl:text-2xl">
                        <!-- <NuxtLink to="/"><img src="../assets/img/dark-version-logo-with-typo.png" alt="" srcset=""></NuxtLink> -->
                        <NuxtLink to="/">
                            <svg id="Layer_1" class="max-2xl:mt-3" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height=80px width="80px" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1009.37 1215.77">
  <defs>
 
    <clipPath id="clippath">
      <circle class="cls-7" cx="508.02" cy="376.72" r="371.22"/>
    </clipPath>
    <clipPath id="clippath-1">
      <circle class="cls-3" cx="507.73" cy="377.75" r="366.89"/>
    </clipPath>
  </defs>
  <text class="cls-6" transform="translate(0 1100.48)"><tspan class="cls-11" x="0" y="0">P</tspan><tspan class="cls-16" x="155.33" y="0">a</tspan><tspan class="cls-5" x="283.37" y="0">u</tspan><tspan class="cls-15" x="419.25" y="0">l</tspan><tspan class="cls-14" x="486.09" y="0">T</tspan><tspan class="cls-17" x="595.36" y="0">e</tspan><tspan class="cls-4" x="735.14" y="0">c</tspan><tspan x="862.95" y="0">h</tspan></text>
  <g>
    <g class="cls-13">
      <circle class="cls-1" cx="506.57" cy="376.5" r="371.22"/>
      <path class="cls-8" d="m255.67,804.96s230.84-144.99,537.02,0"/>
      <polyline class="cls-9" points="173.53 592.59 391.34 592.59 391.34 405.23 629.37 405.23 629.37 306.08 779.34 150.97"/>
    </g>
    <circle class="cls-7" cx="508.02" cy="376.72" r="371.22"/>
  </g>
  <path class="cls-2" d="m240.02,822.52c58.92-38.38,128.39-58.76,197.77-67.53,3.08-.37,10.2-1.15,13.13-1.48,7.3-.54,14.69-1.13,21.97-1.62,3.52-.12,18.86-.67,22.02-.72,2.73.01,10.38.04,13.22.05,0,0,8.81.07,8.81.07l8.8.42c5.18.33,12.5.45,17.6.96,6.01.6,20.5,1.73,26.3,2.62,6.3.92,15.54,2,21.8,3.07,64.79,10.71,128.26,32.63,185.6,64.16-45.97-18.28-92.81-33.11-140.77-43.28-45-9.22-90.94-14.25-136.89-14.1-87.83.42-180.14,18.74-259.36,57.39h0Z"/>
  <path class="cls-1" d="m870.78,374.76c0-89.35-31.96-171.61-85.12-235.19l-160,165.7v97.83h-234.87v184.87h-182.87c56.09,78.34,142.29,133.64,241.69,148.98,17.9,2.69,36.23,4.09,54.88,4.09,202.29,0,366.28-163.99,366.28-366.28Z"/>
  <polyline class="cls-9" points="675.57 166.51 776.58 146.85 753.81 244.74"/>
  <polyline class="cls-10" points="203.84 585.7 388.79 585.7 388.79 398.33 626.82 398.33 626.82 299.18 769.91 152.07"/>
  <g class="cls-12">
    <rect class="cls-2" x="190.08" y="629.62" width="205.75" height="148.6"/>
    <rect class="cls-2" x="438.98" y="447.44" width="194.32" height="335.78"/>
    <rect class="cls-2" x="674.74" y="329.27" width="222.9" height="408.65"/>
  </g>
</svg>
                        </NuxtLink>
  
                    </li>
                    <div class="flex  gap-10 text-center items-center">
                        <!-- <li v-for="link in links" class="hover:text-[#0067f4] hover:duration-200  duration-200  max-2xl:text-base">
                        <NuxtLink :to="link.href" @click.native="toggleLinks()">{{ link.text }}</NuxtLink></li> -->
                      
                        <li class="hover:text-[#0067f4] hover:duration-200  duration-200  max-2xl:text-base">
                            <NuxtLink to="/about">{{ $t('redirection_title_about') }}</NuxtLink>
                        </li>
                        <li class="hover:text-[#0067f4] hover:duration-200  duration-200  max-2xl:text-base">
                            <NuxtLink to="/services">{{ $t('redirection_title_services') }}</NuxtLink>
                        </li>
                        <li class="hover:text-[#0067f4] hover:duration-200  duration-200  max-2xl:text-base">
                            <NuxtLink to="/caseStudies">{{ $t('redirection_title_case') }}</NuxtLink>
                        </li>
                        <li class="hover:text-[#0067f4] hover:duration-200  duration-200  max-2xl:text-base">
                            <NuxtLink to="/careers">{{ $t('redirection_title_careers') }}</NuxtLink>
                        </li>

                 
                    </div>
                  <!-- redirection_title_home: 'Accueil',
            redirection_title_about: 'À propos',
            redirection_title_services: 'Services',
            redirection_title_case: `Cas D'études`,
            redirection_title_careers: 'Carrières',
            redirection_title_contact: 'Prenez contact',
            redirection_title_learn_more: 'EN SAVOIR PLUS', -->
                </div>


                <div class="flex w-1/4 justify-between max-2xl:w-1/3">

                    <!-- <NuxtLink 
                v-for="link in links"
                :to="link.href"
                @click.native="toggleLinks()">
                {{ link.text }}
            </NuxtLink> -->

                   
                </div>


                <li class="flex items-center gap-5">
                    <p class="cursor-pointer" :class="{'underline': isOn, 'hidden': !isOn}"  @click="setLocale('fr'), toggleLanguage()">FR</p>
                    <p class="cursor-pointer" :class="{'underline': !isOn, 'hidden': isOn}"  @click="setLocale('en'), toggleLanguage()">EN</p>
                    <NuxtLink to="/contact">
                        <div class="bg-[#0067f4] hover:bg-white  hover:text-black  hover:duration-300 duration-300  text-white h-11 w-36 flex justify-center items-center rounded-3xl">
                            {{$t('redirection_title_contact')}}
                        </div>
                    </NuxtLink>
                   <!-- <div class="h-32">
                    hah
                   </div> -->
                </li>
                



            </ul>
        </nav>
        <!-- <div class="card flex flex-row justify-start px-site fixed  z-10 pb-2 w-full">
            <Breadcrumb :home="home" :model="itemss">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a :href="href" v-bind="props.action" @click="navigate">
                        <span :class="[item.icon, 'text-color']" />
                        <span class="text-primary font-semibold">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span class="text-color">{{ item.label }}</span>
                </a>
            </template>
        </Breadcrumb>
    </div> -->
        </div>
        <nav
            class="h-32 max-md:h-28 w-screen  bg-[#010923] mx-auto px-32 flex justify-center items-center max-2xl:h-26 max-2xl:px-5  max-md:px-5 fixed z-10 lg:hidden">
            <ul
                class="h-1/2 w-full flex flex-row justify-between px-2 items-center text-red-400 bg-gray-700 rounded-3xl text-lg max-lg:bg-transparent">
                <li class="w-36 flex items-center justify-between">
                    <div :class="[!isActive ? errorClass : '', activeClass]" @click="toggleClass">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                    <div class="text-white text-4xl pl-10 max-md:text-2xl max-md:pl-5 ">
                        <NuxtLink to="/">PaulTech</NuxtLink>
                    </div>
                    
                </li>




                <li>
                    <NuxtLink to="/contact">
                        <!-- <div class="contact-btn-2  h-11 w-36 flex justify-center items-center rounded-3xl bg-black">
                            Get in touch
                        </div> -->
                        <div class="bg-[#0067f4] hover:bg-white  hover:text-black hover:text-black  hover:duration-300 duration-300  text-white h-11 w-36 flex justify-center items-center rounded-3xl">
                            {{$t('redirection_title_contact')}}
                        </div>
                    </NuxtLink>
                </li>



            </ul>

            <div
                class="menu-phone h-screen w-screen bg-white absolute top-0 left-0  text-black text-5xl flex justify-center items-center">
                <div class=" h-3/4   flex gap-5 w-1/4 justify-around items-center flex-col max-2xl:w-full text-center">
                    <div class="li-phone-container">
                        <li class="li-phone " @click="toggleClass">
                            <NuxtLink to="/">{{ $t('redirection_title_home') }}</NuxtLink>
                        </li>
                    </div>
                    <div class="li-phone-container" @click="toggleClass">
                        <li class="li-phone">
                            <NuxtLink to="/about">{{ $t('redirection_title_about') }}</NuxtLink>
                        </li>
                    </div>
                    <div class="li-phone-container" @click="toggleClass">
                        <li class="li-phone">
                            <NuxtLink to="/services">{{ $t('redirection_title_services') }}</NuxtLink>
                        </li>
                    </div>
                    
                    <div class="li-phone-container" @click="toggleClass">
                        <li class="li-phone">
                            <NuxtLink to="/caseStudies">{{ $t('redirection_title_case') }}</NuxtLink>
                        </li>
                    </div>
                    <div class="li-phone-container" @click="toggleClass">
                        <li class="li-phone">
                            <NuxtLink to="/careers">{{ $t('redirection_title_careers') }}</NuxtLink>
                        </li>
                    </div>
                    <div class="li-phone-container" @click="toggleClass">
                        <li class="li-phone">
                            <NuxtLink to="/contact">Contact</NuxtLink>
                        </li>
                    </div>
                    <div class="li-phone-container" @click="toggleClass">
                        <li class="li-phone flex gap-10">
                            <p class="underline cursor-pointer" :class="{'text-sky-400': !isOn, 'text-black': isOn}"  @click="setLocale('fr'), toggleLanguage()">FR</p>
                            <p class="underline cursor-pointer" :class="{'text-sky-400': isOn, 'text-black': !isOn}"  @click="setLocale('en'), toggleLanguage()">EN</p>
                        </li>
                    </div>

                </div>

            </div>
        </nav>

        
    </div>
    
</template>

<style scoped>
  .cls-1 {
        fill: #1c1d3b;
      }

      .cls-1, .cls-2, .cls-3 {
        stroke-width: 0px;
      }

      .cls-4 {
        letter-spacing: -.02em;
      }

      .cls-5 {
        letter-spacing: -.04em;
      }

      .cls-2, .cls-6 {
        fill: #dfe5f5;
      }

      .cls-3, .cls-7, .cls-8, .cls-9, .cls-10 {
        fill: none;
      }

      .cls-11 {
        letter-spacing: -.02em;
      }

      .cls-12 {
        clip-path: url(#clippath-1);
      }

      .cls-7, .cls-8 {
        stroke-width: 11px;
      }

      .cls-7, .cls-8, .cls-9, .cls-10 {
        stroke-miterlimit: 10;
      }

      .cls-7, .cls-9 {
        stroke: #dfe5f5;
      }

      .cls-13 {
        clip-path: url(#clippath);
      }

      .cls-14 {
        letter-spacing: -.16em;
      }

      .cls-8 {
        stroke: #171717;
      }

      .cls-6 {
        font-family: Helvetica-Bold, Helvetica;
        font-size: 239.71px;
        font-weight: 700;
      }

      .cls-15 {
        letter-spacing: 0em;
      }

      .cls-9, .cls-10 {
        stroke-width: 14px;
      }

      .cls-10 {
        stroke: #f2f0f0;
      }

      .cls-16 {
        letter-spacing: -.02em;
      }

      .cls-17 {
        letter-spacing: .03em;
      }

img{
    height: 100px;
    width: 100px;
}

.li-phone-container {
    overflow: hidden;
}




.w-ninty-vw {
    width: 90vw;
}

.contai {
    display: inline-block;
    cursor: pointer;
    position: relative;
    z-index: 100;
}

.bar1,
.bar2,
.bar3 {
    width: 35px;
    height: 5px;
    background-color: white;
    margin: 6px 0;
    transition: 0.4s;
    position: relative;
    z-index: 100;
}

.change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
    background-color: black;
}

.change .bar2 {
    opacity: 0;
    background-color: black
}

.change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
    background-color: black
}

.menu-phone {
    transform: scaleY(0);
}
</style>