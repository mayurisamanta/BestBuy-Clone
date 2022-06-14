let userData = JSON.parse(localStorage.getItem("userData")) || [];
let loggedInUsers = JSON.parse(localStorage.getItem("loggedInUsers")) || [];
let tempData = JSON.parse(localStorage.getItem("tempUserData"));

document.querySelector("form").addEventListener("submit" , checkForLogIn);

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