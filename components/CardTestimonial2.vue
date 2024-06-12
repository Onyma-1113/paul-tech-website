<template>
    
<div class="w-full h-full flex justify-between gap-20 items-center max-lg:flex-col max-2xl:items-start">
    <div class="flex flex-col gap-2 h-full w-2/6">
        <img :src=image  alt="" class="w-36">
        <p class="font-bold">{{ name }}</p>
        <p>{{position}}</p>

    </div>
    <div class="flex flex-col h-full w-full  gap-10 w-auto pl-80 max-2xl:pl-0 ">
        <p class="text-3xl text-[#0067F4] max-2xl:text-2xl"> {{ title }}</p>
        <!-- <BtnRedirection title="TESTOMONIAL" redirection="/" widthtext="w-32"/> -->
    </div>
</div>
</template>
<script setup>
defineProps({
    title:String,
    image:String,
    name:String,
    position:String
})

</script>