<template>
    <!-- <TransitionComponent /> -->
    <div class="">

        <div class=" max-lg:flex-col max-lg:pt-28 max-lg:h-auto  h-fifty-vh pt-56 w-full flex items-center  mx-auto px-site  max-2xl:px-16 max-md:px-5">
            <HeroPage :title="$t('about_title')"
               :description="$t('about_description')" />
            <AbstractAnimation2 />
        </div>
        <div class=" max-2xl:h-auto mb-56 w-full flex mx-auto px-site max-2xl:px-16 max-md:px-5 mt-52">
           
    <div class="w-full h-auto flex flex-col justify-between items-center">
        <div class="flex flex-col  w-full gap-20">
            <h2 class="text-4xl font-bold">{{ $t('about_title_who_are_we') }}</h2>
            <div class="flex wrap justify-around  gap-5 w-full max-lg:flex-col max-lg:items-center">
                <p class="text-3xl">{{ $t('about_title_who_are_we_description') }}</p>

            </div>

        </div>
        <!-- <div class=" w-3/6 flex flex-col gap-10 w-auto">
        <p class="text-3xl text-sky-400"> “Prophet is an insightful consulting firm. Their highly engaged team is easy to work with and provides actionable recommendations. They bring to the table a unique mix of both analytical and creative thinking.”</p>
      
    </div> -->
    </div>
        </div>

        <!-- preview testomonial -->
        <div class="h-96 max-lg:h-screen w-full flex mx-auto mt-10 px-site max-2xl:px-16 max-md:px-5">
            <CardReason />
        </div>

        <div class=" max-2xl:h-auto mb-56 w-full flex mx-auto px-site max-2xl:px-16 max-md:px-5 mt-52">
            <PreviewServices />
        </div>

        <!-- redirection team -->
        <div class="w-full h-eighy-vh  max-2xl:h-auto max-2xl:mb-20 bg-[#0067f4] flex flex-col px-site justify-center items-center">

            <CardTestomonial3 :title="$t('testomonial_about_title')"/>
        </div>

    </div>

</template>
<script setup>
definePageMeta({
    layout: 'mainlayout'
})







</script>