<template>
  <div class="w-1/2  flex flex-col justify-center gap items-start max-2xl:gap-10 max-2xl:h-eighy-vh">
    <div class="h-72">
      <h2 id="element" class="  h-full selector opacity-0 text-6xl h-auto font-bold max-2xl:text-5xl max-md:text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">{{ title }}</h2>

    </div>

    <span class="    opacity-0 selector text-xl max-2xl:text-2xl max-md:text-xl" ref="descrip">{{ description }}</span>
    <div class="selector opacity-0">
      <BtnRedirection :title="redirectiontitle" :redirection="redirection" :showarrow="showarrow"/>
    </div>
    <div class="selector opacity-0">
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
  position: relative;
  transform: translate(0px, 100px);
}
</style>