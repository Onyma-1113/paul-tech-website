<template>
    <div class="show-recent opacity-0 cd-recent">
        <div class="h-three-quart-vh w-full flex justify-between bg-gray-800 rounded-3xl px-10 max-lg:flex-col max-lg:justify-center max-lg:gap-20 max-lg:min-h-container max-lg:py-20 max-lg:min-h-three-quart-vh">
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
    <style scoped>
    .cd-recent{
      /* 0, 132, 199, */
      background: rgba(41, 41, 41, 0);
    box-shadow: 0 0px 100px 0 rgba( 0, 132, 199, 0.37 );
    backdrop-filter: blur( 0px );
    -webkit-backdrop-filter: blur( 0px );
    border-radius: 30px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    }</style>