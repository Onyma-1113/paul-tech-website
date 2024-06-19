<template>
  <!-- <TransitionComponent/> -->
  <div class="">

    <div class="h-screen w-full flex flex-col justify-center items-start mx-auto px-site max-2xl:px-16 max-md:px-5">
      <HeroPage :title="$t('canditature_title')" :description="$t('canditature_description')" />
    </div>

    <!-- 
             redirection_title_candidature:'APPLICATION',
            canditature_title: "Open Application",
            canditature_description: "Apply for a career that matches your talent",
            canditature_mention: "Unless otherwise indicated, all fields are required.",
            canditature_first_name: 'First Name',
            canditature_last_name: 'Last Name',
            canditature_email: 'Email',
            canditature_phone: 'Phone',
            canditature_cv_title: 'Attach your resume',
            canditature_nb_file: 'One File',
            canditature_limit: 'Limit 3 Mo.',
            canditature_file_auth: 'File authorize',
           -->

    <div class="h-auto  w-full flex flex-col pb-56 gap-52 mx-auto px-site max-2xl:px-16 max-md:px-5">
      <p class="text-3xl">{{ $t('canditature_mention') }}</p>
      <form @submit.prevent="zohoCandidature" class="flex flex-col gap-10 items-center">
        <h1 class="text-4xl font-bold text-center text-[#0067f4]">{{ $t('canditature_subtitle_perso') }}</h1>
        <!-- <div class="flex flex-col w-1/2">
          <label for="prenom" class=" pl-2 text-3xl">{{ $t('canditature_first_name') }}</label>
          <input type="text" class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
        </div> -->
        <div class="flex flex-col w-1/2">
          <label for="Last_Name" class=" pl-2 text-3xl">{{ $t('canditature_last_name') }}</label>
          <input type="text" id="Last_Name" name="Last_name" v-model="formData.Last_Name"
            class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
        </div>
        <div class="flex flex-col w-1/2">
          <label for="Email" class=" pl-2 text-3xl">{{ $t('canditature_email') }}</label>
          <input type="email" id="Email" name="Email" v-model="formData.Email"
            class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
        </div>
        <div class="flex flex-col w-1/2">
          <label for="Phone" class=" pl-2 text-3xl">{{ $t('canditature_phone') }}</label>
          <input type="tel" id="Phone" name="Phone" v-model="formData.Phone"
            class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black ">
        </div>

        <div class="flex flex-col w-1/2">
          <label for="Postal_Code" class=" pl-2 text-3xl">{{ $t('canditature_postal') }}</label>
          <input type="text" id="Postal_Code" name="Postal_Code" v-model="formData.Postal_Code"
            class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
        </div>
        <div class="flex flex-col w-1/2">
          <label for="French" class=" pl-2 text-3xl">{{ $t('canditature_langue') }}</label>

          <div class="flex w-full justify-around mt-5 pt-4 pb-4 max-lg:flex-col max-lg:items-center">
            <!-- <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
            <label for="vehicle1" class="text-2xl">Français</label><br>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
            <label for="vehicle2" class="text-2xl">Anglais</label><br> -->

            <div class="checkbox-wrapper-28">
              <input type="checkbox" name="French" id="French" v-model="formData.French"
                class="promoted-input-checkbox" />
              <svg>
                <use xlink:href="#checkmark-28" />
              </svg>
              <label for="French">
                {{ $t('canditature_langue_fr') }}
              </label>
              <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
                <symbol id="checkmark-28" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                  </path>
                </symbol>
              </svg>
            </div>
            <div class="checkbox-wrapper-28">
              <input type="checkbox" name="English" id="English" v-model="formData.English"
                class="promoted-input-checkbox" />
              <svg>
                <use xlink:href="#checkmark-28" />
              </svg>
              <label for="English">
                {{ $t('canditature_langue_en') }}
              </label>
              <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
                <symbol id="checkmark-28" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-miterlimit="10" fill="none" d="M22.9 3.7l-15.2 16.6-6.6-7.1">
                  </path>
                </symbol>
              </svg>
            </div>
          </div>
        </div>
        <h1 class="text-4xl font-bold text-center pt-20 text-[#0067f4]">{{ $t('canditature_subtitle_academic') }}</h1>
        <div class="flex flex-col w-1/2">
          <label for="Educational_Institution" class=" pl-2 text-3xl">{{ $t('canditature_school') }}</label>
          <input type="text" id="Educational_Institution" name="Educational_Institution"
            v-model="formData.Educational_Institution" class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black ">
          <p class="text-gray-400">Ex: Harvard</p>

        </div>
        <div class="flex flex-col w-1/2">
          <label for="Study_Program" class=" pl-2 text-3xl">{{ $t('canditature_program') }}</label>
          <input type="text" id="Study_Program" name="Study_Program" v-model="formData.Study_Program"
            class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black ">

        </div>
        <div class="flex flex-col w-1/2">
          <label for="Time_Remaining " class=" pl-2 text-3xl">{{ $t('canditature_time_left') }}</label>
          <input type="text" id="Time_Remaining" name="Time_Remaining" v-model="formData.Time_Remaining"
            class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black ">
          <p class="text-gray-400">Ex: 3 month </p>

        </div>
        <h1 class="text-4xl font-bold text-center pt-20 text-[#0067f4]">{{ $t('canditature_subtitle_pro_c') }}</h1>
        <div class="flex flex-col w-1/2">
          <label for="Skills" class="pl-2 text-3xl">{{ $t('canditature_skills') }}</label>
          <textarea required="" id="Skills" name="Skills" rows="4" v-model="formData.Skills"
            class="mt-5 pt-0 pb-4 pl-2 rounded-xl text-black "></textarea>

          <p class="text-gray-400">
            Ex: Java,C#, Unity, etc </p>

        </div>
        <h1 class="text-4xl font-bold text-center pt-20 text-[#0067f4]">{{ $t('canditature_subtitle_pro_e') }}</h1>
        <div class="flex flex-col w-1/2">
          <label for="Company_Institution" class=" pl-2 text-3xl">{{ $t('canditature_name_exp') }}</label>
          <input type="text" id="Company_Institution" name="Company_Institution" v-model="formData.Company_Institution"
            class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
          <p class="text-gray-400">
            Ex: Paultech.inc</p>

        </div>
        <div class="flex flex-col w-1/2">
          <label for="Position" class=" pl-2 text-3xl">{{ $t('canditature_name_post') }}</label>
          <input type="text" id="Position" name="Position" v-model="formData.Position"
            class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
        </div>
        <div class="flex flex-col w-1/2">
          <label for="Experience_description" class=" pl-2 text-3xl">{{ $t('canditature_name_exp_desc') }}</label>
          <textarea required="" name="Experience_description" id="Experience_description"
            v-model="formData.Experience_description" rows="4"
            class="mt-5 pt-0 pb-4 pl-2 rounded-xl text-black "></textarea>
        </div>
        <div class="flex flex-col w-1/2">
          <label for="Reference_Name" class=" pl-2 text-3xl">{{ $t('canditature_name_exp_name_ref') }}</label>
          <input type="text" id="Reference_Name" name="Reference_Name" v-model="formData.Reference_Name" class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
        
        </div>
        <div class="flex flex-col w-1/2">
          <label for="Reference_Phone_Number" class=" pl-2 text-3xl">{{ $t('canditature_name_exp_num_ref') }}</label>
          <input type="text" id="Reference_Phone_Number" name="Reference_Phone_Number" v-model="formData.Reference_Phone_Number" class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
        
        </div>
        <div class="flex flex-col w-1/2">
          <label for="CV" class=" pl-2 text-3xl">CV</label>
          <input type="text" id="CV" name="CV" v-model="formData.CV" class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
          <p class="text-gray-400">Send us your link: Your CV on your google drive</p>

        </div>
        
        <!-- <div class="flex flex-col w-1/2">
          <label for="prenom" class=" pl-2 text-3xl">{{ $t('canditature_time_exp') }}</label>
          <input type="text" class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
          <p class="text-gray-400">Format (aaaa/mm/jj) - (aaaa/mm/jj) <br>
