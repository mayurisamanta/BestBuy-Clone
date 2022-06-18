
document.querySelector("#main > img:first-child").addEventListener("click", function(){
    window.location.href = "index.html";
});

// Menu
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // Account
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
      var dropdowns1 = document.getElementsByClassName("dropdown-content1");
      var j;
      for (j = 0; j < dropdowns1.length; j++) {
        var openDropdown1 = dropdowns1[j];
        if (openDropdown1.classList.contains('show')) {
          openDropdown1.classList.remove('show');
        }
      }
    }
  }

  let account = document.querySelector(".dropbtn1");
  tempUserData = JSON.parse(localStorage.getItem("tempUserData"));
  if (tempUserData == undefined){
    account.innerText = "Account";
  }
  else {
    account.innerText = "Hi, " + tempUserData[0].Name;
  }

// cart Image
document.querySelector("#main > p:last-child").addEventListener("click", function(){
    window.location.href = "cartpage.html";
});

// Top deals 
document.querySelector("#top").addEventListener("click",function(){
    window.location.href = "topDeals.html";
});

// Deals of the day 
document.querySelector("#deal").addEventListener("click", function(){
    window.location.href = "dealsOftheDay.html";
});

// Account 
// document.querySelector("#account").addEventListener("click", function(){
//     let selectedd = document.querySelector("#account").value;
//     if (selectedd == "signin"){
//         window.location.href = "login.html";
//     }
//     else if (selectedd == "create"){
//         window.location.href = "signup.html";
//     }
//     else if (selectedd == "ac"){
//         window.location.href = "userAccount.html";
//     }
// });
