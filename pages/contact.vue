<template>
    <div class=" h-screen flex justify-center items-center">
        <div class="h-full w-1/2 flex flex-col justify-center gap-20">
            <h1 class="text-8xl font-bold max-2xl:text-5xl">Contact</h1>
            <p class="text-3xl max-2xl:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            </p>
        </div>
        <div class="h-three-quart-vh w-1/2 flex justify-center items-center">
            <!-- <div>
                <h1 class="text-8xl text-center">Formulaire</h1>
            </div> -->
            <div id="contact-us" class="overflow-hidden bg-white py-16 px-4 text-black sm:px-6 lg:px-8 lg:py-24">
    <div class="relative mx-auto max-w-xl">
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
        <div class="mt-12">
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
</div>

        </div>
        
    </div>

</template>
<script setup>
definePageMeta({
    layout:'contactlayout'
})
</script>