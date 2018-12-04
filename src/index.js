let vendors;
const fetching = () => {
  fetch("http://localhost:3000/api/v1/vendors")
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      vendors = result;
      render();
    });
};

const render = () => {
  switch ($view) {
    case "customer":
      body.innerHTML = "";
      const customerTitle = document.createElement("h3");
      customerTitle.innerHTML = "customer view";
      body.append(customerTitle);
      break;

    case "vendor":
      body.innerHTML = "";
      const vendorTitle = document.createElement("h3");
      vendorTitle.innerHTML = "vendor view";
      body.append(vendorTitle);
      break;
  }
};

fetching();
