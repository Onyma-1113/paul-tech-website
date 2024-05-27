<template>
<div class="">
    <div class=" w-full flex justify-between bg-gray-400 rounded-3xl px-10 max-lg:flex-col max-lg:justify-center max-lg:gap-20  max-lg:py-20 h-screen max-lg:h-auto show-detail opacity-0" >
        <div class="h-full w-1/2 flex justify-start items-center max-lg:w-full max-lg:justify-center max-lg:h-auto">
            <!-- ici mettre en props pour garder  nimporte quel objet -->
            <h1 class="text-5xl font-bold">{{ title }}</h1>
        </div>
        <div class="h-full w-1/2 flex items-center text-2xl max-lg:w-full max-lg:justify-center">
             <!-- ici mettre en props pour garder  nimporte quel objet -->
           <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->
           <p class="">  <span class="font-bold">Analytics, Performance Measurement and Optimization</span> <br>

            &bull; Analytics audit (Google Analytics and others)<br>
&bull; Implementation of measurement tools<br>
&bull; Use and enhancement of data<br>
&bull; Performance analysis of touchpoints and digital campaigns<br>
&bull; Dashboards, findings reports, and recommendations<br>

<br> <span class="font-bold">Data Strategy and Customer Knowledge</span><br>

&bull; Data environment audit<br>
&bull; Data quality analysis<br>
&bull; Data collection and insight strategy<br>
&bull; 360-degree customer view with CDP (Customer Data Platform)<br>
&bull; Lead generation and nurturing strategy<br>
&bull; Data modelling and behavioural segmentation<br>
&bull; Personalization and digital relationship marketing strategy<br>
&bull; Guidance in choice of platform and/or analysis and trigger marketing tools<br>
&bull; Definition of performance indicators and prediction of results<br>

<br><span class="font-bold" >Search engine optimization (SEO) and audit</span><br>

 Positioning and keyword analysis<br>
 &bull; Organic traffic analysis<br>
 &bull; Technical analysis<br>
 &bull; Editorial analysis<br>
 &bull; Off-page analysis<br>
 &bull; Competitive analysis<br>
 &bull; SEO recommendations related to content creation</p>
        </div>

    </div>
</div>
</template>
<script setup>
defineProps({
  title: String,
  description: String
})
import {gsap} from 'gsap'
let tl = gsap.timeline()

onMounted(() => {
    
    tl.to('.show-detail', 
    { 
      opacity:1,
      
      duration: 1,
      
      
    })
 
  })
</script>