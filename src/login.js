let $view;
const title = document.createElement("h1");
title.className = "col-xs-12 mx-auto"

title.innerHTML = "PlanIt";
body.append(title);

const navDiv = document.createElement('div')
const contentDiv = document.createElement("div");
contentDiv.className = "col-xs-12 mx-auto"
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

contentDiv.append(logInText);
contentDiv.append(customerButton);
contentDiv.append(vendorButton);
body.append(navDiv)
body.append(contentDiv);

allButtons = documents.querySelectorAll('button')
customerButton.className = "btn btn-primary"
customerButton.type = "button"