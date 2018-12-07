allButtons = document.querySelectorAll('button')
// allButtons.className = "btn btn-secondary"
allButtons.forEach((button) => button.className = 'btn btn-secondary')

let topDiv = document.createElement("div");
let rowDiv = document.createElement("div");
let homeImg = document.createElement("img");
let photographyImg = document.createElement("img");
let cateringImg = document.createElement("img");
let venuesImg = document.createElement("img");
let entertainmentImg = document.createElement("img");
let staffingImg = document.createElement("img");
let decorationImg = document.createElement("img");
let myQuotesCustomerImg = document.createElement("img");
let selectedService;
let filteredVendors;
let selectedState;
const allStates = ['Alabama','Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',  'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
]



// const availableStates = function(){
//     navDiv.innerHTML = ""
//     const selectStateDropdown = document.createElement("select")
//     navDiv.append(selectStateDropdown)
//     // selectStateDropdown.innerHTML = ""
//     allStates.forEach(function(state){
//         // console.log(state)
//         stateOption = document.createElement("option")
//         stateOption.setAttribute("value", state)
//         stateOption.innerHTML = state
//         selectStateDropdown.append(stateOption)
//     })

    
//     selectStateDropdown.addEventListener('change', function () {
//         selectedState = selectStateDropdown.value
//         filterByService(selectedState)
//         // console.log(filterByState(selectedState, vendorArray))
//     })
// }
    
 


//=======
const filterButtons = function() {
  topDiv.className = "container";
  rowDiv.className = "row";
  homeImg.className = "col-xs-3 col-sm-1 mx-auto";
  homeImg.id = "filter-img";
  homeImg.src = "images/home.png";
  photographyImg.className = "col-xs-3 col-sm-1 mx-auto";
  photographyImg.id = "filter-img";
  photographyImg.src = "images/photo-camera.png";
  cateringImg.className = "col-xs-3 col-sm-1 mx-auto";
  cateringImg.id = "filter-img";
  cateringImg.src = "images/buffet.png";
  venuesImg.className = "col-xs-3 col-sm-1 mx-auto";
  venuesImg.id = "filter-img";
  venuesImg.src = "images/placeholder.png";
  staffingImg.className = "col-xs-3 col-sm-1 mx-auto";
  staffingImg.id = "filter-img";
  staffingImg.src = "images/staff.png";
  decorationImg.className = "col-xs-3 col-sm-1 mx-auto";
  decorationImg.id = "filter-img";
  decorationImg.src = "images/floating-balloons.png";
  entertainmentImg.className = "col-xs-3 col-sm-1 mx-auto";
  entertainmentImg.id = "filter-img";
  entertainmentImg.src = "images/drummer-set.png";
  myQuotesCustomerImg.className = "col-xs-3 col-sm-1 mx-auto";
  myQuotesCustomerImg.id = "filter-img";
  myQuotesCustomerImg.src = "images/receipt.png";

  navDiv.append(topDiv);
  topDiv.append(rowDiv);
  rowDiv.append(
    homeImg,
    photographyImg,
    cateringImg,
    venuesImg,
    entertainmentImg,
    staffingImg,
    decorationImg,
    myQuotesCustomerImg
  );
};

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
myQuotesCustomerImg.addEventListener("click", function() {
  vendorsListedSection = "";
  renderMyQuotes();
});

const filterByService = function (selectedService ) {
    filteredService = vendors.filter(vendor => vendor.service == selectedService);
    return filteredService;
    // filteredVendors = vendors.filter(function(vendor){
    //     return vendor.state == selectedState && vendor.service =-=
    // }vendor.service == selectedService,);
    // return filteredVendors;
};

// const filterByState = function (selectedState, vendorArray){
//     // filteredState = vendors.filter(vendor => vendor.state == selectedState);
//     // return filteredState;
//     console.log(vendorArray)
//        let temp = vendorArray.filter(vendor => {
//            console.log(selectedState)
//            return vendor.state == selectedState
//         });
//     return temp;
// }

