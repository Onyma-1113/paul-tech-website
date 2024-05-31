<template>
    <div
        class="w-full h-fourty-vh  mx-auto rounded-lg  text-white border border-gray-200 p-5 text-gray-800 font-light mb-6 flex flex-col justify-between cd-service ">
        
        <div class="w-full flex mb-4 items-center">
            <div class="overflow-hidden rounded-full w-16 h-16 bg-gray-50 border border-gray-200">
                <img src="https://i.pravatar.cc/100?img=1" alt="">
            </div>
            <div class="flex-grow pl-3">
                <h6 class="font-bold text-xl uppercase text-white lg:text-md">{{title}}</h6>
            </div>
        </div>
        <div class="w-full mb-10">
            <p class="text-2xl max-lg:text-xl leading-tight">{{ description }}</p>
        </div>
        <NuxtLink :to="`/services/${1}`">
        <div
        class="btn-get-in-touch h-14 w-56 bg-white font-bold rounded-3xl flex justify-center items-center text-black text-2xl cursor-pointer max-2xl:h-10 max-2xl:w-44 max-2xl:text-lg mb-10">
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

<style scoped>
.cd-service{
  /* 0, 132, 199, */
  background: rgba(41, 41, 41, 0);
box-shadow: 0 0px 32px 0 rgba( 0, 132, 199, 0.37 );
backdrop-filter: blur( 0px );
-webkit-backdrop-filter: blur( 0px );
border-radius: 30px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>