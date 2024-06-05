<template>
    <div class="w-1/2 flex flex-col h-auto justify-center items-center  gap-20  max-2xl:gap-10 max-2xl:h-eighy-vh">
        <div class="directional d-1">

        </div>
        <div class="directional d-2">

        </div>
        <div class="directional d-3">

        </div>
        <div class="directional d-4">

        </div>
        <div class="directional d-5">

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
    tl.from('.directional',{
    opacity:0,
    duration:2,
    stagger:0.2
})
})
</script>
<style scoped>


.directional{
    opacity: 1;
      position: relative;
      width: 54px;
      box-sizing: content-box;
      border-width: 50px 18px 0;
      border-style: solid;
      border-color: rgb(0, 132, 199) transparent;
    
    }
    .directional:before {
      content: "";
      position: absolute;
      height: 0;
      width: 0;
      top: -85px;
      left: -18px;
      border-width: 0 45px 35px;
      border-style: solid;
      border-color: transparent transparent rgb(0, 132, 199);
    }
  
 

.d-1 {
    position: relative;
    top:100px;
    
   
}
.d-1:before{
    
}


.d-2 {
    position: relative;
    left: 200px;
    border-color: white transparent;
}
.d-2:before{
    border-color: white transparent;
}

.d-3 {
    position: relative;
    left: 400px;
    bottom:50px
}
.d-4 {
    position: relative;
    left: 300px;
    bottom:50px;
    border-color: white transparent;
}
.d-4:before{
    border-color: white transparent;
}

.d-5 {
    position: relative;
    left: 100px;
    bottom:300px
}
</style>