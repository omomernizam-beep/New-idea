// Background Slideshow
let slides = document.querySelectorAll(".slide");
let index = 0;
setInterval(() => {
    if(slides.length > 0) {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }
}, 4000);

// Populate Cities on Dashboard
window.onload = function() {
    const citySelect = document.getElementById("city"); // dashboard.html wali ID
    if (citySelect && typeof cities !== 'undefined') {
        cities.forEach(c => {
            let opt = document.createElement("option");
            opt.value = c.population;
            opt.innerHTML = `${c.city}, ${c.country}`;
            citySelect.appendChild(opt);
        });
    }
};