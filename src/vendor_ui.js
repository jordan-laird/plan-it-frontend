const price = document.createElement("p");
const priceField = document.createElement("select");
price.innerHTML = "Price: ";
price.append(priceField);

const option1 = document.createElement("option");
option1.setAttribute("value", "$");
const text1 = document.createTextNode("$");
option1.appendChild(text1);

const option2 = document.createElement("option");
option2.setAttribute("value", "$$");
const text2 = document.createTextNode("$$");
option2.appendChild(text2);

const option3 = document.createElement("option");
option3.setAttribute("value", "$$$");
const text3 = document.createTextNode("$$$");
option3.appendChild(text3);

const option4 = document.createElement("option");
option4.setAttribute("value", "$$$$");
const text4 = document.createTextNode("$$$$");
option4.appendChild(text4);

const option5 = document.createElement("option");
option5.setAttribute("value", "$$$$$");
const text5 = document.createTextNode("$$$$$");
option5.appendChild(text5);

priceField.append(option1, option2, option3, option4, option5);

const logo = document.createElement("p");
const logoField = document.createElement("input");
logo.innerHTML = "Logo URL (for now lolol): ";
logo.append(logoField);

const vendorCity = document.createElement("p");
const cityField = document.createElement("input");
vendorCity.innerHTML = "City: ";
vendorCity.append(cityField);

const vendorState = document.createElement("p");
const stateField = document.createElement("input");
vendorState.innerHTML = "State: ";
vendorState.append(stateField);

const service = document.createElement("p");
const serviceField = document.createElement("select");
service.innerHTML = "Service offered: ";

const optionPhotography = document.createElement("option");
optionPhotography.setAttribute("value", "Photography");
const textPhotography = document.createTextNode("Photography");
optionPhotography.appendChild(textPhotography);

const optionCatering = document.createElement("option");
optionCatering.setAttribute("value", "Catering");
const textCatering = document.createTextNode("Catering");
optionCatering.appendChild(textCatering);

const optionStaffing = document.createElement("option");
optionStaffing.setAttribute("value", "Staffing");
const textStaffing = document.createTextNode("Staffing");
optionStaffing.appendChild(textStaffing);

const optionVenues = document.createElement("option");
optionVenues.setAttribute("value", "Venues");
const textVenues = document.createTextNode("Venues");
optionVenues.appendChild(textVenues);

const optionDecoration = document.createElement("option");
optionDecoration.setAttribute("value", "Decoration");
const textDecoration = document.createTextNode("Decoration");
optionDecoration.appendChild(textDecoration);

const optionEntertainment = document.createElement("option");
optionEntertainment.setAttribute("value", "Entertainment");
const textEntertainment = document.createTextNode("Entertainment");
optionEntertainment.appendChild(textEntertainment);

serviceField.append(
  optionPhotography,
  optionCatering,
  optionStaffing,
  optionVenues,
  optionDecoration,
  optionEntertainment
);

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
phone.innerHTML = "Phone Number: ";
phone.append(phoneField);

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
      vendorCity,
      vendorState,
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
    if (currentUser) {
      renderVendorsInterface();
      console.log(currentUser);
    } else {
      alert("Couldn't find user");
    }
  });

  contentDiv.append(vendorTitle, vendorLogInButton, vendorRegisterButton);
  body.append(contentDiv);
};

const vendorNav = document.createElement("div");
profileImg = document.createElement("img");
profileImg.src = "images/user.png";
profileImg.style = "height: 100px;";

profileImg.className = "col-xs-3 col-sm-1";
profileImg.id = "filter-img";

const editProfileImg = document.createElement("img");
editProfileImg.src = "images/edituser.png";
editProfileImg.style = "height: 100px;";
editProfileImg.className = "col-xs-3 col-sm-1";
editProfileImg.id = "filter-img";

const myQuotesImg = document.createElement("img");
myQuotesImg.src = "images/receipt.png";
myQuotesImg.style = "height: 100px;";

myQuotesImg.className = "col-xs-3 col-sm-1";
myQuotesImg.id = "filter-img";

//Portfolio case we have time
// const myPortfolioImg = document.createElement("img");
// myPortfolioImg.src =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCGyzQCpBWIboSErgUWkpGjp6NnHDRHNukRLST7JZ484gOrrN";
// myPortfolioImg.style = "height: 100px;";

// myPortfolioImg.className = "col-xs-3 col-sm-1";
// myPortfolioImg.id = "filter-img";

const vendorTopDiv = document.createElement("div");
const vendorRowDiv = document.createElement("div");
vendorNav.append(vendorTopDiv);
vendorTopDiv.append(vendorRowDiv);
vendorRowDiv.append(profileImg, editProfileImg, myQuotesImg);

profileImg.addEventListener("click", function() {
  renderMyVendorProfile();
});

