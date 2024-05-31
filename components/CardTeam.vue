<template>
    
    <div class="w-full h-auto mx-auto rounded-lg border-2 border-gray-800  p-5 text-gray-800 font-light mb-6 ">
                            <div class="w-full flex flex-col mb-4 items-center justify-center gap-16">
                                <div class="flex-grow pl-3">
                                    <h6 class="font-bold text-xl uppercase text-white lg:text-md"> {{ title }} </h6>
                                </div>
                                <div class="overflow-hidden rounded-full w-52 h-52 bg-gray-50 border border-gray-200">
                                    <img src="https://i.pravatar.cc/100?img=1" alt="" class="w-full">
                                </div>
                               
                               
                            </div>
                            <div class="w-full">
                                <p class="text-2xl max-lg:text-xl leading-tight text-center text-white">{{ description }}</p>
                            </div>
                        </div>
    </template>
    <script setup>
    defineProps({
  title: String,
  description: String
})
    </script>