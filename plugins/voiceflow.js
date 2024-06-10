export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      const script = document.createElement('script');
      console.log('we3wewe')
      script.type = 'text/javascript';
      script.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '6635034627a75c1803a345c8' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      document.body.appendChild(script);
    }
  })