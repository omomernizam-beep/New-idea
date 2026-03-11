const cities = [
    // Pakistan
    {city: "Karachi", country: "Pakistan", population: 14910352},
    {city: "Lahore", country: "Pakistan", population: 11126285},
    {city: "Faisalabad", country: "Pakistan", population: 3203846},
    {city: "Rawalpindi", country: "Pakistan", population: 2098231},
    {city: "Gujranwala", country: "Pakistan", population: 2027001},
    {city: "Peshawar", country: "Pakistan", population: 1970042},
    {city: "Multan", country: "Pakistan", population: 1871843},
    {city: "Hyderabad", country: "Pakistan", population: 1732693},
    {city: "Islamabad", country: "Pakistan", population: 1014825},
    {city: "Quetta", country: "Pakistan", population: 1001205},
    // India
    {city: "Mumbai", country: "India", population: 12442373},
    {city: "Delhi", country: "India", population: 11034555},
    {city: "Bangalore", country: "India", population: 8443675},
    {city: "Hyderabad", country: "India", population: 6731790},
    {city: "Ahmedabad", country: "India", population: 5577940},
    {city: "Chennai", country: "India", population: 4646732},
    {city: "Kolkata", country: "India", population: 4496694},
    // USA
    {city: "New York", country: "USA", population: 8336817},
    {city: "Los Angeles", country: "USA", population: 3979576},
    {city: "Chicago", country: "USA", population: 2693976},
    // UK
    {city: "London", country: "UK", population: 8982000},
    {city: "Birmingham", country: "UK", population: 1141000},
    // UAE
    {city: "Dubai", country: "UAE", population: 3331000},
    {city: "Abu Dhabi", country: "UAE", population: 1450000},
    // ... Yahan aap 500 tak list barha saktay hain
];

// Automatically sort cities by name
cities.sort((a, b) => a.city.localeCompare(b.city));