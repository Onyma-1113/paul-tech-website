<template>
    <!-- <TransitionComponent /> -->
    <div class="">

        <div class="s1 max-lg:flex-col max-lg:pt-28 max-lg:h-auto  h-[40vh]  pt-56 w-full flex items-center  mx-auto  max-2xl:px-16 max-md:px-5 overflow-hidden">
            <HeroPage title="ABOUT US"
               img="/_nuxt/assets/img/page1 img3.jpg" />
           
        </div>
       
<!-- ligne se -->
        
        <div class=" max-2xl:h-auto mb-56 w-full flex mx-auto px-site max-2xl:px-16 max-md:px-5 mt-52">
           
           <div class="w-full h-auto flex flex-col justify-between items-center">
               <div class="flex   w-full gap-52 justify-center items-center">
                   <div class="w-1/2  flex flex-col gap-20">
                       <h2 class="text-4xl font-bold text-[#0067F4]">{{ $t('about_title_who_are_we') }}</h2>
                   <div class="flex flex-col wrap justify-around  gap-5 w-full max-lg:flex-col max-lg:items-center">
                       <p class="text-3xl  max-2xl:text-base max-xl:text-xl leading-relaxed">{{ $t('about_title_who_are_we_description') }}</p>
                       <p class="text-3xl t-2  max-2xl:text-base max-xl:text-xl leading-relaxed">{{ $t('about_title_who_are_we_description_2') }}</p>
       
                   </div>
                   </div>
                  <div class="w-1/2 h-[70vh] flex justify-center items-center">
                   <img src="../assets/img/krakenimages-Y5bvRlcCx8k-unsplash.jpg" alt="" class="rounded-3xl h-full w-4/6  ">
                  </div>
       
               </div>
                
               <!-- <div class=" w-3/6 flex flex-col gap-10 w-auto">
               <p class="text-3xl text-sky-400"> “Prophet is an insightful consulting firm. Their highly engaged team is easy to work with and provides actionable recommendations. They bring to the table a unique mix of both analytical and creative thinking.”</p>
             
           </div> -->
           </div>
               </div>
       
<!-- <div class=" w-full flex h-15 mx-auto px-site max-2xl:px-16 max-md:px-5">
            <div class=" w-full border-b-2 border-white "> </div>
        </div> -->
        <div class=" max-2xl:h-auto pb-56 w-full flex mx-auto px-site max-2xl:px-16 max-md:px-5 pt-52 bg-[#DFE5F5] text-black">
           
           <div class="w-full h-auto flex flex-col justify-between items-center">
               <div class="flex   w-full gap-52 justify-center items-center">
                <div class="w-1/2 h-[70vh] flex justify-center items-center">
                   <img src="../assets/img/difference-7370144_1280.png" alt="" class="rounded-3xl h-full w-4/6  ">
                  </div>
                   <div class="w-1/2 flex flex-col gap-20">
                       <h2 class="text-4xl font-bold text-[#0067F4]">{{$t('card_reason_title')}}</h2>
                   <div class="flex flex-col wrap justify-around  gap-10 w-full max-lg:flex-col max-lg:items-center">
                    <div class="flex flex-col  justify-around  gap-5">
                        <p class="text-3xl font-bold  max-2xl:text-base max-xl:text-xl leading-relaxed">1. {{$t('card_reason_sub_title_1')}}</p>
                       <p class="text-3xl t-2  max-2xl:text-base max-xl:text-xl leading-relaxed">{{ $t('card_reason_description_1') }}</p>
                    </div>
                      
                    <div  class="flex flex-col  justify-around  gap-5">
                        <p class="text-3xl font-bold  max-2xl:text-base max-xl:text-xl leading-relaxed">2. {{$t('card_reason_sub_title_2')}}</p>
                       <p class="text-3xl t-2  max-2xl:text-base max-xl:text-xl leading-relaxed">{{ $t('card_reason_description_2') }}</p>
                    </div>
                    <div  class="flex flex-col  justify-around  gap-5">
                        <p class="text-3xl font-bold  max-2xl:text-base max-xl:text-xl leading-relaxed">3. {{$t('card_reason_sub_title_3')}}</p>
                       <p class="text-3xl t-2  max-2xl:text-base max-xl:text-xl leading-relaxed">{{ $t('card_reason_description_3') }}</p>
                    </div>
       
                   </div>
                   </div>
                
       
               </div>
                
               <!-- <div class=" w-3/6 flex flex-col gap-10 w-auto">
               <p class="text-3xl text-sky-400"> “Prophet is an insightful consulting firm. Their highly engaged team is easy to work with and provides actionable recommendations. They bring to the table a unique mix of both analytical and creative thinking.”</p>
             
           </div> -->
           </div>
               </div>
       
