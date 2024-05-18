<template>
  <div class="w-full h-screen flex items-center " :class="justify">
    <h1 class="text-8xl w-3/4 font-bold"  :class="align">{{title}}</h1>
  </div>
</template>
<script setup>
defineProps({
  title: String,
 justify: String,
 align : String
 
})
</script>
