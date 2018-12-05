let vendors;
let customers;
let currentUser;
const name = document.createElement("p");
const nameField = document.createElement("input");
name.innerHTML = "Name: ";
name.append(nameField);

const email = document.createElement("p");
const emailField = document.createElement("input");
email.innerHTML = "E-mail: ";
email.append(emailField);

const photo = document.createElement("p");
const photoField = document.createElement("input");
photo.innerHTML = "Photo URL (for now lolol): ";
photo.append(photoField);

const password = document.createElement("p");
const passwordField = document.createElement("input");
password.innerHTML = "Password: ";
password.append(passwordField);

const price = document.createElement("p");
const priceField = document.createElement("input");
price.innerHTML = "Price: ";
price.append(priceField);

const logo = document.createElement("p");
const logoField = document.createElement("input");
logo.innerHTML = "Logo URL (for now lolol): ";
logo.append(logoField);

const vendorLocation = document.createElement("p");
const locationField = document.createElement("input");
vendorLocation.innerHTML = "Location (city and state): ";
vendorLocation.append(locationField);

const service = document.createElement("p");
const serviceField = document.createElement("input");
service.innerHTML = "Service offered: ";
service.append(serviceField);

const website = document.createElement("p");
const websiteField = document.createElement("input");
website.innerHTML = "Website: ";
website.append(websiteField);

const description = document.createElement("p");
const descriptionField = document.createElement("input");
description.innerHTML = "Description: ";
description.append(descriptionField);

const phone = document.createElement("p");
const phoneField = document.createElement("input");
phone.innerHTML = "phone: ";
phone.append(phoneField);

const submitCustomerButton = document.createElement("button");
submitCustomerButton.innerHTML = "Create account";

const signInButtom = document.createElement("button");
signInButtom.innerHTML = "Sign In";

const submitVendorButton = document.createElement("button");
submitVendorButton.innerHTML = "Create account";

const fetching = () => {
  fetch("http://localhost:3000/api/v1/vendors")
    .then(function(responseVendor) {
      return responseVendor.json();
    })
    .then(function(resultVendor) {
      vendors = resultVendor;
      fetch("http://localhost:3000/api/v1/customers")
        .then(function(responseCust) {
          return responseCust.json();
        })
        .then(function(resultCust) {
          customers = resultCust;

          render();
        });
    });
};

const render = () => {
  if ($view) currentUser = null;
  switch ($view) {
    case "customer":
      customerFirst();
      break;

    case "vendor":
      vendorFirst();
      break;
  }
};

fetching();
