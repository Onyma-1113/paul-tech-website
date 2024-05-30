<!-- <script setup>
const supabase = useSupabaseClient();
const email = ref('')
const password = ref(null)
const errorMsg = ref(null)
const successMsg = ref(null)


async function signUpNewUser() {
    console.log(email.value)
    console.log(password.value)
    try {
        const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
        options: {
            emailRedirectTo: '/',
        },
    })
    if(error) throw error;
    successMsg.value = 'Check your email to confirm your account'
    } catch (error) {
        errorMsg.value = error.message
    }
   
}
</script>
<template>
    <div>
        <div>
            <form @submit.prevent="signUpNewUser">
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
<style scoped></style> -->
<script></script>
<template></template>