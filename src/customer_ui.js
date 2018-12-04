const body = document.querySelector('body')
let vendors;
let selectedVendor;

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
        vendorName = document.createElement('h2')
        vendorService = document.createElement('h3')
        vendorLogo = document.createElement('img')
        vendorInfoButton = document.createElement('button')
        
        //setting element properties
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
        vendorInfoButton.addEventListener('click', function(){
            console.log('test')
            selectedVendor = vendor
            myModal(selectedVendor)
            modalDiv.style.display = 'block'
            
        })
    
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


const myModal = function(selectedVendor) {
//modal
modalDiv = document.createElement('div')
modalDiv.className = 'modal'
modalContent = document.createElement('div')
modalContent.className = 'modal-content'

//displayed in modal
modalLocation = document.createElement('p')
modalLocation.innerHTML = selectedVendor.location
closeModal = document.createElement('span')
closeModal.className = 'close'
closeModal.innerHTML = 'X'
closeModal.addEventListener('click', function(){
    modalDiv.style.display = 'none'
})

//appending modal
vendorDiv.append(modalDiv)
modalDiv.append(modalContent)
modalContent.append(modalLocation, closeModal)

}