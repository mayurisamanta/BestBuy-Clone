// nav bar
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
  window.location.href = "deals.html";
});

// end
// nav bar

let productData = [
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450853_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'MacBook Pro 14" Laptop - Apple M1 Pro chip - 16GB Memory - 512GB SSD (Latest Model) - Space Gray',
    price: "1799.00",
    model: "MacBook",
    id: 20221,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6469/6469399_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'ASUS - Vivobook 17.3" Laptop - Intel Core 10th Gen i5 - 12GB Memory - 1TB HDD',
    price: "429.99",
    model: "ASUS",
    id: 20222,
  },

  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'MacBook Air 13.3" Laptop - Apple M1 chip - 8GB Memory - 256GB SSD - Space Gray',
    price: "949.99",
    model: "MacBook",
    id: 20223,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458905_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'Dell - Inspiron 2-in-1 14" Touch-Screen Laptop - Intel Core i5 - 8GB Memory - 512GB Solid State Drive - Silver',
    price: "649.99",
    model: "Dell",
    id: 20224,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470463_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'Dell - G15 15.6" FHD Gaming Laptop - Intel Core i7 - 16GB Memory - NVIDIA GeForce RTX 3050 - 512GB Solid State Drive - Black, Dark Shadow Grey',
    price: "899.99",
    model: "Dell",
    id: 20225,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6499/6499749_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'HP - 14" Laptop - Intel Celeron - 4GB Memory - 64GB eMMC - Snowflake White',
    price: "169.99",
    model: "HP",
    id: 20226,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500646_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'Dell - Inspiron 3511 15.6" Touch Laptop - Intel Core i5 - 8GB Memory - 256GB Solid State Drive - Black',
    price: "599.99",
    model: "Dell",
    id: 20227,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6469/6469397_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'ASUS - Vivobook 15.6" Laptop - Intel 10th Gen i3 - 8GB Memory - 256GB PCIE SSD - Slate Grey',
    price: "404.99",
    model: "ASUS",
    id: 20228,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6499/6499942_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'HP - 14" Laptop - Intel Celeron - 4GB Memory - 64GB eMMC - Rose gold',
    price: "169.99",
    model: "HP",
    id: 20229,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6479/6479177_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'HP - ENVY x360 2-in-1 13.3" OLED Touch-Screen Laptop - Intel Evo Core i7 - 8GB Memory - 512GB SSD - Natural Silver',
    price: "799.99",
    model: "HP",
    id: 202210,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6502/6502175_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'HP - 14" Laptop - AMD Ryzen 3 - 8GB Memory - 128GB SSD - Natural Silver',
    price: "369.99",
    model: "HP",
    id: 202211,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432553_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'Dell - Inspiron 7000 2-in-1 15.6" FHD Touch-Screen Laptop - Intel Core i5 - 12GB Memory - 512GB SSD+32GB Optane - Silver',
    price: "749.99",
    model: "Dell",
    id: 202213,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6448/6448936_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'ASUS - TUF DASH 15.6" Gaming Laptop - Intel 11th Gen i7 - 16GB Memory - NVIDIA GeForce RTX 3070 - 1TB M.2 PCIEG3 SSD - Eclipse Grey',
    price: "1349.99",
    model: "ASUS",
    id: 202214,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450856_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'MacBook Pro 14" Laptop - Apple M1 Pro chip - 16GB Memory - 512GB SSD (Latest Model) - Silver',
    price: "1199.99",
    model: "MacBook",
    id: 202215,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509652_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'MacBook Pro 13.3" Laptop - Apple M2 chip - 8GB Memory - 256GB SSD (Latest Model) - Space Gray',
    price: "1299.00",
    model: "MacBook",
    id: 202216,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428992_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'Microsoft - Surface Laptop Go - 12.4" Touch-Screen - Intel 10th Generation Core i5 - 8GB Memory - 256GB Solid State Drive - Platinum',
    price: "649.99",
    model: "Microsoft",
    id: 202217,
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6469/6469400_sd.jpg;maxHeight=200;maxWidth=300",
    name: 'ASUS - 14.0" Laptop - Intel Celeron N4020 - 4GB Memory - 128GB eMMC - Star Black',
    price: "149.99",
    model: "ASUS",
    id: 202218,
  },
];

//category starts
document.querySelector(".p-c-all").addEventListener("click", allpageFun);
function allpageFun(event) {
  window.location.href = "appliances.html";
}

document.querySelector(".p-c-mobiles").addEventListener("click", mobpageFun);
function mobpageFun(event) {
  window.location.href = "mobiles.html";
}
document.querySelector(".p-c-ref").addEventListener("click", laptopspageFun);
function laptopspageFun(event) {
  window.location.href = "laptops.html";
}

//category ends

