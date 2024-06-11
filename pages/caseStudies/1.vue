<template>
    <!-- <TransitionComponent/> -->
    <div class="">


        <div class="h-screen  w-full flex items-center  mx-auto px-site max-2xl:px-16 max-md:px-5">
            <HeroPage title="Email manager for a construction business"
                :description="'Case studies : Process Digitalization'"></HeroPage>
        </div>

        <div
            class="w-full h-auto max-2xl:gap-10  flex-col bg-[#DFE5F5] flex max-lg:flex-row gap-32 justify-center  px-site pt-28 pb-28 text-black">
            <!-- col compagnie that trust us -->
            <div class="flex flex-col   gap-20 ">

                <h2 class="text-4xl font-bold max-lg:text-2xl ">CHALLENGES</h2>
                <p class="text-2xl max-lg:text-xl">The entrepreneur's inbox currently contains over 4,000 emails, with an incoming flow
                    that far exceeds their processing capacity. This deluge of emails presents a significant challenge,
                    overwhelming their ability to efficiently manage and respond to messages. As a result, productivity
                    is hampered, and the entrepreneur finds it increasingly difficult to address critical requests in a
                    timely manner. This overload not only consumes valuable time but also creates a sense of
                    disorganization, making it challenging to prioritize tasks effectively. Without effective email
                    management strategies in place, the entrepreneur risks falling behind on important communications
                    and missing key opportunities.</p>

                <div class="flex justify-center items-center max-lg:flex-col  gap-20 max-2xl:gap-0">
                    <img src="../../assets/img/courriels.jpg" alt="" class="h-full w-full rounded-lg">
                </div>

                <h2 class="text-4xl font-bold max-lg:text-2xl">SOLUTIONS</h2>
                <div class="flex gap-10 flex-col">
                    <p class="text-4xl text-[#0067F4] max-lg:text-2xl ">Phase 1.
                        Creation of Email Filtering Rules</p>
                    <p class="text-2xl  max-lg:text-xl">The client needed a solution to automatically filter out irrelevant emails,
                        easing the burden of managing a large volume of messages. This flood of emails made it difficult
                        to efficiently handle important correspondence, consuming valuable time and diverting attention
                        from critical tasks. Streamlining this process was crucial to enhancing productivity and
                        ensuring prompt responses to essential inquiries.</p>
                    <p class="text-4xl text-[#0067F4] max-lg:text-2xl">Phase 2. Creation of Folders and Subfolders for Email
                        Organization</p>
                    <p class="text-2xl  max-lg:text-xl">In addition, they sought to implement automated responses for common queries,
                        recognizing the potential for substantial time savings. This proactive approach aimed to
                        streamline communication processes, enabling swift responses to frequently asked questions and
                        freeing up valuable resources for more strategic endeavors.</p>

                    <p class="text-4xl text-[#0067F4] max-lg:text-2xl ">Phase 3. Integration of Artificial Intelligence</p>
                    <p class="text-2xl  max-lg:text-xl">Furthermore, the client expressed a desire for a feature that could identify and
                        prioritize emails necessitating urgent responses. This functionality would enable them to
                        promptly address critical matters, enhancing their overall responsiveness and efficiency in
                        managing incoming communications.</p>


                </div>

                <h2 class="text-4xl font-bold  max-lg:text-2xl">RESULTS</h2>
                <p class="text-2xl  max-lg:text-xl">Implementing these solutions has yielded several benefits. Automatic filtering has significantly decreased the number of irrelevant emails, allowing the client to focus on important messages and reduce the time spent managing their inbox. This reduction in email overload has streamlined daily operations.</p>

<p class="text-2xl  max-lg:text-xl">Automated responses for common queries have streamlined communication, saved time, and ensured quick replies to routine requests. This increased efficiency has freed up the client’s time for more critical tasks.</p>

<p class="text-2xl  max-lg:text-xl">The ability to identify and prioritize urgent emails has ensured that critical issues are addressed promptly, improving the client’s overall responsiveness and productivity.</p>

<p class="text-2xl  max-lg:text-xl">Overall, these solutions have led to improved email management, higher productivity, and better time management. The client now experiences a more organized and efficient workflow, enabling them to handle critical tasks more effectively.</p>
            </div>


        </div>

        <div class="h-fifty-vh mt-56 max-2xl:mb-20 w-full flex items-center mx-auto px-site  max-2xl:px-16 max-md:px-5">
  <CardTestimonial2 title="“Prophet is an insightful consulting firm. Their highly engaged team is easy to work with and provides actionable recommendations. They bring to the table a unique mix of both analytical and creative thinking.”"/>
</div>

        <!-- case studies -->
        <div
            class="h-screen max-2xl:my-20 max-2xl:h-auto w-full flex items-center mx-auto px-site max-2xl:px-16 max-md:px-5">
            <PreviewDetail firstText="SIMILAR CASE STUDIES"/>
        </div>
     
    </div>

</template>
<script setup>
definePageMeta({

    layout: 'mainlayout'
})

onMounted(() => {
})

</script>