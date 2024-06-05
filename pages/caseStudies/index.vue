<template>
    <!-- <TransitionComponent/> -->
    <div class="">
        <div class="h-screen w-full flex items-center  mx-auto px-site max-2xl:px-16 max-md:px-5">
            <HeroPage title="Solutions that spark transformation, build relevance and fuel sustainable growth."
                 />
        </div>
     <!-- case studies -->
<div class="h-eigthy-vh max-lg:h-screen w-full flex items-center mx-auto px-site max-2xl:px-16 max-md:px-5">
    <PreviewDetail/>
  </div>

  <!-- preview testomonial -->
<div class="h-screen w-full flex items-center mx-auto px-site  max-2xl:px-16 max-md:px-5">
  <CardTestimonial2/>
</div>
     
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