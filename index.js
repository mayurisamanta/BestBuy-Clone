// Navbar 


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

// Homepage 

// First Section 

firstsec = [
    {image : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=640;maxWidth=550",
    text : "Apple - AirPods Pro (with Magsafe..."},
    {image : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487447_sd.jpg;maxHeight=640;maxWidth=550",
    text : "Apple - iPhone 13 Pro Max 5G 128GB - Alpin..."},
    {image : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215932_sd.jpg;maxHeight=640;maxWidth=550",
    text : "Apple Watch Series 7 (GPS) 41mm Midnight..."},
    {image : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=640;maxWidth=550",
    text : "MacBook Air 13.3 Laptop - Apple M1..."}
];

firstsec.forEach(function(el){
    let first = document.querySelector("#first > div");
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", el.image);
    let p = document.createElement("p");
    p.innerText = el.text;
    div.append(img, p);
    first.append(div);
});
