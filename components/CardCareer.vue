<template>
    <div class="w-full h-24 flex  items-center justify-center  ">
        <div
            class="h-32 w-full flex flex-col items-center justify-between pt-10  text-5xl ">

            <div class="h-3/4 w-full  flex items-center justify-between pb-5 px-5">
                <h1>{{title}}</h1>
                <NuxtLink :to="redirection">
                    <div class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-black hover:from-white hover:to-white hover:text-black  hover:duration-300 duration-300  text-white h-14 w-56 text-2xl  flex justify-center items-center rounded-3xl cursor-pointer max-2xl:h-10 max-2xl:w-44 max-2xl:text-lg">
                          APPLY NOW
                        </div>
                </NuxtLink>
            </div>


            <div class="w-full h-0.5 bg-white"></div>
        </div>

    </div>
</template>
<script setup>

defineProps({
    title: String,
    redirection: String
})
</script>
<style scoped>
.img-project:hover {}
</style>