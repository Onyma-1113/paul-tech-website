<template>
  <!-- <div class="w-1/2  flex flex-col justify-center gap-10 items-start max-2xl:gap-10 max-lg:h-eighy-vh ">
    <div class="h-auto">
      <h2 id="element" class=" h-full selector opacity-100 text-6xl h-auto font-bold max-2xl:text-5xl max-md:text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">{{ title }}</h2>



    </div>

    <span class=" selector text-xl max-2xl:text-2xl max-md:text-xl" ref="descrip">{{ description }}</span>
    


  </div> -->
  <div class="w-1/2 flex flex-col h-auto gap-5 max-2xl:h-auto max-2xl:mt-5">
    <div class="h-auto">
      <h2 id="element" class="  h-full pb-2 selector opacity-100 text-6xl h-auto font-bold max-2xl:text-5xl max-2xl:flex max-2xl:justify-start max-2xl:items-center         max-md:text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">{{ title }}</h2>

    </div>

    <span class="h-auto opacity-100 selector text-2xl max-2xl:text-base max-md:text-xl" ref="descrip">{{ description }}</span>
    



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


  
    tl.from('.selector ',
      {
       
        opacity: 0,
                y: 100,
                duration: 1,
                stagger:0.1
       
      })
  




}

onMounted(() => {
  // titleHomeAnimation({element : '.selector'})
  heroAnimation()

})


</script>