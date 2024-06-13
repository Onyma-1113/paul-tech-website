<template>
    <div id="crmWebToEntityForm" class="zcwf_lblLeft crmWebToEntityForm">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="content-type" content="text/html;charset=UTF-8">

      <form class="font-[sans-serif] text-[#333] max-w-4xl w-full px-6 my-10" 
      id="webform14177000000109012"
            action="https://crm.zohocloud.ca/crm/WebToLeadForm"
            name="WebToLeads14177000000109012"
            method="POST"
            @submit.prevent="submitForm"
            accept-charset="UTF-8">
        <input type="text" style="display:none;" name="xnQsjsdp" value="27731d1069bf60ea512042068ad60908ce8390ccd5bb78482514da968f37935c">
        <input type="hidden" name="zc_gad" id="zc_gad" value="">
        <input type="text" style="display:none;" name="xmIwtLD" value="c898fd1303cc4d9f0eca13584e7a6f9e3e2c42039f3147f996a3ff5890ac659c4f978cd665dad19e613ebd991abb6fe5">
        <input type="text" style="display:none;" name="actionType" value="TGVhZHM=">
        <input type="text" style="display:none;" name="returnURL" value="https://paultechh.netlify.app">



        <div class="zcwf_title hidden">zoho client</div>
        <div class="grid sm:grid-cols-2 gap-10">
            <div class="relative flex items-center sm:col-span-2">
            <label class=" zcwf_col_lab text-[13px] absolute top-[-30px] left-0 text-white" for="Company">{{$t('contact_form_compagny')}}</label>
            <input type="text"  id="Company" name="Company"
              class=" zcwf_col_fld px-2 pt-3 pb-3 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none rounded-md" />
            
          </div>


          <div class="relative flex items-center">
            <label class=" zcwf_col_lab text-[13px] absolute top-[-30px] left-0 text-white" for="First_Name">{{$t('contact_form_first_name')}}</label>
            <input type="text"  id="First_Name" name="First_Name"
              class=" zcwf_col_fld px-2 pt-4 pb-3 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none rounded-md" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
              viewBox="0 0 24 24">
              <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                data-original="#000000"></path>
            </svg>
          </div>

          <div class="relative flex items-center">
            <label class=" zcwf_col_lab text-[13px] absolute top-[-30px] left-0 text-white" for="Last_Name">{{$t('contact_form_last_name')}}</label>
            <input type="text" id="Last_Name" name="Last_Name"
              class="zcwf_col_fld px-2 pt-4 pb-3 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none rounded-md" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
              viewBox="0 0 24 24">
              <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                data-original="#000000"></path>
            </svg>
          </div>

          <div class="relative flex items-center sm:col-span-2">
            <label class=" zcwf_col_lab text-[13px] absolute top-[-30px] left-0 text-white"  for="Phone">{{$t('contact_form_phone')}}</label>
            <input type="phone"  id="Phone" name="Phone"
              class="zcwf_col_fld px-2 pt-3 pb-3 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none rounded-md" />
            <svg fill="#bbb" class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 64 64">
              <path
                d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                data-original="#000000"></path>
            </svg>
          </div>


          <div class="relative flex items-center sm:col-span-2">
            <label class=" zcwf_col_lab text-[13px] absolute top-[-30px] left-0 text-white" for="Email">{{$t('contact_form_email')}}</label>
            <input type="email"  name="Email" id="Email"
              class="zcwf_col_fld px-2 pt-4 pb-3 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none rounded-md" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
              viewBox="0 0 682.667 682.667">
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                </clipPath>
              </defs>
              <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                <path fill="none" stroke-miterlimit="10" stroke-width="40"
                  d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                  data-original="#000000"></path>
                <path
                  d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                  data-original="#000000"></path>
              </g>
            </svg>
          </div>
          <div class="sm:col-span-2">
            <label for="Description" class=" zcwf_col_lab block text-sm font-medium text-white">{{$t('contact_form_message')}}</label>
            <div class="mt-1">
              <textarea required="" id="Description" name="Description" rows="4"
                class="zcwf_col_fld border-2 .border-gray-100  block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 "></textarea>
            </div>
          </div>

        </div>
<div class="zcwf_col_fld">
    <!-- <input type="submit" 
          class="mt-10 px-2 py-2.5 w-full rounded-sm text-sm  hover:bg-[#222] text-white bg-[#0067f4] zcwf_button "  :value="$t('candidature_submit')" id="formsubmit"> -->
          <input type="submit" id="formsubmit" class="formsubmit zcwf_button" value="Soumettre" title="Soumettre">

          <input type="reset" class="zcwf_button hidden" name="reset" value="Re-paramétrer" title="Re-paramétrer">
