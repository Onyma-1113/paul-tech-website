
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss" , 'nuxt-primevue','@hypernym/nuxt-gsap','@nuxtjs/i18n'],
 
  i18n: {
    vueI18n: './i18n.config.ts' ,
    baseUrl: 'https://paultechh.netlify.app'
  },
  plugins: [
    { src: '@/plugins/vue-typed-js.js', mode: 'client' },
    { src: '@/plugins/voiceflow.js', mode: 'client' }
  ],
 
 
  imports: {
		dirs: ['utils', 'animations','store'],
	},

  
  app:{
    head: {
      title: 'PaulTech'
    }
  }

}
)