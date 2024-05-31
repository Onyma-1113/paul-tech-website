<template>
      <div class="w-full h-screen flex items-center  " :class="justify">
    <h1 class="text-8xl w-3/4 font-bold subtitlew max-2xl:text-5xl max-md:text-4xl" :class="align">{{title}}</h1>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  justify: String,
  align: String
})


onMounted(() => {
   
 titleHomeAnimation({element: '.subtitlew'})

 })
</script>
<style scoped>
.subtitlew{
    opacity: 1;
    transform: translateY(100px);
}
</style>