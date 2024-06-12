<template>
  <!-- <TransitionComponent/> -->
    <div class="">
      
            
              <div class="h-screen  w-full flex items-center  mx-auto px-site max-2xl:px-16 max-md:px-5">
                <HeroPage :title="$t('service_title')"></HeroPage>
              </div>

              <div class="h-screen max-2xl:h-auto w-full flex mx-auto px-site max-2xl:px-16 max-md:px-5 mt-52 max-2xl:mt-0">
                <div class="w-full h-auto flex flex-col justify-between items-center">
        <div class="flex flex-col  w-full gap-20 max-lg:gap-10">
            <h2 class="text-4xl font-bold">SERVICES</h2>
            <div class="flex max-lg:flex-col wrap justify-between max-lg:justify-around gap-5 w-full">
                
              <!-- process -->
                <div class="flex flex-col gap-10 justify-between w-1/2 max-lg:w-full ">
                    <img src="../../assets/img/Pathways-to-Growth.png" alt="" srcset="" class="h-32 w-32 max-lg:h-24 max-lg:w-24 ">
                    <NuxtLink :to="`./services/1`">

                    <p class=" text-2xl  duration-300 hover:text-[#0067f4] cursor-pointer">{{$t('preview_service_s_4')}} &#x279E;
                    </p>
                    </NuxtLink>
                    <p>{{$t('process_description')}}</p>
                </div>
              <!-- observability -->
                <div class="flex flex-col gap-10 w-1/2 max-lg:w-full ">
                    <img src="../../assets/img/2.2.2-Springbox_Services_Integrated-Planning-Orchestration.png" alt="" srcset="" class="h-32 w-32 max-lg:h-24 max-lg:w-24 ">
                    <NuxtLink :to="`./services/2`"><p class=" text-2xl  duration-300 hover:text-[#0067f4] cursor-pointer">{{$t('preview_service_s_2')}} &#x279E;
                    </p></NuxtLink>
                    
                    <p>{{$t('observability_description')}}</p>

                </div>
               
            </div>
            <div class="flex wrap max-lg:flex-col justify-around gap-5 w-full">
                   <!-- cyber -->
                <div class="flex flex-col justify-between gap-10 w-1/2 max-lg:w-full">
                    <img src="../../assets/img/Revolutionize-Experiences.png" alt="" srcset="" class="h-32 w-32 max-lg:h-24 max-lg:w-24 ">
                    <NuxtLink :to="`./services/3`"> <p class=" text-2xl  duration-300 hover:text-[#0067f4] cursor-pointer">{{$t('preview_service_s_3')}} &#x279E;
                    </p></NuxtLink>
                   
                    <p>{{$t('cybersecurity_description')}}</p>
                </div>
                    <!--cloud -->
                <div class="flex flex-col  gap-10 w-1/2  max-lg:w-full ">
                    <img src="../../assets/img/Consumer-Demand.png" alt="" srcset="" class="h-32 w-32 max-lg:h-24 max-lg:w-24 ">
                    <NuxtLink :to="`./services/4`"><p class=" text-2xl  duration-300 hover:text-[#0067f4] cursor-pointer">{{$t('preview_service_s_1')}} &#x279E;
                    </p></NuxtLink>
     
                    <p>{{$t('cloud_description')}}</p>               
                 </div>
               
            </div>


        </div>
        <!-- <div class=" w-3/6 flex flex-col gap-10 w-auto">
        <p class="text-3xl text-sky-400"> “Prophet is an insightful consulting firm. Their highly engaged team is easy to work with and provides actionable recommendations. They bring to the table a unique mix of both analytical and creative thinking.”</p>
      
    </div> -->
    </div>
        </div>
    </div>

</template>



<script setup>
const route = useRoute()
onMounted(() =>{console.log(route.name)
})
definePageMeta({
    layout: 'mainlayout'
})

let tl = gsap.timeline()
const serviceAnimation = () =>{
  
        tl.to('.transition-wait',{
            duration:0.5,
            opacity:1
        })
        
  
}



    onMounted(() => {
 
serviceAnimation()
cardShowAnimation({element :'.card-container'})
  })
</script>
<style scoped>

</style>