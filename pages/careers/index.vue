<template>
  <!-- <TransitionComponent/> -->
  <div class="">

    <div class="h-screen  w-full flex flex-col justify-center mx-auto px-site max-2xl:px-16 max-md:px-5">
            <HeroPage title="Pushing the boundaries of digital asset liquidity provision" description="Join our vibrant and forward-thinking team in the burgeoning field of digital asset liquidity provision."
                 />
                 <div class="w-1/2">
                  <BtnRedirection redirection="/careers/candidaturelibre" title="CANDITATURE LIBRE" showarrow="true"/>

                 </div>
                 
        </div>


        <div class="h-auto  w-full flex flex-col pb-56 gap-52 mx-auto px-site max-2xl:px-16 max-md:px-5">
<div class="card-career opacity-0" >
  <CardCareer title="Developer - DevOps" redirection="/contact"/>

</div>
<div class="card-career opacity-0">
  <CardCareer title="Developer - Exchange Connectivity"  redirection="/contact"/>

</div>
<div class="card-career opacity-0">
  <CardCareer title="Senior DevOps Engineer - Cryptocurrency" redirection="/contact"/>

</div>
<div class="card-career opacity-0">
  <CardCareer title="Developer - Exchange Connectivity"  redirection="/contact"/>

</div>
<div class="card-career opacity-0">
  <CardCareer title="Developer - Exchange Connectivity"  redirection="/contact"/>

</div>
<div class="card-career opacity-0">
  <CardCareer title="Developer - Exchange Connectivity"  redirection="/contact"/>

</div>

</div>

<!-- <div class="w-screen  flex justify-around">
  <Menubar :model="items"  class=""/>
</div> -->


    </div>
 

</template>
<script setup>
import Menubar from 'primevue/menubar';
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


import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]);


onMounted(() => {

  // serviceAnimation()
  cardShowAnimation({ element: '.card-career' })
})
</script>
<style scoped>
.p-menubar{
  width:100%;
  display:flex;
  justify-content: space-between;
}
.p-menubar-root-list{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>