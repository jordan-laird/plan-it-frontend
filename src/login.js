let $view;
const title = document.createElement("h1");
title.className = "col-xs-12 mx-auto";

title.innerHTML = "PlanIt";
body.append(title);

const navDiv = document.createElement("div");
const contentDiv = document.createElement("div");
contentDiv.className = "col-xs-12 mx-auto";
const firstPage = document.createElement("div");
firstPage.id = "first-page";
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

firstPage.append(logInText);
firstPage.append(customerButton);
firstPage.append(vendorButton);
body.append(navDiv);
contentDiv.append(firstPage);
body.append(contentDiv);

