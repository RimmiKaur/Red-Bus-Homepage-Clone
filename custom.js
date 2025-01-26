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
    "logo": "images/17889.png",
    "rating": "3.91",
    "BusName": "BSRTC",
    "busText": "बिहार राज्य रोड ट्रांसपोर्ट कॉर्पोरेशन",
    "services": "220 services including Volvo Bus, AC & Non AC Bus and more",
    "offical": "Official booking partner of BSRTC",
  },

  {
    "logo": "images/11060.png",
    "rating": "3.83",
    "BusName": "  PEPSU",
    "busText": "  ਪੈਪਸੂ ਰੋਡ ਟਰਾਂਸਪੋਰਟ ਕਾਰਪੋਰੇਸ਼ਨ",
    "services": "  100 services including Volvo Bus, AC & Non AC Bus and more",
    "offical": "Official booking partner of PEPSU",
  },


  {
    "logo": "images/16081.png",
    "rating": "3.91",
    "BusName": "TSRTC",
    "busText": "తెలంగాణ రాష్ట్ర రోడ్డు రవాణా సంస్థ",
    "services": "1450 services including Garuda Plus, Rajdhani and more",
    "offical": "Official booking partner of TSRTC",
  },

  {
    "logo": "images/16227.png",
    "rating": "3.83",
    "BusName": "  PEPSU",
    "busText": "  ਪੈਪਸੂ ਰੋਡ ਟਰਾਂਸਪੋਰਟ ਕਾਰਪੋਰੇਸ਼ਨ",
    "services": "  100 services including Volvo Bus, AC & Non AC Bus and more",
    "offical": "Official booking partner of PEPSU",
  },

  {
    "logo": "images/28.png",
    "rating": "3.91",
    "BusName": "TSRTC",
    "busText": "తెలంగాణ రాష్ట్ర రోడ్డు రవాణా సంస్థ",
    "services": "1450 services including Garuda Plus, Rajdhani and more",
    "offical": "Official booking partner of TSRTC",
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

function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("moreText");
  const btn = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    dots.style.display = "none";
    btn.textContent = "Read less";
  } else {
    moreText.style.display = "none";
    dots.style.display = "inline";
    btn.textContent = "Read more";
  }
}


const faqData = {
  "General": [
    {
      "question": "Can I track the location of my booked bus online?",
      "answer": "Yes, you can track your bus online using our 'Track My Bus' feature. This allows passengers and their families to monitor the live bus location, follow the bus on a map, and plan trips to the boarding point accordingly. Family and friends can also check the bus position to schedule pick-ups and ensure safety."
    },
    {
      "question": "What are the advantages of purchasing a bus ticket with redBus?",
      "answer": "Purchasing online bus tickets with redBus offers numerous advantages. redBus is India’s most trusted bus ticket company, allowing you to book various types of private or government-owned buses. You can choose preferred bus seats, find the nearest boarding and dropping points, and filter buses based on timings, such as morning or evening."
    },
    {
      "question": "Why book bus tickets online on redBus?",
      "answer": "Booking bus tickets online on redBus is preferred due to its convenience. Customers can book tickets from the comfort of their homes, compare different bus schedules and operators, and access various discount offers and exclusive deals. Online booking ensures payment security and allows seat selection, providing a customized travel experience. Additionally, customers receive real-time updates about any changes in the bus timetable, enabling better planning."
    },
    {
      "question": "Does bus booking online cost me more?",
      "answer": "No, booking online does not cost more. The bus ticket price is the same as you would get from the bus operator or any bus ticket agency counter. redBus helps reduce travel costs by comparing ticket prices among various operators, making it a more cost-effective choice."
    },
    {
      "question": "How can I get discounts on bus bookings?",
      "answer": "To get a discount on bus bookings, visit [redBus Offers](https://www.redbus.in/info/OfferTerms) and check the available offers. Copy the coupon code and paste it during checkout to avail of the discount."
    },
    {
      "question": "What's new in bus booking on redBus?",
      "answer": "redBus has launched Primo bus services, where passengers can enjoy traveling in high-rated buses with best-in-class services. While looking for bus tickets on the desired route, customers can check the Primo tag to choose this excellent service, benefiting from hygiene standards, on-time service, and comfort."
    },
    {
      "question": "Can I book a Government bus ticket on redBus?",
      "answer": "Yes, redBus allows you to book tickets for various state government bus operators, including APSRTC, TSRTC, GSRTC, Kerala RTC, TNSTC, RSRTC, and UPSRTC."
    }
  ],
  "Payment": [
    {
      "question": "Is it safe to use my credit or debit card to buy bus tickets on redBus?",
      "answer": "Transactions on redBus are very safe. We employ best-in-class security measures, including Secure Socket Layers (SSL) data encryption, ensuring that the information exchanged is never transmitted unencrypted and is protected from unauthorized access."
    },
    {
      "question": "Does the owner of the credit card/debit card with which the bus ticket is purchased need to be one of the passengers?",
      "answer": "No, the owner of the card doesn't need to be a passenger. However, you need to provide accurate details while booking to ensure smooth verification and travel."
    },
    {
      "question": "What are the different payment options available for bus ticket booking?",
      "answer": `
       <ul>
          <li>● Debit Card/Credit Card/ATM Cards (Visa, MasterCard, Maestro & Rupay)</li>
          <li>● Net Banking (HDFC Bank, ICICI Bank, Indian Bank, Axis Bank, SBI, and all major banks)</li>
          <li>● UPI (Google Pay, Amazon Pay, PhonePe)</li>
          <li>● Book Now, Pay Later (Simpl)</li>
          <li>● Wallets (Paytm)</li>
        </ul>
        Ensure to check for coupon codes to get discounts on bus bookings online, as redBus offers a lot of redDeals to help you book tickets within your budget.
      `
    },
    {
      "question": "How does the transaction appear on my card/account statement?",
      "answer": "Transactions on redBus will appear as REDBUS.IN or www.redbus.in in your bank statement."
    }
  ],
  "Cancellation & Refund": [
    {
      "question": "How can I cancel my bus ticket?",
      "answer": "To cancel your bus ticket, log in to your redBus account, go to 'My Bookings', select the ticket you wish to cancel, and click on 'Cancel'. Follow the prompts to complete the cancellation process."
    },
    {
      "question": "What is the refund policy for canceled tickets?",
      "answer": "The refund policy varies depending on the bus operator and the time of cancellation. Generally, cancellations made well in advance may be eligible for a partial refund after deducting cancellation charges. It's advisable to check the specific terms and conditions during the booking process."
    },
    {
      "question": "How long does it take to receive a refund after cancellation?",
      "answer": "Refunds are typically processed within 5-7 business days. The exact time may vary depending on your bank or payment provider."
    }
  ],
  "Insurance": [
    {
      "question": "Does redBus offer travel insurance?",
      "answer": "Yes, redBus offers travel insurance options during the booking process. You can choose to add insurance to your booking for coverage against unforeseen events."
    },
    {
      "question": "What does the travel insurance cover?",
      "answer": "Travel insurance coverage may include accidental death or disability, medical expenses due to accidents, trip cancellation, and loss of baggage, among other benefits. The specific coverage details will be provided during the booking process."
    },
    {
      "question": "How can I claim travel insurance?",
      "answer": "In the event of a claim, you should contact the insurance provider directly. The contact details and claim procedure will be provided in the insurance policy document sent to your registered email after booking."
    }
  ]
};


