const vendorText = document.createElement("h3");
const body = document.querySelector("body");
const vendorContainer = document.createElement("div");
const vendorDetail = document.createElement("div");
let vendors;
let selectedVendor;
const fetching = () => {
  fetch("http://localhost:3000/api/v1/vendors")
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      vendors = result;
      console.log(vendors);
      selectedVendor = vendors[0];
      renderVendorDetail();
    });
};
const renderVendorDetail = function() {
  vendorContainer.innerHTML = "";
  vendorText.innerText = "A";

  vendors = function(vendor) {
    const vendorName = document.createElement("p");
    vendorName.innerHTML = `<b>Name:</b> ${selectedVendor.name}`;
    const vendorLocation = document.createElement("p");
    vendorLocation.innerHTML = `<b>Location:</b> ${selectedVendor.location}`;
    const vendorPhone = document.createElement("p");
    vendorPhone.innerHTML = `<b>Phone:</b> ${selectedVendor.phone}`;
    const vendorService = document.createElement("p");
    vendorService.innerHTML = `<b>Service:</b> ${selectedVendor.service}`;
    const vendorWebsite = document.createElement("p");
    vendorWebsite.innerHTML = `<b>Website:</b> ${selectedVendor.website}`;
    const Img = document.createElement("img");
    Img.src = selectedVendor.logo_img;
    const vendorDescription = document.createElement("p");
    vendorDescription.innerHTML = `<b>Description:</b> ${
      selectedVendor.description
    }`;
    const vendorPriceRange = document.createElement("p");
    vendorPriceRange.innerHTML = `<b>Price Range:</b> ${
      selectedVendor.price_range
    }`;

    vendorContainer.append(
      vendorName,
      vendorLocation,
      vendorPhone,
      vendorService,
      vendorWebsite,
      Img,
      vendorDescription,
      vendorPriceRange
    );
    body.append(vendorContainer);
  };
};

const vendorRegisterForm = function() {
  vendorDetail.innerHTML = `
        <form class="vendor">
            <div>
                <label>Name</label>
                <input class="name-field" type="text" value=""/>
            </div>
            <div>
                <label>Location</label>
                <input class="location-field" type="text" value="
                "/>
            </div>
            <div>
                <label>Phone</label>
                <input class="phone-field" type="text" value=""/>
            </div>

            <div>
                <label>Service</label>
                <input class="service-field" type="text" value=""/>
            </div>
            <div>
                <label>Website</label>
                <input class="website-field" type="text" value=""/>
            </div>
            <div>
                <label>Image</label>
                <input class="image-field" type="text" value=""/>
            </div>
            <div>
                <label>Description</label>
                <input class="description-field" type="text" value=""/>
            </div>
            <div>
                <label>Price Range</label>
                <input class="price-range-field" type="text" value=""/>
            </div>
        </form>`;

  let submitButton = document.createElement("button");
  submitButton.innerText = "Submit";
  submitButton.addEventListener("click", function(event) {
    // let input = venderDetail.querySelector('.name-field')
    // vendor.name = input.value
    vendor.name = vendorDetail.querySelector(".name-field").value;
    vendor.location = vendorDetail.querySelector(".location-field").value;
    vendor.phone = vendorDetail.querySelector(".phone-field").value;
    vendor.service = vendorDetail.querySelector(".service-field").value;
    vendor.website = vendorDetail.querySelector(".website-field").value;
    vendor.logo_img = vendorDetail.querySelector(".image-field").value;
    vendor.description = vendorDetail.querySelector(".description-field").value;
    vendor.price_range = vendorDetail.querySelector(".price_range-field").value;

    // render();
    renderVendorDetail();
  });
  body.append(vendorDetail);
  vendorDetail.append(submitButton);
};

// render();

fetching();
vendorRegisterForm();
