<template>
    <div id="crmWebToEntityForm" class="zcwf_lblLeft crmWebToEntityForm">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="content-type" content="text/html;charset=UTF-8">
      
      <form id="webform14177000000109012"
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
        
        <!-- Form fields -->
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
      </form>
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
  .zcwf_lblLeft .zcwf_title {
    word-wrap: break-word;
    padding: 0px 6px 10px;
    font-weight: bold;
  }
  .zcwf_lblLeft.cpT_primaryBtn:hover {
    background: linear-gradient(#02acff 0, #006be4 100%) no-repeat padding-box !important;
    box-shadow: 0 -2px 
  }
</style>  