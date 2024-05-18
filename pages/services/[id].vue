<template>
    <div>
        <Hero title="Digitalisation"
            description="Service - [goal of the service ]Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" />
            <div class="w-full min-h-container flex flex-col gap-20 ">
                <ShowDetail title="Description of the service"/>
                <ShowRecentProject title="Our recent project"/>
    </div>
    </div>

</template>
<script setup
>
definePageMeta({

layout: 'mainlayout'
})

</script>