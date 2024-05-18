<template>
    <div>
        <Hero title="Case studies"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
            <div class="w-full flex justify-between flex-wrap">
    <CardProject showDetail="w-5/12"/>
    <CardProject showDetail="w-5/12"/>
    <CardProject showDetail="w-5/12"/>
    <CardProject showDetail="w-5/12"/>
    <CardProject showDetail="w-5/12"/>
  </div>
  
    </div>
</template>
<script setup>
definePageMeta({

    layout: 'mainlayout'
})
</script>
<style scoped></style>