editProfileImg.addEventListener("click", function() {
  contentDiv.innerHTML = "";
  contentDiv.append(vendorNav);
  nameField.value = currentUser.name;
  emailField.value = currentUser.email;
  cityField.value = currentUser.city;
  stateField.value = currentUser.state;
  serviceField.value = currentUser.service;
  phoneField.value = currentUser.phone;
  websiteField.value = currentUser.website;
  logoField.value = currentUser.logo_img;
  descriptionField.value = currentUser.description;
  priceField.value = currentUser.price_range;

  const editVendorButton = document.createElement("button");
  editVendorButton.innerText = "Update";

  editVendorButton.addEventListener("click", function() {
    editVendor();
  });

  contentDiv.append(
    name,
    email,
    vendorCity,
    vendorState,
    service,
    phone,
    website,
    logo,
    description,
    price,
    password,
    editVendorButton
  );
});

myQuotesImg.addEventListener("click", function() {
  renderVendorQuotes();
});

const renderVendorsInterface = () => {
  contentDiv.innerHTML = "";
  contentDiv.append(vendorNav);
};

const renderMyVendorProfile = () => {
  contentDiv.innerHTML = "";
  contentDiv.append(vendorNav);
  const name = document.createElement("h3");
  name.innerHTML = `${currentUser.name}</b>`;
  const email = document.createElement("p");
  email.innerHTML = `E-mail: ${currentUser.email}`;
  const vendorCity = document.createElement("p");
  vendorCity.innerHTML = `City: ${currentUser.city}`;
  const vendorState = document.createElement("p");
  vendorState.innerHTML = `State: ${currentUser.state}`;
  const service = document.createElement("p");
  service.innerHTML = `Service: ${currentUser.service} ${
    currentUser.price_range
  }`;
  const phone = document.createElement("p");
  phone.innerHTML = `Phone: ${currentUser.phone}`;
  const website = document.createElement("p");
  website.innerHTML = `Website: ${currentUser.website}`;
  const logo = document.createElement("img");
  logo.src = `${currentUser.logo_img}`;
  logo.style = "height: 100px; ";
  const description = document.createElement("p");
  description.innerHTML = `Description: ${currentUser.description}`;

  contentDiv.append(
    name,
    email,
    vendorCity,
    vendorState,
    service,
    phone,
    website,
    logo,
    description
  );
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
      city: cityField.value,
      state: stateField.value,
      phone: phoneField.value,
      service: serviceField.value,
      website: websiteField.value,
      logo_img: logoField.value,
      description: descriptionField.value,
      price_range: priceField.value
    })
  })
    .then(resp => resp.json())
    .then(user => {
      currentUser = user;
      console.log(currentUser);
    });

  fetching();
  renderVendorsInterface();
};

const editVendor = () => {
  fetch(`http://localhost:3000/api/v1/vendors/${currentUser.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: nameField.value,
      email: emailField.value,
      city: cityField.value,
      state: stateField.value,
      phone: phoneField.value,
      service: serviceField.value,
      website: websiteField.value,
      logo_img: logoField.value,
      description: descriptionField.value,
      price_range: priceField.value
    })
  })
    .then(resp => resp.json())
    .then(user => {
      currentUser = user;
      console.log(user);
    });
  fetching();
  $view = "";
  renderVendorsInterface();
};

const renderVendorQuotes = () => {
  contentDiv.innerHTML = "";
  contentDiv.append(vendorNav);
  contentDiv.innerHTML = "<h1> My quotes </h1>";

  let myVendorQuotes = quotes.filter(
    quote => currentUser.id == quote.vendor_id
  );
  console.log(myVendorQuotes);
  const vendorQuotesContainer = document.createElement("div");
  vendorQuotesContainer.className = "container";
  const vendorQuotesRows = document.createElement("div");
  vendorQuotesRows.className = "row";
  contentDiv.append(vendorQuotesContainer);
  vendorQuotesContainer.append(vendorQuotesRows);

  myVendorQuotes.forEach(vendorQuote => {
    const divQuote = document.createElement("div");
    divQuote.className = "col-md-3";
    divQuote.id = "quoteCard";

    let customerRequesting = customers.filter(
      customer => customer.id == vendorQuote.customer_id
    );

    const customerQuote = document.createElement("h4");
    customerQuote.innerHTML = `Requested by ${customerRequesting[0].name}`;
    divQuote.append(customerQuote);

    const budgetQuote = document.createElement("p");
    budgetQuote.innerHTML = `Customer's budget: ${vendorQuote.budget}`;

    const guestQuote = document.createElement("p");
    guestQuote.innerHTML = `Estimated number of guests: ${
      vendorQuote.guestCount
    }`;

    const dateQuote = document.createElement("p");
    dateQuote.innerHTML = `Event's date: ${vendorQuote.event_date}`;

    const commentsQuote = document.createElement("p");
    commentsQuote.innerHTML = `Comments: ${vendorQuote.comments}`;

    divQuote.append(budgetQuote, guestQuote, dateQuote, commentsQuote);

    vendorQuotesRows.append(divQuote);
  });
};