<!-- <div class=" w-full flex h-5 mx-auto px-site max-2xl:px-16 max-md:px-5">
            <div class=" w-full border-b-2 border-white "> </div>
        </div> -->
      
        <!-- container -->
        <div class=" max-2xl:h-auto mb-56 w-full flex mx-auto px-site max-2xl:px-16 max-md:px-5 mt-52">
           
           <div class="w-full h-auto flex flex-col justify-between items-center">
               <div class="flex   w-full gap-52 justify-center items-center">
                   <div class="w-1/2  flex flex-col gap-20">
                       <h2 class="text-4xl font-bold text-[#0067F4]">{{$t('preview_service_title')}}</h2>
                   <div class="flex flex-col wrap justify-around  gap-5 w-full max-lg:flex-col max-lg:items-center">
                       <p class="text-3xl font-bold max-2xl:text-base max-xl:text-xl leading-relaxed">1. {{$t('preview_service_s_1')}} </p>
                       <p class="text-3xl t-2  max-2xl:text-base max-xl:text-xl leading-relaxed">&nbsp; &nbsp; &nbsp;- AWS, Microsoft Azure, Google Cloud certifications</p>
                       <p class="text-3xl font-bold max-2xl:text-base max-xl:text-xl leading-relaxed">2. {{$t('preview_service_s_2')}} </p>
                       <p class="text-3xl t-2  max-2xl:text-base max-xl:text-xl leading-relaxed">&nbsp; &nbsp; &nbsp;- Deep observability expertise with Dynatrace </p>
                       <p class="text-3xl font-bold max-2xl:text-base max-xl:text-xl leading-relaxed">3. {{$t('preview_service_s_3')}} </p>
                       <p class="text-3xl t-2  max-2xl:text-base max-xl:text-xl leading-relaxed">&nbsp; &nbsp; &nbsp;- Cybersecurity expert with tools like SIEM , Splunk</p>
                       <p class="text-3xl font-bold max-2xl:text-base max-xl:text-xl leading-relaxed">4. {{$t('preview_service_s_4')}} </p>
                       <p class="text-3xl t-2  max-2xl:text-base max-xl:text-xl leading-relaxed">&nbsp; &nbsp; &nbsp;- Large knowledge in process digitalization and AI with tools like Power platform , Open AI</p>
                       <div class="flex w-full pt-10 text-[#0067f4] underline text-2xl">
            <NuxtLink to="/services"> See more</NuxtLink>

          </div>
                   </div>
                   </div>
                  <div class="w-1/2 h-[70vh] flex justify-center items-center">
                   <img src="../assets/img/startup-7374154_1280.jpg" alt="" class="rounded-3xl h-full w-4/6  ">
                  </div>
       
               </div>
                
               <!-- <div class=" w-3/6 flex flex-col gap-10 w-auto">
               <p class="text-3xl text-sky-400"> “Prophet is an insightful consulting firm. Their highly engaged team is easy to work with and provides actionable recommendations. They bring to the table a unique mix of both analytical and creative thinking.”</p>
             
           </div> -->
           </div>
               </div>
       <!-- ligne separatrice -->
<!-- <div class=" w-full flex h-5 mx-auto px-site max-2xl:px-16 max-md:px-5">
            <div class=" w-full border-b-2 border-white "> </div>
        </div> -->
        <div class=" max-2xl:h-auto mb-56 w-full flex mx-auto px-site max-2xl:px-16 max-md:px-5 mt-52 ">
           
           <div class="w-full h-auto flex flex-col justify-between items-center">
               <div class="flex  flex-col  w-full gap-52 justify-center items-center">
                   <div class="w-full  flex flex-col gap-20">
                       <h2 class="text-4xl font-bold text-[#0067F4] text-right">RECENT CASE STUDIES</h2>
                   
                   </div>
                  <div class="w-full h-[50vh] flex justify-center items-center">
                    <PreviewDetail/>
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
definePageMeta({
    layout: 'mainlayout'
})


useHead({
  title: 'PaulTech | About',
  meta: [
    { name: 'description', property:'og:description',content: "Paultech Inc is a leading startup specializing in process digitalization, AI, observability, and cloud adoption. We offer innovative solutions to modernize and optimize IT environments efficiently and securely. Our services help clients leverage cloud computing, automate business processes, and maximize AI advantages. Driven by our values of humanity, performance, and responsibility, we ensure our solutions meet each clients unique needs, deliver tangible results, and adhere to sustainable and ethical practices." }
  ]
})




</script>
<style scoped>
@media screen and (max-width:1024px) {
   .s1{height: auto;}
}
</style>