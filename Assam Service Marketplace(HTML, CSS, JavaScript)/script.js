// Language toggle
let language = 'en';

const texts = {
    en: {
        title: 'Assam Service Marketplace',
        serviceLabel: 'Select service:',
        locationLabel: 'Your location:',
        findServiceBtn: 'Find Service',
        suggestionsTitle: 'Available Services:',
        toggle: 'অসমীয়া',
        noService: 'No services found in your area.'
    },
    as: {
        title: 'অসম চৰ্চা সেৱা বজাৰ',
        serviceLabel: 'সেৱা বাছনি কৰক:',
        locationLabel: 'আপোনাৰ স্থান:',
        findServiceBtn: 'সেৱা বিচাৰক',
        suggestionsTitle: 'উপলব্ধ সেৱাসমূহ:',
        toggle: 'English',
        noService: 'আপোনাৰ অঞ্চলত কোনো সেৱা উপলব্ধ নহয়।'
    }
};

function updateLanguage() {
    document.getElementById('title').innerText = texts[language].title;
    document.getElementById('serviceLabel').innerText = texts[language].serviceLabel;
    document.getElementById('locationLabel').innerText = texts[language].locationLabel;
    document.getElementById('findServiceBtn').innerText = texts[language].findServiceBtn;
    document.getElementById('suggestionsTitle').innerText = texts[language].suggestionsTitle;
    document.getElementById('languageToggle').innerText = texts[language].toggle;
}

document.getElementById('languageToggle').addEventListener('click', () => {
    language = language === 'en' ? 'as' : 'en';
    updateLanguage();
});

// Expanded service data with location & contact info
const servicesData = {
    taxi: [
        { name: "Guwahati Taxi", location: "Guwahati", contact: "9876543210", price: "₹15/km" },
        { name: "North East Taxi", location: "Dibrugarh", contact: "9123456780", price: "₹12/km" }
    ],
    cleaning: [
        { name: "CleanPro Assam", location: "Guwahati", contact: "9001234567", price: "₹200/hour" },
        { name: "Shine & Spark", location: "Tezpur", contact: "9087654321", price: "₹180/hour" }
    ],
    tuition: [
        { name: "Learn Assam", location: "Guwahati", contact: "9871122334", price: "₹500/month" },
        { name: "Smart Tuition", location: "Silchar", contact: "9122233445", price: "₹450/month" }
    ],
    plumbing: [
        { name: "PlumbFix Assam", location: "Guwahati", contact: "9012345678", price: "₹300/hour" },
        { name: "PipeCare", location: "Dibrugarh", contact: "9123456790", price: "₹250/hour" }
    ],
    electrician: [
        { name: "PowerFix", location: "Guwahati", contact: "9876543211", price: "₹200/hour" },
        { name: "Bright Electricians", location: "Tezpur", contact: "9011223344", price: "₹220/hour" }
    ],
    delivery: [
        { name: "Rapid Delivery", location: "Guwahati", contact: "9870011223", price: "₹50/delivery" },
        { name: "FastCourier", location: "Silchar", contact: "9011002233", price: "₹60/delivery" }
    ],
    grocery: [
        { name: "FreshMart Assam", location: "Guwahati", contact: "9001122334", price: "Varies" },
        { name: "Daily Needs", location: "Dibrugarh", contact: "9011223345", price: "Varies" }
    ],
    medical: [
        { name: "HealthCare Assam", location: "Guwahati", contact: "9877766554", price: "₹100 consultation" },
        { name: "QuickMed", location: "Silchar", contact: "9011334455", price: "₹120 consultation" }
    ]
};

document.getElementById('findServiceBtn').addEventListener('click', () => {
    const selectedService = document.getElementById('serviceInput').value;
    const location = document.getElementById('locationInput').value.toLowerCase();
    const suggestionsDiv = document.getElementById('suggestions');

    let filteredServices = servicesData[selectedService].filter(service => 
        !location || service.location.toLowerCase().includes(location)
    );

    if (filteredServices.length === 0) {
        suggestionsDiv.innerHTML = texts[language].noService;
        return;
    }

    suggestionsDiv.innerHTML = filteredServices.map(service => `
        <div class="service-card">
            <strong>${service.name}</strong>
            <p>Location: ${service.location}</p>
            <p>Contact: ${service.contact}</p>
            <p>Price: ${service.price}</p>
        </div>
    `).join('');
});

// Initialize language
updateLanguage();
