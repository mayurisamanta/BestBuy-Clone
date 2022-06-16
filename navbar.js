document
  .querySelector("#main > img:first-child")
  .addEventListener("click", function () {
    window.location.href = "index.html";
  });

// Menu js
document.querySelector("#main > select").addEventListener("click", function () {
  let selected = document.querySelector("#main > select").value;
  if (selected == "all") {
    window.location.href = "appliances.html";
  } else if (selected == "topdeals") {
    window.location.href = "topDeals.html";
  } else if (selected == "dealofday") {
    window.location.href = "";
  }
});

// cart Image
document
  .querySelector("#main > p:last-child")
  .addEventListener("click", function () {
    window.location.href = "";
  });

// Top deals
document.querySelector("#top").addEventListener("click", function () {
  window.location.href = "topDeals.html";
});

// Deals of the day
document.querySelector("#deal").addEventListener("click", function () {
  window.location.href = "";
  console.log("inside");
});

// Account
document.querySelector("#account").addEventListener("click", function () {
  let selectedd = document.querySelector("#account").value;
  if (selectedd == "signin") {
    window.location.href = "";
  } else if (selectedd == "create") {
    window.location.href = "";
  } else if (selectedd == "ac") {
    window.location.href = "";
  }
});

// end
