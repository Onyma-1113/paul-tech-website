<template>
    <!-- <TransitionComponent/> -->
    <div class="">
      
      <div
      class="s1 max-lg:flex-col max-lg:pt-28 max-lg:h-auto  h-[40vh]  pt-56 w-full flex items-center  mx-auto  max-2xl:px-16 max-md:px-5 overflow-hidden">
      <HeroPage title="CASE STUDIES" img="/_nuxt/assets/img/marvin-meyer-SYTO3xs06fU-unsplash.jpg" />

    </div>
     <!-- case studies -->
<div class="h-auto max-lg:h-auto w-full flex items-center mx-auto px-site max-2xl:px-16 max-md:px-5">
    <CaseStudies firstText="All our cases studies"/>
  </div>

  <!-- preview testomonial -->
<!-- <div class="h-fifty-vh mt-56 max-2xl:mb-20 w-full flex items-center mx-auto px-site  max-2xl:px-16 max-md:px-5">
  <CardTestimonial2 title="“Prophet is an insightful consulting firm. Their highly engaged team is easy to work with and provides actionable recommendations. They bring to the table a unique mix of both analytical and creative thinking.”"/>
</div> -->
     
    </div>
</template>
<script setup>
definePageMeta({

    layout: 'mainlayout'
})

useHead({
  title: 'PaulTech | Case studies',
  meta: [
    { name: 'description', property:'og:description',content: "Solutions that spark transformation, build relevance and fuel sustainable growth. Process digitalization and AI,Cybersecurity,Cloud adoption, Observability" }
  ]
})
import {gsap} from 'gsap'
const caseTransitionAnimation = () =>{
  let tl = gsap.timeline()
  
        tl.to('.transition-wait',{
            duration:0.5,
            opacity:1
        })
        
   
    
 
}
onMounted(()=>{
    caseTransitionAnimation()
    
   })
</script>
<style scoped></style>