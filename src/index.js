let vendors;

fetch("http://localhost:3000/api/v1/vendors")
  .then(function(response) {
    return response.json();
  })
  .then(function(vendors) {
    console.log(vendors);
  });
