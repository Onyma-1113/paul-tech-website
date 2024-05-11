<template>
    <div>
        <Hero title="About"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        <div class="gap-20 flex flex-col">
            <ShowDetail></ShowDetail>
            <ShowDetail></ShowDetail>
        </div>


    </div>


</template>
<script setup>
definePageMeta({
    layout: 'mainlayout'
})
</script>