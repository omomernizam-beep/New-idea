// Slideshow Logic
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 5000);

// Populate Cities on Dashboard Load
window.onload = () => {
    const citySelect = document.getElementById("city");
    if (citySelect && typeof cities !== 'undefined') {
        cities.forEach(c => {
            let opt = document.createElement("option");
            opt.value = c.population;
            opt.innerHTML = `${c.city}, ${c.country}`;
            citySelect.appendChild(opt);
        });
    }
};