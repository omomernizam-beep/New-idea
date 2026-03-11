// Slideshow Logic
let slides = document.querySelectorAll(".slide");
let index = 0;

if (slides.length > 0) {
    setInterval(() => {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 4000);
}

// Populate Cities Dropdown on Load
window.onload = function() {
    const cityDropdown = document.getElementById("city-select");
    // Cities variable cities.js se aa raha hai
    if (typeof cities !== 'undefined' && cityDropdown) {
        cities.forEach(c => {
            let option = document.createElement("option");
            option.value = c.population;
            option.text = `${c.city}, ${c.country}`;
            cityDropdown.add(option);
        });
    }
};