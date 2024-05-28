<template>
      <div class="w-full h-screen flex items-center  " :class="justify">
    <h1 class="text-8xl w-3/4 font-bold subtitle max-2xl:text-5xl max-md:text-4xl" :class="align">{{title}}</h1>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  justify: String,
  align: String
})

import {gsap} from 'gsap'
let tl = gsap.timeline()
onMounted(() => {
   
   tl.to('.subtitle', 
   { 
     opacity:1,
       y: 0,
     duration: 1 ,
    //  stagger:0.5
     
   })

 })
</script>
<style scoped>
.subtitle{
    opacity: 0;
    transform: translateY(100px);
}
</style>