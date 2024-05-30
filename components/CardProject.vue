<template>

    <div class="w-5/12 h-fifty-vh   flex flex-col gap-5 mt-10 max-xl:w-10/12" :class="showDetail">

        <NuxtLink :to="`/caseStudies/${1}`" >
            <div class="overflow-hidden">
            <img src="/assets/img/digital_camera.jpg" alt="" srcset="" class="w-full h-4/5 img-project hover:scale-110 duration-300 overflow-hidden">
        </div>
            <h3 class="text-3xl font-bold"> [Name of the compagny]</h3>
            <p class="text-lg"> Development of a web application to manage a borrower rebate program for financial
                institutions</p>
        </NuxtLink>

    </div>

</template>
<script setup>
defineProps({
    showDetail: String
})
</script>
<style scoped>
.img-project:hover{

}
</style>