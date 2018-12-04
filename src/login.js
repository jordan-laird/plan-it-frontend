let $view;
const body = document.querySelector("body");

const title = document.createElement("h1");
title.innerHTML = "PlanIt";
body.append(title);

const logInDiv = document.createElement("div");
const logInText = document.createElement("h3");
const customerButton = document.createElement("button");
const vendorButton = document.createElement("button");

logInText.innerHTML = "I am...";
customerButton.innerHTML = "I'm looking for a service";
vendorButton.innerHTML = "I am a vendor";

customerButton.addEventListener("click", function() {
  $view = "customer";
  fetching();
});

vendorButton.addEventListener("click", function() {
  $view = "vendor";
  fetching();
});

logInDiv.append(logInText);
logInDiv.append(customerButton);
logInDiv.append(vendorButton);
body.append(logInDiv);
