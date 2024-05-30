<script setup>
defineProps({
  title: String,


})
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap'
const isPlay = ref(true)
const hiddenTransition = ref('hidden-transition')
const transitionAnimation = () => {
  let tl = gsap.timeline()

  tl.to('.ts',
    {
      scaleY: 1,
      duration: 0.5,
      stagger: 0.1

    })
  tl.from(".transition-text-span", {
    duration: 1,
    opacity: 1,
    y: 250,
    stagger: 0.15,
    ease: 'expo.out',

  })
  tl.to(".transition-text-span", {
    duration: 0.5,
    opacity: 0,

    // stagger: 0.15,
    ease: 'expo.out',

  })
  tl.to('.ts',
    {
      scaleY: 0,
      transformOrigin: 'top center',
      duration: 0.5,
      stagger: 0.1,


    })
  tl.to('.ts',
    {
      func: () => {
        isPlay.value = false
        console.log(isPlay.value)
      }

    })
    tl.to(".transition-text-span", {
    duration: 0.1,
    opacity: 1,

    // stagger: 0.15,
    ease: 'expo.out',

  })

}

onMounted(() => {

  transitionAnimation()
});

</script>

<template>

  <div class="h-screen w-screen fixed top-0 left-0 transition z-50 flex"
    :class="[!isPlay ? hiddenTransition : '', 'flex']">
    <div class="h-screen w-1/5 bg-red-400 ts">

    </div>
    <div class="h-screen w-1/5 bg-red-400 ts">

    </div>
    <div class="h-screen w-1/5 bg-red-400 ts">

    </div>
    <div class="h-screen w-1/5 bg-red-400 ts">

    </div>
    <div class="h-screen w-1/5 bg-red-400 ts">

    </div>
    <div v-if="title == 'Home' && general.isPreloaderVisible == true" >
      <div class="transition-text ">
        <div class="text-8xl flex">
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">H</h1>
          </div>

          <div class="transition-text-span-div">
            <h1 class="transition-text-span ">O</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span ">M</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">E</h1>
          </div>

        </div>
      </div>
    </div>
    <div v-if="title == 'About'">
      <div class="transition-text ">
        <div class="text-8xl flex">
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">A</h1>
          </div>

          <div class="transition-text-span-div">
            <h1 class="transition-text-span ">B</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span ">O</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">U</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">T</h1>
          </div>

        </div>
      </div>
    </div>
    <div v-if="title == 'Services'">
      <div class="transition-text ">
        <div class="text-8xl flex">
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">S</h1>
          </div>

          <div class="transition-text-span-div">
            <h1 class="transition-text-span ">E</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span ">R</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">V</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">I</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">C</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">E</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">S</h1>
          </div>

        </div>
      </div>
    </div>
    <div v-if="title == 'Case'">
      <div class="transition-text ">
        <div class="text-8xl flex">
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">C</h1>
          </div>

          <div class="transition-text-span-div">
            <h1 class="transition-text-span ">A</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span ">S</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">E</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span"> </h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">S</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">T</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">U</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">D</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">I</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">E</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">S</h1>
          </div>

        </div>
      </div>
    </div>
    <div v-if="title == 'Contact'">
      <div class="transition-text ">
        <div class="text-8xl flex">
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">C</h1>
          </div>

          <div class="transition-text-span-div">
            <h1 class="transition-text-span ">O</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span ">N</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">T</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">A</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">C</h1>
          </div>
          <div class="transition-text-span-div">
            <h1 class="transition-text-span">T</h1>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>