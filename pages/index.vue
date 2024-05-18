<script setup>
definePageMeta({

  layout: 'mainlayout'
})
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';




// create client connexion with supabse
const supabase = useSupabaseClient();

// access the current user from supabase
const user = useSupabaseUser()

// router
const router = useRouter()

const errorMsgSignOut = ref(null)


const { data: countries } = useFetch('/api/contries/getContries')


async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    router.push('/login')
    if (error) throw error;
  } catch (error) {
    errorMsgSignOut.value = error
  }

}
import { ref, onMounted } from 'vue';
import Typed from "typed.js";
const typedRef = ref(null);

const clickToUseTyped = () => {
  if (typedRef.value) {
    new Typed(typedRef.value, {
      strings: ["Observabilité", "Infonuagique", "Intelligence artificielle", "Digitalisation de processus"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });
  }
};

onMounted(() => {
  clickToUseTyped()
  typedRef.value = ref.typedRef;
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
  <div class="w-full h-eighy-vh flex flex-col justify-center gap-20 items-start max-2xl:gap-10 max-sm:items-center">
    <div>
      <h1 id="element" class="text-8xl  font-bold  max-sm:text-center max-2xl:text-5xl max-md:text-4xl ">Welcome at
        Paultech we are specialize at : </h1>

      <h1 class="text-8xl font-bold text-sky-400 h-12 max-2xl:text-5xl max-md:text-4xl  max-sm:text-center"
        ref="typedRef"></h1>

    </div>

    <span class="text-3xl max-2xl:text-2xl">[Since the date]</span>
    <div
      class="btn-get-in-touch h-14 w-56 bg-black rounded-3xl flex justify-center items-center text-white text-2xl cursor-pointer max-2xl:h-10 max-2xl:w-44 max-2xl:text-lg">
      <p>Get in touch</p>
    </div>

  </div>
  <!-- carrousel -->
  <div class="w-full text-3xl font-bold flex flex-col items-center justify-start">
    <h2 class="">Trust by those compagnies</h2>
    <div class="w-full h-28  mt-4 flex justify-around items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 702 200" fill="none" class="hidden md:block h-7">
        <path fill="currentColor"
          d="M81.1 85.91c-1.374 0-2.75 1.375-2.75 2.75v28.178c0 1.375 1.376 2.75 2.75 2.75h22.68v35.051s-4.81 2.062-19.243 2.062c-16.495 0-39.176-6.186-39.176-57.045s24.055-57.044 46.736-57.044c19.931 0 28.178 3.436 33.677 4.81 1.374.688 3.436-1.374 3.436-2.748l6.186-27.492c0-.687 0-1.374-1.375-2.062-2.062-1.374-15.12-8.934-48.797-8.934-39.176 0-77.663 15.807-77.663 95.532 0 79.038 45.36 90.722 83.161 90.722 31.615 0 50.859-13.059 50.859-13.059.687-.687.687-1.374.687-2.061V88.66c0-1.375-1.374-2.75-2.749-2.75M436.426 15.807c0-1.374-1.374-2.749-2.749-2.749h-32.302c-1.375 0-2.749 1.375-2.749 2.75V78.35h-50.859V15.808c0-1.375-1.375-2.75-2.75-2.75h-32.302c-1.375 0-2.749 1.375-2.749 2.75v169.759c0 1.375 1.374 2.749 2.749 2.749h32.302c1.375 0 2.75-1.374 2.75-2.749v-72.852h50.859v72.852c0 1.375 1.374 2.749 2.749 2.749h32.302c1.375 0 2.749-1.374 2.749-2.749V15.807ZM179.381 59.794c11.767 0 21.306-9.54 21.306-21.306 0-11.767-9.539-21.306-21.306-21.306-11.767 0-21.306 9.54-21.306 21.306 0 11.767 9.539 21.306 21.306 21.306ZM197.938 71.478c0-1.375-1.374-2.75-2.749-2.75h-32.302c-1.375 0-2.749 1.375-2.749 2.75v112.714c0 3.437 2.062 4.124 4.811 4.124h29.553c3.436 0 4.124-1.374 4.124-4.124M527.835 69.416c-1.375 0-2.749 1.374-2.749 2.749v83.161s-8.248 6.186-19.931 6.186c-11.684 0-14.433-5.498-14.433-16.495V72.165c0-1.375-1.375-2.75-2.75-2.75H455.67c-1.375 0-2.749 1.375-2.749 2.75v78.35c0 33.677 18.557 41.925 44.673 41.925 21.306 0 38.488-11.684 38.488-11.684s.688 6.186 1.375 6.873c.687.687 1.375 1.374 2.062 1.374h20.618c1.375 0 2.75-1.374 2.75-2.749V72.164c0-1.374-1.375-2.748-2.75-2.748M636.426 162.199c-13.746 0-19.932-6.185-19.932-6.185v-54.296s7.561-4.81 16.495-5.498c11.684-1.375 22.681 2.749 22.681 30.24 0 29.554-3.437 35.739-19.932 35.739h.688Zm-18.557-88.66V15.807c0-1.374-1.375-2.749-2.749-2.749h-32.302c-1.375 0-2.75 1.375-2.75 2.75v169.759c0 1.374 1.375 2.749 2.75 2.749h22.68c.687 0 2.062-.687 2.062-1.375.687-.687 1.374-7.56 1.374-7.56s13.059 13.059 38.488 13.059c29.554 0 46.736-15.12 46.736-67.354s-26.804-59.107-45.361-59.107-30.928 8.248-30.928 8.248v-.688ZM267.354 68.728V36.426c0-1.375-.687-2.062-2.062-2.062h-33.677c-1.374 0-2.062.688-2.062 2.75V70.79s-16.495 4.124-17.869 4.124c-1.375.687-2.062 1.375-2.062 2.75v21.305c0 1.375 1.375 2.749 2.749 2.749h17.182v50.172c0 37.801 26.117 41.237 43.987 41.237 8.247 0 17.869-2.749 19.244-3.436.687-.688 1.374-1.375 1.374-2.749v-22.681c0-1.374-1.374-2.749-2.749-2.749s-4.811.687-8.935.687c-11.684 0-15.807-5.498-15.807-13.058v-47.423h24.055c1.374 0 2.749-1.374 2.749-2.749V71.478c0-1.375-1.375-2.75-2.749-2.75">
        </path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 702 200" fill="none" class="hidden md:block h-7">
        <path fill="currentColor"
          d="M81.1 85.91c-1.374 0-2.75 1.375-2.75 2.75v28.178c0 1.375 1.376 2.75 2.75 2.75h22.68v35.051s-4.81 2.062-19.243 2.062c-16.495 0-39.176-6.186-39.176-57.045s24.055-57.044 46.736-57.044c19.931 0 28.178 3.436 33.677 4.81 1.374.688 3.436-1.374 3.436-2.748l6.186-27.492c0-.687 0-1.374-1.375-2.062-2.062-1.374-15.12-8.934-48.797-8.934-39.176 0-77.663 15.807-77.663 95.532 0 79.038 45.36 90.722 83.161 90.722 31.615 0 50.859-13.059 50.859-13.059.687-.687.687-1.374.687-2.061V88.66c0-1.375-1.374-2.75-2.749-2.75M436.426 15.807c0-1.374-1.374-2.749-2.749-2.749h-32.302c-1.375 0-2.749 1.375-2.749 2.75V78.35h-50.859V15.808c0-1.375-1.375-2.75-2.75-2.75h-32.302c-1.375 0-2.749 1.375-2.749 2.75v169.759c0 1.375 1.374 2.749 2.749 2.749h32.302c1.375 0 2.75-1.374 2.75-2.749v-72.852h50.859v72.852c0 1.375 1.374 2.749 2.749 2.749h32.302c1.375 0 2.749-1.374 2.749-2.749V15.807ZM179.381 59.794c11.767 0 21.306-9.54 21.306-21.306 0-11.767-9.539-21.306-21.306-21.306-11.767 0-21.306 9.54-21.306 21.306 0 11.767 9.539 21.306 21.306 21.306ZM197.938 71.478c0-1.375-1.374-2.75-2.749-2.75h-32.302c-1.375 0-2.749 1.375-2.749 2.75v112.714c0 3.437 2.062 4.124 4.811 4.124h29.553c3.436 0 4.124-1.374 4.124-4.124M527.835 69.416c-1.375 0-2.749 1.374-2.749 2.749v83.161s-8.248 6.186-19.931 6.186c-11.684 0-14.433-5.498-14.433-16.495V72.165c0-1.375-1.375-2.75-2.75-2.75H455.67c-1.375 0-2.749 1.375-2.749 2.75v78.35c0 33.677 18.557 41.925 44.673 41.925 21.306 0 38.488-11.684 38.488-11.684s.688 6.186 1.375 6.873c.687.687 1.375 1.374 2.062 1.374h20.618c1.375 0 2.75-1.374 2.75-2.749V72.164c0-1.374-1.375-2.748-2.75-2.748M636.426 162.199c-13.746 0-19.932-6.185-19.932-6.185v-54.296s7.561-4.81 16.495-5.498c11.684-1.375 22.681 2.749 22.681 30.24 0 29.554-3.437 35.739-19.932 35.739h.688Zm-18.557-88.66V15.807c0-1.374-1.375-2.749-2.749-2.749h-32.302c-1.375 0-2.75 1.375-2.75 2.75v169.759c0 1.374 1.375 2.749 2.75 2.749h22.68c.687 0 2.062-.687 2.062-1.375.687-.687 1.374-7.56 1.374-7.56s13.059 13.059 38.488 13.059c29.554 0 46.736-15.12 46.736-67.354s-26.804-59.107-45.361-59.107-30.928 8.248-30.928 8.248v-.688ZM267.354 68.728V36.426c0-1.375-.687-2.062-2.062-2.062h-33.677c-1.374 0-2.062.688-2.062 2.75V70.79s-16.495 4.124-17.869 4.124c-1.375.687-2.062 1.375-2.062 2.75v21.305c0 1.375 1.375 2.749 2.749 2.749h17.182v50.172c0 37.801 26.117 41.237 43.987 41.237 8.247 0 17.869-2.749 19.244-3.436.687-.688 1.374-1.375 1.374-2.749v-22.681c0-1.374-1.374-2.749-2.749-2.749s-4.811.687-8.935.687c-11.684 0-15.807-5.498-15.807-13.058v-47.423h24.055c1.374 0 2.749-1.374 2.749-2.749V71.478c0-1.375-1.375-2.75-2.749-2.75">
        </path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 702 200" fill="none" class="hidden md:block h-7">
        <path fill="currentColor"
          d="M81.1 85.91c-1.374 0-2.75 1.375-2.75 2.75v28.178c0 1.375 1.376 2.75 2.75 2.75h22.68v35.051s-4.81 2.062-19.243 2.062c-16.495 0-39.176-6.186-39.176-57.045s24.055-57.044 46.736-57.044c19.931 0 28.178 3.436 33.677 4.81 1.374.688 3.436-1.374 3.436-2.748l6.186-27.492c0-.687 0-1.374-1.375-2.062-2.062-1.374-15.12-8.934-48.797-8.934-39.176 0-77.663 15.807-77.663 95.532 0 79.038 45.36 90.722 83.161 90.722 31.615 0 50.859-13.059 50.859-13.059.687-.687.687-1.374.687-2.061V88.66c0-1.375-1.374-2.75-2.749-2.75M436.426 15.807c0-1.374-1.374-2.749-2.749-2.749h-32.302c-1.375 0-2.749 1.375-2.749 2.75V78.35h-50.859V15.808c0-1.375-1.375-2.75-2.75-2.75h-32.302c-1.375 0-2.749 1.375-2.749 2.75v169.759c0 1.375 1.374 2.749 2.749 2.749h32.302c1.375 0 2.75-1.374 2.75-2.749v-72.852h50.859v72.852c0 1.375 1.374 2.749 2.749 2.749h32.302c1.375 0 2.749-1.374 2.749-2.749V15.807ZM179.381 59.794c11.767 0 21.306-9.54 21.306-21.306 0-11.767-9.539-21.306-21.306-21.306-11.767 0-21.306 9.54-21.306 21.306 0 11.767 9.539 21.306 21.306 21.306ZM197.938 71.478c0-1.375-1.374-2.75-2.749-2.75h-32.302c-1.375 0-2.749 1.375-2.749 2.75v112.714c0 3.437 2.062 4.124 4.811 4.124h29.553c3.436 0 4.124-1.374 4.124-4.124M527.835 69.416c-1.375 0-2.749 1.374-2.749 2.749v83.161s-8.248 6.186-19.931 6.186c-11.684 0-14.433-5.498-14.433-16.495V72.165c0-1.375-1.375-2.75-2.75-2.75H455.67c-1.375 0-2.749 1.375-2.749 2.75v78.35c0 33.677 18.557 41.925 44.673 41.925 21.306 0 38.488-11.684 38.488-11.684s.688 6.186 1.375 6.873c.687.687 1.375 1.374 2.062 1.374h20.618c1.375 0 2.75-1.374 2.75-2.749V72.164c0-1.374-1.375-2.748-2.75-2.748M636.426 162.199c-13.746 0-19.932-6.185-19.932-6.185v-54.296s7.561-4.81 16.495-5.498c11.684-1.375 22.681 2.749 22.681 30.24 0 29.554-3.437 35.739-19.932 35.739h.688Zm-18.557-88.66V15.807c0-1.374-1.375-2.749-2.749-2.749h-32.302c-1.375 0-2.75 1.375-2.75 2.75v169.759c0 1.374 1.375 2.749 2.75 2.749h22.68c.687 0 2.062-.687 2.062-1.375.687-.687 1.374-7.56 1.374-7.56s13.059 13.059 38.488 13.059c29.554 0 46.736-15.12 46.736-67.354s-26.804-59.107-45.361-59.107-30.928 8.248-30.928 8.248v-.688ZM267.354 68.728V36.426c0-1.375-.687-2.062-2.062-2.062h-33.677c-1.374 0-2.062.688-2.062 2.75V70.79s-16.495 4.124-17.869 4.124c-1.375.687-2.062 1.375-2.062 2.75v21.305c0 1.375 1.375 2.749 2.749 2.749h17.182v50.172c0 37.801 26.117 41.237 43.987 41.237 8.247 0 17.869-2.749 19.244-3.436.687-.688 1.374-1.375 1.374-2.749v-22.681c0-1.374-1.374-2.749-2.749-2.749s-4.811.687-8.935.687c-11.684 0-15.807-5.498-15.807-13.058v-47.423h24.055c1.374 0 2.749-1.374 2.749-2.749V71.478c0-1.375-1.375-2.75-2.749-2.75">
        </path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 702 200" fill="none" class="hidden md:block h-7">
        <path fill="currentColor"
          d="M81.1 85.91c-1.374 0-2.75 1.375-2.75 2.75v28.178c0 1.375 1.376 2.75 2.75 2.75h22.68v35.051s-4.81 2.062-19.243 2.062c-16.495 0-39.176-6.186-39.176-57.045s24.055-57.044 46.736-57.044c19.931 0 28.178 3.436 33.677 4.81 1.374.688 3.436-1.374 3.436-2.748l6.186-27.492c0-.687 0-1.374-1.375-2.062-2.062-1.374-15.12-8.934-48.797-8.934-39.176 0-77.663 15.807-77.663 95.532 0 79.038 45.36 90.722 83.161 90.722 31.615 0 50.859-13.059 50.859-13.059.687-.687.687-1.374.687-2.061V88.66c0-1.375-1.374-2.75-2.749-2.75M436.426 15.807c0-1.374-1.374-2.749-2.749-2.749h-32.302c-1.375 0-2.749 1.375-2.749 2.75V78.35h-50.859V15.808c0-1.375-1.375-2.75-2.75-2.75h-32.302c-1.375 0-2.749 1.375-2.749 2.75v169.759c0 1.375 1.374 2.749 2.749 2.749h32.302c1.375 0 2.75-1.374 2.75-2.749v-72.852h50.859v72.852c0 1.375 1.374 2.749 2.749 2.749h32.302c1.375 0 2.749-1.374 2.749-2.749V15.807ZM179.381 59.794c11.767 0 21.306-9.54 21.306-21.306 0-11.767-9.539-21.306-21.306-21.306-11.767 0-21.306 9.54-21.306 21.306 0 11.767 9.539 21.306 21.306 21.306ZM197.938 71.478c0-1.375-1.374-2.75-2.749-2.75h-32.302c-1.375 0-2.749 1.375-2.749 2.75v112.714c0 3.437 2.062 4.124 4.811 4.124h29.553c3.436 0 4.124-1.374 4.124-4.124M527.835 69.416c-1.375 0-2.749 1.374-2.749 2.749v83.161s-8.248 6.186-19.931 6.186c-11.684 0-14.433-5.498-14.433-16.495V72.165c0-1.375-1.375-2.75-2.75-2.75H455.67c-1.375 0-2.749 1.375-2.749 2.75v78.35c0 33.677 18.557 41.925 44.673 41.925 21.306 0 38.488-11.684 38.488-11.684s.688 6.186 1.375 6.873c.687.687 1.375 1.374 2.062 1.374h20.618c1.375 0 2.75-1.374 2.75-2.749V72.164c0-1.374-1.375-2.748-2.75-2.748M636.426 162.199c-13.746 0-19.932-6.185-19.932-6.185v-54.296s7.561-4.81 16.495-5.498c11.684-1.375 22.681 2.749 22.681 30.24 0 29.554-3.437 35.739-19.932 35.739h.688Zm-18.557-88.66V15.807c0-1.374-1.375-2.749-2.749-2.749h-32.302c-1.375 0-2.75 1.375-2.75 2.75v169.759c0 1.374 1.375 2.749 2.75 2.749h22.68c.687 0 2.062-.687 2.062-1.375.687-.687 1.374-7.56 1.374-7.56s13.059 13.059 38.488 13.059c29.554 0 46.736-15.12 46.736-67.354s-26.804-59.107-45.361-59.107-30.928 8.248-30.928 8.248v-.688ZM267.354 68.728V36.426c0-1.375-.687-2.062-2.062-2.062h-33.677c-1.374 0-2.062.688-2.062 2.75V70.79s-16.495 4.124-17.869 4.124c-1.375.687-2.062 1.375-2.062 2.75v21.305c0 1.375 1.375 2.749 2.749 2.749h17.182v50.172c0 37.801 26.117 41.237 43.987 41.237 8.247 0 17.869-2.749 19.244-3.436.687-.688 1.374-1.375 1.374-2.749v-22.681c0-1.374-1.374-2.749-2.749-2.749s-4.811.687-8.935.687c-11.684 0-15.807-5.498-15.807-13.058v-47.423h24.055c1.374 0 2.749-1.374 2.749-2.749V71.478c0-1.375-1.375-2.75-2.749-2.75">
        </path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 702 200" fill="none" class="hidden md:block h-7">
        <path fill="currentColor"
          d="M81.1 85.91c-1.374 0-2.75 1.375-2.75 2.75v28.178c0 1.375 1.376 2.75 2.75 2.75h22.68v35.051s-4.81 2.062-19.243 2.062c-16.495 0-39.176-6.186-39.176-57.045s24.055-57.044 46.736-57.044c19.931 0 28.178 3.436 33.677 4.81 1.374.688 3.436-1.374 3.436-2.748l6.186-27.492c0-.687 0-1.374-1.375-2.062-2.062-1.374-15.12-8.934-48.797-8.934-39.176 0-77.663 15.807-77.663 95.532 0 79.038 45.36 90.722 83.161 90.722 31.615 0 50.859-13.059 50.859-13.059.687-.687.687-1.374.687-2.061V88.66c0-1.375-1.374-2.75-2.749-2.75M436.426 15.807c0-1.374-1.374-2.749-2.749-2.749h-32.302c-1.375 0-2.749 1.375-2.749 2.75V78.35h-50.859V15.808c0-1.375-1.375-2.75-2.75-2.75h-32.302c-1.375 0-2.749 1.375-2.749 2.75v169.759c0 1.375 1.374 2.749 2.749 2.749h32.302c1.375 0 2.75-1.374 2.75-2.749v-72.852h50.859v72.852c0 1.375 1.374 2.749 2.749 2.749h32.302c1.375 0 2.749-1.374 2.749-2.749V15.807ZM179.381 59.794c11.767 0 21.306-9.54 21.306-21.306 0-11.767-9.539-21.306-21.306-21.306-11.767 0-21.306 9.54-21.306 21.306 0 11.767 9.539 21.306 21.306 21.306ZM197.938 71.478c0-1.375-1.374-2.75-2.749-2.75h-32.302c-1.375 0-2.749 1.375-2.749 2.75v112.714c0 3.437 2.062 4.124 4.811 4.124h29.553c3.436 0 4.124-1.374 4.124-4.124M527.835 69.416c-1.375 0-2.749 1.374-2.749 2.749v83.161s-8.248 6.186-19.931 6.186c-11.684 0-14.433-5.498-14.433-16.495V72.165c0-1.375-1.375-2.75-2.75-2.75H455.67c-1.375 0-2.749 1.375-2.749 2.75v78.35c0 33.677 18.557 41.925 44.673 41.925 21.306 0 38.488-11.684 38.488-11.684s.688 6.186 1.375 6.873c.687.687 1.375 1.374 2.062 1.374h20.618c1.375 0 2.75-1.374 2.75-2.749V72.164c0-1.374-1.375-2.748-2.75-2.748M636.426 162.199c-13.746 0-19.932-6.185-19.932-6.185v-54.296s7.561-4.81 16.495-5.498c11.684-1.375 22.681 2.749 22.681 30.24 0 29.554-3.437 35.739-19.932 35.739h.688Zm-18.557-88.66V15.807c0-1.374-1.375-2.749-2.749-2.749h-32.302c-1.375 0-2.75 1.375-2.75 2.75v169.759c0 1.374 1.375 2.749 2.75 2.749h22.68c.687 0 2.062-.687 2.062-1.375.687-.687 1.374-7.56 1.374-7.56s13.059 13.059 38.488 13.059c29.554 0 46.736-15.12 46.736-67.354s-26.804-59.107-45.361-59.107-30.928 8.248-30.928 8.248v-.688ZM267.354 68.728V36.426c0-1.375-.687-2.062-2.062-2.062h-33.677c-1.374 0-2.062.688-2.062 2.75V70.79s-16.495 4.124-17.869 4.124c-1.375.687-2.062 1.375-2.062 2.75v21.305c0 1.375 1.375 2.749 2.749 2.749h17.182v50.172c0 37.801 26.117 41.237 43.987 41.237 8.247 0 17.869-2.749 19.244-3.436.687-.688 1.374-1.375 1.374-2.749v-22.681c0-1.374-1.374-2.749-2.749-2.749s-4.811.687-8.935.687c-11.684 0-15.807-5.498-15.807-13.058v-47.423h24.055c1.374 0 2.749-1.374 2.749-2.749V71.478c0-1.375-1.375-2.75-2.749-2.75">
        </path>
      </svg>

    </div>

  </div>
  <!-- title of the 2 section -->
  <div class="w-full h-screen flex items-center justify-start">
    <h1 class="text-8xl w-3/4 font-bold text-left">Discover Our Story: Unveiling the Heart of Our Mission</h1>
  </div>
  <!-- section 2 mission -->

  <div class="w-full m-h-screen flex flex-col justify-around bg-gray-400  rounded-3xl ">
    <h3 class="text-3xl h-2/4 px-10 py-10 pb-40 text-white"><span class="text-6xl text-sky-400 ">Paultech</span> Lorem
      ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris .</h3>
    <div class="mission-img w-full flex justify-center items-center px-4 py-4">
      <img src="/assets/img/20170613S1_About-Page_Studio-white-board_024_V2.jpg" alt="" srcset=""
        class="w-5/6 rounded-3xl">

    </div>
  </div>
  <!-- title of the 3 section -->
  <div class="w-full h-screen flex items-center justify-end">
    <h1 class="text-8xl w-3/4 font-bold text-right">Explore our services</h1>
  </div>
  <!-- section 3 service (no layout choose ) -->
  <div class="w-full min-h-screen">
    <div class="w-full  mx-auto">

      <div class="-mx-3 lg:flex items-center">
        <div class="px-3 lg:w-1/3">
          <CardService title="Digitalisation" description="Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti." />
          <CardService title="Digitalisation" description="Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti." />

        </div>

        <div class="px-3 lg:w-1/3">
          <CardService title="Digitalisation" description="Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti." />
          <CardService title="Digitalisation" description="Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti." />
        </div>
        <div class="px-3 lg:w-1/3">
          <CardService title="Digitalisation" description="Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti." />
          <CardService title="Digitalisation" description="Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti." />


        </div>
      </div>
    </div>



  </div>
  <!-- title of the 4 section reason to choose us -->
  <div class="w-full h-screen flex items-center justify-start">
    <h1 class="text-8xl w-3/4 font-bold text-left">Why Choose Us: Our Commitment to Excellence and Your Success</h1>
  </div>
  <!-- section 4  -->
  <div class="w-full flex flex-col gap-64">
    <!-- container du text et img -->
    <div class="w-full h-screen flex ">
      <!-- text container -->
      <div class="w-1/2 h-full flex flex-col justify-end gap-20  pr-32 ">
        <h1 class="text-5xl font-bold">1. Lorem impus lorsn</h1>
        <p class="text-3xl leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et
          dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
          dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
          dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
          dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
      </div>
      <!-- img container -->
      <div class="w-1/2 h-3/4 border-solid border-2 border-sky-400">
        <img src="/assets/img/memory.jpg" alt="" srcset="" class="h-full w-full">
      </div>


    </div>
    <!-- seconde -->
    <!-- container du text et img -->
    <div class="w-full h-screen flex">


      <!-- img container -->
      <div class="w-1/2 h-3/4 border-solid border-2 border-sky-400">
        <img src="/assets/img/memory.jpg" alt="" srcset="" class="h-full w-full">
      </div>
      <!-- text container -->
      <div class="w-1/2 h-full flex flex-col justify-end gap-20 pl-32">
        <h1 class="text-5xl font-bold text-left">2. Lorem impus lorsn</h1>
        <p class="text-3xl leading-relaxed text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
          dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
          dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
          dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
      </div>


    </div>
    <!-- third -->
    <!-- container du text et img -->
    <div class="w-full h-screen flex ">
      <!-- text container -->
      <div class="w-1/2 h-full flex flex-col justify-end gap-20  pr-32 ">
        <h1 class="text-5xl font-bold">3. Lorem impus lorsn</h1>
        <p class="text-3xl leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et
          dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
          dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
          dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
          dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
      </div>
      <!-- img container -->
      <div class="w-1/2 h-3/4 border-solid border-2 border-sky-400">
        <img src="/assets/img/memory.jpg" alt="" srcset="" class="h-full w-full">
      </div>


    </div>


  </div>
  <!-- title of the 5 section -->
  <div class="w-full h-screen flex items-center justify-end">
    <h1 class="text-8xl w-3/4 font-bold text-right">All the compagnies that trusted us</h1>
  </div>
  <!-- section 5 service testomonial  -->
  <div class="w-full min-h-screen">
    <div class="w-full  mx-auto">

      <div class="-mx-3 lg:flex items-center">
        <div class="px-3 lg:w-1/3">
          <CardTestimonial />
          <CardTestimonial />
        </div>
        <div class="px-3 lg:w-1/3">
          <CardTestimonial />
          <CardTestimonial />
        </div>
        <div class="px-3 lg:w-1/3">

          <CardTestimonial />
          <CardTestimonial />
        </div>
      </div>
    </div>



  </div>
  <!-- title of the 6 section FAQ -->
  <div class="w-full h-screen flex items-center justify-start">
    <h1 class="text-8xl w-3/4 font-bold text-left">Frequently Asked Questions</h1>
  </div>
  <!-- section 6 service FAQ -->
  <div class="w-full ">
    <Accordion :activeIndex="0">
      <AccordionTab header="Header I" class="accordion-title">
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est
          laborum.
        </p>
      </AccordionTab>
      <AccordionTab header="Header II">
        <p class="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
      </AccordionTab>
      <AccordionTab header="Header III">
        <p class="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
          sunt in
          culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
          et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus.
        </p>
      </AccordionTab>
      <AccordionTab header="Header IV">
        <p class="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
          sunt in
          culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
          et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus.
        </p>
      </AccordionTab>
      <AccordionTab header="Header V">
        <p class="m-0">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
          sunt in
          culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
          et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus.
        </p>
      </AccordionTab>
    </Accordion>

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
}

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
.h-fourty-vh {
  height: 45vh;
}
.h-fifty-vh {
  height: 50vh;
}

.h-three-quart-vh {
  height: 75vh;
}
.min-h-three-quart-vh{
min-height:75vh;
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
</style>
