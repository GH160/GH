// List of buttons  and inputs for account creation
step1_create_new_email="liveSwitch"
step1_select_hotmail_com="LiveDomainBoxList"
step1_type_email_adress="MemberName"
step1_validate_email="iSignupAction"

step2_password="PasswordInput"
step2_validate_password="iSignupAction"

step3_first_name="FirstName"
step3_last_name="LastName"
step3_validate_name="iSignupAction"

step4_country="Country"
step4_born_day="BirthDay"
step4_born_month="BirthMonth"
step4_born_year="BirthYear"
step4_validate_contry_and_born="iSignupAction"

step5_captcha=

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

//////////////////
//////Select//////
//////////////////

// Récupérer l'élément select
var selectElement = document.getElementById("monSelect");
// Sélectionner l'option souhaitée (3eme option)
selectElement.selectedIndex = 3;

/////////////////
//////Input//////
/////////////////

// Récupérer l'élément input
var inputElement = document.getElementById("monInput");

// Sélectionner le texte dans l'input
inputElement.select();

