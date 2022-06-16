
document.querySelector("#main > img:first-child").addEventListener("click", function(){
    window.location.href = "index.html";
});

// Menu
document.querySelector("#main > select").addEventListener("click", function(){
    let selected = document.querySelector("#main > select").value;
    if (selected == "all"){
        window.location.href = "appliances.html";
    }
    else if (selected == "topdeals"){
        window.location.href = "topDeals.html";
    }
    else if (selected == "dealofday"){
        window.location.href = "deals.html";
    }
});

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
    window.location.href = "deals.html";
});

// Account 
document.querySelector("#account").addEventListener("click", function(){
    let selectedd = document.querySelector("#account").value;
    if (selectedd == "signin"){
        window.location.href = "login.html";
    }
    else if (selectedd == "create"){
        window.location.href = "signup.html";
    }
    else if (selectedd == "ac"){
        window.location.href = "userAccount.html";
    }
});
