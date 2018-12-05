let selectedVendor;

//Renders login and register forms and  selects current user
const customerFirst = () => {
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
    saveNewCustomer();
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
    if (currentUser) {
      renderAvailableVendors();
      console.log(currentUser);
    } else {
      alert("Couldn't find this user");
    }
  });

  contentDiv.append(customerTitle, customerLogInButton, customerRegisterButton);
  body.append(contentDiv);
};

const saveNewCustomer = () => {
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
      console.log(currentUser);
    });
  fetching();
  renderAvailableVendors();
};

const renderAvailableVendors = function() {
  body.innerHTML = "";
  const vendorsListedSection = document.createElement("div");
  vendorsListedSection.id = "vendor-section";

  vendors.forEach(function(vendor) {
    //creating elements
    vendorDiv = document.createElement("div");
    vendorName = document.createElement("h2");
    vendorService = document.createElement("h3");
    vendorLogo = document.createElement("img");
    vendorInfoButton = document.createElement("button");

    //setting element properties
    vendorDiv.id = "vendor-div";
    vendorName.id = "vendor-name";
    vendorService.id = "vendor-service";
    vendorInfoButton.id = "vendor-info-button";
    vendorLogo.id = "vendor-logo";
    vendorLogo.height = 100;
    vendorLogo.width = 100;

    //setting element innerHTML
    vendorName.innerHTML = vendor.name;
    vendorService.innerHTML = vendor.service;
    vendorLogo.src = vendor.logo_img;
    vendorInfoButton.innerHTML = "More Information";
    vendorInfoButton.addEventListener("click", function() {
      console.log("test");
      selectedVendor = vendor;
      myModal(selectedVendor);
      modalDiv.style.display = "block";
    });

    //appending
    body.append(vendorsListedSection);
    vendorsListedSection.append(vendorDiv);
    vendorDiv.append(vendorName);
    vendorDiv.append(vendorService);
    vendorDiv.append(vendorLogo);
    vendorDiv.append(vendorInfoButton);
  });
};

// fetching();

const myModal = function(selectedVendor) {
  //modal
  modalDiv = document.createElement("div");
  modalDiv.className = "modal";
  modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  //displayed in modal
  modalName = document.createElement("h3");
  modalService = document.createElement("h4");
  modalLocation = document.createElement("h4");
  modalPhone = document.createElement("p");
  modalWebsite = document.createElement("p");
  modalDescription = document.createElement("p");
  modalName.innerHTML = selectedVendor.name;
  modalService.innerHTML = selectedVendor.service;
  modalLocation.innerHTML = selectedVendor.location;
  modalPhone.innerHTML = selectedVendor.phone;
  modalWebsite.innerHTML = selectedVendor.website;
  modalDescription.innerHTML = selectedVendor.description;

  closeModal = document.createElement("button");
  closeModal.className = "close";
  closeModal.innerHTML = "X";
  closeModal.addEventListener("click", function() {
    modalDiv.style.display = "none";
  });

  //appending modal
  vendorDiv.append(modalDiv);
  modalDiv.append(modalContent);
  modalContent.append(
    modalName,
    modalService,
    modalLocation,
    modalPhone,
    modalWebsite,
    modalDescription,
    closeModal
  );
};
