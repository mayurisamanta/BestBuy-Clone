let userData = JSON.parse(localStorage.getItem("userData")) || []; // All user info

let tempData = JSON.parse(localStorage.getItem("tempUserData")); // Temporary Data

document.querySelector("form").addEventListener("submit", checkForLogIn);

// main Function to check user information
function checkForLogIn(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let flag = false;
  userData.forEach(function (el, index) {
    if (el.userEmail == email && el.userPassword == password) {
      i = index;
      flag = true;
    }
  });
  if (flag) {
    let name = userData[i].userName;
    let id = userData[i].userId;
    let tempUserData = [];
    let obj = {
      Name: name,
      Email: email,
      memberId: id,
    };
    tempUserData.push(obj);
    localStorage.setItem("tempUserData", JSON.stringify(tempUserData));
    alert("Sign in Succesfully");
    window.location.href = "userAccount.html";
  } else {
    alert("Invalid Login Email/ID or Password");
  }
}

let eye = document.getElementById("eyeBtn");
eye.addEventListener("click", showHide);

function showHide() {
  let column = document.getElementById("password");
  if (column.type == "password") {
    column.type = "text";
    eye.src = "/Assets-1/eye.png";
  } else {
    column.type = "password";
    eye.src = "/Assets-1/hidden.png";
  }
}