//sort by section start
let sortby = document.getElementById("sort");
sortby.addEventListener("change", function () {
  // console.log(sortby.value);
  if (sortby.value == "A") {
    document.querySelector(".item-list").innerHTML = "";
    let filtered = productData.sort(function (a, b) {
      if (a.model < b.model) {
        return -1;
      }
      if (a.model > b.model) {
        return 1;
      }
      return 0;
    });
    displayItems(filtered);
  } else if (sortby.value == "Z") {
    document.querySelector(".item-list").innerHTML = "";
    let filtered = productData.sort(function (a, b) {
      if (a.model < b.model) {
        return 1;
      }
      if (a.model > b.model) {
        return -1;
      }
      return 0;
    });
    displayItems(filtered);
  } else if (sortby.value == "LtoH") {
    document.querySelector(".item-list").innerHTML = "";
    let filtered = productData.sort(function (a, b) {
      return Number(a.price) - Number(b.price);
    });
    displayItems(filtered);
  } else if (sortby.value == "HtoL") {
    document.querySelector(".item-list").innerHTML = "";
    let filtered = productData.sort(function (a, b) {
      return Number(b.price) - Number(a.price);
    });
    displayItems(filtered);
  }
});
// sort by section end

//filter section starts
// Filter Section Brands
let ASUS = document.getElementById("ASUS"); // Selected Input Tag by Id

// Mobile is main Data
ASUS.addEventListener("change", function () {
  filterItem(productData, ASUS.value);
});

let Dell = document.getElementById("Dell"); // Selected Input Tag by Id

// Mobile is main Data
Dell.addEventListener("change", function () {
  filterItem(productData, Dell.value);
});
let HP = document.getElementById("HP"); // Selected Input Tag by Id

// Mobile is main Data
HP.addEventListener("change", function () {
  filterItem(productData, HP.value);
});
let MacBook = document.getElementById("MacBook"); // Selected Input Tag by Id

// Mobile is main Data
MacBook.addEventListener("change", function () {
  filterItem(productData, MacBook.value);
});

// filter function
let tempFilter = [];
function filterItem(laptops, a) {
  let filterd = laptops.filter(function (elem) {
    return elem.model == a;
  });

  // main display function
  filterd.forEach(function (elem) {
    tempFilter.push(elem);
  });
  document.querySelector(".item-list").innerHTML = "";
  displayItems(tempFilter);
}
//filter section brand ends

//filter by price

//filter by price

displayItems(productData);

// this is a function which dynamically takes input from productData array

let cart_page = JSON.parse(localStorage.getItem("cart_page")) || [];

function displayItems(productData) {
  productData.forEach(function (element) {
    let pImage = document.createElement("img");
    pImage.setAttribute("class", "pImage");
    pImage.src = element.image;
    let pName = document.createElement("p");
    pName.setAttribute("class", "pName");
    pName.innerText = element.name;
    let pCost = document.createElement("h1");
    pCost.setAttribute("class", "pCost");
    pCost.innerText = "$" + element.price;
    let pModel = document.createElement("p");
    pModel.setAttribute("class", "pModel");
    pModel.innerText = "Brand: " + element.model;
    let pContent = document.createElement("img");
    pContent.setAttribute("class", "pContent");
    pContent.src = "/img/rating.png";
    let pAvail = document.createElement("p");
    pAvail.setAttribute("class", "pAvail");
    pAvail.innerText = "No rebates available in 96939";

    let item_image = document.createElement("div");
    item_image.setAttribute("class", "item_image");
    item_image.append(pImage);

    let item_details = document.createElement("div");
    item_details.setAttribute("class", "item_details");
    item_details.append(pName, pModel, pContent);

    // cart
    let pCart = document.createElement("button");
    let cLogo = document.createElement("img");
    cLogo.src = "/img/trolly.png";

    let text = document.createElement("p");
    text.innerText = "Add to Cart";

    pCart.setAttribute("class", "pCart");
    pCart.addEventListener("click", function () {
      if (localStorage.getItem("tempUserData") == undefined) {
        alert("You Have to Login or Sign Up to add items into cart!");
        window.location.href = "signup.html";
      } else {
        if (addtoCartFunction(element.id)) {
          element.quantity = 1;
          element.totalPrice = element.price * element.quantity;
          cart_page.push(element);

          localStorage.setItem("cart_page", JSON.stringify(cart_page));
        }
      }
    });

    let pId = document.createElement("p");
    pId.innerText = element.id;
    pId.setAttribute("class", "id");
    pCart.append(cLogo, text);

    let item_cost = document.createElement("div");
    item_cost.setAttribute("class", "item_cost");
    item_cost.append(pCost, pAvail, pCart, pId);

    let rowdiv = document.createElement("div");
    rowdiv.setAttribute("class", "rowdiv");
    rowdiv.append(item_image, item_details, item_cost);
    let item = document.createElement("li");
    item.setAttribute("class", "item");
    item.append(rowdiv);
    document.querySelector(".item-list").append(item);
  });
}

let slide_1 = document.getElementById("slide-1");
let slide_2 = document.getElementById("slide-2");
slide_1.addEventListener("click", slider);
slide_2.addEventListener("click", sliderTwo);
let slide_img = ["/img/slider-2-1.png", "/img/slider-2-2.png", "/img/slider-2-3.png"];

let img = document.getElementById("productSlide");
let count = 0;
function slider() {
  if (count === 0) {
    count = slide_img.length - 1;
  } else {
    count--;
  }
  img.src = slide_img[count];
  console.log(count);
}
function sliderTwo() {
  if (count == slide_img.length - 1) {
    count = 0;
  } else {
    count++;
  }
  img.src = slide_img[count];
  console.log(count);
}
function addtoCartFunction(id) {
  let check = cart_page.filter(function (element) {
    return id == element.id;
  });
  if (check.length > 0) {
    return false;
  } else {
    return true;
  }
}