</div>
       

      </form>
      <!-- separation ici-->
      <!-- <form id="webform14177000000109012"
            action="https://crm.zohocloud.ca/crm/WebToLeadForm"
            name="WebToLeads14177000000109012"
            method="POST"
            @submit.prevent="submitForm"
            accept-charset="UTF-8">
        <input type="text" style="display:none;" name="xnQsjsdp" value="27731d1069bf60ea512042068ad60908ce8390ccd5bb78482514da968f37935c">
        <input type="hidden" name="zc_gad" id="zc_gad" value="">
        <input type="text" style="display:none;" name="xmIwtLD" value="c898fd1303cc4d9f0eca13584e7a6f9e3e2c42039f3147f996a3ff5890ac659c4f978cd665dad19e613ebd991abb6fe5">
        <input type="text" style="display:none;" name="actionType" value="TGVhZHM=">
        <input type="text" style="display:none;" name="returnURL" value="https://paultechh.netlify.app">
        
       
        <div class="zcwf_title">zoho client</div>
        <div class="zcwf_row">
          <div class="zcwf_col_lab"><label for="Company">Société<span style="color:red;">*</span></label></div>
          <div class="zcwf_col_fld"><input type="text" id="Company" name="Company" maxlength="200"></div>
        </div>
        <div class="zcwf_row">
          <div class="zcwf_col_lab"><label for="First_Name">Prénom</label></div>
          <div class="zcwf_col_fld"><input type="text" id="First_Name" name="First Name" maxlength="40"></div>
        </div>
        <div class="zcwf_row">
          <div class="zcwf_col_lab"><label for="Last_Name">Nom<span style="color:red;">*</span></label></div>
          <div class="zcwf_col_fld"><input type="text" id="Last_Name" name="Last Name" maxlength="80"></div>
        </div>
        <div class="zcwf_row">
          <div class="zcwf_col_lab"><label for="Email">E-mail</label></div>
          <div class="zcwf_col_fld"><input type="text" ftype="email" autocomplete="false" id="Email" name="Email" crmlabel="" maxlength="100"></div>
        </div>
        <div class="zcwf_row">
          <div class="zcwf_col_lab"><label for="Phone">Téléphone</label></div>
          <div class="zcwf_col_fld"><input type="text" id="Phone" name="Phone" maxlength="30"></div>
        </div>
        <div class="zcwf_row">
          <div class="zcwf_col_lab"><label for="Description">Description</label></div>
          <div class="zcwf_col_fld"><textarea id="Description" name="Description"></textarea></div>
        </div>
        <div class="zcwf_row">
          <div class="zcwf_col_lab"></div>
          <div class="zcwf_col_fld">
            <input type="submit" id="formsubmit" class="formsubmit zcwf_button" value="Soumettre" title="Soumettre">
            <input type="reset" class="zcwf_button" name="reset" value="Re-paramétrer" title="Re-paramétrer">
          </div>
        </div>
      </form> -->
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      submitForm() {
        // Check mandatory fields
        var mndFileds = ['Company', 'Last Name'];
        var fldLangVal = ['Société', 'Nom'];
        for (var i = 0; i < mndFileds.length; i++) {
          var fieldObj = document.forms['WebToLeads14177000000109012'][mndFileds[i]];
          if (fieldObj) {
            if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
              alert(fldLangVal[i] + ' ne peut pas être vide.');
              fieldObj.focus();
              return false;
            }
            else if (fieldObj.nodeName == 'SELECT') {
              if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                alert(fldLangVal[i] + ' ne peut être aucun.');
                fieldObj.focus();
                return false;
              }
            }
            else if (fieldObj.type == 'checkbox') {
              if (fieldObj.checked == false) {
                alert('Please accept ' + fldLangVal[i]);
                fieldObj.focus();
                return false;
              }
            }
          }
        }
        
        // Validate email
        function validateEmail() {
          var form = document.forms['WebToLeads14177000000109012'];
          var emailFld = form.querySelectorAll('[ftype=email]');
          for (var i = 0; i < emailFld.length; i++) {
            var emailVal = emailFld[i].value;
            if ((emailVal.replace(/^\s+|\s+$/g, '')).length != 0) {
              var atpos = emailVal.indexOf('@');
              var dotpos = emailVal.lastIndexOf('.');
              if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                alert('Veuillez entrer une adresse e-mail valide.');
                emailFld[i].focus();
                return false;
              }
            }
          }
          return true;
        }
        
        if (!validateEmail()) {
          return false;
        }
        
        // Disable submit button to prevent multiple submissions
        document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
        
        // Additional logic if needed before form submission
        
        // Form submission
        document.forms['WebToLeads14177000000109012'].submit();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Paste the provided CSS styles here */
  </style>
  
  <style scoped>
  /* Add the provided CSS styles here */
  html, body {
    margin: 0px;
  }
  #crmWebToEntityForm.zcwf_lblLeft {
    width: 100%;
    padding: 25px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  #crmWebToEntityForm.zcwf_lblLeft * {
    box-sizing: border-box;
  }
  #crmWebToEntityForm {
    text-align: left;
  }
  #crmWebToEntityForm * {
    direction: ltr;
  }
  /* .zcwf_lblLeft .zcwf_title {
    word-wrap: break-word;
    padding: 0px 6px 10px;
    font-weight: bold;
  }
  .zcwf_lblLeft.cpT_primaryBtn:hover {
    background: linear-gradient(#02acff 0, #006be4 100%) no-repeat padding-box !important;
    box-shadow: 0 -2px 
  } */
</style>  