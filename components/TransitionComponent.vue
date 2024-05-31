<script setup>
defineProps({
  


})
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap'
const isPlay = ref(true)
const hiddenTransition = ref('hidden-transition')
const transitionAnimation = () => {
  let tl = gsap.timeline()
  console.log(general.isTransitionFinish)
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
        // console.log(isPlay.value)
      }

    })
    tl.to(".transition-text-span", {
    duration: 0.1,
    opacity: 1,

    // stagger: 0.15,
    ease: 'expo.out',
    onComplete() {
				general.isTransitionFinish = true;
        console.log(general.isTransitionFinish)
			}, 
  })
  

}

const route = useRoute()
  const routeName = route.name

  const splitRouterName = routeName.split('')

onMounted(() => {

  transitionAnimation()
});

</script>

<template>

  <div class="h-screen w-screen fixed top-0 left-0 transition z-50 flex"
    :class="[!isPlay ? hiddenTransition : '', 'flex']">
    <div class="h-screen w-1/5 bg-sky-600 ts">

    </div>
    <div class="h-screen w-1/5 bg-sky-600 ts">

    </div>
    <div class="h-screen w-1/5 bg-sky-600 ts">

    </div>
    <div class="h-screen w-1/5 bg-sky-600 ts">

    </div>
    <div class="h-screen w-1/5 bg-sky-600 ts">

    </div>

<div>
  <div class="transition-text ">
        <div class="text-8xl flex">
          <div v-for="character in splitRouterName" class="transition-text-span-div" >
            <h1 class="transition-text-span uppercase">{{ character }}</h1>
          </div>

        </div>
      </div>
</div>


  </div>

</template>