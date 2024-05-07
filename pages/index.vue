<script setup lang="js">
definePageMeta({
    middleware:['auth']
})

const supabase = useSupabaseClient();

// access the current user from supabase
const user = useSupabaseUser()

// router
const router = useRouter()

const errorMsgSignOut = ref(null)


const {data : countries} = useFetch('/api/contries/getContries')
//   countries.value = useFetch('/api/contries/getContries')
//   console.log(countries.value)

async function signOut() {
    try {
        const { error } = await supabase.auth.signOut()
  router.push('/login')
  if(error) throw error;
    } catch (error) {
        errorMsgSignOut.value = error
    }
 
}


</script>
<template>
    <h1>Hadsddsha</h1>
    <h2>contries database</h2>
    <ul>
    <li v-for="country in countries.data" :key="country.id">{{ country.name }}</li>
    <p>{{ countries.data[1] }}</p>
  </ul>
<h2>user info</h2>
<p>{{ user.email }}</p>

<button @click="signOut" class="border-solid border-2 border-sky-500">Logout</button>
<span>{{  }}</span>


</template>
<style scoped>
</style>
