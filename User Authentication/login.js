
let userData = JSON.parse(localStorage.getItem("userData")) || []; // All user info

let loggedInUsers = JSON.parse(localStorage.getItem("loggedInUsers")) || []; // User who logged in

let tempData = JSON.parse(localStorage.getItem("tempUserData")); // Temporary Data

document.querySelector("form").addEventListener("submit" , checkForLogIn);

// Main Function to check user information
function checkForLogIn(event){
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let flag = false;
    userData.forEach(function(el , index){
        if(el.userEmail == email && el.userPassword == password){
            i = index;
            flag = true;
        };
    });
    if(flag){
        let name = userData[i].userName;
        let obj = {
            Name:name,
            Email:email,
        }
        localStorage.setItem("tempUserData" , JSON.stringify(obj));
        alert("Sign in Succesfully");
    }else{
        alert("Wrong login Email or Password");
    }
}

let eye = document.getElementById("eyeBtn");
eye.addEventListener("click" , showHide);

function showHide(){
    let column = document.getElementById("password");
    if(column.type == "password"){
        column.type = "text";
        eye.src = "hidden.png"
    }else{
        column.type = "password";
        eye.src = "eye.png"
    }
}