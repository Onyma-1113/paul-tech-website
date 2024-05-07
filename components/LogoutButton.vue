<template>
    <div>
        <button @click="signOut" class="border-solid border-2 border-sky-500">Logout</button>

    </div>
</template>

<script setup>

async function signOut() {
    // create client with supabase
    const supabase = useSupabaseClient();
    // router
    const router = useRouter()

    try {
        const { error } = await supabase.auth.signOut()
        router.push('/login')
        if (error) throw error;
    } catch (error) {
        errorMsgSignOut.value = error
    }

}
</script>