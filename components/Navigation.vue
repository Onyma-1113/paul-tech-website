<template>
    <div>
       <nav class="h-32 w-screen mx-auto px-32 flex justify-center items-center ">
        <ul class="h-1/2 w-full flex flex-row justify-between px-20 items-center text-red-400 bg-gray-700 rounded-3xl text-lg">
            <li class="w-36"><NuxtLink to="/">Paultech</NuxtLink></li>

            <div class="flex w-1/4 justify-between">
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/caseStudies">Case Studies</NuxtLink></li>
        </div>


            <li>
            <NuxtLink to="/contact">
            <div class="contact-btn bg-white h-11 w-36 flex justify-center items-center rounded-3xl">
               Get in touch
            </div>
            </NuxtLink></li>



        </ul>
       </nav>
    </div>

</template>
<script setup>
</script>
<style scoped>
.contact-btn{
    transition: 0.3s;
}
.contact-btn:hover{
   
    background-color:black
}

</style>