<template>
      <!-- <TransitionComponent/> -->
      <div class="">
      
            
        <div class="h-screen  w-full flex items-center  mx-auto px-site max-2xl:px-16 max-md:px-5">
          <HeroPage title="Process digitalization and AI" description="Enhance process efficiency through digitalization by leveraging data, automation, and AI for streamlined operations and optimized performance."></HeroPage>
        </div>

        <div class="h-screen max-2xl:h-auto max-2xl:mb-20 w-full flex mx-auto px-site max-2xl:px-16 max-md:px-5 mt-52 max-2xl:mt-0">
            <div class="w-full h-auto flex flex-col justify-between items-center">
    <div class="flex flex-col  w-full gap-20 max-lg:gap-10">
        <h2 class="text-4xl font-bold">How it works</h2>
        <div class="flex max-lg:flex-col wrap justify-between max-lg:justify-around gap-5 w-full">
            
            <div class="flex flex-col  gap-10 w-1/2  max-lg:w-full">
                <img src="../../assets/img/Consumer-Demand.png" alt="" srcset="" class="h-32 w-32 max-lg:h-24 max-lg:w-24 ">
                <p class=" text-2xl  duration-300 hover:text-[#0067f4] cursor-pointer">Analyse
                    d’opportunité
                </p>
                <p>Notre équipe d’analyste d’affaires
                    vous aide à cibler les processus
                    métier en lien avec vos orientations
                    stratégiques. Ensuite, une analyse
                    d’opportunité en 5 points sera
                    effectuée et présentée à votre
                    organisation.</p>
            </div>
            <div class="flex flex-col gap-10 w-1/2 max-lg:w-full ">
                <img src="../../assets/img/2.2.2-Springbox_Services_Integrated-Planning-Orchestration.png" alt="" srcset="" class="h-32 w-32 max-lg:h-24 max-lg:w-24 ">
                <p class=" text-2xl  duration-300 hover:text-[#0067f4] cursor-pointer">Mapping de
                    processus
                </p>
<p>Notre équipe d’analyste d’affaires se
    met à l’écoute de vos pratiques. Par la
    suite, des ateliers d’optimisation de
    processus sont organisés. En dernière
    étape, des séances de validation et
    présentation sont organisées afin
    d’enteriner le(s) processus.</p>
            </div>
           
        </div>
        <div class="flex wrap max-lg:flex-col justify-around gap-5 w-full">
            
            <div class="flex flex-col justify-between gap-10 w-1/2 max-lg:w-full">
                <img src="../../assets/img/Revolutionize-Experiences.png" alt="" srcset="" class="h-32 w-32 max-lg:h-24 max-lg:w-24 ">
                <p class=" text-2xl  duration-300 hover:text-[#0067f4] cursor-pointer">Digitalisation et suivi
                    de performance
                </p><p>Notre équipe de développement
                    se charge de faire la digitalisation
                    selon vos exigences techniques et
                    de sécurité. Puis nous travaillons
                    avec votre équipe de gestion pour
                    la visibilité sur l’efficacité et le
                    retour sur l’investissement.</p>            </div>
      
           
        </div>


    </div>
    <!-- <div class=" w-3/6 flex flex-col gap-10 w-auto">
    <p class="text-3xl text-sky-400"> “Prophet is an insightful consulting firm. Their highly engaged team is easy to work with and provides actionable recommendations. They bring to the table a unique mix of both analytical and creative thinking.”</p>
  
</div> -->
</div>
    </div>
   <!-- case studies -->
   <div class="h-screen max-2xl:my-20 max-2xl:h-auto w-full flex items-center mx-auto px-site max-2xl:px-16 max-md:px-5">
    <PreviewDetail />
  </div>
</div>

</template>
<script setup
>
definePageMeta({

layout: 'mainlayout',
pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    },
})

</script>