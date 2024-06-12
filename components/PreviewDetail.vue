<template>
    <div class="flex flex-col">


    <div class="w-full h-3/6 flex  justify-between items-start max-lg:hidden ">
        <div class="flex flex-col w-1/2 gap-10 ">
            <!-- <img src="../assets/img/Prophet_Website22_Logos_MeUndies-white-2-600x121.webp" alt="" class="w-36"> -->
            <h2 class="text-3xl font-bold ">{{firstText}}</h2>
            <h1 class="text-4xl w-4/6">{{$t('case_title_1')}}</h1>
    
            <div class="w-auto">
                <BtnRedirection :title="$t('redirection_title_learn_more')" :redirection="`/caseStudies/${1}`" widthtext="w-32"/>
                <!-- <div class="ici w-32">
                    <p class="hover:text-[#0067F4] duration-300">{{title}} &#x279E;</p>
                    <div class="h-1 bg-[#DFE5F5] line-blue"></div>
                </div> -->
         
                <!-- <div class="h-1 w-52 bg-sky-400"></div> -->
            </div>
    
        </div>
        <div class="flex flex-col gap-10 w-auto w-1/2  ">
           <!-- <img src="../assets/img/digital_camera.jpg" alt="" class="h-full w-full img-project "> -->
           <img src="../assets/img/Finance-Process-Management-Systems.webp" alt="" class="h-full w-full img-project ">
        </div>
    </div>
    <!-- les autre case studies -->
    <div class="w-full h-3/6 flex justify-between items-center gap-10 mt-10 max-lg:hidden">
       <div class="h-full w-1/3 flex flex-col justify-center hover:text-[#0067F4]  duration-300 cursor-pointer">
        <NuxtLink :to="`/caseStudies/2`">

        <img src="../assets/img/shutterstock_493599385_3812840d1c.jpg" alt="" class="h-1/2 w-full img-p-2">
        <h2 class="font-bold">{{$t('case_title_type_2')}}</h2>
        <p>{{$t('case_title_2')}} </p>
    </NuxtLink>
       </div>

   
       <div class="h-full w-1/3 flex flex-col justify-center hover:text-[#0067F4]  duration-300 cursor-pointer">
        <NuxtLink :to="`/caseStudies/4`">
        <img  src="../assets/img/Cybersecurity Definition What is this Field all About.png" alt="" class="h-1/2 w-full img-p-2">
        <h2 class="font-bold">{{$t('case_title_type_4')}}</h2>
        <p>{{$t('case_title_4')}} </p>
    </NuxtLink>
       </div>
    
       <div class="h-full w-1/3 flex flex-col justify-center ">
        <BtnRedirection :title="$t('redirection_title_case')" redirection="/caseStudies" widthtext="w-32"/>
       </div>
    </div>

    <!-- responsive  -->
    
    <div class="w-full h-3/6 hidden flex-col justify-between items-start max-lg:flex  pb-10">
        <h2 class="font-bold text-3xl pb-10">{{firstText}}</h2>
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