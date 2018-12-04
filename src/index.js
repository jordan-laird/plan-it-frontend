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
      contentDiv.innerHTML = "";
      const customerTitle = document.createElement("h3");
      customerTitle.innerHTML = "customer view";
      contentDiv.append(customerTitle);
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

fetching();
