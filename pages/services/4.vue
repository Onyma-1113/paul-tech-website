<template>
    <!-- <TransitionComponent/> -->
    <div class="">

<!-- process digi -->
        <div class="h-screen  w-full flex items-center  mx-auto px-site max-2xl:px-16 max-md:px-5">
            <HeroPage :title="$t('preview_service_s_4')"
                :description="$t('process_description')">
            </HeroPage>
        </div>

        <!-- 
             service_work_title_1: "1. Opportunity Analysis",
            service_work_title_2: "2. Process Mapping",
            service_work_title_3: "3. Digitalization and Performance Tracking",
            service_work_description_1: "Our team of business analysts helps you target business processes in line with your strategic directions. Then, a 5-point opportunity analysis will be conducted and presented to your organization.",
            service_work_description_2: "Our team of business analysts listens to your practices. Subsequently, process optimization workshops are organized. In the final step, validation and presentation sessions are held to confirm the process(es).",
            service_work_description_3: "Our development team handles digitalization according to your technical and security requirements. Then, we work with your management team to provide visibility on efficiency and return on investment.",




         -->
        <div
            class="h-auto max-2xl:h-auto max-2xl:mb-20 w-full flex mx-auto px-site max-2xl:px-16 max-md:px-5 mt-52 max-2xl:mt-0">
            <div class="w-full h-auto flex flex-col justify-between items-center">
                <div class="flex flex-col  w-full gap-20 max-lg:gap-10">
                    <h2 class="text-4xl font-bold">{{ $t('service_work_title') }}</h2>
                    <div class="flex max-lg:flex-col justify-between max-lg:justify-around gap-5 w-full">

                        <div class="flex flex-col  gap-10 w-1/2  max-lg:w-full border-2 border-[#1C1D3B] p-10 box hover:relative hover:top-100 duration-300">
                            <img src="../../assets/img/Consumer-Demand.png" alt="" srcset=""
                                class="h-32 w-32 max-lg:h-24 max-lg:w-24 ">
                            <p class=" text-2xl  duration-300  cursor-pointer">{{ $t('service_work_title_1') }}
                            </p>
                            <p>{{ $t('service_work_description_1') }}</p>
                        </div>
                        <div class="flex flex-col gap-10 w-1/2 max-lg:w-full border-2 border-[#1C1D3B] p-10 box">
                            <img src="../../assets/img/2.2.2-Springbox_Services_Integrated-Planning-Orchestration.png"
                                alt="" srcset="" class="h-32 w-32 max-lg:h-24 max-lg:w-24 ">
                            <p class=" text-2xl  duration-300  cursor-pointer">{{ $t('service_work_title_2') }}
                            </p>
                            <p>{{ $t('service_work_description_2') }}</p>
                        </div>
                        <div class="flex flex-col justify-between gap-10 w-1/2 max-lg:w-full border-2 border-[#1C1D3B] p-10 box">
                            <img src="../../assets/img/Revolutionize-Experiences.png" alt="" srcset=""
                                class="h-32 w-32 max-lg:h-24 max-lg:w-24 ">
                            <p class=" text-2xl  duration-300  cursor-pointer">{{ $t('service_work_title_3') }}
                            </p>
                            <p>{{ $t('service_work_description_3') }}</p>
                        </div>


                    </div>
                    <div class="flex wrap max-lg:flex-col justify-around gap-5 w-full">

                       

                    </div>


                </div>
                <!-- <div class=" w-3/6 flex flex-col gap-10 w-auto">
    <p class="text-3xl text-sky-400"> “Prophet is an insightful consulting firm. Their highly engaged team is easy to work with and provides actionable recommendations. They bring to the table a unique mix of both analytical and creative thinking.”</p>
  
</div> -->
            </div>
        </div>
        <!-- case studies -->
        <div
            class="h-screen max-2xl:my-20 max-2xl:h-auto w-full flex items-center mx-auto px-site max-2xl:px-16 max-md:px-5">
            <PreviewDetail :firstText="$t('case_title_related')" />
        </div>
    </div>

</template>
<script setup>
definePageMeta({

    layout: 'mainlayout',
    pageTransition: {
        name: 'fade',
        mode: 'out-in' // default
    },
})

useHead({
  title: 'PaulTech | Service - Cloud adoption',
  meta: [
    { name: 'description', property:'og:description',content: "Maximize efficiency with cloud adoption by integrating shift-left practices and embracing cloud-native migration. Transform your infrastructure with cloud adoption: prioritize a shift-left approach and advance through cloud-native migration, accelerating innovation and seamless integration."}
  ]
})

</script>
<style scoped>
.box{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>