Exemple : 2024/04/28 - 2024/04/29
</p>
        </div>
       
        <div class="flex flex-col w-1/2">
          <label for="prenom" class=" pl-2 text-3xl">{{ $t('canditature_name_exp_num_ref') }}</label>
          <input type="tel" class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
       
        </div> -->
        <!-- <h1 class="text-4xl font-bold text-center pt-20 text-[#0067f4]">{{ $t('canditature_subtitle_pro_r') }}</h1> -->
        <!-- <div class="flex flex-col w-1/2">
          <label for="file" class=" pl-2 text-3xl">{{ $t('canditature_cv_title') }}</label>
          <input type="file" name="file" class="mt-5 pt-10 pb-10 pl-2 rounded-xl text-black bg-white">
          <p class="text-gray-400">{{ $t('canditature_nb_file') }}</p>
          <p class="text-gray-400">{{ $t('canditature_limit') }}</p>
          <p class="text-gray-400">{{ $t('canditature_file_auth') }}: jpg, png, pdf, doc, docx.</p>
        </div> -->
        <!-- <div class="flex flex-col w-1/2">
          <label for="file" class=" pl-2 text-3xl">{{ $t('canditature_porfolio_title') }}</label>
          <input type="file" id="file" name="file" placeholder="haha"
            class="mt-5 pt-10 pb-10 pl-2 rounded-xl text-black bg-white">
          <p class="text-gray-400">{{ $t('canditature_nb_file') }}</p>
          <p class="text-gray-400">{{ $t('canditature_limit') }}</p>
          <p class="text-gray-400">{{ $t('canditature_file_auth') }}: jpg, png, pdf, doc, docx.</p>
        </div> -->
        <!-- <div class="flex flex-col w-1/2">
          <label for="prenom" class=" pl-2 text-3xl">{{ $t('canditature_website') }}</label>
          <input type="text" class="mt-5 pt-4 pb-4 pl-2 rounded-xl text-black">
        
        </div> -->
        <div>
          <input type="submit" :value="$t('candidature_submit')" @click="active.value = 'true'"
            class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-black hover:from-white hover:to-white hover:text-black  hover:duration-300 duration-300  text-white h-14 w-56 text-2xl  flex justify-center items-center rounded-3xl cursor-pointer max-2xl:h-10 max-2xl:w-44 max-2xl:text-lg">
        </div>
      </form>

    </div>

    <!-- <div class="w-screen  flex justify-around">
    <Menubar :model="items"  class=""/>
  </div> -->


  </div>


