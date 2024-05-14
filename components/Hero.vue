<template>
<div class="w-full h-container flex flex-col justify-center gap-20 items-start max-2xl:gap-10 max-2xl:h-eighy-vh">
      <div>
        <h1 id="element" class="text-8xl font-bold max-2xl:text-5xl">{{ title }} </h1>
       
      
        
      </div>

      <span class="text-4xl max-2xl:text-2xl">{{ description}}</span>
      

    </div>
   
</template>
<script setup>
defineProps({
  title: String,
  description: String
})
</script>