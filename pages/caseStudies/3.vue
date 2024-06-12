<template>
    <!-- <TransitionComponent/> -->
    <div class="">


        <div class="h-screen  w-full flex items-center  mx-auto px-site max-2xl:px-16 max-md:px-5">
            <HeroPage title="Enhancing Cybersecurity of UDM" :description="'Case studies : Cybersecurity'"></HeroPage>
        </div>

        <div
            class="w-full h-auto max-2xl:gap-10  flex-col bg-[#DFE5F5] flex max-lg:flex-row gap-32 justify-center  px-site pt-28 pb-28 text-black">
            <!-- col compagnie that trust us -->
            <div class="flex flex-col   gap-20 max-2xl:gap-0">

                <h2 class="text-4xl font-bold text-[#0067F4]">CHALLENGES</h2>
                <p class="text-2xl">The University of Montreal faced significant cybersecurity challenges due to its
                    expansive and
                    diverse IT environment, which included on-premises systems, cloud-based applications, and a large
                    number of endpoints. This complexity made it difficult to maintain comprehensive security monitoring
                    and threat detection. The existing security infrastructure lacked integration and advanced threat
                    analytics, leading to delayed responses to security incidents and increased vulnerability to
                    cyberattacks.</p>

                <p class="text-2xl"> The university therefore wanted to implement an Azure B2C tenant to enable
                    connection
                    via authorized
                    sources such as social networks (e.g., LinkedIn, Facebook) and collect information about users so
                    that they could be directed to a "customer" user status. Having limited experience with AzureB2C,
                    the university called on Paultech to set up a B2C environment.</p>

                <div class="flex justify-center items-center max-lg:flex-col  gap-20 max-2xl:gap-0">
                    <img src="../../assets/img/Cybersecurity Definition What is this Field all About.png" alt="" class="h-full w-full rounded-lg">
                </div>

                <h2 class="text-4xl font-bold text-[#0067F4]">SOLUTIONS</h2>
                <div class="flex gap-10 flex-col">
                    <p class="text-4xl font-bold ">Phase 1 . Assessment and Requirement Gathering
                    </p>
                    <p class="text-2xl">Paultech conducted thorough workshops to understand the university’s current
                        cybersecurity posture, specific threat landscape, and compliance requirements. These sessions
                        focused on identifying key vulnerabilities, defining security objectives, and establishing a
                        governance framework for the SIEM implementation. Paultech's experts also assessed the
                        technological environment and operational processes to develop a tailored SIEM strategy.</p>
                    <p class="text-4xl font-bold ">Phase 2 . SIEM Foundation Setup</p>
                    <p class="text-2xl">The initial phase involved setting up the core infrastructure required for the
                        SIEM implementation. This included configuring network components, security protocols, and
                        establishing connectivity between on-premises systems and cloud services. Paultech ensured that
                        the foundation was robust and scalable to support future expansion and integration of additional
                        security data sources.</p>

                    <p class="text-4xl font-bold ">Phase 3 . SIEM Deployment</p>
                    <p class="text-2xl">Paultech proceeded to deploy the SIEM solution across the university's IT
                        environment. This involved installing SIEM agents on various servers and applications,
                        configuring data collection settings, and integrating the SIEM with existing IT security tools.
                        The deployment was meticulously planned to minimize disruptions and ensure seamless integration
                        with the university's diverse infrastructure.</p>
                    <p class="text-4xl font-bold ">Phase 4 . Customization and Optimization</p>
                    <p class="text-2xl">Once deployed, Paultech customized the SIEM dashboards and alerting mechanisms
                        to align with the university's specific security requirements. This included setting up
                        real-time threat monitoring, automated incident detection, and advanced analytics to proactively
                        identify potential security breaches. Paultech also conducted training sessions for the
                        university's IT team to ensure they could effectively use the SIEM for ongoing security
                        monitoring and incident response.</p>


                </div>

                <h2 class="text-4xl font-bold text-[#0067F4]">RESULTS</h2>
                <p class="text-2xl">The implementation of the SIEM solution significantly enhanced the university's
                    cybersecurity capabilities. With real-time visibility into security events and automated threat
                    detection, the IT team could quickly identify and respond to potential threats, significantly
                    reducing the risk of cyberattacks. The unified SIEM platform streamlined security operations,
                    allowing for more efficient incident management and compliance monitoring.
                </p>
                <p class="text-2xl">Paultech's assessment and strategy development provided the university with a clear
                    roadmap for enhancing their cybersecurity posture. The foundation setup and SIEM deployment ensured
                    a robust and scalable solution, while customization and optimization tailored the platform to the
                    university's specific needs. As a result, the university achieved comprehensive security monitoring
                    across their hybrid infrastructure, leading to improved threat detection, reduced operational risks,
                    and enhanced compliance with regulatory requirements.
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

onMounted(() => {
})

</script>