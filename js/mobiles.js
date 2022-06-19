let productData = [
  {
    name: "OnePlus - 9 5G 128GB (Unlocked) - Astral Black",
    price: "989.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6457/6457035_sd.jpg;maxHeight=300;maxWidth=450",
    model: "Oneplus",
    id: 20222,
  },
  {
    name: "Apple - Pre-Owned iPhone XR with 128GB Memory Cell Phone (Unlocked) - Black",
    price: "289.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398614_sd.jpg;maxHeight=300;maxWidth=450",
    model: "Apple",
    id: 20223,
  },
  {
    name: "OnePlus - Geek Squad Certified Refurbished Nord N10 5G 128GB (Unlocked) - Midnight Ice",
    price: "299.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6463/6463777_sd.jpg;maxHeight=300;maxWidth=450",
    model: "Oneplus",
    id: 20225,
  },
  {
    name: "Motorola Edge 256GB (Unlocked) 2021 - Nebula Blue",
    price: "599.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6472/6472092_rd.jpg;maxHeight=300;maxWidth=450",
    model: "Motorola",
    id: 20226,
  },
  {
    name: "OnePlus - 8T 5G 256G (Unlocked) - Aquamarine Green",
    price: "599.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6448/6448201_sd.jpg;maxHeight=300;maxWidth=450",
    model: "Oneplus",
    id: 20227,
  },
  {
    name: "OnePlus - Nord N10 5G 128GB (Unlocked) - Midnight Ice",
    price: "799.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6448/6448207_sd.jpg;maxHeight=300;maxWidth=450",
    model: "Oneplus",
    id: 20228,
  },
  {
    name: "Apple - iPhone 12 5G 64GB - Blue (T-Mobile)",
    price: "2799.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418409_sd.jpg;maxHeight=300;maxWidth=450",
    model: "Apple",
    id: 20229,
  },
  {
    name: "Apple - Pre-Owned iPhone XR with 128GB Memory Cell Phone (Unlocked) - Black",
    price: "289.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398614_sd.jpg;maxHeight=300;maxWidth=450",
    model: "Apple",
    id: 202210,
  },
  {
    name: "Motorola - Moto G Power (2022) 128GB (Unlocked) - Ice Blue",
    price: "199.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494854_sd.jpg;maxHeight=300;maxWidth=450",
    model: "Motorola",
    id: 202211,
  },
  {
    name: "Motorola - Geek Squad Certified Refurbished Moto G Stylus 2021 (Unlocked) - Aurora Black",
    price: "189.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6463/6463774_sd.jpg;maxHeight=300;maxWidth=450",
    model: "Motorola",
    id: 202215,
  },
  {
    name: "Apple - iPhone 13 Pro Max 5G 128GB - Alpine Green (AT&T)",
    price: "1789.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487226_sd.jpg;maxHeight=300;maxWidth=450",
    model: "Apple",
    id: 202216,
  },
  {
    name: "Motorola - Moto G 5G 256GB (2022 Unlocked) - Moonlight Gray",
    price: "389.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501829_sd.jpg;maxHeight=300;maxWidth=450",
    model: "Motorola",
    id: 202217,
  },
  {
    name: "Apple - iPhone 13 Pro 5G 128GB - Sierra Blue (Verizon)",
    price: "1389.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443321_sd.jpg;maxHeight=300;maxWidth=450",
    model: "Apple",
    id: 202218,
  },
  {
    name: "OnePlus - 9 5G 128GB (Unlocked) - Astral Black",
    price: "989.99",
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6457/6457035_sd.jpg;maxHeight=300;maxWidth=450",
    model: "Oneplus",
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
let Apple = document.getElementById("Apple"); // Selected Input Tag by Id

// Mobile is main Data
Apple.addEventListener("change", function () {
  filterItem(productData, Apple.value);
});

let Motorola = document.getElementById("Motorola"); // Selected Input Tag by Id

// Mobile is main Data
Motorola.addEventListener("change", function () {
  filterItem(productData, Motorola.value);
});
let Oneplus = document.getElementById("Oneplus"); // Selected Input Tag by Id

// Mobile is main Data
Oneplus.addEventListener("change", function () {
  filterItem(productData, Oneplus.value);
});

// filter function
let tempFilter = [];
function filterItem(mobiles, a) {
  let filterd = mobiles.filter(function (elem) {
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

let slide_img = [
  "/img/slider-2-1.png",
  "/img/slider-2-2.png",
  "/img/slider-2-3.png",
];

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
