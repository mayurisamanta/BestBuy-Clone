let producont = document.getElementById("Addtocart");

let cartLS = JSON.parse(localStorage.getItem("cart_page")) || [];
let total = 0;

// buttontag-------
let Checkout = document.getElementById("btn");

// oder summary--------
let totalbuy = document.getElementById("addtotal");
let totalValue = 0;
cartLS.forEach(function (el) {
  totalValue += el.totalPrice;
  console.log("Hello world");
  console.log(totalValue);
});

document.getElementById("finaltotal").innerText = totalValue.toFixed(2);

if (cartLS.length > 0) {
  function DisplayTotal(cartLS) {
    producont.innerHTML = "";
    cartLS.forEach(function (ele) {});
  }
} else {
  // producont.innerHTML = "";
  document.getElementById("finaltotal").innerText = 0;
  let headempty = document.createElement("h2");
  headempty.innerText = "Empty";
  let para = document.createElement("p");
  para.innerText =
    "Just browsing? You can create an account and start earning reward points whenever you make a purchase.";
  let btn = document.createElement("div");
  let btn1 = document.createElement("button");
  btn1.setAttribute("class", "shopbtn1");

  btn1.innerText = "Continue Shopping";
  btn1.id = "c-shopping";
  btn1.addEventListener("click", function () {
    window.location.href = "signup.html";
  });
  btn.append(btn1);
  Checkout.append(btn);
  producont.append(headempty, para);
  let Empty = document.createElement("div");
  let value1 = document.createElement("div");
  value1.innerHTML += `<h3>Total</h3><div><h3>$ 0</h3></div>`;
  Empty.append(value1);
  totalbuy.append(Empty);
}
// DisplayTotal(cartLS)
if (cartLS.length > 0) {
  function Displaydata(cartLS) {
    producont.innerHTML = "";
    cartLS.forEach(function (ele, ind) {
      Checkout.innerHTML = "";
      let cost = document.createElement("p");
      cost.innerText = `$ ${ele.totalPrice}`;

      let product = document.createElement("div");

      let img = document.createElement("img");
      img.src = ele.image;

      let name = document.createElement("h3");
      name.innerText = ele.name;
      // address1---------
      let address1 = document.createElement("div");
      let pickup = document.createElement("div");
      pickup.innerHTML += `<h3>Pickup at <a href="" >Location</a></h3><p>Ready for pickup <b>Sat, Jan28</b> <br>Eligible for curbside pickup</p>`;
      address1.append(pickup);

      // select------------------------------
      let divdele = document.createElement("div");
      let quantity = document.createElement("p");
      let qua = document.createElement("p");
      quantity.innerText = ele.quantity;
      quantity.style.display = "inline";
      let incre = document.createElement("button");
      incre.setAttribute("id", "incre");
      incre.innerText = "+";
      incre.style.cursor = "pointer";
      incre.addEventListener("click", function () {
        ele.quantity++;
        quantity.innerText = ele.quantity;
        ele.totalPrice = ele.price * ele.quantity;
        cost.innerText = `$ ${ele.totalPrice}`;
        document.getElementById("finaltotal").innerText = totalValue;
        localStorage.setItem("cart_page", JSON.stringify(cartLS));
        window.location.reload();
      });

      let decre = document.createElement("button");
      decre.setAttribute("id", "decre");
      decre.innerText = "-";
      decre.style.cursor = "pointer";
      decre.addEventListener("click", function () {
        ele.quantity--;
        if(ele.quantity===-1){
          deleteforcart(ind)
        }
        quantity.innerText = ele.quantity;
        ele.totalPrice = ele.price * ele.quantity;
        cost.innerText = `$ ${ele.totalPrice}`;
        document.getElementById("finaltotal").innerText = totalValue;
        localStorage.setItem("cart_page", JSON.stringify(cartLS));
        window.location.reload();
      });

      // delete-----------------------
      // totalbuy = (quantity.value * ele.price)
      let delete1 = document.createElement("p");
      delete1.setAttribute("id", "pointer");
      delete1.innerText = "remove";
      delete1.addEventListener("click", function () {
        deleteforcart(ind);
      });
      // button---------
      let btn = document.createElement("div");
      let btn1 = document.createElement("button");
      btn1.setAttribute("class", "shopbtn");
      btn1.innerText = "Checkout";
      btn1.style.cursor = "pointer";
      btn1.addEventListener("click", function () {
        localStorage.setItem("TotalAmount", totalValue);
        window.location.href = "/Payments/checkoutPage.html";
      });

      let btn2 = document.createElement("button");
      btn2.setAttribute("class", "payment");
      btn2.innerText = "PayPal Checkout";
      btn.append(btn1, btn2);
      Checkout.append(btn);

      // divdele.append(selectquantity, delete1)
      divdele.append(qua, quantity, decre, quantity, incre, delete1);
      product.append(img, name, address1, divdele, cost);
      producont.append(product);
    });
  }
} else {
  // producont.innerHTML = "";
  // let headempty = document.createElement("h2");
  // headempty.innerText = "Empty";
  // let para = document.createElement("p");
  // para.innerText =
  //   "Just browsing? You can create an account and start earning reward points whenever you make a purchase.";
  // let btn = document.createElement("div");
  // let btn1 = document.createElement("button");
  // btn1.setAttribute("class", "shopbtn");
  // btn1.innerText = "Continue Shopping";
  // btn.append(btn1);
  // Checkout.append(btn);
  // producont.append(headempty, para);
}

Displaydata(cartLS);

function deleteforcart(ind) {
  cartLS.splice(ind, 1);
  localStorage.setItem("cart_page", JSON.stringify(cartLS));
  window.location.reload();
}
