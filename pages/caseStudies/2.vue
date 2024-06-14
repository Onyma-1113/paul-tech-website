<template>
    <!-- <TransitionComponent/> -->
    <div class="">


        <div class="h-screen  w-full flex items-center  mx-auto px-site max-2xl:px-16 max-md:px-5">
            <HeroPage title="Implementation of an AWS B2C" :description="'Case studies : Cloud Adoption'"></HeroPage>
        </div>

        <div
            class="w-full h-auto max-2xl:gap-10  flex-col bg-[#DFE5F5] flex max-lg:flex-row gap-32 justify-center  px-site pt-28 pb-28 text-black">
            <!-- col compagnie that trust us -->
            <div class="flex flex-col   gap-20 max-2xl:gap-0">

                <h2 class="text-4xl font-bold text-[#0067F4]">CHALLENGES</h2>
                <p class="text-2xl">External users who consume applications linked to the university face a number of
                    challenges. They are not identified as university customers, and lifecycle management of these users
                    is complex due to their ephemeral nature. Most of the targeted workloads are hosted at AWS, but a
                    large proportion remain on prem.</p>

                <p class="text-2xl"> The university therefore wanted to implement an AWS B2C tenant to enable connection
                    via authorized
                    sources such as social networks (e.g., LinkedIn, Facebook) and collect information about users so
                    that they could be directed to a "customer" user status. Having limited experience with AWS B2C,
                    the university called on Paultech  to set up a B2C environment.</p>

                <div class="flex justify-center items-center max-lg:flex-col  gap-20 max-2xl:gap-0">
                    <img src="../../assets/img/shutterstock_493599385_3812840d1c.jpg" alt=""
                        class="h-full w-full rounded-lg">
                </div>

                <h2 class="text-4xl font-bold text-[#0067F4] ">SOLUTIONS</h2>
                <div class="flex gap-10 flex-col">
                    <p class="text-4xl font-bold ">Phase 1 . Analysis and definition of the AWS cloud foundation
                    </p>
                    <p class="text-2xl">Paultech delivered workshops on governance, technological environment and
                        operations.</p>
                    <p class="text-4xl font-bold">Phase 2 . AWS landing zone</p>
                    <p class="text-2xl">In addition, they sought to implement automated responses for common queries,
                        recognizing the potential for substantial time savings. This proactive approach aimed to
                        streamline communication processes, enabling swift responses to frequently asked questions and
                        freeing up valuable resources for more strategic endeavors.</p>

                    <p class="text-4xl font-bold ">Phase 3 . B2C design</p>
                    <p class="text-2xl">Furthermore, the client expressed a desire for a feature that could identify and
                        prioritize emails necessitating urgent responses. This functionality would enable them to
                        promptly address critical matters, enhancing their overall responsiveness and efficiency in
                        managing incoming communications.</p>
                    <p class="text-4xl font-bold ">Phase 4 . Realization and implementation of the B2C tenant</p>
                    <p class="text-2xl">Consisted in building and implementing the B2C tenant. FX Innovation then
                        undertook the configuration and creation of cloud prerequisites, creation and configuration of
                        user flows, configuration of authorized identity providers, definition and configuration of user
                        attributes, integration with the application candidate, implementation of security measures, and
                        then concluded the initiative with testing and validation of the solution..</p>


                </div>

                <h2 class="text-4xl font-bold  text-[#0067F4]">RESULTS</h2>
                <p class="text-2xl">After a thorough evaluation of the customer's Azure cloud foundations, FX Innovation
                    delivered an assessment report identifying opportunities and challenges. In parallel, a cloud
                    adoption plan was developed, providing a strategic roadmap for the future. The customer also
                    benefited from an architecture document and the Landing Zone (infrastructure as code - Bicep). The
                    university then received a functional technological architecture document for the application
                    candidate, a detailed solution architecture (FX Innovation model), and an Azure resource deployment
                    file (AID - FX Innovation model). At the end of the project, our customer benefited from a fully
                    functional and secure B2C authentication solution for users with the chosen application candidate.
                </p>

              
            </div>


        </div>

        <!-- case studies -->
        <div
            class="h-screen max-2xl:my-20 max-2xl:h-auto w-full flex items-center mx-auto px-site max-2xl:px-16 max-md:px-5">
            <PreviewDetail firstText="SIMILAR CASE STUDIES" />
        </div>
    </div>

</template>
<script setup>
definePageMeta({

    layout: 'mainlayout'
})

useHead({
  title: 'PaulTech | Case studies - Implementation of an AWS B2C',
  meta: [
    { name: 'description', property:'og:description',content: "Implementation of an AWS B2C : Case studies - Cloud Adoption" }
  ]
})
onMounted(() => {
})

</script>