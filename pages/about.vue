<template>
    <div>
        <Hero title="About"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <div class="gap-20 flex flex-col">
            <ShowDetail title="Our Values"></ShowDetail>
            <ShowDetail title="Our Values"></ShowDetail>
        </div>
        <div class="w-full min-h-screen">
            <CardTitle justify="justify-center" align="text-center" title="Our Team"/>
    <div class="w-full  mx-auto mb-64">

      <div class="-mx-3 lg:flex items-center justify-center ">
        <div class="px-3 lg:w-1/3 mb-64">
          <CardTeam title="Chef executif - john doe" description="Il s'occupe de la qualité client et le bon fonctionnement du déroulement "/>
          
        </div>
        
       
      </div>
      
      <div class="-mx-3 lg:flex items-center">
        <div class="px-3 lg:w-1/3">
            <CardTeam title="Chef executif - john doe" description="Il s'occupe de la qualité client et le bon fonctionnement du déroulement "/>
            <CardTeam title="Chef executif - john doe" description="Il s'occupe de la qualité client et le bon fonctionnement du déroulement "/>
        </div>
        <div class="px-3 lg:w-1/3">
            <CardTeam title="Chef executif - john doe" description="Il s'occupe de la qualité client et le bon fonctionnement du déroulement "/>
            <CardTeam title="Chef executif - john doe" description="Il s'occupe de la qualité client et le bon fonctionnement du déroulement "/>
        </div>
        <div class="px-3 lg:w-1/3">
            <CardTeam title="Chef executif - john doe" description="Il s'occupe de la qualité client et le bon fonctionnement du déroulement "/>
            <CardTeam title="Chef executif - john doe" description="Il s'occupe de la qualité client et le bon fonctionnement du déroulement "/>
        </div>
    </div>
    </div>


  </div>


    </div>


</template>
<script setup>
definePageMeta({
    layout: 'mainlayout'
})
</script>