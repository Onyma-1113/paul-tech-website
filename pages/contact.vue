<template>
  <!-- <TransitionComponent/> -->
  <div
    class="h-screen w-full flex items-center max-lg:flex-col max-lg:pt-28 max-lg:h-auto max-lg:justify-center  mx-auto px-site max-2xl:px-16 max-md:px-5">
    <!-- <div class="h-screen max-lg:h-auto flex justify-center items-center max-lg:flex-col"> -->

    <div class="h-full w-1/2 flex flex-col justify-center gap-20 max-lg:w-full max-lg:mt-56">
      <!-- <h1 class="text-8xl font-bold max-2xl:text-5xl max-md:text-4xl selector bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Contact</h1>
            <p class="text-4xl max-2xl:text-2xl max-md:text-xl selector">
              Dear client, if you'd like to discuss future projects or have any other questions, please don't hesitate to contact us. We look forward to hearing from you.
            </p> -->

      <div class="w-full flex flex-col h-auto gap-5 max-lg:w-full max-2xl:h-auto max-2xl:mt-20">
        <div class="h-auto">
          <h2 id="element"
            class="h-full pb-2 selector opacity-100 text-8xl h-auto font-bold max-2xl:text-6xl max-2xl:flex max-2xl:justify-start max-2xl:items-center  max-md:text-5xl  bg-gradient-to-r from-[#0067f4] to-[#DFE5F5] text-transparent bg-clip-text">
           Contact</h2>

        </div>

        <span class="h-auto opacity-100 selector text-2xl max-2xl:text-base max-md:text-xl" ref="descrip"> Dear client, if you'd like to discuss future projects or have any other questions, please don't hesitate to contact us. We look forward to hearing from you.</span>




      </div>


    </div>
    <div class="h-three-quart-vh w-1/2 flex justify-center items-center max-sm:h-auto max-lg:w-full">
      <!-- <div>
                <h1 class="text-8xl text-center">Formulaire</h1>
            </div> -->
      <!-- <div id="contact-us" class="overflow-hidden bg-white py-16 px-4 text-black sm:px-6 lg:px-8 lg:py-24">
    <div class="relative mx-auto max-w-xl max-sm:w-full">
        <svg class="absolute left-full translate-x-1/2 transform" width="404" height="404" fill="none"
            viewBox="0 0 404 404" aria-hidden="true">
            <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20"
                    patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-slate-600"
                        fill="currentColor"></rect>
                </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect>
        </svg>
        <svg class="absolute right-full bottom-0 -translate-x-1/2 transform" width="404" height="404" fill="none"
            viewBox="0 0 404 404" aria-hidden="true">
            <defs>
                <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20"
                    patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-slate-800"
                        fill="currentColor"></rect>
                </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect>
        </svg>
        <div class="text-center">
          
            <p class="mt-4 text-lg leading-6 text-gray-500 text-black">Please use the form below to contact us.
                Thank you!
            </p>
        </div>
        <div class="mt-12 ">
            <form class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div class="sm:col-span-2">
                    <label for="name" class="block text-sm font-medium text-black">Name</label>
                    <div class="mt-1">
                        <input name="name" type="text" id="name" autocomplete="organization" required="" class="border-2 border-black block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500  ">
                    </div>
                </div>
                <div class="sm:col-span-2">
                    <label for="email" class="block text-sm font-medium text-black">Email</label>
                    <div class="mt-1">
                        <input name="email" id="email" required="" type="email" autocomplete="email" class="border-2 border-black block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500  ">
                    </div>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block text-sm font-medium text-black">Message</label>
                    <div class="mt-1">
                        <textarea required="" name="message" id="message" rows="4" class="border-2 border-black block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 "></textarea>
                    </div>
                </div>
                <div class="flex justify-end sm:col-span-2">
                    <button type="submit" class="inline-flex items-center rounded-md px-4 py-2 font-medium focus:outline-none focus-visible:ring focus-visible:ring-sky-500 shadow-sm sm:text-sm transition-colors duration-75 text-sky-500 border border-sky-500 hover:bg-sky-50 active:bg-sky-100 disabled:bg-sky-100 dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800 disabled:cursor-not-allowed">
                        <span>Send Message</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div> -->
      <form class="font-[sans-serif] text-[#333] max-w-4xl w-full px-6 my-10">
        <div class="grid sm:grid-cols-2 gap-10">
          <div class="relative flex items-center">
            <label class="text-[13px] absolute top-[-30px] left-0 text-white">First Name</label>
            <input type="text" placeholder="Enter first name"
              class="px-2 pt-4 pb-3 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none rounded-md" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
              viewBox="0 0 24 24">
              <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                data-original="#000000"></path>
            </svg>
          </div>

          <div class="relative flex items-center">
            <label class="text-[13px] absolute top-[-30px] left-0 text-white">Last Name</label>
            <input type="text" placeholder="Enter last name"
              class="px-2 pt-4 pb-3 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none rounded-md" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
              viewBox="0 0 24 24">
              <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                data-original="#000000"></path>
            </svg>
          </div>

          <div class="relative flex items-center sm:col-span-2">
            <label class="text-[13px] absolute top-[-30px] left-0 text-white">Phone</label>
            <input type="email" placeholder="Enter Phone"
              class="px-2 pt-3 pb-3 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none rounded-md" />
            <svg fill="#bbb" class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 64 64">
              <path
                d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                data-original="#000000"></path>
            </svg>
          </div>


          <div class="relative flex items-center sm:col-span-2">
            <label class="text-[13px] absolute top-[-30px] left-0 text-white">Email</label>
            <input type="email" placeholder="Enter email"
              class="px-2 pt-4 pb-3 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none rounded-md" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
              viewBox="0 0 682.667 682.667">
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                </clipPath>
              </defs>
              <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                <path fill="none" stroke-miterlimit="10" stroke-width="40"
                  d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                  data-original="#000000"></path>
                <path
                  d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                  data-original="#000000"></path>
              </g>
            </svg>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-white">Subject Message</label>
            <div class="mt-1">
              <textarea required="" name="message" id="message" rows="4"
                class="border-2 .border-gray-100  block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 "></textarea>
            </div>
          </div>

        </div>

        <button type="button"
          class="mt-10 px-2 py-2.5 w-full rounded-sm text-sm bg-[#333] hover:bg-[#222] text-white bg-gradient-to-r from-cyan-500 to-blue-500">Submit</button>
      </form>

    </div>

  </div>

</template>
<script setup>
definePageMeta({
  layout: 'mainlayout'
})


import { gsap } from 'gsap'
let tl = gsap.timeline()


const heroAnimation = () => {


  
    tl.from('.selector ',
      {
       
        opacity: 0,
                y: 100,
                duration: 1,
                stagger:0.1
       
      })
  




}

onMounted(() => {
  // titleHomeAnimation({element : '.selector'})
  heroAnimation()

})




</script>