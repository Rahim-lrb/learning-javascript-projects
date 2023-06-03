var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var emailId = document.getElementById("email");
var dateofbirth = document.getElementById("dob");
var passwordId = document.getElementById("password");
var confirmPasswordId = document.getElementById("confirmPassword");
var mobileNumber = document.getElementById("phone");
var addressId = document.getElementById("address");
var url = document.getElementById("urlverify");

var error = document.getElementsByTagName("span");

var border = document.getElementsByTagName("input");

//First Name validation//
firstName.onkeyup = function () {
  const regexfirstname = /^[A-Za-z][A-Za-z-\s]+$/;

  let firstnamevalue = firstName.value;

  if (regexfirstname.test(firstnamevalue)) {
    error[0].innerText = "Valid";
    error[0].style.color = "green";
    border[0].style.borderColor = "green";
  } else if (firstnamevalue == "") {
    error[0].innerText = "Please enter the first name";
  } else {
    error[0].innerText = "Invalid name";
    error[0].style.color = "red";
    border[0].style.borderColor = "red";
  }
};

//last name validation //

lastName.onkeyup = function () {
  const regexlastname = /^[A-Za-z][A-Za-z-\s]+$/;

  let lastnamevalue = lastName.value;

  if (regexlastname.test(lastnamevalue)) {
    error[1].innerText = "Valid";
    error[1].style.color = "green";
    border[1].style.borderColor = "green";
  } else if (lastnamevalue == "") {
    error[1].innerText = "Please enter the last name";
  } else {
    error[1].innerText = "Invalid name";
    error[1].style.color = "red";
    border[1].style.borderColor = "red";
  }
};

//email validataion

emailId.onkeyup = function () {
  const regexemail =
    /^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)((\.[-\w\d]{2,3}){1,2}))$/;

  let emailvalue = emailId.value;

  if (regexemail.test(emailvalue)) {
    error[2].innerText = "Valid";
    error[2].style.color = "green";
    border[2].style.borderColor = "green";
  } else if (emailvalue == "") {
    error[2].innerText = "Please enter the email id";
  } else {
    error[2].innerText = "Invalid email";
    error[2].style.color = "red";
    border[2].style.borderColor = "red";
  }
};

dateofbirth.onkeyup = function () {
  console.log("hello");
  const regexdob =
    /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;

  let dobvalue = dateofbirth.value;

  if (regexdob.test(dobvalue)) {
    error[3].innerText = "Valid";
    error[3].style.color = "green";
    border[3].style.borderColor = "green";
  } else if (dobvalue == "") {
    error[3].innerText = "Please enter Date of birth";
  } else {
    error[3].innerText = "Invalid Dob";
    error[3].style.color = "red";
    border[3].style.borderColor = "red";
  }
};

passwordId.onkeyup = function () {
  const regexpass =
    /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

  let passvalue = passwordId.value;

  if (regexpass.test(passvalue)) {
    error[4].innerText = "Valid";
    error[4].style.color = "green";
    border[4].style.borderColor = "green";
  } else if (passvalue == "") {
    error[4].innerText = "Create your new password";
  } else {
    error[4].innerText =
      "min. 8 characters, at least one lower case letter, one upper case letter, one number and one special character";
    error[4].style.color = "red";
    border[4].style.borderColor = "red";
  }
};

confirmPasswordId.onkeyup = function () {
  var pass1 = passwordId.value;
  var pass2 = confirmPasswordId.value;

  if (pass1 != pass2) {
    error[5].innerText = "password not matched";
    error[5].style.color = "red";
    border[5].style.borderColor = "red";
  } else {
    error[5].innerText = "password matched";
    error[5].style.color = "green";
    border[5].style.borderColor = "green";
  }
};

