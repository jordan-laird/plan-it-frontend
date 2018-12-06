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

const vendorLocation = document.createElement("p");
const locationField = document.createElement("input");
vendorLocation.innerHTML = "Location (city and state): ";
vendorLocation.append(locationField);

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

const renderVendorsInterface = () => {
  contentDiv.innerHTML = "";

  const name = document.createElement("h3");
  name.innerHTML = `<b>${currentUser.name}</b>`;
  const email = document.createElement("p");
  email.innerHTML = currentUser.email;
  const vendorLocation = document.createElement("p");
  vendorLocation.innerHTML = `${currentUser.location}`;
  const service = document.createElement("p");
  service.innerHTML = `${currentUser.service}`;
  const phone = document.createElement("p");
  phone.innerHTML = `${currentUser.phone}`;
  const website = document.createElement("p");
  website.innerHTML = `${currentUser.website}`;
  const logo = document.createElement("img");
  logo.src = `${currentUser.logo_img}`;
  const description = document.createElement("p");
  description.innerHTML = `${currentUser.description}`;
  const price = document.createElement("p");
  price.innerHTML = currentUser.price_range;

  contentDiv.append(
    name,
    email,
    vendorLocation,
    service,
    phone,
    website,
    logo,
    description,
    price
  );

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
      price_range: parseInt(priceField.value)
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
