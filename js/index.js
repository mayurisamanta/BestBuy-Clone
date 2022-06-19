// Navbar

document
  .querySelector("#main > img:first-child")
  .addEventListener("click", function () {
    window.location.href = "index.html";
  });

// Menu
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Account
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn1")) {
    var dropdowns1 = document.getElementsByClassName("dropdown-content1");
    var j;
    for (j = 0; j < dropdowns1.length; j++) {
      var openDropdown1 = dropdowns1[j];
      if (openDropdown1.classList.contains("show")) {
        openDropdown1.classList.remove("show");
      }
    }
  }
};

let account = document.querySelector(".dropbtn1");
tempUserData = JSON.parse(localStorage.getItem("tempUserData"));
if (tempUserData == undefined) {
  account.innerText = "Account";
} else {
  account.innerText = "Hi, " + tempUserData[0].Name;
}

// cart Image
document
  .querySelector("#main > p:last-child")
  .addEventListener("click", function () {
    window.location.href = "cartpage.html";
  });

// Top deals
document.querySelector("#top").addEventListener("click", function () {
  window.location.href = "topDeals.html";
});

// Deals of the day
document.querySelector("#deal").addEventListener("click", function () {
  window.location.href = "#";
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

// Homepage

// First Section

firstsec = [
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=640;maxWidth=550",
    text: "Apple - AirPods Pro (with Magsafe...",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487447_sd.jpg;maxHeight=640;maxWidth=550",
    text: "Apple - iPhone 13 Pro Max 5G 128GB - Alpin...",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215932_sd.jpg;maxHeight=640;maxWidth=550",
    text: "Apple Watch Series 7 (GPS) 41mm Midnight...",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=640;maxWidth=550",
    text: "MacBook Air 13.3 Laptop - Apple M1...",
  },
];

firstsec.forEach(function (el) {
  let first = document.querySelector("#first > div");
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", el.image);
  let p = document.createElement("p");
  p.innerText = el.text;
  div.append(img, p);
  first.append(div);
});

// Second section

let secondsec = [
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502660_sd.jpg;maxHeight=400;maxWidth=400",
    text: "Lenovo - Ideapad 1 15.6 FHD Touch-Screen Laptop - Ryzen 7...",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505200_sd.jpg;maxHeight=400;maxWidth=400",
    text: "Microsoft - Surface Laptop Go 2 - 12.4” Touch-Screen – Intel Core i5...",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6503/6503849_sd.jpg;maxHeight=400;maxWidth=400",
    text: "HP - Victus 15.6 Gaming Laptop - Intel Core i5-12450H - 8GB Memory - NVIDIA GeForce GTX...",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505727_rd.jpg;maxHeight=400;maxWidth=400",
    text: "Sony - WH-1000XM5 Wireless Noise-Canceling Over-the-Ear...",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509757_sd.jpg;maxHeight=400;maxWidth=400",
    text: "Doctor Strange in the Multiverse of Madness [SteelBook][Digital...",
  },
];

secondsec.forEach(function (el) {
  let secondsec1 = document.querySelector("#secondsec1");
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", el.image);
  let p = document.createElement("p");
  p.innerText = el.text;
  div.append(img, p);
  secondsec1.append(div);
});

// Sixth section

sixthsec = [
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-549829_pol_COPE_DER-fa200b0f-0f59-4944-84ce-13f51119db12.jpg;maxHeight=504;maxWidth=740",
    p: "Apple Watch Save up to $70 on select models.",
    p1: "Give Dad the gift of Apple Watch.",
    p2: "Minimum savings is $30. Excludes open-box and refurbished items.",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_MMT-549800_der-b2458fef-e15a-4f61-87e6-66976b17ba3a.jpg;maxHeight=504;maxWidth=740",
    p: "Appliance Summer Savings Event..",
    p1: "Bring summer home with new appliances for your kitchen and laundry room.",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_microsoft-happy-guy-v2-0620-3a7b8bc1-22dd-4fc9-8cf6-905382572981.jpg;maxHeight=504;maxWidth=740",
    p: "Introducing Surface Laptop Go 2.",
    p1: "Sleek, light, on the go performance.",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-traeger-mmt549810-5ca17726-f4bd-490f-9b37-99065dacf67f.jpg;maxHeight=504;maxWidth=740",
    p: "Save up to $150 on select Traeger grills.",
    p1: "Experience the flavor of wood pellet grilling this summer.",
    p2: "Minimum savings is $75.",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-549477_pol_COPE_DER-bb7580c0-afa1-4b6b-9775-d78aa1be89e3.jpg;maxHeight=504;maxWidth=740",
    p: "Save up to $100 on select wearables.",
    p1: "Keep your goals on track with smartwatches and fitness trackers from Fitbit, Garmin and Citizen.",
    p2: "Minimum savings is $20.",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-552676-220606_DER-b3ba4051-f64a-439b-88f2-99e7308c0c6a.jpg;maxHeight=504;maxWidth=740",
    p: "Save up to $100 on select GoPro.",
    p1: "Plus, get a free $25 Best Buy e-Gift Card with GoPro HERO10 Black action camera.",
    p2: "Minimum savings is $50. Terms and conditions apply to gift card offer.",
  },
];
sixthsec.forEach(function (el) {
  let sixthsec1 = document.querySelector("#sixthsec > div");
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", el.image);
  let text1 = document.createElement("p");
  text1.innerText = el.p;
  let text2 = document.createElement("p");
  text2.innerText = el.p1;
  let text3 = document.createElement("p");
  if (el.p2 == undefined) {
    text3.innerText = "";
  } else {
    text3.innerText = el.p2;
  }
  div.append(img, text1, text2, text3);
  sixthsec1.append(div);
});

