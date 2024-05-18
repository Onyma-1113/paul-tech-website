<template>
   
    <div class="w-5/12 h-fifty-vh   flex flex-col gap-5 mt-10" :class="showDetail">

    <NuxtLink :to="`/caseStudies/${1}`">
    <img src="/assets/img/digital_camera.jpg" alt="" srcset="" class="w-full h-4/5">
    <h3 class="text-3xl font-bold"> [Name of the compagny]</h3>
    <p class="text-lg">  Development of a web application to manage a borrower rebate program for financial institutions</p>
    </NuxtLink>

    </div>

    </template>
    <script setup>
    defineProps({
        showDetail: String
    })
    </script>