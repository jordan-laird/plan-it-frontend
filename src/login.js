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
// logInText.innerHTML = "What brings you here?";
customerButton.innerHTML = "I'm planning an event";

vendorButton.innerHTML = "I'm offering a service";
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
firstPage.style = "margin-top: 100px;";
customerButton.style = "margin-right: 50px;";
// logInText.style = "text-align: center;";
// firstPage.append(logInText);
firstPage.append(customerButton);
firstPage.append(vendorButton);
body.append(navDiv);
contentDiv.append(firstPage);
body.append(contentDiv);

// allButtons = documents.querySelectorAll("button");
// customerButton.className = "btn btn-primary";
// customerButton.type = "button";
