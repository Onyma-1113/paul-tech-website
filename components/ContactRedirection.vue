<template>

<div class="w-full h-fifty-vh flex flex-col items-center justify-around max-2xl:justify-center max-2xl:gap-20 subtitle">
      <h1 class="text-8xl w-3/4 font-bold text-center max-2xl:text-5xl max-md:text-4xl ">Are you ready to join us ?</h1>
      <NuxtLink to="/contact">
  

      <div class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-black hover:from-white hover:to-white hover:text-black  hover:duration-300 duration-300  text-white h-14 w-56 text-2xl  flex justify-center items-center rounded-3xl cursor-pointer max-2xl:h-10 max-2xl:w-44 max-2xl:text-lg">
                            Get in touch
                        </div>
    </NuxtLink>
    </div>
</template>
<script setup>

onMounted(() =>{
  // titleHomeAnimation({element: '.subtitle'})
})

</script>
<style scoped>

</style>