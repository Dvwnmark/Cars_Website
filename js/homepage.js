import spotlight from "../data/spotlight.json" assert { type: "json" };

const carSpotlightElement = document.querySelector("#nav-tabContent")

window.showCar = () => {
const carElement = carSpotlightElement.querySelector(".active")
const carType = carElement.getAttribute("id").split("nav-")[1]
const carContainer = carElement.querySelector(".spotlight-container")
const moreCar = carElement.querySelector("a")
console.log(moreCar);
if (carElement) {
    if(carType =='suv') {
        var listProduct =spotlight.suv?.slice(0, 8);
    } else if(carType=='sedan') {
        var listProduct =spotlight.sedan?.slice(0, 8);
    } else if(carType=='mpv') {
        var listProduct =spotlight.mpv?.slice(0, 8);
    } else if(carType=='cuv') {
        var listProduct =spotlight.cuv?.slice(0, 8);
    } else if(carType=='pickup') {
        var listProduct =spotlight.pickup?.slice(0, 8);
    } else {
        var listProduct =spotlight.hatchback?.slice(0, 8);
    }
    console.log(listProduct);
    carContainer.innerHTML = listProduct
    ?.map(
        (item, index) => `
            <div class="spotlight-item" style="-webkit-animation: flyIn ${item.id *0.7}s;">
                <a href='./productDetail.html?brand=${item.typeID}&id=${item.id}'
                    class="item col-lg-4 col-md-4 col-sm-6 col-xs-6">
                    <div  style="height:130px">
                        <img src=${item.img} alt="item-0">
                    </div>
                    <div class="item-info">
                        <h4 class="name">${item.brand}</h4>
                        <span>${item.name}</span>
                    </div>
                </a>
            </div>
        `
    )
    .join("");
}
}
showCar()