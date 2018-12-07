let quotes;
let vendors;
let customers;
let currentUser;
const body = document.querySelector("#body-row");
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

          fetch("http://localhost:3000/api/v1/quotes")
            .then(function(responseQuo) {
              return responseQuo.json();
            })
            .then(function(resultQuo) {
              quotes = resultQuo;
              render();
            });
        });
    });
};

const render = () => {
  switch ($view) {
    case "customer":
      currentUser = null;
      customerFirst();
      break;

    case "vendor":
      currentUser = null;
      vendorFirst();
      break;
    case "customerQuote":
      renderMyQuotes();
      break;
    case "vendorQuote":
      renderVendorQuotes();
      break;
  }
};



fetching();
