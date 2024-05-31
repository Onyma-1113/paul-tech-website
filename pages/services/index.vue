<template>
  <TransitionComponent/>
    <div class="transition-wait opacity-0">
      
        <Hero title="Services"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <div class="w-full min-h-screen">
    <div class="w-full  mx-auto">

      <div class="-mx-3 lg:flex items-center card-container opacity-0">
        <div class="px-3 lg:w-2/4">
          <CardService title="Cloud adoption" description="Maximize efficiency with cloud adoption by integrating shift-left practices and embracing cloud-native migration. Transform your infrastructure with cloud adoption: prioritize a shift-left approach and advance through cloud-native migration, accelerating innovation and seamless integration." />
          <CardService title="Process digitalization and AI" description="Enhance process efficiency through digitalization by leveraging data, automation, and AI for streamlined operations and optimized performance." />

        </div>

        <div class="px-3 lg:w-2/4">
          <CardService title="Observability" description="Enhance end-user experience through observability by integrating advanced monitoring tools, ensuring comprehensive visibility and proactive issue resolution." />
          <CardService title="Cybersecurity" description="Strengthen cybersecurity by integrating the necessary tools to detect and address vulnerabilities, ensuring robust protection and swift threat mitigation. " />
        </div>
        
      </div>
      <div class="mb-20">

      </div>
      <ShowRecentProject title="Our Recent project"/>
    </div>
   



  </div>
    </div>

</template>
<script setup>
definePageMeta({
    layout: 'mainlayout'
})

let tl = gsap.timeline()
const serviceAnimation = () =>{
  setTimeout(() => {
        tl.to('.transition-wait',{
            duration:0.5,
            opacity:1
        })
        
    }, 4000);
}



    onMounted(() => {
 
serviceAnimation()
cardShowAnimation({element :'.card-container'})
  })
</script>
<style scoped>

</style>