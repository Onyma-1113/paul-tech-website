<template>
    <div class="w-full h-24 flex  items-center justify-center  ">
        <div
            class="h-32 w-3/4  flex flex-col items-center justify-between pt-10  text-5xl ">

            <div class="h-3/4 w-full  flex items-center justify-between pb-16 px-5">
                <h1>{{title}}</h1>
                <BtnRedirection title="Apply now" :redirection="redirection" />
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