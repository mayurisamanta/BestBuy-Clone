let producont = document.getElementById("Addtocart")

let cartLS = JSON.parse(localStorage.getItem("cart_page")) || [];

let totalprice = 0;
let total = 0;
let quan = 0;
// buttontag-------
let Checkout = document.getElementById("btn")

// oder summary--------
let totalbuy = document.getElementById("addtotal")

if (cartLS.length > 0) {
    function DisplayTotal(cartLS) {
        // totalprice = 0;
        producont.innerHTML = ""
        cartLS.forEach(function (ele) {
            // let btn=document.createElement("div")
            // let btn1=document.createElement("button")
            // btn1.setAttribute("class","shopbtn")
            // btn1.innerText="Checkout"
            // let btn2=document.createElement("button")
            // btn2.setAttribute("class","payment")
            // btn2.innerText="PayPal Checkout"
            // btn.append(btn1,btn2)
            // Checkout.append(btn)

        })
    }
} else {
    let Empty = document.createElement("div")
    let value1 = document.createElement("div")
    value1.innerHTML += `<h3>Total</h3><div><h3>$ 0</h3></div>`
    Empty.append(value1)
    totalbuy.append(Empty)
}
// DisplayTotal(cartLS)
if (cartLS.length > 0) {
    function Displaydata(cartLS) {
        producont.innerHTML = ""
        cartLS.forEach(function (ele, ind) {
            // let balance=0
            // balance = balance+ele.price
            // console.log(balance)
            // total += (ele.price * ele.quantity)
            // quan += ele.quantity
            Checkout.innerHTML = ""
            // totalprice += Number(ele.price);
            console.log(quan)
            let cost = document.createElement("p")
            cost.innerText = `$ ${ele.price}`

            let product = document.createElement("div")

            let img = document.createElement("img")
            img.src = ele.img

            let name = document.createElement("h3")
            name.innerText = ele.name
            // address1---------
            let address1 = document.createElement("div")
            let pickup = document.createElement("div")
            pickup.innerHTML += `<h3>Pickup at <a href="" >Location</a></h3><p>Ready for pickup <b>Sat, Jan28</b> <br>Eligible for curbside pickup</p>`
            address1.append(pickup)


            // select------------------------------
            let divdele = document.createElement("div")
            let quantity = document.createElement("p");
            let qua = document.createElement("p");
            quantity.innerText = ele.quantity;
            quantity.style.display = "inline"
            let incre = document.createElement("button")
            incre.setAttribute("id","incre")
            incre.innerText = "+"
            incre.addEventListener("click", function () {
                cartLS[ind].quantity++;
                total += (ele.price * ele.quantity)
            quan += ele.quantity
                quantity.innerText = ele.quantity;
                document.getElementById("qua").innerHTML = `quantity ${quan}`
                
                localStorage.setItem("cart_page", JSON.stringify(cartLS));
                window.location.reload()
            });
            let decre = document.createElement("button")
            decre.setAttribute("id","decre")
            decre.innerText = "-"
            decre.addEventListener("click", function () {
                cartLS[ind].quantity--;
                total += (ele.price * ele.quantity)
            quan += ele.quantity
                quantity.innerText = ele.quantity;
                document.getElementById("qua").innerHTML = `quantity ${quan}`
                
                localStorage.setItem("cart_page", JSON.stringify(cartLS));
                window.location.reload()
            });


            // delete-----------------------
            // totalbuy = (quantity.value * ele.price)
            let delete1 = document.createElement("p")
            delete1.setAttribute("id", "pointer")
            delete1.innerText = "remove"
            delete1.addEventListener("click", function () {
                deleteforcart(ind)
            })
            // button---------
            let btn = document.createElement("div")
            let btn1 = document.createElement("button")
            btn1.setAttribute("class", "shopbtn")
            btn1.innerText = "Checkout"
            let btn2 = document.createElement("button")
            btn2.setAttribute("class", "payment")
            btn2.innerText = "PayPal Checkout"
            btn.append(btn1, btn2)
            Checkout.append(btn)

            // divdele.append(selectquantity, delete1)
            divdele.append(qua,quantity, decre,quantity, incre,delete1)
            product.append(img, name, address1,divdele, cost)
            producont.append(product)
        })

    }
} else {
    producont.innerHTML = ""
    let headempty = document.createElement("h2")
    headempty.innerText = "Empty"
    let para = document.createElement("p")
    para.innerText = "Just browsing? You can create an account and start earning reward points whenever you make a purchase."
    let btn = document.createElement("div")
    let btn1 = document.createElement("button")
    btn1.setAttribute("class", "shopbtn")
    btn1.innerText = "Continue Shopping"
    btn.append(btn1)
    Checkout.append(btn)
    producont.append(headempty, para)
}

Displaydata(cartLS);

let odertotal = document.getElementById("addtotal")
odertotal.innerHTML=`<h3>total--------$${total}</h3> <br> <h3>tax -------$0</h3>`



function deleteforcart(ind) {
    cartLS.splice(ind, 1);
    localStorage.setItem("cart_page", JSON.stringify(cartLS))
    window.location.reload();
}

