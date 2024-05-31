<template>
  <TransitionComponent/>
  <div class="transition-wait opacity-0">

    <Hero title="Careers"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
    <div class="w-full min-h-screen flex flex-col gap-52 mt-52">
<div class="card-career opacity-0" >
  <CardCareer title="Developer - DevOps" redirection="/contact"/>

</div>
<div class="card-career opacity-0">
  <CardCareer title="Developer - Exchange Connectivity"  redirection="/contact"/>

</div>
<div class="card-career opacity-0">
  <CardCareer title="Senior DevOps Engineer - Cryptocurrency" redirection="/contact"/>

</div>


    </div>
  </div>

</template>
<script setup>
definePageMeta({
  layout: 'mainlayout'
})

let tl = gsap.timeline()
const serviceAnimation = () => {
  setTimeout(() => {
    tl.to('.transition-wait', {
      duration: 0.5,
      opacity: 1
    })

  }, 4000);
}



onMounted(() => {

  serviceAnimation()
  cardShowAnimation({ element: '.card-career' })
})
</script>
<style scoped></style>