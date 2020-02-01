
//function used to validate the information from the form submitted by registration.html
function validateForm() {

//set variable to contain all the digits and letters with both upper and lower case
  var lettersNumbers = /^[0-9a-zA-Z]+$/;
  var lettersOnly = /^[a-zA-Z]+$/;
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneFormat = /^\(?[()]?([0-9]{3})\)?[)]?[-]?([0-9]{3})[-]?([0-9]{4})$/;

  //collect all the inputs from the form
  var userName = document.getElementById("userName").value;
  var password = document.getElementById("password").value;
  var passwordVerify = document.getElementById("passwordVerify").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

//first validate that the username contains only letters and numbers
  if (!lettersNumbers.test(userName)) {
  alert("User name must only contain letters and numbers");
  document.getElementById("userName").value = "";
  document.getElementById("userName").focus();
    return false;
}
//validate that the password is 8 characters or more
  if(password.length < 1){
  alert("password must be 8 characters or more");
  document.getElementById("password").value = "";
  document.getElementById("password").focus();
 return false;
}
//validate the password verify is 8 characters or more
if(passwordVerify.length < 1){
alert("password must be 8 characters or more");
document.getElementById("passwordVerify").value = "";
document.getElementById("passwordVerify").focus();
return false;
}
//validate that both passwords match
if(!(passwordVerify == password)){
alert("The passwords entered do not match");
document.getElementById("password").value = "";
document.getElementById("password").focus();
return false;
}
//validate that the first name only contains letters
if(!lettersOnly.test(firstName)){
  alert("First name must only contain letters");
  document.getElementById("firstName").value = "";
  document.getElementById("firstName").focus();
  return false;
}
//validate that the last name only contains letters
if(!lettersOnly.test(lastName)){
  alert("Last name must only contain letters");
  document.getElementById("lastName").value = "";
  document.getElementById("lastName").focus();
  return false;
}
//if the user entered a phone number.. then validate the format
if(phone.length > 0){
  if(!phoneFormat.test(phone)){
    alert("Invalid Phone Number");
    document.getElementById("phone").value = "";
    document.getElementById("phone").focus();
    return false;
  }
}
//if the user did enter an email.. then validate the format
if(email.length > 0){
  if(!emailFormat.test(email)){
    alert("Invalid email");
    document.getElementById("email").value = "";
    document.getElementById("email").focus();
    return false;
  }
}

}//end of function