// Seventh Section

seventhsec = [
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418601_sd.jpg;maxHeight=272;maxWidth=400",
    text: "MacBook Pro 13.3 Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray",
    price: "$1,199.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900944_sd.jpg;maxHeight=272;maxWidth=400",
    text: "Apple - AirPods (3rd generation) - White",
    price: "$169.00",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487448_sd.jpg;maxHeight=272;maxWidth=400",
    text: "Apple - iPhone 13 Pro Max 5G 256GB - Alpine Green (T-Mobile)",
    price: "$46.66/mo",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6394/6394628_sd.jpg;maxHeight=272;maxWidth=400",
    text: "Apple - Geek Squad Certified Refurbished AirPods Pro - White",
    price: "$149.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=272;maxWidth=400",
    text: "Apple - AirPods Pro (with Magsafe Charging Case) - White",
    price: "$179.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401735_sd.jpg;maxHeight=272;maxWidth=400",
    text: "Samsung - 55 Class 7 Series LED 4K UHD Smart Tizen TV",
    price: "$399.99",
  },
];

seventhsec.forEach(function (el) {
  let seventhsec1 = document.querySelector("#seventhsec > div");
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", el.image);
  let text1 = document.createElement("p");
  text1.innerText = el.text;
  let text2 = document.createElement("p");
  text2.innerText = el.price;
  div.append(img, text1, text2);
  seventhsec1.append(div);
});

// Eighth Section

eighthsec = [
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6489/6489522_sd.jpg;maxHeight=272;maxWidth=400",
    text: "Apple - Geek Squad Certified Refurbished AirPods (3rd generation) - White",
    price: "$107.49",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6397/6397391_rd.jpg;maxHeight=272;maxWidth=400",
    text: "Beats by Dr. Dre - Beats Fit Pro True Wireless Noise Cancelling In-Ear Earbuds - Black",
    price: "$179.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900915_sd.jpg;maxHeight=272;maxWidth=400",
    text: "Beats by Dr. Dre - Beats Studio Buds Totally Wireless Noise Cancelling Earbuds - Black",
    price: "$119.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419203_sd.jpg;maxHeight=272;maxWidth=400",
    text: "Bose - QuietComfort Earbuds True Wireless Noise Cancelling In-Ear Earbuds - Triple Black",
    price: "$199.00",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5920/5920901_rd.jpg;maxHeight=272;maxWidth=400",
    text: "Beats by Dr. Dre - Beats Studio³ Wireless Noise Cancelling Headphones - Matte Black",
    price: "$199.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6341/6341988_rd.jpg;maxHeight=272;maxWidth=400",
    text: "Beats by Dr. Dre - Powerbeats Pro Totally Wireless Earbuds - Black",
    price: "$199.99",
  },
];

eighthsec.forEach(function (el) {
  let eighthsec1 = document.querySelector("#eighthsec > div");
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", el.image);
  let text1 = document.createElement("p");
  text1.innerText = el.text;
  let text2 = document.createElement("p");
  text2.innerText = el.price;
  div.append(img, text1, text2);
  eighthsec1.append(div);
});

// Tenth Section

tenthsec = [
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6478/6478928_sd.jpg;maxHeight=150;maxWidth=225",
    text: "Ray-Ban - Stories Wayfarer Smart Glasses 50mm - Shiny Olive/Transitions G-15...",
    price: "$379.00",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6478/6478917_sd.jpg;maxHeight=150;maxWidth=225",
    text: "Ray-Ban - Stories Round Smart Glasses - Shiny Blue/Dark Blue Polarized",
    price: "$299.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502943_sd.jpg;maxHeight=150;maxWidth=225",
    text: "HP - Victus 15.6 Gaming Laptop - Intel Core i7-12650H - 16GB Memory -...",
    price: "$1,099.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6498/6498473_bd.jpg;maxHeight=150;maxWidth=225",
    text: "HP - ENVY Desktop - Intel Core i7 - 16GB Memory - 1TB SSD - Black",
    price: "$799.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323216_sd.jpg;maxHeight=150;maxWidth=225",
    text: "Samsung - 28 cu. ft. 4-Door French Door Refrigerator with FlexZone Drawer -...",
    price: "$2,299.99",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452813cv1d.jpg;maxHeight=150;maxWidth=225",
    text: "Mounted Solar Panel Charger for Arlo Ultra, Ultra 2, Pro 3 and Pro 4 Cameras ",
    price: "$59.99",
  },
];

tenthsec.forEach(function (el) {
  let tenthsec1 = document.querySelector("#tenthsec > div");
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", el.image);
  let text1 = document.createElement("p");
  text1.innerText = el.text;
  let text2 = document.createElement("p");
  text2.innerText = el.price;
  div.append(img, text1, text2);
  tenthsec1.append(div);
});
