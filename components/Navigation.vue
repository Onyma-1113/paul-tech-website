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

onMounted(() => {

})

const links = [
    { href: '/about', text: 'About' },
    { href: '/services', text: 'Services' },
    { href: '/caseStudies', text: 'Case Studies' },
    { href: '/careers', text: 'Careers' },
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

</script>
<template>
    <div class="">
        <div>

        
        <nav
            class="h-32 w-screen mx-auto bg-black px-site flex justify-center items-center max-2xl:h-16 max-2xl:px-16  max-md:px-5 fixed z-20 max-lg:hidden">
            <ul
                class="h-1/2 w-full flex flex-row justify-between items-center text-white rounded-3xl text-lg ul-nav ">
                <div class="flex items-center"> 
                    <li class="pr-16 text-4xl font-bold max-2xl:text-2xl">
                        <NuxtLink to="/"><img src="../assets/img/dark-version-logo-with-typo.png" alt="" srcset="" ></NuxtLink>
                    </li>
                    <div class="flex  gap-10 text-center items-center">
                        <li v-for="link in links" class="hover:text-sky-600 hover:duration-200  duration-200  max-2xl:text-base">
                        <NuxtLink :to="link.href" @click.native="toggleLinks()">{{ link.text }}</NuxtLink>

                    </li>
                    </div>
                  
                </div>


                <div class="flex w-1/4 justify-between max-2xl:w-1/3">

                    <!-- <NuxtLink 
                v-for="link in links"
                :to="link.href"
                @click.native="toggleLinks()">
                {{ link.text }}
            </NuxtLink> -->

                   
                </div>


                <li class="">
                    <NuxtLink to="/contact">
                        <div class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-black hover:from-white hover:to-white hover:text-black  hover:duration-300 duration-300  text-white h-11 w-36 flex justify-center items-center rounded-3xl">
                            Get in touch
                        </div>
                    </NuxtLink>
                   <!-- <div class="h-32">
                    hah
                   </div> -->
                </li>
                



            </ul>
        </nav>
        <div class="card flex flex-row justify-start px-site fixed bg-black z-10 pb-2 w-full">
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
    </div>
        </div>
        <nav
            class="h-32 max-md:h-28 w-screen mx-auto px-32 flex justify-center items-center max-2xl:h-26 max-2xl:px-5  max-md:px-5 fixed z-10 lg:hidden">
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
                        <div class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-black hover:from-white hover:to-white hover:text-black  hover:duration-300 duration-300  text-white h-11 w-36 flex justify-center items-center rounded-3xl">
                            Get in touch
                        </div>
                    </NuxtLink>
                </li>



            </ul>

            <div
                class="menu-phone h-screen w-screen bg-white absolute top-0 left-0  text-black text-5xl flex justify-center items-center">
                <div class="flex gap-24 w-1/4 justify-between items-center flex-col max-2xl:w-1/3 text-center">
                    <div class="li-phone-container">
                        <li class="li-phone " @click="toggleClass">
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                    </div>
                    <div class="li-phone-container" @click="toggleClass">
                        <li class="li-phone">
                            <NuxtLink to="/about">About</NuxtLink>
                        </li>
                    </div>
                    <div class="li-phone-container" @click="toggleClass">
                        <li class="li-phone">
                            <NuxtLink to="/services">Services</NuxtLink>
                        </li>
                    </div>
                    
                    <div class="li-phone-container" @click="toggleClass">
                        <li class="li-phone">
                            <NuxtLink to="/caseStudies">Case Studies</NuxtLink>
                        </li>
                    </div>
                    <div class="li-phone-container" @click="toggleClass">
                        <li class="li-phone">
                            <NuxtLink to="/careers">Careers</NuxtLink>
                        </li>
                    </div>

                </div>

            </div>
        </nav>

        
    </div>
    
</template>

<style scoped>

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