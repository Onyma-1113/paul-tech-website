export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {

    const scriptURL = 'https://script.google.com/macros/s/AKfycby5BX2GviCjJGPCbdywKjmHR1gNtsYeFZCuNcPIRvvzx65A1Cm4cxeJrigdr0OCttAT/exec'

    const form = document.forms['contact-form']
    
    form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => alert("Thank you! your form is submitted successfully." ))
     .then(() => { window.location.reload(); })
     .catch(error => console.error('Error!', error.message))
    })

    }
})