//validation starts

var ct = document.getElementById("contact");
var eml = document.getElementById("email");
var passw = document.getElementById("password");
var conf = document.getElementById("confirm");
var error1 = document.getElementById("err1");
var error2 = document.getElementById("err2");
var error3 = document.getElementById("err3");
var error4 = document.getElementById("err4");

function pop() {
  if (eml.value == "" || passw.value == "" || ct == "") {
    alert("Fields cannot be empty");
  } else {
    alert("Verify and Submit");
  }
}

function validatecontact() {
  let regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (regex.test(ct.value)) {
    error1.innerText = "Valid Phone number";
    error1.style.color = "green";
    return true;
  } else {
    error1.innerText = "Invalid Phone number";
    alert("Phone number should contain 10 digits");
    error1.style.color = "red";
    return false;
  }
}

function validateemail() {
  let regex =
    /^([A-Za-z 0-9\-#_.]+)@([A-Za-z0-9\-]+).([A-Za-z]{2,3})(.[A-za-z]{2,3})?$/;
  if (regex.test(eml.value)) {
    error2.innerText = "Valid Email id";
    error2.style.color = "green";
    return true;
  } else {
    error2.innerText = "Invalid Email id ";
    error2.style.color = "red";
    alert("Enter valid mail id egs: (abc@xyz.com)");
    return false;
  }
}

function validatepassword() {
  let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  if (regex.test(passw.value)) {
    error3.innerText = "Valid Password ";
    error3.style.color = "green";
    return true;
  } else {
    error3.innerText = "Invalid Password ";
    alert(
      "Password should contain Minimum 8 characters, at least (one uppercase, one lower case, and one number)"
    );
    error3.style.color = "red";
    return false;
  }
}
function confirmpassword() {
  
  if (passw.value==conf.value) {
    error4.innerText = "Password Confirmed";
    error4.style.color = "green";
    return true;
  } else {
    error4.innerText = "Invalid Password ";
    alert(
      "Password should contain Minimum 8 characters, at least (one uppercase, one lower case, and one number)"
    );
    error4.style.color = "red";
    return false;
  }
}
