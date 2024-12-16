const cardData = [
  {
    id: 1,
    image: "images/tile-80X80.png",
    text: "Save up to Rs 250 on bus tickets",
    coupon: "FIRST",
    imagebg: "linear-gradient(71.04deg, rgb(12, 57, 139), rgb(62, 118, 216))",
  },
  {
    id: 2,
    image: "images/80x801.png",
    text: "Save up to Rs 300 on bus tickets",
    coupon: "BUS300",
    imagebg: "linear-gradient(71.04deg, rgb(39, 57, 101), rgb(80, 210, 149))",
  },
  {
    id: 3,
    image: "images/SUPERHIT.png",
    text: "Save up to Rs 300 on AP, TS routes",
    coupon: "SUPERHIT",
    imagebg: "linear-gradient(71.04deg, rgb(72, 0, 4), rgb(216, 78, 85))",
  },
  {
    id: 4,
    image: "images/80x80.png",
    text: "Save up to Rs 300 on Chartered Bus",
    coupon: "CHARTERED15",
    imagebg: "linear-gradient(71.04deg, rgb(14, 113, 67), rgb(115, 236, 179))",
  },
  {
    id: 4,
    image: "images/BUS300.png",
    text: "Save up to Rs 100 on Gajal Travels",
    coupon: "GAJALBUS10",
    imagebg: "linear-gradient(71.04deg, rgb(206, 119, 0) -6.92%, rgb(255, 194, 111) 109.43%);",
  },
  {
    id: 4,
    image: "images/80x80(1).png",
    text: "Save up to Rs. 50 on IntrCity SmartBus operator",
    coupon: "INTRCITY",
    imagebg: "linear-gradient(71.04deg, rgb(134, 0, 62) -6.92%, rgb(210, 81, 141) 109.43%)",
  },
];





// Insert cards dynamically
const cardContainer = document.getElementById("cardContainer");
cardData.forEach((item) => {
  const card = `
   <div class="d-flex justify-content-between p-3 col-4  text-white " style="background-image: ${item.imagebg}; border-radius: 10px; ">
        <div class="me-2 rounded-circle">
          <img src="${item.image}"  class="rounded-circle card-images" style="width: 80px; height: 80px;">
        </div>
        <div>
          <div class="bus small-text fw-bold">Bus</div>
          <p class="m-0">${item.text}</p>
          <p class="small-text">Valid till 31 Dec</p>
          <div class="d-flex align-items-center">
            <div class="coupon px-2 py-1 rounded small-text">${item.coupon}</div>
            <img src="images/copy.svg" class="ms-2" alt="Copy Icon" style="width: 20px; cursor: pointer;">
          </div>
        </div>
      </div>
  `;
  cardContainer.insertAdjacentHTML("beforeend", card);
});




// Scroll Functionality for Arrows
// Scroll Functionality for Arrows
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

leftArrow.addEventListener("click", () => {
  cardContainer.scrollLeft -= scrollAmount;
});

rightArrow.addEventListener("click", () => {
  cardContainer.scrollLeft += scrollAmount;
});

// Touchpad or Mouse Wheel Scroll to Snap
cardContainer.addEventListener("wheel", (e) => {
  e.preventDefault(); // Prevent default scroll behavior
  const delta = Math.sign(e.deltaY); // Determine scroll direction (up/down)
  cardContainer.scrollLeft += delta * scrollAmount; // Scroll to next or previous card
});


const card1Data = [
  {
    "logo":"images/17889.png",
    "rating":"3.91",
    "BusName":"BSRTC",
    "busText":"बिहार राज्य रोड ट्रांसपोर्ट कॉर्पोरेशन",
    "services":"220 services including Volvo Bus, AC & Non AC Bus and more",
    "offical":"Official booking partner of BSRTC",
  },

  {
    "logo":"images/11060.png",
    "rating":"3.83",
    "BusName":"  PEPSU",
    "busText":"  ਪੈਪਸੂ ਰੋਡ ਟਰਾਂਸਪੋਰਟ ਕਾਰਪੋਰੇਸ਼ਨ",
    "services":"  100 services including Volvo Bus, AC & Non AC Bus and more",
    "offical":"Official booking partner of PEPSU",
  },

  
  {
    "logo":"images/16081.png",
    "rating":"3.91",
    "BusName":"TSRTC",
    "busText":"తెలంగాణ రాష్ట్ర రోడ్డు రవాణా సంస్థ",
    "services":"1450 services including Garuda Plus, Rajdhani and more",
    "offical":"Official booking partner of TSRTC",
  },

  {
    "logo":"images/16227.png",
    "rating":"3.83",
    "BusName":"  PEPSU",
    "busText":"  ਪੈਪਸੂ ਰੋਡ ਟਰਾਂਸਪੋਰਟ ਕਾਰਪੋਰੇਸ਼ਨ",
    "services":"  100 services including Volvo Bus, AC & Non AC Bus and more",
    "offical":"Official booking partner of PEPSU",
  },

  {
    "logo":"images/28.png",
    "rating":"3.91",
    "BusName":"TSRTC",
    "busText":"తెలంగాణ రాష్ట్ర రోడ్డు రవాణా సంస్థ",
    "services":"1450 services including Garuda Plus, Rajdhani and more",
    "offical":"Official booking partner of TSRTC",
  },
 
];

const card1Container = document.getElementById("card1Container");
card1Data.forEach((item) => {
  const card1 = `
                    <div class="goverment-bus shadow mt-5 me-4">
                        <!-- Offer Card -->
                        <div class="offer-card p-4">
                          <div class="row align-items-center">
                            <!-- Logo -->
                            <div class="col-auto">
                              <img
                                src="${item.logo}"
                                class="img-fluid rounded-circle"
                              >
                            </div>
                            <!-- Title and Rating -->
                            <div class="col">
                              <h5 class="fw-bold mb-0">
                                ${item.BusName}
                                <span class="rating-badge">★ ${item.rating}</span>
                              </h5>
                              <p class="mb-0 text-secondary small">
                                ${item.busText}
                              </p>
                            </div>
                          </div>
                          <!-- Service Details -->
                          <div class="mt-3">
                            <p class="service-details">
                             ${item.services}
                            </p>
                          </div>
                          <!-- Official Partner Badge -->
                          <div class="official-partner d-flex rounded-pill px-2 align-items-center justify-content-center">
                            <img
                              src="images/rdc-redbus-logo.webp"
                              alt="RedBus Icon"
                              class="me-2 logoimage"
                            >
                            <span class="small-text">${item.offical}</span>
                          </div>
                        </div>
                        <!-- Code Banner -->
                        <div class=" small-text fw-bold text-center mt-2">
                          Use code <span class="text-dark">FIRST</span> to save upto ₹250 (only for first time users)
                        </div>
                      </div>
  `;
  card1Container.insertAdjacentHTML("beforeend", card1);
});
 // Card width + gap

const leftArrow1 = document.getElementById("leftArrow1");
const rightArrow1 = document.getElementById("rightArrow1");
const scrollAmount1 = 370; // Width of one card

leftArrow1.addEventListener("click", () => {
  card1Container.scrollLeft -= scrollAmount1;
});

rightArrow1.addEventListener("click", () => {
  card1Container.scrollLeft += scrollAmount1;
});

// Touchpad or Mouse Wheel Scroll to Snap
card1Container.addEventListener("wheel", (e) => {
  e.preventDefault(); // Prevent default scroll behavior
  const delta = Math.sign(e.deltaY); // Determine scroll direction (up/down)
  card1Container.scrollLeft += delta * scrollAmount1; // Scroll to next or previous card
});