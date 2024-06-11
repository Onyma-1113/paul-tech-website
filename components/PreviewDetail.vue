<template>
    <div class="flex flex-col">


    <div class="w-full h-3/6 flex  justify-between items-start max-lg:hidden ">
        <div class="flex flex-col w-1/2 gap-10 ">
            <!-- <img src="../assets/img/Prophet_Website22_Logos_MeUndies-white-2-600x121.webp" alt="" class="w-36"> -->
            <h2 class="font bold">CHECK OUR RECENT CASE STUDIES</h2>
            <h1 class="text-4xl">Implementation of an aws B2C </h1>
    
            <div class="w-auto">
                <BtnRedirection title="LEARN MORE" redirection="/about" widthtext="w-32"/>
                <!-- <div class="ici w-32">
                    <p class="hover:text-[#0067F4] duration-300">{{title}} &#x279E;</p>
                    <div class="h-1 bg-[#DFE5F5] line-blue"></div>
                </div> -->
         
                <!-- <div class="h-1 w-52 bg-sky-400"></div> -->
            </div>
    
        </div>
        <div class="flex flex-col gap-10 w-auto w-1/2  ">
           <!-- <img src="../assets/img/digital_camera.jpg" alt="" class="h-full w-full img-project "> -->
           <img src="../assets/img/b2c.jpg" alt="" class="h-full w-full img-project ">
        </div>
    </div>
    <!-- les autre case studies -->
    <div class="w-full h-3/6 flex justify-between items-center gap-10 mt-10 max-lg:hidden">
       <div class="h-full w-1/3 flex flex-col justify-center">
        <img src="../assets/img/digital_camera.jpg" alt="" class="h-1/2 w-full img-p-2">
        <h2 class="font-bold">CASE STUDIES : CLOUD</h2>
        <p>Don’t Ignore Brand During the Banking M&A Riptide </p>
       </div>
       <div class="h-full w-1/3 flex flex-col justify-center">
        <img src="../assets/img/digital_camera.jpg" alt="" class="h-1/2 w-full img-p-2">
        <h2 class="font-bold">CASE STUDIES : PROCESS DIGITALIZATION</h2>
        <p>Email manager for a construction business.</p>
       </div>
       <div class="h-full w-1/3 flex flex-col justify-center ">
        <BtnRedirection title="CASE STUDIES" redirection="/caseStudies" widthtext="w-32"/>
       </div>
    </div>

    <!-- responsive  -->
    
    <div class="w-full h-3/6 hidden flex-col justify-between items-start max-lg:flex  pb-10">
       
        <div class="flex flex-col  w-auto w-1/2 ">
           <img src="../assets/img/digital_camera.jpg" alt="" class="h-full w-full img-project ">
        </div>
        <div class="flex flex-col w-full gap-5 pt-2 ">
            <!-- <img src="../assets/img/Prophet_Website22_Logos_MeUndies-white-2-600x121.webp" alt="" class="w-36"> -->
            <h2 class="font-bold">HOOTSUITE</h2>
            <h1 class="text-2xl">Redefining an iconic social media brand</h1>
    
            <div class="w-auto">
                <div class="ici w-32">
                    <p class="font-bold uppercase w-32">Learn more</p>
                    <div class="h-1 bg-sky-400 line-blue"></div>
                </div>
         
                <!-- <div class="h-1 w-52 bg-sky-400"></div> -->
            </div>
    
        </div>
    </div>
    <div class="w-full h-3/6 hidden flex-col justify-between items-start max-lg:flex   pb-10">
       
        <div class="flex flex-col  w-auto w-1/2 ">
           <img src="../assets/img/digital_camera.jpg" alt="" class="h-full w-full  ">
        </div>
        <div class="flex flex-col w-full gap-5 pt-2 ">
            <!-- <img src="../assets/img/Prophet_Website22_Logos_MeUndies-white-2-600x121.webp" alt="" class="w-36"> -->
            <h2 class="font-bold">HOOTSUITE</h2>
            <h1 class="text-2xl">Redefining an iconic social media brand</h1>
    
          
        </div>
    </div>
    <div class="w-full h-3/6 hidden flex-col justify-between items-start max-lg:flex   pb-10 ">
       
        <div class="flex flex-col  w-auto w-1/2 ">
           <img src="../assets/img/digital_camera.jpg" alt="" class="h-full w-full  ">
        </div>
        <div class="flex flex-col w-full gap-5 pt-2 ">
            <!-- <img src="../assets/img/Prophet_Website22_Logos_MeUndies-white-2-600x121.webp" alt="" class="w-36"> -->
            <h2 class="font-bold">HOOTSUITE</h2>
            <h1 class="text-2xl">Redefining an iconic social media brand</h1>
    
        
            <div class="h-full w-1/3 flex flex-col ">
                <BtnRedirection title="VIEW ALL" redirection="/about"/>
               </div>
        </div>
    </div>
</div>
    </template>
    <script setup>

    </script>
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
</style>
<script setup>
onMounted(()  =>{
    imageContentAnimation({element: '.img-project'})
})
</script>