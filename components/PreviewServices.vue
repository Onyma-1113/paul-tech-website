<template>

    <div class="w-full h-auto flex flex-col justify-between items-center">
        <div class="flex flex-col  w-full gap-20">
            <h2 class="text-4xl font-bold">{{$t('preview_service_title')}}</h2>
            <div class="flex wrap justify-around  gap-5 w-full max-lg:flex-col max-lg:items-center">
                
                <div class="flex flex-col items-center gap-10 w-1/2">
                    <img src="../assets/img/Consumer-Demand.png" alt="" srcset="" class="h-32 w-32 ">
                    <NuxtLink :to="`/services/${1}`">
                    <p class=" text-2xl  duration-300 hover:text-[#0067f4] cursor-pointer">{{$t('preview_service_s_1')}}
                    </p>
                </NuxtLink>
                </div>
                <div class="flex flex-col gap-10 w-1/2  items-center ">
                    <img src="../assets/img/2.2.2-Springbox_Services_Integrated-Planning-Orchestration.png" alt="" srcset="" class="h-32 w-32">
                    <p class=" text-2xl  duration-300 hover:text-[#0067f4] cursor-pointer">{{$t('preview_service_s_2')}}
                    </p>
                </div>
               
            </div>
            <div class="flex wrap justify-around gap-5 w-full max-lg:flex-col max-lg:items-center">
                
                <div class="flex flex-col gap-10 w-1/2  items-center ">
                    <img src="../assets/img/Revolutionize-Experiences.png" alt="" srcset="" class="h-32 w-32">
                    <p class=" text-2xl  duration-300 hover:text-[#0067f4] cursor-pointer">{{$t('preview_service_s_3')}}
                    </p>
                </div>
                <div class="flex flex-col gap-10 w-1/2  items-center ">
                    <img src="../assets/img/Pathways-to-Growth.png" alt="" srcset="" class="h-32 w-32">
                    <NuxtLink :to="`/services/${1}`">
                    <p class=" text-2xl  duration-300 hover:text-[#0067f4] cursor-pointer">{{$t('preview_service_s_4')}}
                        
                    </p>
                </NuxtLink>
                </div>
               
            </div>


        </div>
        <!-- <div class=" w-3/6 flex flex-col gap-10 w-auto">
        <p class="text-3xl text-sky-400"> “Prophet is an insightful consulting firm. Their highly engaged team is easy to work with and provides actionable recommendations. They bring to the table a unique mix of both analytical and creative thinking.”</p>
      
    </div> -->
    </div>
</template>
<script setup>
</script>