<script setup>
definePageMeta({

  layout: 'mainlayout'
})
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

// activation de lanimation 
// sessionStorage.setItem('transition',true)



// create client connexion with supabse
// const supabase = useSupabaseClient();

// // access the current user from supabase
// const user = useSupabaseUser()

// // router
// const router = useRouter()

// const errorMsgSignOut = ref(null)


// const { data: countries } = useFetch('/api/contries/getContries')


// async function signOut() {
//   try {
//     const { error } = await supabase.auth.signOut()
//     router.push('/login')
//     if (error) throw error;
//   } catch (error) {
//     errorMsgSignOut.value = error
//   }

// }
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap'
import Typed from "typed.js";
const typedRef = ref(null);


const clickToUseTyped = () => {
  if (typedRef.value) {
    new Typed(typedRef.value, {
      strings: ["Cloud", "Observability", "Process digitalization", "Cybersecurity", "Artificial Intelligence"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });
  }
};

// animation 


const reasonAnimation = () => {
  let tl = gsap.timeline()

  tl.to('.reason-img',
    {
      opacity: 1,
      duration: 1,
      // stagger: 0.5

    })
  tl.to('.reason-text',
    {
      opacity: 1,
      y: -100,
      duration: 1,
      // stagger: 0.5

    })
}
//transition

const homeTransitionAnimation = () => {
  let tl = gsap.timeline()
  setTimeout(() => {
    tl.to('.transition-wait', {
      duration: 0.5,
      opacity: 1
    })

  }, 4000);


}

onMounted(() => {
  clickToUseTyped()
  typedRef.value = ref.typedRef;
  //animation
  // missionAnimation()
  // serviceAnimation()
  reasonAnimation()
  // transitionAnimation()
  homeTransitionAnimation()

  // contentAnimation({ element: '.test' })
  // cardServiceAnimation({ element: '.card-container', element2: ".card-service", element3: ".card-service-2" })
  cardShowAnimation({ element: '.card-container' })


});





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
  <!-- <div class="w-screen mx-auto px-32 "> -->

  <!-- home section 1 -->
  <!-- <div class="h-screen w-screen fixed top-0 left-0 z">
    <img src="../assets/img/duplo24.jpg" alt="">
  </div> -->
  <!-- <div class="h-screen w-screen fixed top-0 left-0 transition z-50 flex" :class="[!isPlay ? hiddenTransition  : '', 'flex']">
    <div class="h-screen w-1/5 bg-red-400 ts">

    </div>
    <div class="h-screen w-1/5 bg-red-400 ts">

    </div>
    <div class="h-screen w-1/5 bg-red-400 ts">

    </div>
    <div class="h-screen w-1/5 bg-red-400 ts">

    </div>
    <div class="h-screen w-1/5 bg-red-400 ts">

    </div>
    <div class="transition-text ">
      <div class="text-8xl flex">
        <div class="transition-text-span-div">
          <h1  class="transition-text-span">H</h1>
        </div>

        <div class="transition-text-span-div">
          <h1  class="transition-text-span ">O</h1>
        </div>
        <div class="transition-text-span-div">
          <h1  class="transition-text-span ">M</h1>
        </div>
        <div class="transition-text-span-div">
          <h1  class="transition-text-span">E</h1>
        </div>

      </div>
    </div>

  </div> -->


  <div
    class="w-full h-fifty-vh flex flex-col justify-center gap-20 items-start max-2xl:gap-10 max-sm:items-center transition-wait opacity-0 relative z-100 section-1">
   <Hero/>

  </div>


  
  <!-- section 7 contact redirection -->





  <!-- </div> -->



</template>
<style>
body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #0d0f14;



}

.section-1 {}

li {
  list-style-type: none;
}

.p-accordion {


  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 70px;

}

.p-accordion-header {
  font-size: 2em;
  border: 3px solid black;
  border-radius: 30px;
  padding: 0.7em
}

.p-accordion-content {
  padding-left: 2vw;
  font-size: 2em;
}

.h-container {
  height: 90vh;
}

.min-h-container {
  min-height: 90vh;
}

.h-eighy-vh {
  height: 80vh;
}

.h-thirdy-vh {
  height: 30vh;
}

.h-fourty-vh {
  height: 45vh;
}

.h-fifty-vh {
  height: 50vh;
}

.h-three-quart-vh {
  height: 75vh;
}

.min-h-three-quart-vh {
  min-height: 75vh;
}

.h-one-quart-vh {
  height: 25vh;
}

.btn-get-in-touch {
  transition: 0.3s
}

.btn-get-in-touch:hover {
  background-color: #37bdf8;
  color: black
}

/* .mission-img {
  height: 70%;
  width: 100%;
  
} */

svg {
  color: rgb(146, 145, 145);
}

.ts {
  transform: scaleY(0);
  transform-origin: bottom center;
}

.transition-text {
  position: absolute;
  top: 50vh;
  left: 5vw;
}

.transition-text-span-div {
  overflow: hidden;
}

.hidden-transition {
  display: none;
}

/* lenis */
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}

/* page transition for the id page */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
