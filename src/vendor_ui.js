const vendorFirst = () => {
  contentDiv.innerHTML = "";
  const vendorTitle = document.createElement("h3");
  const vendorLogInButton = document.createElement("button");
  const vendorRegisterButton = document.createElement("button");
  vendorTitle.innerHTML = "vendor view";
  vendorRegisterButton.innerHTML = "Register";
  vendorLogInButton.innerHTML = "Log In";

  vendorRegisterButton.addEventListener("click", function() {
    contentDiv.innerHTML = "";

    contentDiv.append(
      name,
      email,
      vendorLocation,
      service,
      phone,
      website,
      logo,
      description,
      price,
      password,
      submitVendorButton
    );
  });

  submitVendorButton.addEventListener("click", function() {
    saveNewVendor();
    $view = "";
  });

  vendorLogInButton.addEventListener("click", function() {
    contentDiv.innerHTML = "";
    contentDiv.append(email, password, signInButtom);
  });

  signInButtom.addEventListener("click", function() {
    currentUser = vendors.find(function(vendor) {
      return vendor.email == emailField.value;
    });
    renderVendorsInterface();
    console.log(currentUser);
  });

  contentDiv.append(vendorTitle, vendorLogInButton, vendorRegisterButton);
  body.append(contentDiv);
};

const renderVendorsInterface = () => {
  contentDiv.innerHTML = "";
  contentDiv.append("vendor's interface ");
};

const saveNewVendor = () => {
  fetch("http://localhost:3000/api/v1/vendors/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: nameField.value,
      email: emailField.value,
      location: locationField.value,
      phone: phoneField.value,
      service: serviceField.value,
      website: websiteField.value,
      logo_img: logoField.value,
      description: descriptionField.value,
      price: priceField.value
    })
  })
    .then(resp => resp.json())
    .then(user => {
      currentUser = user;
    });
  fetching();
  renderVendorsInterface();
};
