<template>
    <!-- <TransitionComponent/> -->
    <div class="">
      
        <div class="max-lg:pt-0 h-eighy-vh  pt-24 w-full flex items-center  mx-auto px-site max-2xl:px-16 max-md:px-5">
            <HeroPage :title="$t('case_studies_title')"></HeroPage>
          </div>
     <!-- case studies -->
<div class="h-eigthy-vh max-lg:h-auto w-full flex items-center mx-auto px-site max-2xl:px-16 max-md:px-5">
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