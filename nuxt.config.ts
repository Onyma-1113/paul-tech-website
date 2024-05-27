// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss" ,"@nuxtjs/supabase", 'nuxt-primevue','@hypernym/nuxt-gsap'],
  // supabase:{
  //   url: process.env.SUPABASE_URL,
  //   key: process.env.SUPABASE_KEY
  // }

  plugins: [
    { src: '@/plugins/vue-typed-js.js', mode: 'client' }
  ],
 
  supabase:{
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false
  },


})