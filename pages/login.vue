<script setup>


const supabase = useSupabaseClient();
const router = useRouter()


const email = ref('')
const password = ref(null)
const errorMsg = ref(null)
const successMsg = ref(null)


async function signInWithEmail() {
    console.log(email.value)
    console.log(password.value)
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password:password.value,
  })
    if(error) throw error;
    router.push('/')
    } catch (error) {
        errorMsg.value = error.message
    }
   
}
</script>
<template>
    <div>
        <div>
            <h1>Login</h1>
            <form @submit.prevent="signInWithEmail">
                <input type="email" placeholder="Email" name="email" v-model="email"
                    class="border-solid border-2 border-sky-500">
                <input type="password" v-model="password" placeholder="Password" name="password"
                    class="border-solid border-2 border-sky-500">
                <input type="submit" value="Login" class="border-solid border-2 border-sky-500">
                <p>{{ errorMsg }}</p>
                <p>{{ successMsg }}</p>
            </form>

        </div>
    </div>
</template>
<style scoped></style>
