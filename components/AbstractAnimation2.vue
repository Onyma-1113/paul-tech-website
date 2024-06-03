<template>
    <div class="w-1/2 flex flex-col items-center justify-center h-fifty-vh justify-center gap-2 max-2xl:gap-10 max-2xl:h-eighy-vh">
        <div class="h-28 w-auto px-5 flex items-center justify-center border-2 border-white  direction d1">
            <h1 class="text-2xl">Humain</h1>
        </div>
        <div  class="h-28 w-auto px-5 flex items-center justify-center border-2 border-white direction d2">
            <h1 class="text-2xl">Responsable</h1>
        </div>
        <div  class="h-28 w-auto px-5 flex items-center justify-center border-2 border-white direction d3">
            <h1 class="text-2xl">Performant</h1>
        </div>

        <!-- <span class=" selector text-4xl max-2xl:text-2xl max-md:text-xl" ref="descrip">{{ description }}</span> -->


    </div>
</template>
<script setup>

const props = defineProps({
    title: String,
    description: String
})



onMounted(()=>{
   
    let tl = gsap.timeline()
    tl.from('.direction',{
    opacity:0,
    duration:2,
    stagger:0.2
})
})
</script>
<style scoped>
.d1{
    position: relative;
    right:130px
}
.d2{
    position: relative;
    left:130px
}
.d3{
    position: relative;
    right:130px
}



</style>