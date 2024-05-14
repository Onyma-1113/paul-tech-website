<template>
    <div>
        <Navigation></Navigation>
        <div>
            <div class="w-screen mx-auto px-32 max-2xl:px-16 ">
        <slot/>
        <ContactRedirection/>
        </div>
        <Footer/>

        </div>
    </div>
</template>
<script setup>
</script>