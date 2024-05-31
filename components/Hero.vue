<template>
  <div class="w-full h-container flex flex-col justify-center gap-20 items-start max-2xl:gap-10 max-2xl:h-eighy-vh">
    <div>
      <h1 id="element" class="selector text-8xl font-bold max-2xl:text-5xl max-md:text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">{{ title }}</h1>



    </div>

    <span class=" selector text-4xl max-2xl:text-2xl max-md:text-xl" ref="descrip">{{ description }}</span>


  </div>

</template>
<script setup>

const props = defineProps({
  title: String,
  description: String
})


// const { $gsap } = useNuxtApp()
import { gsap } from 'gsap'
let tl = gsap.timeline()
const jsp = ref(props.description)

const heroAnimation = () => {
  setTimeout(() => {

  
    tl.from('.selector ',
      {
        opacity: 0,
        y: 100,
        duration: 2,
        stagger: 0.5,
       
      })
  



   }, 4000);
}

onMounted(() => {
  heroAnimation()

})


</script>