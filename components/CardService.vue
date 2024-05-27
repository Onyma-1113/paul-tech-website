<template>
    <div
        class="w-full h-fourty-vh  mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 ">
        
        <div class="w-full flex mb-4 items-center">
            <div class="overflow-hidden rounded-full w-16 h-16 bg-gray-50 border border-gray-200">
                <img src="https://i.pravatar.cc/100?img=1" alt="">
            </div>
            <div class="flex-grow pl-3">
                <h6 class="font-bold text-xl uppercase text-gray-600 lg:text-md">{{title}}</h6>
            </div>
        </div>
        <div class="w-full mb-10">
            <p class="text-2xl max-lg:text-xl leading-tight">{{ description }}</p>
        </div>
        <NuxtLink :to="`/services/${1}`">
        <div
        class="btn-get-in-touch h-14 w-56 bg-black rounded-3xl flex justify-center items-center text-white text-2xl cursor-pointer max-2xl:h-10 max-2xl:w-44 max-2xl:text-lg">
    <p>See more</p>
        
      </div>
    </NuxtLink>
    </div>
</template>
<script setup>
defineProps({
  title: String,
  description: String
})
import {gsap} from "gsap"
let tl = gsap.timeline()


onMounted(() => {
   


  })


</script>