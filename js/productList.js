import honda from '../data/honda.json' assert  {type: "json"}

const productList = document.getElementById('product-list')
const params = new URLSearchParams(window.location.search);
const typeQuery = params.get('brand')
if(typeQuery=='honda') {
  var carData = honda.Honda.old
}
else {
  // mặc định sẽ là spoltlight car
  var carData = honda.Honda.old.slice(0,8)

}

productList.innerHTML = carData?.map(
    (item,  index) =>
        `
    <div class= "product-item" data-bs-toggle="modal" data-bs-target="#productModal${index}">
        <img src="${item.img}" alt="${item.title}">
        <div class="product-item-content container">
            <h6 class="product-item-title">${item.nam_sx} - ${item.title}</h6>
            <p class="product-item-price">${item.price.toLocaleString()} VND</p>
            <div class="row">
                <div class="row">
                    <div class="col-6">
                        <span>${item.nam_sx}</span>
                    </div>
                    <div class="col-6">
                        <span>${item.hop_so}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <span>${item.xuat_xu}</span>
                    </div>
                    <div class="col-6">
                        <span>${item.nhien_lieu}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
  <div class="modal fade" id="productModal${index}" tabindex="${index}" aria-labelledby="productModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-body product-detail" style="padding: 0;">
          <h4 class="modal-title product-detail-title" id="productModalLabel">${item.title}</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"
           aria-label="Close"></button>
          <div class="row">
            <div class="col-12 col-md-12 col-lg-6">
              <img src="${item.img}"
               alt="program-image" width="100%">
            </div>
            <div class="col-12 col-md-12 col-lg-6" style="display: flex; align-items: center; flex-direction: column;">
              <div class="row product-detail-subtitle">
                <p class="col-6">
                  <span>
                    <img src="../assets/imgs/icons/calendar.svg" alt="calendar">
                    Năm SX
                  </span>
                  <span>${item.nam_sx}</span>
                </p>
                <p class="col-6">
                  <span>
                    <img src="../assets/imgs/icons/steering.svg" alt="steering">
                    Tình trạng</span>
                  <span>${item.tinh_trang}</span>
                </p>
                <p class="col-6">
                  <span>
                    <img src="../assets/imgs/icons/odo.svg" alt="odo">
                    Odo
                  </span>
                  <span>${item.km}</span>
                </p>
                <p class="col-6">
                  <span>
                    <img src="../assets/imgs/icons/location.svg" alt="location">
                    Tỉnh thành
                  </span>
                  <span>${item.tinh_thanh}</span>
                </p>
                <p class="col-6">
                  <span>
                    <img src="../assets/imgs/icons/gear.svg" alt="gear">
                    Hộp số
                  </span>
                  <span>${item.hop_so}</span>
                </p>
                <p class="col-6">
                  <span>
                    <img src="../assets/imgs/icons/gas.svg" alt="gas">
                    Nhiên liệu
                  </span>
                  <span>${item.nhien_lieu}</span>
                </p>
              </div>
              <h2 class="product-detail-price">${item.price.toLocaleString()} VND</h2>
                <button type="button" class="btn btn-secondary"
                              style="--bs-btn-border-radius: 0; --bs-btn-padding-y: .5rem;
                              --bs-btn-padding-x: 1.25rem; --bs-btn-font-size: 1rem; display: flex; justify-content: center; margin-left: -30px;">
                              ĐẶT HÀNG
                          </button>
            </div>
          </div>
        </div>
        <div class="product-detail-desc">
          <h5>MÔ TẢ</h5>
          <p>
            ${item.desc}
          </p>
            </div>
        </div>
        </div>
    </div>
    `
).join("")