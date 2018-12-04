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

const submitCustomerButton = document.createElement("button");
submitCustomerButton.innerHTML = "Create account";

const signInButtom = document.createElement("button");
signInButtom.innerHTML = "Sign In";

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
  switch ($view) {
    case "customer":
      contentDiv.innerHTML = "";
      const customerTitle = document.createElement("h3");
      const customerLogInButton = document.createElement("button");
      const customerRegisterButton = document.createElement("button");
      customerTitle.innerHTML = "customer view";
      customerRegisterButton.innerHTML = "Register";
      customerLogInButton.innerHTML = "Log In";

      customerRegisterButton.addEventListener("click", function() {
        contentDiv.innerHTML = "";

        contentDiv.append(name, email, photo, password, submitCustomerButton);
      });

      submitCustomerButton.addEventListener("click", function() {
        saveNewUser();
        $view = "";

        nameField.value = "";
        emailField.value = "";
        photoField.value = "";
      });

      customerLogInButton.addEventListener("click", function() {
        contentDiv.innerHTML = "";
        contentDiv.append(email, password, signInButtom);
      });

      signInButtom.addEventListener("click", function() {
        currentUser = customers.find(function(customer) {
          return customer.email == emailField.value;
        });
        userInterface();
        console.log(currentUser);
      });

      contentDiv.append(
        customerTitle,
        customerLogInButton,
        customerRegisterButton
      );
      body.append(contentDiv);
      break;

    case "vendor":
      contentDiv.innerHTML = "";
      const vendorTitle = document.createElement("h3");
      vendorTitle.innerHTML = "vendor view";
      contentDiv.append(vendorTitle);
      body.append(contentDiv);
      break;
  }
};

const saveNewUser = () => {
  fetch("http://localhost:3000/api/v1/customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: nameField.value,
      email: emailField.value,
      img_url: photoField.value
    })
  })
    .then(resp => resp.json())
    .then(user => {
      currentUser = user;
    });
  fetching();
  userInterface();
};

const userInterface = () => {
  contentDiv.innerHTML = "";

  contentDiv.innerHTML = "Jordan's piece here";
};

fetching();
