let $view;
const title = document.createElement("h1");
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
customerButton.innerHTML = "looking for a service";
vendorButton.innerHTML = "a vendor";
customerButton.className = "btn btn-secondary";
vendorButton.className = "btn btn-secondary";

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

// allButtons = documents.querySelectorAll("button");
// customerButton.className = "btn btn-primary";
// customerButton.type = "button";
