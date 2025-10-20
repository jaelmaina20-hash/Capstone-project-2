const hamburgerMenu = document.getElementById('haMenu');
const mobileMenu = document.getElementById('mobile-menu');
const mechanics = document.querySelectorAll('.call-me');
let images = document.querySelectorAll(".hero-image");
let captions = document.querySelectorAll(".hero-caption");
const form = document.querySelector("form");


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

fetch('data.json')
  .then(response => response.json())
  .then(mechanics => {
    const container = document.getElementById('cards');


    mechanics.forEach(mechanic => {
      const card = document.createElement('div');
      card.classList.add('card');
     
      card.innerHTML = `
      <div class="w-full bg-[rgb(255,160,160)] rounded-lg">
        <img class="w-50 rounded-t-lg h-50" src="${mechanic.image}" alt="${mechanic.name}">
        <div class="p-5 flex flex-col h-full">
          <div>
            <h3 class="font-bold text-xl text-[rgb(139,0,0)] mb-1">${mechanic.name}</h3>
            <p class="text-[rgb(220,20,60)] font-bold mb-1">${mechanic.type}</p>
            <p class="text-[rgb(220,20,60)] font-bold text-sm mb-1">${mechanic.location}</p>
            <p class="text-[rgb(220,20,60)] font-bold mt-1">Rating ${mechanic.rating}</p>
          </div>
          <button class="mt-4 px-3 bg-[rgb(255,0,0)] hover:bg-[rgb(220,20,60)] text-white py-2 rounded-lg font-semibold transition">
            Call Me
          </button>
        </div>
      </div>
    `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Error loading data:', err));


form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  alert("Form submitted!");
});


  

