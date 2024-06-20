<template>
  <!-- <TransitionComponent/> -->
  <div class="">

    <div class=" h-eighy-vh  pt-24 mb-56 w-full flex flex-col gap-5 justify-center mx-auto px-site max-2xl:px-16 max-md:px-5">
            <HeroPage :title="$t('careers_title')" :description="$t('careers_description')"
                 />
                 <div class="w-1/2">
                  <BtnRedirection redirection="/careers/candidaturelibre" :title="$t('redirection_title_candidature')" showarrow="true" widthtext="w-28"/>

                 </div>
                 
        </div>

      <!--   <div
      class="s1 max-lg:flex-col max-lg:pt-28 max-lg:h-auto  h-[40vh]  pt-56 w-full flex items-center  mx-auto  max-2xl:px-16 max-md:px-5 overflow-hidden">
      <HeroPage title="CAREERS" img="/_nuxt/assets/img/cytonn-photography-n95VMLxqM2I-unsplash.jpg" />

    </div> -->


        <div class="h-auto  w-full flex flex-col pb-56 gap-52 mx-auto px-site max-2xl:px-16 max-md:px-5">
<div class="card-career opacity-0" >
 

  <CardCareer title="Developer - DevOps" redirection="https://www.linkedin.com/jobs/search/?currentJobId=3944465883&f_EA=true&keywords=devopst"/>


</div>
<div class="card-career opacity-0">
  <CardCareer title="Developer - Exchange Connectivity"  redirection="https://www.linkedin.com/jobs/search/?currentJobId=3927807238&f_EA=true&geoId=101174742&keywords=Developer%20-%20Exchange%20Connectivity&location=Canada&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true"/>

</div>
 <div class="card-career opacity-0">
  <CardCareer title="Senior DevOps Engineer - Cryptocurrency" redirection="https://www.linkedin.com/jobs/search/?currentJobId=3919913126&f_EA=true&geoId=101174742&keywords=Senior%20DevOps%20Engineer%20-%20Cryptocurrency&location=Canada&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true"/>

</div>
<!-- 
<div class="card-career opacity-0">
  <CardCareer title="Developer - Exchange Connectivity"  redirection="/contact"/>

</div>
<div class="card-career opacity-0">
  <CardCareer title="Developer - Exchange Connectivity"  redirection="/contact"/>

</div>
<div class="card-career opacity-0">
  <CardCareer title="Developer - Exchange Connectivity"  redirection="/contact"/>

</div> -->

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

useHead({
  title: 'PaulTech | Careers',
  meta: [
    { name: 'description', property:'og:description',content: "Pushing the boundaries of digital asset liquidity provision Join our vibrant and forward-thinking team in the burgeoning field of digital asset liquidity provision." }
  ]
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