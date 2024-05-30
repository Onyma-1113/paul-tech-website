<template>
    <div>
        <ThePrealoder></ThePrealoder>
        <Navigation></Navigation>
        <div>
            <div class="w-screen mx-auto px-32 max-2xl:px-16 max-md:px-5">
        <slot/>
        <ContactRedirection/>
        </div>
        <Footer/>

        </div>
    </div>
</template>
<script setup>
onMounted(() =>{
    useSmoothScroll()
})
</script>