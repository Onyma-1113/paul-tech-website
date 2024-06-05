<script>



</script>

<template>
    <div>
        <!-- <ThePrealoder></ThePrealoder> -->
        <Navigation :items="items"></Navigation>
        <div class="square"></div>
        <div class="square-2"></div>
        <div class="square-3"></div>
        <div class="under-container">
 
            <div class="w-screen">
                
                <!-- <img src="../assets/img/squares.jpg" alt="" srcset="" class="fixed top-0 left-0 w-screen h-screen z-0"> -->
                <slot />
      
                    <ContactRedirection />
         
               
                  
             
                
            </div>
            <Footer />

        </div>
    </div>
</template>
<script setup>


// const home = ref({
//     label:'Home',
//     route: '/'
// });
// const items = ref([
//     { label: 'Components' },
//     { label: 'Form' },
//     { label: 'InputText', route: '/contact' }

// ]);
const careers = "careers"
const route = useRoute()
  const routeName = route.name
onMounted(() => {
    useSmoothScroll()
    console.log(routeName)
})

// if(route.name == 'index'){
//     const home = ref(
    
//     { label: 'Home' },
// );
//     const items = ref([

//     { label: 'Home' },
 

// ]);
// }
</script>
<style>
body {
    /* background-color:rgb(1, 74, 172) */
color: white;
}
/* 
.under-container {
    
    background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
} */

/* .square , .square-2, .square-3{
   position :absolute;
    height: 500px;
    width: 500px;
    background-color: rgb(2 132 199);
    border-radius: 999px;
  
}
.square{
    top: 100px;
     left: 50vw;
}
.square-2{
    top: 100px;
    left: 75vw;
}
.square-3{
    top: 200px;
    left: 50vw;
}
.square:hover{
    background-color:#1111
} */

.router-link-active{
    color: aqua
}


</style>