function onSubmitValdiationMessages()
{
    if (firstName.value == "") {
        error[0].innerText = "Please enter the first name";
        error[0].style.color = "red";
        border[0].style.borderColor = "red";
      }
      if (lastName.value == "") {
        error[1].innerText = "Please enter the last name";
        error[1].style.color = "red";
        border[1].style.borderColor = "red";
      }
      if (emailId.value == "") {
        error[2].innerText = "Please enter the valid email";
        error[2].style.color = "red";
        border[2].style.borderColor = "red";
      }
      if (dateofbirth.value == "") {
        error[3].innerText = "Please enter the Date of birth";
        error[3].style.color = "red";
        border[3].style.borderColor = "red";
      }
      if (passwordId.value == "") {
        error[4].innerText = "Please enter the new password";
        error[4].style.color = "red";
        border[4].style.borderColor = "red";
      }
      if (confirmPasswordId.value == "") {
        error[5].innerText = "Please enter the confirm password";
        error[5].style.color = "red";
        border[5].style.borderColor = "red";
      }
      if (mobileNumber.value == "") {
        error[8].innerText = "Please enter the number";
        error[8].style.color = "red";
        border[8].style.borderColor = "red";
      }
      if (addressId.value == "") {
        error[9].innerText = "Please enter the address";
        error[9].style.color = "red";
        border[9].style.borderColor = "red";
      }
      if (url.value == "") {
        error[12].innerText = "Please enter the linkedin url";
        error[12].style.color = "red";
        border[12].style.borderColor = "red";
      }
    
      if (document.getElementById("state").selectedIndex == 0) {
        error[11].innerText = "Please Select state";
        error[11].style.color = "red";
      }
}

function submitValidation() {
    onSubmitValdiationMessages()
  

  if (document.querySelectorAll('[type="checkbox"]:checked').length < 1) {
    console.log(error, "value");
    error[10].innerText = "Please Select one Checkbox";
    error[10].style.color = "red";
    border[10].style.borderColor = "red";
    // isFormValid = false;
  }

  var a = document.getElementById("male");
  var b = document.getElementById("female");
  if (a.checked == false && b.checked == false) {
    error[6].innerText = "Select a Gender";
    error[6].style.color = "red";
  }
  if (a.checked == true) {
    error[6].innerText = "You are Male";
    error[6].style.color = "Blue";
  } else if (b.checked == true) {
    error[7].innerText = "You are Female";
    error[7].style.color = "Pink";
  }
}

mobileNumber.onkeyup = function () {
  const regexmob = /[7-9]{1}[0-9]{9}/;

  let mobvalue = mobileNumber.value;

  if (regexmob.test(mobvalue)) {
    error[8].innerText = "Valid number";
    error[8].style.color = "green";
    border[8].style.borderColor = "green";
  } else if (mobvalue == "") {
    error[8].innerText = "Enter number";
  } else {
    error[8].innerText = "Enter Correct Number";
    error[8].style.color = "red";
    border[8].style.borderColor = "red";
  }
};

addressId.onkeyup = function () {
  const regexadd = /^[a-zA-Z0-9\s,'-]*$/;

  let addressvalue = addressId.value;

  if (regexadd.test(addressvalue)) {
    error[9].innerText = "Valid Address";
    error[9].style.color = "green";
    border[9].style.borderColor = "green";
  } else if (addressvalue == "") {
    error[9].innerText = "Enter your address";
  } else {
    error[9].innerText = "Enter Correct address";
    error[9].style.color = "red";
    border[9].style.borderColor = "red";
  }
};

url.onkeyup = function () {
  const regexurl =/^(https:\/\/)([a-z]{2,3}\.)(linkedin)+(\.[a-z]{2,}){1,3}(#?\/?(?!.*?\.\.)(?!.*\.$)[a-zA-Z0-9#&.-]+)*\/?(\?[a-zA-Z0-9&-_]+=[a-zA-Z0-9-%]+&?)?$/;

  let urlvalue = url.value;

  if (regexurl.test(urlvalue)) {
    error[12].innerText = "Valid URL";
    error[12].style.color = "green";
    border[12].style.borderColor = "green";
  } else if (urlvalue == "") {
    error[12].innerText = "Enter your URL";
  } else {
    error[12].innerText = "Enter Correct URL";
    error[12].style.color = "red";
    border[12].style.borderColor = "red";
  }
};
