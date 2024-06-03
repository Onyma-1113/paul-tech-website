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

</script>
<template>
    <div class="">
        <nav
            class="h-32 w-screen mx-auto bg-black px-site flex justify-center items-center max-2xl:h-26 max-2xl:px-16  max-md:px-5 fixed z-10 max-lg:hidden">
            <ul
                class="h-1/2 w-full flex flex-row justify-between items-center text-white rounded-3xl text-lg ul-nav ">
                <div class="flex  items-center"> 
                    <li class="pr-32 text-4xl font-bold">
                        <NuxtLink to="/">Paultech</NuxtLink>
                    </li>
                    <div class="flex gap-10">
                        <li v-for="link in links" class="hover:text-sky-600 hover:duration-200  duration-200">
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


                <li class="pt-9">
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
        <nav
            class="h-32 w-screen mx-auto px-32 flex justify-center items-center max-2xl:h-26 max-2xl:px-5  max-md:px-5 fixed z-10 lg:hidden">
            <ul
                class="h-1/2 w-full flex flex-row justify-between px-2 items-center text-red-400 bg-gray-700 rounded-3xl text-lg max-lg:bg-transparent">
                <li class="w-36 flex items-center justify-between">
                    <div :class="[!isActive ? errorClass : '', activeClass]" @click="toggleClass">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                    <NuxtLink to="/">Pausltech</NuxtLink>
                </li>




                <li>
                    <NuxtLink to="/contact">
                        <div class="contact-btn-2  h-11 w-36 flex justify-center items-center rounded-3xl bg-black">
                            Get in touch
                        </div>
                    </NuxtLink>
                </li>



            </ul>

            <div
                class="menu-phone h-screen w-screen bg-white absolute top-0 left-0  text-black text-5xl flex justify-center items-center">
                <div class="flex gap-52 w-1/4 justify-between items-center flex-col max-2xl:w-1/3 ">
                    <div class="li-phone-container">
                        <li class="li-phone">
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                    </div>
                    <div class="li-phone-container">
                        <li class="li-phone">
                            <NuxtLink to="/about">About</NuxtLink>
                        </li>
                    </div>
                    <div class="li-phone-container">
                        <li class="li-phone">
                            <NuxtLink to="/services">Services</NuxtLink>
                        </li>
                    </div>
                    <div class="li-phone-container">
                        <li class="li-phone">
                            <NuxtLink to="/caseStudies">Case Studies</NuxtLink>
                        </li>
                    </div>

                </div>

            </div>
        </nav>


    </div>

</template>

<style scoped>
.ul-nav {
    /* background-color: #fefffe */
}

.li-phone-container {
    overflow: hidden;
}

.contact-btn {
    transition: 0.3s;
    background-color: #0d0f14
}

.contact-btn:hover {

    background-color: rgb(0, 132, 199);
}

.contact-btn-2 {
    transition: 0.3s;
}

.contact-btn-2:hover {

    background-color: aqua
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
    background-color: #333;
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