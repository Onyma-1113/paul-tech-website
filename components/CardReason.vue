<template>
    
<div class="w-full h-full flex max-lg:flex-col justify-between max-lg:justify-around items-center">
    <div class="flex flex-col w-full gap-20">
        <h2 class="text-4xl font-bold">Why Paultech is different</h2>
        <div class="flex flex-col gap-5">
        <p class="font bold text-2xl duration-300 hover:text-green-400 cursor-pointer" :class="{'text-white': !isActive1, 'text-green-400': isActive1}"  @click="toggleClick(1)">Commitment to Transparency</p>
        <p class="font bold text-2xl  duration-300 hover:text-green-400 cursor-pointer" :class="{'text-white': !isActive2, 'text-green-400': isActive2}"  @click="toggleClick(2)">Comprehensive and Supportive</p>
        <p class="font bold text-2xl  duration-300 hover:text-green-400 cursor-pointer" :class="{'text-white': !isActive3, 'text-green-400': isActive3}"  @click="toggleClick(3)">Empowering Your Digital Success</p>
        </div>
      

    </div>
    <div class=" w-full flex flex-col gap-10 w-auto">
        <p class="text-3xl text-sky-400"  :class="[isActive1 == false ? cardOff : '', cardOn]" @click="toggleClick(1)" > “All our products, services, and solutions
          are delivered with complete transparency, ensuring that our clients have a clear understanding of every step
          in the process.”</p>
          <p class="text-3xl text-sky-400" :class="[isActive2 ==  false ? cardOff : '', cardOn]" @click="toggleClick(2)"  > “We provide a 360-degree view on costs, our solution selection process, project management, delivery, and operation support, ensuring our clients have complete visibility at every stage. By offering detailed cost breakdowns and transparent insights into how we choose the best solutions.”</p>
              <p class="text-3xl text-sky-400"  :class="[isActive3 ==  false ? cardOff : '', cardOn]" @click="toggleClick(3)" > “Our services are designed to propel your business forward in today's digital landscape. We specialize in delivering transformative solutions that optimize processes, drive innovation, and enhance security.”</p>
    </div>
</div>
</template>
<script setup>
const cardOn = ref('card-on')
const cardOff = ref('card-off')

const isActive1 = ref(true)
const isActive2 = ref(false)
const isActive3 = ref(false)

const toggleClick  = (e) =>{
    if(e==1){
        isActive1.value = true
        isActive2.value = false

        isActive3.value = false

        
    }
    if(e == 2){
        isActive1.value = false
        isActive2.value = true

        isActive3.value = false

    } if(e == 3){
        isActive1.value = false
        isActive2.value = false

        isActive3.value = true

    }
}

onMounted(() => {
    // toggleClick();
})
</script>
<style scoped>
.card-on{
    display: block;
}
.card-off{
    display: none;
}

.cursor-pointer:focus{
    

}
</style>