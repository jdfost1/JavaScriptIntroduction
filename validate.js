
//function used to validate the information from the form submitted by registration.html
function validateForm() {

//create all the variables used for formatting
  var lettersNumbers = /^[0-9a-zA-Z]+$/;
  var lettersOnly = /^[a-zA-Z]+$/;
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneFormat = /^\(?[()]?([0-9]{3})\)?[)]?[-]?([0-9]{3})[-]?([0-9]{4})$/;

  //collect all the values from the input fields inside of the form
  var userName = document.getElementById("userName").value;
  var password = document.getElementById("password").value;
  var passwordVerify = document.getElementById("passwordVerify").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

//first validate that the username contains only letters and numbers
  if (!lettersNumbers.test(userName)) {
  document.getElementById("userNameError").innerHTML = "Error: User name must only contain letters and numbers"; //display the error message
  document.getElementById("userName").value = ""; //clear the input field
  document.getElementById("userName").focus();//set the cursor inside the field
    return false;//return false so that confirm.html does not load
}
//validate that the password is 8 characters or more
  if(password.length < 8){
  document.getElementById("passwordError").innerHTML = "Error: Password must be 8 characters or more";
  document.getElementById("password").value = "";
  document.getElementById("password").focus();
 return false;
}

//validate that both passwords match
if(!(passwordVerify == password)){
document.getElementById("passwordError").innerHTML = "Error: Passwords do not match";
document.getElementById("password").value = "";
document.getElementById("password").focus();
return false;
}
//validate that the first name only contains letters
if(!lettersOnly.test(firstName)){
  document.getElementById("firstNameError").innerHTML = "Error: First name must only contain letters and numbers";
  document.getElementById("firstName").value = "";
  document.getElementById("firstName").focus();
  return false;
}
//validate that the last name only contains letters
if(!lettersOnly.test(lastName)){
  document.getElementById("lastNameError").innerHTML = "Error: Last name must only contain letters and numbers";
  document.getElementById("lastName").value = "";
  document.getElementById("lastName").focus();
  return false;
}
//if the user entered a phone number.. then validate the format
if(phone.length > 0){
  if(!phoneFormat.test(phone)){
    document.getElementById("phoneError").innerHTML = "Error: Phone number format invalid ---> XXX-XXX-XXXX";
    document.getElementById("phone").value = "";
    document.getElementById("phone").focus();
    return false;
  }
}
//if the user did enter an email.. then validate the format
if(email.length > 0){
  if(!emailFormat.test(email)){
    document.getElementById("emailError").innerHTML = "Error: Email is invalid";
    document.getElementById("email").value = "";
    document.getElementById("email").focus();
    return false;
  }
}

}//end of function
