// change logo to button 
let logo = document.getElementById('logo');


logo.addEventListener('click',()=>{
    location.href = 'home.htm';
})



let slider_photo = document.getElementById("slider_photo");

// slider auto changes
let currentImageIndex = 1;

setInterval(function slider_auto_Change() {
  slider_photo.style.opacity = 0;

  setTimeout(function () {
    currentImageIndex++;
    if (currentImageIndex >= 17) {
      currentImageIndex = 1;
    }

    slider_photo.src = `Images/${currentImageIndex}.jpg`;
    slider_photo.style.opacity = 1;
  }, 400);
}, 2000);

// slider change to next photo

let nextBtn = document.getElementById("nextBtn");

function next_photo() {
  slider_photo.style.opacity = 0;
  setTimeout(function () {
    currentImageIndex = (currentImageIndex % 17) + 1;
    
    slider_photo.src = `Images/${currentImageIndex}.jpg`;
    slider_photo.style.opacity = 1;
  }, 400);
}

// slider change to pervios photo

let previousBtn = document.getElementById("previousBtn");
function pervious_photo() {
      slider_photo.style.opacity = 0;
  setTimeout(function () {
currentImageIndex--;

  if (currentImageIndex < 1) {
    currentImageIndex = 17;
  }
  slider_photo.src = `Images/${currentImageIndex}.jpg`;
  slider_photo.style.opacity = 1;
  },400);
  
}

let cartButtons = document.querySelectorAll('.action-btn[title="Add to Card"]');

cartButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    e.preventDefualt();
    e.stopPropagation();
    window.location.href = 'https://zafrani.sa/%D8%B2%D8%B9%D9%81%D8%B1%D8%A7%D9%86%D9%8A-%D8%A7%D8%B3%D8%A8%D8%A7%D9%86%D9%8A-%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A-%D9%81%D8%A7%D8%AE%D8%B1-%D8%B2%D8%A7%D9%81%D8%B1%D8%A7%D9%86%D9%8A-5-%D8%BA%D8%B1%D8%A7%D9%85-saffron%2Fp1599415483'; 
  });
});


// scroll to top button 

let scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  let scrollPercent = (scrollTop / docHeight) * 100;

  if (scrollTopBtn) {
    scrollTopBtn.style.background = `conic-gradient(#198754 ${scrollPercent}%, #e0e0e0 ${scrollPercent}%)`;
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}