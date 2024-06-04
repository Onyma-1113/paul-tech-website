<template>
  <div class="w-1/2 flex flex-col h-auto gap-5 max-2xl:h-auto max-2xl:mt-5">
    <div class="h-auto">
      <h2 id="element" class="  h-full selector opacity-100 text-6xl h-auto font-bold max-2xl:text-5xl max-2xl:flex max-2xl:justify-center max-2xl:items-center         max-md:text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">{{ title }}</h2>

    </div>

    <span class="h-auto opacity-100 selector text-2xl max-2xl:text-base max-md:text-xl" ref="descrip">{{ description }}</span>
    <div class="selector opacity-100">
      <BtnRedirection :title="redirectiontitle" :redirection="redirection" :showarrow="showarrow"/>
    </div>
    <div class="selector opacity-100">
      <BtnRedirection :title="redirectiontitle2" :redirection="redirection2" :showarrow="showarrow" />
    </div>



  </div>

</template>
<script setup>

const props = defineProps({
  title: String,
  description: String,
  redirectiontitle: String,
  redirection: String,
  redirectiontitle2: String,
  redirection2: String,
  showarrow :String,
})


// const { $gsap } = useNuxtApp()
import { gsap } from 'gsap'
let tl = gsap.timeline()
const jsp = ref(props.description)

const heroAnimation = () => {


  
    tl.to('.selector ',
      {
       
        opacity: 1,
                 y: 0,
                duration: 1,
                stagger:0.1
       
      })
  




}

onMounted(() => {
  // titleHomeAnimation({element : '.selector'})
  heroAnimation()

})


</script>

<style scoped>
.selector{
  opacity: 0;
  transform: translateY(100px);
}
</style>