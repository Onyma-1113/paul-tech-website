<template>
<div class="w-full h-container flex flex-col justify-center gap-20 items-start">
      <div>
        <h1 id="element" class="text-8xl font-bold">{{ title }} </h1>
       
      
        
      </div>

      <span class="text-4xl">{{ description}}</span>
      

    </div>
</template>
<script setup>
defineProps({
  title: String,
  description: String
})
</script>