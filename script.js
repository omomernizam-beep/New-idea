document.addEventListener("DOMContentLoaded", function() {
    let role = localStorage.getItem("userRole");

    if(role === 'investor') {
        if(document.getElementById("investor-view")) document.getElementById("investor-view").style.display = "block";
        loadPitchesForInvestor();
    } else {
        if(document.getElementById("entrepreneur-view")) document.getElementById("entrepreneur-view").style.display = "block";
        renderCities(); // Dropdown bharnay ke liye
    }
});

function renderCities() {
    const dropdown = document.getElementById("city-dropdown");
    if (typeof cities !== 'undefined' && dropdown) {
        dropdown.innerHTML = '<option value="">-- Select City (Searchable) --</option>';
        
        // Cities ko A to Z sort karna
        cities.sort((a, b) => a.city.localeCompare(b.city));

        cities.forEach(c => {
            let opt = document.createElement("option");
            opt.value = c.population;
            opt.innerHTML = `${c.city}, ${c.country}`;
            dropdown.appendChild(opt);
        });
    }
}

// Baki slideshow aur publish functions neechay wese hi rahen ge...