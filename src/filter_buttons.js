let topDiv = document.createElement("div");
let rowDiv = document.createElement("div");
let homeImg = document.createElement("img");
let photographyImg = document.createElement("img");
let cateringImg = document.createElement("img");
let venuesImg = document.createElement("img");
let entertainmentImg = document.createElement("img");
let staffingImg = document.createElement("img");
let decorationImg = document.createElement("img");
let myQuotesImg = document.createElement("img");
let selectedService;
let filteredVendors;
let selectedState;

//=======
const filterButtons = function () {
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
    myQuotesImg.className = "col-xs-3 col-sm-1 mx-auto";
    myQuotesImg.id = "filter-img"
    myQuotesImg.src = "images/receipt.png"


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
        myQuotesImg
    );
}

homeImg.addEventListener("click", function () {
    selectedService = null;
    renderAvailableVendors();
});
photographyImg.addEventListener("click", function () {
    selectedService = "Photography";
    renderAvailableVendors();
});
cateringImg.addEventListener("click", function () {
    selectedService = "Catering";
    renderAvailableVendors();
});
venuesImg.addEventListener("click", function () {
    selectedService = "Venues";
    renderAvailableVendors();
});
staffingImg.addEventListener("click", function () {
    selectedService = "Staffing";
    renderAvailableVendors();
});
decorationImg.addEventListener("click", function () {
    selectedService = "Decoration";
    renderAvailableVendors();
});
entertainmentImg.addEventListener("click", function () {
    selectedService = "Photography";
    renderAvailableVendors();
});
myQuotesImg.addEventListener("click", function () {
    vendorsListedSection = "";
    renderMyQuotes();
});

const filterByService = function (selectedService) {
    filteredService = vendors.filter(vendor => vendor.service == selectedService);
    return filteredService;
};

const filterByState = function (selectedState){
    filteredState = vendors.filter(vendor => vendor.state == selectedState);
    return filteredState;
}