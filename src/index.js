let vendors;
let customers;
let currentUser;

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
