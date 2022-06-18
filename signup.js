document.querySelector("form").addEventListener("submit", main);

let userData = JSON.parse(localStorage.getItem("userData")) || []; // use this  local storage

function main(event) {
  event.preventDefault();
  let name = document.getElementById("fName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let cPassword = document.getElementById("cPassword").value;
  let phone = document.getElementById("phone").value;

  if (password == cPassword) {
    if (authEmailAndPhone(userData) == false) {
      let uid = Date.now().toString(36) + Math.floor(Math.random() * 100);
      let object = {
        userName: name,
        userEmail: email,
        userPassword: password,
        userPhone: phone,
        userId: uid,
      };
      userData.push(object);
      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Sign up succesful");
      window.location.href = "login.html";
    } else {
      alert("Email or Phone Already Exists");
    }
  } else {
    alert("Password not Matched");
  }
}

function authEmailAndPhone(userData) {
  let flag = false;
  userData.forEach(function (elem) {
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (elem.userEmail == email || elem.userPhone == phone) {
      flag = true;
    }
  });
  if (flag) {
    return true;
  } else {
    return false;
  }
}
