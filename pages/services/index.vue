<template>
  <!-- <TransitionComponent/> -->
    <div class="">
      
            
              <div class="h-fifty-vh  w-full flex mx-auto px-site max-2xl:px-16 max-md:px-5">
                <HeroPage title="We help leaders turn uncertainty into competitive advantage."></HeroPage>
              </div>
    </div>

</template>
<script setup>
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