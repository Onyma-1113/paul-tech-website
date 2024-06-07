<template>
  <!-- <TransitionComponent/> -->
    <div class="">
      
            
              <div class="h-screen w-full flex items-center  mx-auto px-site max-2xl:px-16 max-md:px-5">
                <HeroPage title="We help leaders turn uncertainty into competitive advantage."></HeroPage>
              </div>

              <div class="h-screen max-2xl:h-auto w-full flex mx-auto px-site max-2xl:px-16 max-md:px-5 mt-52 max-2xl:mt-0">
                <div class="w-full h-auto flex flex-col justify-between items-center">
        <div class="flex flex-col  w-full gap-20 max-lg:gap-10">
            <h2 class="text-4xl font-bold">Services</h2>
            <div class="flex max-lg:flex-col wrap justify-between max-lg:justify-around gap-5 w-full">
                
                <div class="flex flex-col  gap-10 w-1/2  max-lg:w-full">
                    <img src="../../assets/img/Consumer-Demand.png" alt="" srcset="" class="h-32 w-32 max-lg:h-24 max-lg:w-24 ">
                    <p class=" text-2xl  duration-300 hover:text-green-400 cursor-pointer">Cloud adoption
                    </p>
                    <p>Maximize efficiency with cloud adoption by integrating shift-left practices and embracing cloud-native migration. Transform your infrastructure with cloud adoption: prioritize a shift-left approach and advance through cloud-native migration, accelerating innovation and seamless integration.</p>
                </div>
                <div class="flex flex-col gap-10 w-1/2 max-lg:w-full ">
                    <img src="../../assets/img/2.2.2-Springbox_Services_Integrated-Planning-Orchestration.png" alt="" srcset="" class="h-32 w-32 max-lg:h-24 max-lg:w-24 ">
                    <p class=" text-2xl  duration-300 hover:text-green-400 cursor-pointer">Observability
                    </p>
                    <p>Enhance end-user experience through observability by integrating advanced monitoring tools, ensuring comprehensive visibility and proactive issue resolution.</p>

                </div>
               
            </div>
            <div class="flex wrap max-lg:flex-col justify-around gap-5 w-full">
                
                <div class="flex flex-col justify-between gap-10 w-1/2 max-lg:w-full">
                    <img src="../../assets/img/Revolutionize-Experiences.png" alt="" srcset="" class="h-32 w-32 max-lg:h-24 max-lg:w-24 ">
                    <p class=" text-2xl  duration-300 hover:text-green-400 cursor-pointer">Cybersecurity
                    </p>
                    <p>Strengthen cybersecurity by integrating the necessary tools to detect and address vulnerabilities, ensuring robust protection and swift threat mitigation. </p>
                </div>
                <div class="flex flex-col gap-10 justify-between w-1/2 max-lg:w-full ">
                    <img src="../../assets/img/Pathways-to-Growth.png" alt="" srcset="" class="h-32 w-32 max-lg:h-24 max-lg:w-24 ">
                    <p class=" text-2xl  duration-300 hover:text-green-400 cursor-pointer">Process digitalization and AI
                    </p>
                    <p>Enhance process efficiency through digitalization by leveraging data, automation, and AI for streamlined operations and optimized performance.</p>
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