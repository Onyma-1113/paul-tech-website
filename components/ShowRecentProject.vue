<template>
    <div class="show-recent opacity-0">
        <div class="h-three-quart-vh w-full flex justify-between bg-gray-400 rounded-3xl px-10 max-lg:flex-col max-lg:justify-center max-lg:gap-20 max-lg:min-h-container max-lg:py-20 max-lg:min-h-three-quart-vh">
            <div class="h-full w-1/2 flex justify-start items-center max-lg:w-full max-lg:justify-center">
                <!-- ici mettre en props pour garder  nimporte quel objet -->
                <h1 class="text-5xl font-bold">{{ title }}</h1>
            </div>
            <div class="h-full w-full flex items-center justify-end  max-lg:w-full max-lg:justify-center">
                 <!-- ici mettre en props pour garder  nimporte quel objet -->
<CardProject showDetail="w-7/12"/>              
            </div>
    
        </div>
    </div>
    </template>
    <script setup>
    defineProps({
      title: String,
      description: String
    })




    
   
    onMounted(() => {
    
    cardShowAnimation({element :'.show-recent'})
    })
 

    </script>