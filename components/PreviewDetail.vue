<template>
    <div class="flex flex-col">


    <!-- les autre case studies -->
    <div class="w-full h-full flex justify-between items-center gap-10 mt-10 max-lg:hidden">
       <div class="h-full w-1/3 flex flex-col justify-center hover:text-[#0067F4]  duration-300 cursor-pointer">
        <NuxtLink :to="`/caseStudies/2`">

        <img src="../assets/img/shutterstock_493599385_3812840d1c.jpg" alt="" class="h-full 
        w-full rounded-3xl ">
        <h2 class="font-bold text-2xl">{{$t('case_title_type_2')}}</h2>
        <p class="text-xl">{{$t('case_title_2')}} </p>
    </NuxtLink>
       </div>

   
       <div class="h-full w-1/3 flex flex-col justify-center hover:text-[#0067F4]  duration-300 cursor-pointer">
        <NuxtLink :to="`/caseStudies/4`">
        <img  src="../assets/img/Cybersecurity Definition What is this Field all About.png" alt="" class="h-full w-full  rounded-3xl ">
        <h2 class="font-bold text-2xl">{{$t('case_title_type_4')}}</h2>
        <p class="text-xl">{{$t('case_title_4')}} </p>
    </NuxtLink>
       </div>
    
       <div class="h-full w-1/3 flex flex-col justify-center hover:text-[#0067F4]  duration-300 cursor-pointer">
        <NuxtLink :to="`/caseStudies/1`">
        <img  src="../assets/img/Finance-Process-Management-Systems.webp" alt="" class="h-full w-full rounded-3xl">
        <h2 class="font-bold text-2xl">{{$t('case_title_type_1')}}</h2>
        <p class="text-xl">{{$t('case_title_1')}} </p>
    </NuxtLink>
       </div>
    </div>

    <!-- responsive  -->
    
    <div class="w-full h-3/6 hidden flex-col justify-between items-start max-lg:flex  pb-10">
        <h2 class="font-bold text-3xl pb-10">{{firstText}}</h2>
        <NuxtLink :to="`/caseStudies/1`">
        
         <div class="flex flex-col  w-auto w-1/2 ">
           <img src="../assets/img/Finance-Process-Management-Systems.webp" alt="" class="h-full w-full rounded-3xl ">
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
            <h1 class="text-2xl">{{$t('case_title_type_3')}}</h1>
    
        
            <div class="h-full w-1/3 flex flex-col ">
                <BtnRedirection title="VIEW ALL" redirection="/caseStudies"/>
               </div>
               
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
.img-project{
height: 500px;
width: 100%
}
.img-p-2{
    height: 300px;
    width: 600px
}
</style>
<script setup>
onMounted(()  =>{
    imageContentAnimation({element: '.img-project'})
})
defineProps({
    firstText:String
})
</script>