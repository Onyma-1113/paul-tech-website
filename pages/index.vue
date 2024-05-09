<script setup>
definePageMeta({
 
    layout:'mainlayout'
})

useHead({
  head: {
    // Add Typed.js CDN link
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.min.js', body: true }
      // You can add more script CDN links as needed
    ],
  },
})


// create client connexion with supabse
const supabase = useSupabaseClient();

// access the current user from supabase
const user = useSupabaseUser()

// router
const router = useRouter()

const errorMsgSignOut = ref(null)


const { data: countries } =  useFetch('/api/contries/getContries')


async function signOut() {
    try {
        const { error } = await supabase.auth.signOut()
        router.push('/login')
        if (error) throw error;
    } catch (error) {
        errorMsgSignOut.value = error
    }

}
// var typed = new Typed('#element', {
//       strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//       typeSpeed: 50,
//     });

</script>
<template>
    <!-- <h1>Hadsddsha</h1>
    <h2>contries database</h2> -->
    <!-- <ul>
      <div v-if="countries == null">
        <li></li>
      </div>
      <div v-if="countries != null">
        <li v-for="country in countries.data" :key="country.id">{{ country.name }}</li>
        <p>{{ countries.data[1] }}</p>
      </div>
        
    </ul> -->
    <!-- <h2>user info</h2>
    <p>{{ user.email }}</p>

    <button @click="signOut" class="border-solid border-2 border-sky-500">Logout</button>
    <span>{{errorMsgSignOut}}</span> -->
    <div class="w-screen mx-auto px-32 ">

      <!-- home section 1 -->
      <div class="w-full h-container flex flex-col justify-center gap-20 items-start">
        <div>
          <h1 id="element" class="text-8xl font-bold">Welcome at Paultech we are specialize at :  </h1>
          <h1 class="text-8xl font-bold text-sky-400">Observabilite</h1>
        </div>
       
        <span class="text-3xl">[Since the date]</span>
        <div class="btn-get-in-touch h-14 w-56 bg-black rounded-3xl flex justify-center items-center text-white text-2xl cursor-pointer">
          <p>Get in touch</p>
        </div>

      </div>
      <!-- carrousel -->
      <div class="w-full h-fifty-vh text-3xl font-bold flex flex-col items-center">
        <h2 class="">Trust by those compagnies</h2>
        <div class="w-full h-28 bg-sky-400 mt-4"></div>
        
      </div>
      <!-- title of the 2 section -->
      <div class="w-full h-three-quart-vh">
        <h1 class="text-8xl w-1/2 font-bold">Discover Our Story: Unveiling the Heart of Our Mission</h1>
      </div>
      <!-- section 2 mission -->
      <div class="w-full h-screen flex flex-col justify-between ">
        <h3 class="text-5xl h-2/4"><span class="text-8xl text-sky-400">Paultech</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</h3>
        <div class="mission-img">

        </div>
      </div>
      <!-- title of the 3 section -->
      <div class="w-full h-three-quart-vh flex items-baseline">
        <h1 class="text-8xl w-1/2 font-bold w-full">Discover Our Story: Unveiling the Heart of Our Mission</h1>
      </div>

    </div>


</template>
<style scoped>
.h-container{
  height: 90vh;
}
.h-fifty-vh{
  height:50vh;
}
.h-three-quart-vh{
  height:75vh;
}
.btn-get-in-touch{
  transition : 0.3s
}
.btn-get-in-touch:hover{
  background-color: #37bdf8;
  color:black
}
.mission-img{
  height: 70%;
  width:100%;
  background-color:black
}
</style>
