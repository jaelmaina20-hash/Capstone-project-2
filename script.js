const hamburgerMenu = document.getElementById('haMenu');
const mobileMenu = document.getElementById('mobile-menu');
const mechanics = document.querySelectorAll('.call-me');
let images = document.querySelectorAll(".hero-image");
let captions = document.querySelectorAll(".hero-caption");

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

let current = 0;
let total = images.length;

if (total > 0) {
  for (let i = 0; i < total; i++) {
    if (i === 0) {
      images[i].style.opacity = "1";
      if (captions[i]) {
        captions[i].style.opacity = "1";
      }
    } else {
      images[i].style.opacity = "0";
      if (captions[i]) {
        captions[i].style.opacity = "0";
      }
    }
  }

  setInterval(function() {
    images[current].style.opacity = "0";
    if (captions[current]) {
      captions[current].style.opacity = "0";
    }

    current = current + 1;
    if (current >= total) {
      current = 0;
    }

    images[current].style.opacity = "1";
    if (captions[current]) {
      captions[current].style.opacity = "1";
    }

  }, 6000);
}

  
     mechanics.forEach((mechanic) => {
    mechanic.addEventListener("click", () => {
      const available = Math.random() > 0.5;
      const message = available
        ? "Mechanic is available. Expect a call shortly.": "Mechanic is currently busy. Please try again later.";

      const popup = document.createElement("div");
      popup.textContent = message;
      popup.className =
        "fixed top-5 right-5 bg-white text-[rgb(139,0,0)] font-semibold border border-[rgb(255,69,58)] shadow-xl rounded-lg px-4 py-3 opacity-0 translate-y-2 transition-all duration-300 z-50";

      document.body.appendChild(popup);

      setTimeout(() => {
        popup.classList.remove("opacity-0", "translate-y-2");
        popup.classList.add("opacity-100", "translate-y-0");
      }, 50);

      setTimeout(() => {
        popup.classList.remove("opacity-100", "translate-y-0");
        popup.classList.add("opacity-0", "translate-y-2");
        setTimeout(() => popup.remove(), 300);
      }, 3000);
    });
  });



  

