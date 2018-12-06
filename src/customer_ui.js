let selectedVendor;
let topDiv = document.createElement("div");
let rowDiv = document.createElement("div");
let homeImg = document.createElement("img");
let photographyImg = document.createElement("img");
let cateringImg = document.createElement("img");
let venuesImg = document.createElement("img");
let entertainmentImg = document.createElement("img");
let staffingImg = document.createElement("img");
let decorationImg = document.createElement("img");

let selectedService;
let filteredVendors;

//=======
const navDiv = function(){
  topDiv.className = "container";
  rowDiv.className = "row";
  homeImg.className = "col-md-1";
  homeImg.id = "filter-img";
  homeImg.src = "images/home.png";
  photographyImg.className = "col-md-1";
  photographyImg.id = "filter-img";
  photographyImg.src = "images/photo-camera.png";
  cateringImg.className = "col-md-1";
  cateringImg.id = "filter-img";
  cateringImg.src = "images/buffet.png";
  venuesImg.className = "col-md-1";
  venuesImg.id = "filter-img";
  venuesImg.src = "images/placeholder.png";
  staffingImg.className = "col-md-1";
  staffingImg.id = "filter-img";
  staffingImg.src = "images/staff.png";
  decorationImg.className = "col-md-1";
  decorationImg.id = "filter-img";
  decorationImg.src = "images/floating-balloons.png";
  entertainmentImg.className = "col-md-1";
  entertainmentImg.id = "filter-img";
  entertainmentImg.src = "images/drummer-set.png";

  navDiv.append(topDiv);
  topDiv.append(rowDiv);
  rowDiv.append(
    homeImg,
    photographyImg,
    cateringImg,
    venuesImg,
    entertainmentImg,
    staffingImg,
    decorationImg
  );
}

homeImg.addEventListener("click", function() {
  selectedService = null;
  renderAvailableVendors();
});
photographyImg.addEventListener("click", function() {
  selectedService = "Photography";
  renderAvailableVendors();
});
cateringImg.addEventListener("click", function() {
  selectedService = "Catering";
  renderAvailableVendors();
});
venuesImg.addEventListener("click", function() {
  selectedService = "Venues";
  renderAvailableVendors();
});
staffingImg.addEventListener("click", function() {
  selectedService = "Staffing";
  renderAvailableVendors();
});
decorationImg.addEventListener("click", function() {
  selectedService = "Decoration";
  renderAvailableVendors();
});
entertainmentImg.addEventListener("click", function() {
  selectedService = "Photography";
  renderAvailableVendors();
});

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
passwordField.type = "password";
password.innerHTML = "Password: ";
password.append(passwordField);

//Renders forms and selects current user
const customerFirst = () => {
  selectedVendor = null;
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
      filterButtons();
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
  filterButtons();
  if (selectedService) {
    filteredVendors = filterByService(selectedService);
  } else {
    filteredVendors = vendors;
  }
  console.log(typeof vendors);

  contentDiv.innerHTML = "";
  const vendorsListedSection = document.createElement("div");
  vendorsListedSection.id = "vendor-section";
  vendorsListedSection.className = "container";

  filteredVendors.forEach(function(vendor) {
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
    contentDiv.append(vendorsListedSection);
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
  modalQuoteDiv = document.createElement("div");
  modalCreateQuote = document.createElement("h3");

  modalName.innerHTML = selectedVendor.name;
  modalService.innerHTML = selectedVendor.service;
  modalLocation.innerHTML = selectedVendor.location;
  modalPhone.innerHTML = selectedVendor.phone;
  modalWebsite.innerHTML = selectedVendor.website;
  modalDescription.innerHTML = selectedVendor.description;
  modalCreateQuote.innerHTML = "Ask for quote";

  // closing modal
  closeModal = document.createElement("button");
  closeModal.className = "close";
  closeModal.innerHTML = "Close";
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
    modalCreateQuote,
    modalQuoteDiv,
    closeModal
  );

  modalCreateQuote.addEventListener("click", function() {
    modalQuoteDiv.innerHTML = "";
    // modalQuoteDiv.append("create quote here");
    createNewQuote(selectedVendor);
  });
};

const createNewQuote = selectedVendor => {
  const eventDate = document.createElement("p");
  eventDate.innerHTML = "Event date";
  const eventDateInput = document.createElement("input");
  eventDate.append(eventDateInput);

  const guestCount = document.createElement("p");
  guestCount.innerHTML = "How many guests?";
  const guestCountInput = document.createElement("input");
  guestCount.append(guestCountInput);

  const budget = document.createElement("p");
  budget.innerHTML = "What's your budget?";
  const budgetInput = document.createElement("input");
  budget.append(budgetInput);

  const comments = document.createElement("p");
  comments.innerHTML = `Leave a message to ${selectedVendor.name}: <br>`;
  const commentsInput = document.createElement("textarea");
  comments.append(commentsInput);

  const submitQuote = document.createElement("button");
  submitQuote.innerHTML = "Submit";

  modalQuoteDiv.append(eventDate, guestCount, budget, comments, submitQuote);

  submitQuote.addEventListener("click", function() {
    fetch("http://localhost:3000/api/v1/quotes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        vendor_id: selectedVendor.id,
        customer_id: currentUser.id,
        guestCount: guestCountInput.value,
        event_date: eventDateInput.value,
        comments: commentsInput.value,
        budget: parseInt(budgetInput.value)
      })
    })
      .then(resp => resp.json())
      .then(quote => {
        console.log(quote);
        $view = "customerQuote";
        fetching();
      });
  });
};

const renderMyQuotes = () => {
  contentDiv.innerHTML = "";
  contentDiv.innerHTML = "<h1> My quotes </h1>";
  let myQuotes = quotes.filter(quote => currentUser.id == quote.customer_id);
  const quotesContainer = document.createElement("div");
  quotesContainer.className = "container";
  const quotesRows = document.createElement("div");
  quotesRows.className = "row";
  contentDiv.append(quotesContainer);
  quotesContainer.append(quotesRows);

  myQuotes.forEach(myQuote => {
    let myQuoteVendor = vendors.filter(
      vendor => vendor.id == myQuote.vendor_id
    );

    const divQuote = document.createElement("div");
    divQuote.className = "col-md-3";
    divQuote.id = "quoteCard";

    const nameQuote = document.createElement("h3");
    nameQuote.innerHTML = myQuoteVendor[0].name;
    divQuote.append(nameQuote);

    const serviceQuote = document.createElement("h4");
    serviceQuote.innerHTML = `${myQuoteVendor[0].service} ${
      myQuoteVendor[0].price_range
    }`;
    divQuote.append(serviceQuote);

    const imageQuote = document.createElement("img");
    imageQuote.id = "vendor-logo";
    imageQuote.src = myQuoteVendor[0].logo_img;
    divQuote.append(imageQuote);

    const dateQuote = document.createElement("p");
    dateQuote.innerHTML = `My event date: ${myQuote.event_date}`;
    divQuote.append(dateQuote);

    const guestQuote = document.createElement("p");
    guestQuote.innerHTML = `Estimated guests: ${myQuote.guestCount}`;
    divQuote.append(guestQuote);

    const messageQuote = document.createElement("p");
    messageQuote.innerHTML = `Message sent: ${myQuote.comments}`;
    divQuote.append(messageQuote);

    quotesRows.append(divQuote);
    // contentDiv.append(divQuote);
  });
};

const filterByService = function(selectedService) {
  filteredService = vendors.filter(vendor => vendor.service == selectedService);
  return filteredService;
};
