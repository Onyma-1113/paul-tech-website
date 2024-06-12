

<template>
    <NuxtLink :to="redirection" >
      <div
        class="h-5  w-full  flex-col font-bold hover:duration-300 duration-300 hover:bg-gradient-to-r from-[#0067f4] to-[#DFE5F5] hover:to-blue-500 hover:text-transparent hover:bg-clip-text rounded-3xl flex justify-start  gap-5 text-white text-md cursor-pointer max-2xl:h-10 max-2xl:w-44 max-2xl:text-lg">
   <div class="ici" :class="widthtext">
        <p class="hover:text-[#0067F4] duration-300 uppercase">{{title}} &#x279E;</p>
    <!-- <div class="flex justity-center items-center arrow-container " v-if="showarrow == 'true'">
        <div class=" arrow right"></div>
    </div> -->
   
                 
        <!-- <div class="h-1 bg-[#DFE5F5] line-blue"></div> -->
    </div>
                
        
      </div>
    </NuxtLink>
</template>
<script setup>
defineProps({
    title: String,
    redirection : String,
    showarrow : String,
    widthtext:String
})
</script>
<style scoped>

/* .line-blue{width: auto;} */
.ici {
    color: #fff;
   width: auto;
    cursor: pointer;
    position: relative;
}

/* .ici::after {
    content: '';
    position: absolute;
    height: 5px;
    left: 0;
    bottom: 0;
    width: 0;
    background: #0067F4;
    transition:  .2s;
}

.ici:hover::after {
    width: 100%;
}
     */
.arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 4px;
}
.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}



button {
    border: 0;
    position: relative;
}

button::before,
button::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
}

.spin {
    height: 200px;
    width: 200px;
}

.spin::before,
.spin::after {
    top: 0;
    left: 0;
}

.spin::before {
    border: 2px solid transparent;
}

.spin:hover::before {
    border-top-color: #0eb7da;
    border-right-color: #0eb7da;
    border-bottom-color: #0eb7da;
    transition: border-top-color 0.15s linear, border-right-color 0.15s linear 0.10s, border-bottom-color 0.15s linear 0.20s;
}

.spin::after {
    border: 0 solid transparent;
}

.spin:hover::after {
    border-top: 2px solid #0eb7da;
    border-left-width: 2px;
    border-right-width: 2px;
    transform: rotate(270deg);
    transition: transform 0.4s linear 0s, border-left-width 0s linear 0.35s, -webkit-transform 0.4s linear 0s;
}

.circle {
    border-radius: 100%;
    box-shadow: none;
}

.circle::before,
.circle::after {
    border-radius: 100%;
}

</style>