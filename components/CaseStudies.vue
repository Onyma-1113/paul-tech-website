<template>
    <div class="flex flex-col">

<!--  case_title_1: 'Email manager for a construction business',
            case_title_2: 'Implementation of an AWS B2C',
            case_title_3: 'Enhancing Cybersecurity of UDM',
            case_title_4: 'Observability with Dynatrace',
            case_title_type_1: 'CASE STUDIES : PROCESS DIGITALIZE',
            case_title_type_2: 'CASE STUDIES : CLOUD ADOPTION',
            case_title_type_3: 'CASE STUDIES : CYBERSECURITY',
            case_title_type_4: 'CASE STUDIES : OBSERVABILITY', -->
    
    <!-- les autre case studies -->
    <h2 class="text-4xl font-bold pt-56 pb-36 max-2xl:text-5xl max-md:text-4xl ">{{ $t('case_studies_description') }}</h2>
    <div class="w-full h-auto flex flex-wrap justify-between items-center gap-5 mt-10 max-lg:hidden">
        
       <div class="h-1/2 w-40-percent flex  flex-col justify-center hover:text-[#0067F4]  duration-300 cursor-pointer">
        <NuxtLink :to="`/caseStudies/4`">
        <div class="flex gap-2 flex-col">
            <img src="../assets/img/students-socialising-lobby-modern-university-287596.jpg" alt="" class="h-full w-full img-p-2 rounded-lg">
        <h2 class="font-bold">{{$t('case_title_type_4')}}</h2>
        <p>{{$t('case_title_4')}} </p>
        </div>
      
    </NuxtLink>
       </div>

   
       <div class="h-full w-40-percent flex flex-col justify-center hover:text-[#0067F4]  duration-300 cursor-pointer">
        <NuxtLink :to="`/caseStudies/3`">
        
        <div class="flex gap-2 flex-col">
            <img src="../assets/img/Cybersecurity Definition What is this Field all About.png" alt="" class="h-full w-full img-p-2 rounded-lg">
        <h2 class="font-bold">{{$t('case_title_type_3')}}</h2>
        <p>{{ $t('case_title_3') }}</p>
        </div>
    </NuxtLink>
       </div>
    
       <div class="h-full w-40-percent  flex flex-col justify-center hover:text-[#0067F4]  duration-300 cursor-pointer">
        <NuxtLink :to="`/caseStudies/1`">
        
        <div class="flex gap-2 flex-col">
            <img src="../assets/img/Finance-Process-Management-Systems.webp" alt="" class="h-full w-full img-p-2 rounded-lg">
            <h2 class="font-bold">{{$t('case_title_type_1')}}</h2>
        <p>{{$t('case_title_1')}} </p>
        </div>
    </NuxtLink>
       </div>
       <div class="h-full w-40-percent flex flex-col justify-center hover:text-[#0067F4]  duration-300 cursor-pointer">
        <NuxtLink :to="`/caseStudies/2`">
      
        <div class="flex gap-2 flex-col">
            <img  src="../assets/img/shutterstock_493599385_3812840d1c.jpg" alt="" class="h-1/2 w-full img-p-2  rounded-lg">          
            <h2 class="font-bold">{{$t('case_title_type_2')}}</h2>
            <p>{{$t('case_title_2')}} </p>
        </div>
        
    </NuxtLink>
       </div>
       
    </div>
    

    <!-- responsive  -->
    
    <div class="w-full h-3/6 hidden flex-col justify-between items-start max-lg:flex  pb-10">
       
        <NuxtLink :to="`/caseStudies/1`">
        
         <div class="flex flex-col  w-auto w-1/2 ">
           <img src="../assets/img/Finance-Process-Management-Systems.webp" alt="" class="h-full w-full  ">
        </div>
        <div class="flex flex-col w-full gap-5 pt-2 ">
            <!-- <img src="../assets/img/Prophet_Website22_Logos_MeUndies-white-2-600x121.webp" alt="" class="w-36"> -->
            <h2 class="font-bold">{{$t('case_title_type_1')}}</h2>
            <h1 class="text-2xl">{{$t('case_title_1')}}</h1>
    
          
        </div>
    </NuxtLink>
    </div>
    <div class="w-full h-3/6 hidden flex-col justify-between items-start max-lg:flex   pb-10">
        <NuxtLink :to="`/caseStudies/2`">
        <div class="flex flex-col  w-auto w-1/2 ">
           <img src="../assets/img/shutterstock_493599385_3812840d1c.jpg" alt="" class="h-full w-full  ">
        </div>
        <div class="flex flex-col w-full gap-5 pt-2 ">
            <!-- <img src="../assets/img/Prophet_Website22_Logos_MeUndies-white-2-600x121.webp" alt="" class="w-36"> -->
            <h2 class="font-bold">{{$t('case_title_type_2')}}</h2>
            <h1 class="text-2xl">{{$t('case_title_2')}}</h1>
    
          
        </div>
        </NuxtLink>
    </div>
    <div class="w-full h-3/6 hidden flex-col justify-between items-start max-lg:flex   pb-10 ">
        <NuxtLink :to="`/caseStudies/3`">
        <div class="flex flex-col  w-auto w-1/2 ">
           <img src="../assets/img/Cybersecurity Definition What is this Field all About.png" alt="" class="h-full w-full  ">
        </div>
    </NuxtLink>
        <div class="flex flex-col w-full gap-5 pt-2 ">
            <!-- <img src="../assets/img/Prophet_Website22_Logos_MeUndies-white-2-600x121.webp" alt="" class="w-36"> -->
            <h2 class="font-bold">{{$t('case_title_type_3')}}</h2>
            <h1 class="text-2xl">{{$t('case_title_3')}}</h1>
    
        
            
               
        </div>
    
    </div>
    <div class="w-full h-3/6 hidden flex-col justify-between items-start max-lg:flex   pb-10 ">
        <NuxtLink :to="`/caseStudies/4`">
        <div class="flex flex-col  w-auto w-1/2 ">
           <img src="../assets/img/students-socialising-lobby-modern-university-287596.jpg" alt="" class="h-full w-full  ">
        </div>
    </NuxtLink>
        <div class="flex flex-col w-full gap-5 pt-2 ">
            <!-- <img src="../assets/img/Prophet_Website22_Logos_MeUndies-white-2-600x121.webp" alt="" class="w-36"> -->
            <h2 class="font-bold">{{$t('case_title_type_4')}}</h2>
            <h1 class="text-2xl">{{$t('case_title_4')}}</h1>
    
        
            
               
        </div>
    
    </div>
</div>
    </template>
  
    <style scoped>
    .line-blue{width: 100%;}
.ici {
    color: #fff;
   width: 105px;
    cursor: pointer;
    position: relative;
}

.ici::after {
    content: '';
    position: absolute;
    height: 5px;
    left: 0;
    bottom: 0;
    width: 0;
    background: #0067F4;
    transition:  .2s;
}

.ici:hover::after {
    width: 100%;
}
/* .img-project{
height: 500px;
width: 100%
} */
.w-40-percent{
width: 45%
}
/* .img-p-2{
    height: 300px;
    width: 600px
} */
</style>
<script setup>
onMounted(()  =>{
    imageContentAnimation({element: '.img-project'})
})
defineProps({
    firstText:String
})
</script>