// DOM Elements
const tabs = document.querySelectorAll('.custom-tab');
const faqContent = document.getElementById('faqContent');

// Function to Render FAQs for the Selected Tab
function renderFAQs(category) {
  faqContent.innerHTML = ''; // Clear existing content

  faqData[category].forEach(faq => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');

    const faqQuestion = document.createElement('div');
    faqQuestion.classList.add('faq-question');
    faqQuestion.innerHTML = `${faq.question} <span class="icon">+</span>`;

    const faqAnswer = document.createElement('div');
    faqAnswer.classList.add('faq-answer');
    faqAnswer.style.display = 'none'; // Ensure answers are hidden by default
    faqAnswer.innerHTML = faq.answer;

    // Add Toggle Functionality for FAQ Answer
    faqQuestion.addEventListener('click', () => {
      // Close any currently open FAQ items
      const openAnswers = faqContent.querySelectorAll('.faq-answer');
      openAnswers.forEach(answer => {
        if (answer !== faqAnswer && answer.style.display === 'block') {
          answer.style.display = 'none';
          answer.previousElementSibling.querySelector('.icon').textContent = '+';
          answer.previousElementSibling.style.backgroundColor = ''; // Reset background color
          answer.style.backgroundColor = ''; // Reset background color
        }
      });

      // Toggle the clicked FAQ item
      const isVisible = faqAnswer.style.display === 'block';
      faqAnswer.style.display = isVisible ? 'none' : 'block';
      faqQuestion.querySelector('.icon').textContent = isVisible ? '+' : '−';
      faqQuestion.style.backgroundColor = isVisible ? '' : '#f3f4f9';
      faqAnswer.style.backgroundColor = isVisible ? '' : '#f3f4f9';
    });

    faqItem.appendChild(faqQuestion);
    faqItem.appendChild(faqAnswer);
    faqContent.appendChild(faqItem);
  });
}

// Activate Tabs
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active')); // Remove active class from all tabs
    tab.classList.add('active'); // Add active class to clicked tab
    renderFAQs(tab.dataset.tab); // Render FAQs for the selected tab
  });
});

// Render FAQs for the First Tab by Default
renderFAQs('General');


function toggleSection(header) {
  const content = header.nextElementSibling; // Get the content area
  const icon = header.querySelector('.toggle-icon'); // Get the Font Awesome icon

  // Toggle active class for the header and content
  header.classList.toggle('active');
  content.classList.toggle('active');

  // Show or hide the content
  if (content.classList.contains('active')) {
      content.style.display = 'block'; // Show content
  } else {
      content.style.display = 'none'; // Hide content
  }

  // Rotate the icon based on content visibility
  icon.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
}
