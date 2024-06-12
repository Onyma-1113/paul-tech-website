<template>
    <!-- <TransitionComponent/> -->
    <div class="">
  
      <div class="h-screen w-full flex flex-col justify-center items-start mx-auto px-site max-2xl:px-16 max-md:px-5">
              <HeroPage :title="$t('canditature_title')" :description="$t('canditature_description')"
                   />
                 
                   
          </div>
  
          <!-- 
             redirection_title_candidature:'APPLICATION',
            canditature_title: "Open Application",
            canditature_description: "Apply for a career that matches your talent",
            canditature_mention: "Unless otherwise indicated, all fields are required.",
            canditature_first_name: 'First Name',
            canditature_last_name: 'Last Name',
            canditature_email: 'Email',
            canditature_phone: 'Phone',
            canditature_cv_title: 'Attach your resume',
            canditature_nb_file: 'One File',
            canditature_limit: 'Limit 3 Mo.',
            canditature_file_auth: 'File authorize',
           -->
  
          <div class="h-auto  w-full flex flex-col pb-56 gap-52 mx-auto px-site max-2xl:px-16 max-md:px-5">
            <p class="text-3xl">{{ $t('canditature_mention') }}</p>
            <form action="" class="flex flex-col gap-10 items-center">
              <div class="flex flex-col w-1/2">
                <label for="prenom" class=" pl-2 text-3xl">{{ $t('canditature_first_name') }}</label>
                <input type="text"  class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
              </div>
              <div class="flex flex-col w-1/2">
                <label for="prenom" class=" pl-2 text-3xl">{{ $t('canditature_last_name') }}</label>
                <input type="text"  class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
              </div>
              <div class="flex flex-col w-1/2">
                <label for="prenom" class=" pl-2 text-3xl">{{ $t('canditature_email') }}</label>
                <input type="email"  class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
              </div>
              <div class="flex flex-col w-1/2">
                <label for="prenom" class=" pl-2 text-3xl">{{ $t('canditature_phone') }}</label>
                <input type="number"  class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black ">
              </div>
              <div class="flex flex-col w-1/2">
                <label for="file" class=" pl-2 text-3xl">{{ $t('canditature_cv_title') }}</label>
                <input type="file" name="file"  class="mt-5 pt-10 pb-10 pl-2 rounded-xl text-black bg-white">
                <p class="text-gray-400">{{ $t('canditature_nb_file') }}</p>
                <p class="text-gray-400">{{ $t('canditature_limit') }}</p>
                <p class="text-gray-400">{{ $t('canditature_file_auth') }}: jpg, png, pdf, doc, docx.</p>
              </div>
              <div class="flex flex-col w-1/2">
                <label for="file" class=" pl-2 text-3xl">{{ $t('canditature_porfolio_title') }}</label>
                <input type="file" id="file" name="file" placeholder="haha" class="mt-5 pt-10 pb-10 pl-2 rounded-xl text-black bg-white">
                <p class="text-gray-400">{{ $t('canditature_nb_file') }}</p>
                <p class="text-gray-400">{{ $t('canditature_limit') }}</p>
                <p class="text-gray-400">{{ $t('canditature_file_auth') }}: jpg, png, pdf, doc, docx.</p>
              </div>
              <div>
                <input type="submit" :value="$t('candidature_submit')" class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-black hover:from-white hover:to-white hover:text-black  hover:duration-300 duration-300  text-white h-14 w-56 text-2xl  flex justify-center items-center rounded-3xl cursor-pointer max-2xl:h-10 max-2xl:w-44 max-2xl:text-lg">
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