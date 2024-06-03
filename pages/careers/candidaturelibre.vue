<template>
    <!-- <TransitionComponent/> -->
    <div class="">
  
      <div class="h-fifty-vh  w-full flex flex-col justify-center mx-auto px-site max-2xl:px-16 max-md:px-5">
              <HeroPage title="Candidature libre" description="Postuler pour une carrière à la hauteur de ton talent"
                   />
                 
                   
          </div>
  
  
          <div class="h-auto  w-full flex flex-col pb-56 gap-52 mx-auto px-site max-2xl:px-16 max-md:px-5">
            <p class="text-3xl">Sauf indication contraire, tous les champs sont obligatoires.</p>
            <form action="" class="flex flex-col gap-10 items-center">
              <div class="flex flex-col w-1/2">
                <label for="prenom" class=" pl-2 text-3xl">Prenom</label>
                <input type="text"  class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
              </div>
              <div class="flex flex-col w-1/2">
                <label for="prenom" class=" pl-2 text-3xl">Nom</label>
                <input type="text"  class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
              </div>
              <div class="flex flex-col w-1/2">
                <label for="prenom" class=" pl-2 text-3xl">Courriel</label>
                <input type="email"  class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
              </div>
              <div class="flex flex-col w-1/2">
                <label for="prenom" class=" pl-2 text-3xl">Telephone</label>
                <input type="number"  class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black ">
              </div>
              <div class="flex flex-col w-1/2">
                <label for="file" class=" pl-2 text-3xl">Ajoute ton CV</label>
                <input type="file" name="file"  class="mt-5 pt-10 pb-10 pl-2 rounded-xl text-black bg-white">
                <p class="text-gray-400">Un seul fichier.</p>
                <p class="text-gray-400">Limité à 3 Mo.</p>
                <p class="text-gray-400">Types autorisés : jpg, png, pdf, doc, docx.</p>
              </div>
              <div class="flex flex-col w-1/2">
                <label for="file" class=" pl-2 text-3xl">Ajoute ton portfolio (optionnel)</label>
                <input type="file" name="file"  class="mt-5 pt-10 pb-10 pl-2 rounded-xl text-black bg-white">
                <p class="text-gray-400">Un seul fichier.</p>
                <p class="text-gray-400">Limité à 3 Mo.</p>
                <p class="text-gray-400">Types autorisés : jpg, png, pdf, doc, docx.</p>
              </div>
              <div>
                <input type="submit" value="Soumettre" class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-black hover:from-white hover:to-white hover:text-black  hover:duration-300 duration-300  text-white h-14 w-56 text-2xl  flex justify-center items-center rounded-3xl cursor-pointer max-2xl:h-10 max-2xl:w-44 max-2xl:text-lg">
              </div>
            </form>
  
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