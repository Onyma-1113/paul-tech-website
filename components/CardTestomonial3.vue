<template>

      <!-- redirection team -->
    

<div class="h-full max-lg:h-auto flex max-lg:flex-col max-lg:items-start justify-between items-center gap-20">
  
    <img src="https://i.pravatar.cc/100?img=1" alt="" srcset="" class="w-2/6 h-2/6 max-2xl:w-4/6 max-lg:hidden  rounded-full">

  <div class="flex flex-col gap-10">
    <p class="text-3xl text-white w-auto max-2xl:text-2xl">{{ title}}</p>

    <div>
      <p class="font-bold underline text-black">Michael Dunn</p>
      <p>Chief Executive Officer, Chairman</p>
    </div>

  </div>
  <div class="w-96 pb-5">
    <BtnRedirection title="OUR TEAM" redirection="/about" widthtext="w-24"/>

  </div>


</div>




</template>
<script setup>
defineProps({
  title:String
})
</script>