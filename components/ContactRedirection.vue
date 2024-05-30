<template>

<div class="w-full h-fifty-vh flex flex-col items-center justify-around max-2xl:justify-center max-2xl:gap-20 subtitle">
      <h1 class="text-8xl w-3/4 font-bold text-center max-2xl:text-5xl max-md:text-4xl ">Are you ready to join us ?</h1>
      <NuxtLink to="/contact">
      <div
        class="btn-get-in-touch h-14 w-56 bg-black rounded-3xl flex justify-center items-center text-white text-2xl cursor-pointer max-2xl:h-10 max-2xl:w-44 max-2xl:text-lg">
    <p>Get in touch</p>
        
      </div>
    </NuxtLink>
    </div>
</template>
<script setup>

onMounted(() =>{
  titleHomeAnimation({element: '.subtitle'})
})

</script>
<style scoped>

</style>