const body = document.querySelector('body')
let vendors;
const fetching = () => {
    fetch("http://localhost:3000/api/v1/vendors")
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            vendors = result;
            console.log(vendors)
            renderAvailableVendors();
        });
};

const renderAvailableVendors = function(){
    const vendorsListedSection = document.createElement('div')
    vendorsListedSection.id = "vendor-section"
    
    vendors.forEach(function(vendor){
        //creating elements
        vendorDiv = document.createElement('div')
        modalDiv = document.createElement('div')
        vendorName = document.createElement('h2')
        vendorService = document.createElement('h3')
        vendorLogo = document.createElement('img')
        vendorInfoButton = document.createElement('button')
        
        //setting element properties
        modalDiv.className = 'modal'
        vendorDiv.id = "vendor-div"
        vendorName.id = 'vendor-name'
        vendorService.id = 'vendor-service'
        vendorInfoButton.id = 'vendor-info-button'
        vendorLogo.id = 'vendor-logo'
        vendorLogo.height = 100;
        vendorLogo.width = 100;
        
        //setting element innerHTML
        vendorName.innerHTML = vendor.name
        vendorService.innerHTML = vendor.service
        vendorLogo.src = vendor.logo_img
        vendorInfoButton.innerHTML = 'More Information'
        
        
        //appending
        body.append(vendorsListedSection)
        vendorsListedSection.append(vendorDiv)
        vendorDiv.append(vendorName)
        vendorDiv.append(vendorService)
        vendorDiv.append(vendorLogo)
        vendorDiv.append(vendorInfoButton)
    })
}

fetching()