</template>






<script setup>
import Menubar from 'primevue/menubar';
definePageMeta({
  layout: 'mainlayout'
})

useHead({
  title: 'PaulTech | Application',
  meta: [
    { name: 'description', property:'og:description',content: "Open Application, Apply for a career that matches your talent" }
  ]
})

let tl = gsap.timeline()
const serviceAnimation = () => {
  setTimeout(() => {
    tl.to('.transition-wait', {
      duration: 0.5,
      opacity: 1
    })

  }, 4000);
}
const active = ref("false")

import { ref } from "vue";

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'Features',
    icon: 'pi pi-star'
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Components',
        icon: 'pi pi-bolt'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil'
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette'
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette'
          }
        ]
      }
    ]
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope'
  }
]);

const formData = ref({
  Last_Name: '',
  Email: '',
  Phone: '',
  Postal_Code: '',
  French: false,
  English: false,
  Educational_Institution: '',
  Study_Program: '',
  Time_Remaining: '',
  Skills: '',
  Company_Institution: '',
  Position: '',
  CV: '',
  Experience_description: '',
  Reference_Name:  '',
  Reference_Phone_Number: ''
});
const zohoCandidature = async () => {
  // const Last_Name = document.getElementById('Last_Name').value;
  //     const Email = document.getElementById('Email').value;
  //     const Phone = document.getElementById('Phone').value;
  //       const Postal_Code = document.getElementById('Postal_Code').value;
  //     const French = document.getElementById('French').checked;
  //     const English = document.getElementById('English').checked;
  //     const Educational_Institution = document.getElementById('Educational_Institution').value;
  //     const Study_Program = document.getElementById('Study_Program').value;
  //     const Time_Remaining = document.getElementById('Time_Remaining').value;
  //     const Skills = document.getElementById('Skills').value;
  //     const Company_Institution = document.getElementById('Company_Institution').value;
  //     const Position = document.getElementById('Position').value;
  //     const CV = document.getElementById('CV').value;
  // const CV = document.getElementById('CV').files[0];
  // console.log(CV);
  //const Reference_Name = document.getElementById('Reference_Name').value;
  //const Reference_Phone_Number = document.getElementById('Reference_Phone_Number').value;


  try {
    const response = await fetch('http://localhost:3002/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)

    });

    if (response.ok) {
      const data = await response.json();
      console.log('Form submitted successfully', data);
      // console.log(data.data.data[0].details.id)
      //  console.log(uploadFile(CV ,data.data.data[0].details.id))



      alert('Form submitted successfully!');
      navigateTo('/')
    } else {
      const errorData = await response.json();
      console.error('Error submitting form', errorData);
      alert('Error submitting form: ' + errorData.error);
    }
  } catch (error) {
    console.error('Error submitting form', error);
    alert('Error submitting form: ' + error.message);
  }
}

onMounted(() => {
  // if(active.value == "true"){
  //   zohoCandidature()
  // }
  console.log(active.value)

  // serviceAnimation()
  cardShowAnimation({ element: '.card-career' })
})
</script>
<style scoped>
.p-menubar {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.p-menubar-root-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.checkbox-wrapper-28 {
  --size: 25px;
  position: relative;
}

.checkbox-wrapper-28 *,
.checkbox-wrapper-28 *:before,
.checkbox-wrapper-28 *:after {
  box-sizing: border-box;
}

.checkbox-wrapper-28 .promoted-input-checkbox {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.checkbox-wrapper-28 input:checked~svg {
  height: calc(var(--size) * 0.6);
  -webkit-animation: draw-checkbox-28 ease-in-out 0.2s forwards;
  animation: draw-checkbox-28 ease-in-out 0.2s forwards;
}

.checkbox-wrapper-28 label:active::after {
  background-color: #e6e6e6;
}

.checkbox-wrapper-28 label {
  color: white;
  line-height: var(--size);
  cursor: pointer;
  position: relative;
}

.checkbox-wrapper-28 label:after {
  content: "";
  height: var(--size);
  width: var(--size);
  margin-right: 8px;
  float: left;
  border: 2px solid #0067f4;
  border-radius: 3px;
  transition: 0.15s all ease-out;
}

.checkbox-wrapper-28 svg {
  stroke: #0067f4;
  stroke-width: 3px;
  height: 0;
  width: calc(var(--size) * 0.6);
  position: absolute;
  left: calc(var(--size) * 0.21);
  top: calc(var(--size) * 0.2);
  stroke-dasharray: 33;
}

@-webkit-keyframes draw-checkbox-28 {
  0% {
    stroke-dashoffset: 33;
  }

  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes draw-checkbox-28 {
  0% {
    stroke-dashoffset: 33;
  }

  100% {
    stroke-dashoffset: 0;
  }
}
</style>