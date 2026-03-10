// --- PWA Service Worker Registration ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// --- PWA Installation Logic ---
let deferredPrompt;
const installDialog = document.getElementById('install-dialog');
const installConfirm = document.getElementById('install-confirm');
const installCancel = document.getElementById('install-cancel');

// Listen for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Store the event for later use
    deferredPrompt = e;
    // Show our custom dialog
    showInstallDialog();
});

function showInstallDialog() {
    if (installDialog) {
        installDialog.classList.add('active');
    }
}

function hideInstallDialog() {
    if (installDialog) {
        installDialog.classList.remove('active');
    }
}

// Install button click
if (installConfirm) {
    installConfirm.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log('User response to install prompt:', outcome);
            deferredPrompt = null;
        }
        hideInstallDialog();
    });
}

// Cancel button click
if (installCancel) {
    installCancel.addEventListener('click', () => {
        hideInstallDialog();
    });
}

// --- Double-click on footer to show install dialog ---
const footerLogo = document.querySelector('.footer-logo');
if (footerLogo) {
    footerLogo.addEventListener('dblclick', () => {
        showInstallDialog();
    });
}

// --- Product Data ---
const products = [
    {
        id: 1,
        title: "Classic Vanilla Bean",
        category: "Birthday Cakes",
        price: "₹650",
        description: "Soft and spongy vanilla cake with Madagascar vanilla bean buttercream.",
        images: ["https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&w=800&q=80", "https://images.unsplash.com/photo-1557925923-33b2512ea2aa?ixlib=rb-4.0.3&w=800&q=80"],
        plans: [
            {feature: "Half Kg Basic Cake", price: "₹650"},
            {feature: "1 Kg Premium Cake", price: "₹1200"},
            {feature: "2 Kg Designer Cake", price: "₹2300"}
        ]
    },
    {
        id: 2,
        title: "Rich Chocolate Truffle",
        category: "Birthday Cakes",
        price: "₹850",
        description: "Decadent dark chocolate layers filled with smooth chocolate ganache.",
        images: ["https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&w=800&q=80"],
        plans: [
            {feature: "Half Kg Basic Cake", price: "₹850"},
            {feature: "1 Kg Premium Cake", price: "₹1600"},
            {feature: "2 Kg Designer Cake", price: "₹3000"}
        ]
    },
    {
        id: 3,
        title: "Elegant Red Velvet",
        category: "Anniversary Cakes",
        price: "₹950",
        description: "Classic red velvet sponge with signature cream cheese frosting.",
        images: ["https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-4.0.3&w=800&q=80", "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&w=800&q=80"],
        plans: [
            {feature: "Half Kg Basic Cake", price: "₹950"},
            {feature: "1 Kg Premium Cake", price: "₹1800"}
        ]
    },
    {
        id: 4,
        title: "Two-Tier Floral Wedding Cake",
        category: "Wedding Cakes",
        price: "₹4500",
        description: "Elegant two-tier fondant cake decorated with handcrafted sugar flowers.",
        images: ["https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&w=800&q=80"],
        plans: [
            {feature: "3 Kg Basic Floral", price: "₹4500"},
            {feature: "5 Kg Premium Floral", price: "₹7500"}
        ]
    },
    {
        id: 5,
        title: "Fresh Fruit Fiesta",
        category: "Birthday Cakes",
        price: "₹750",
        description: "Light vanilla sponge loaded with fresh seasonal fruits and whipped cream.",
        images: ["https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&w=800&q=80"],
        plans: [
            {feature: "Half Kg Basic Cake", price: "₹750"},
            {feature: "1 Kg Premium Cake", price: "₹1400"}
        ]
    },
    {
        id: 6,
        title: "Custom Number Cake",
        category: "Private Cakes",
        price: "₹1200",
        description: "Trendy number or letter cake with macaron and floral toppings.",
        images: ["https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&w=800&q=80"],
        plans: [
            {feature: "Single Number/Letter", price: "₹1200"},
            {feature: "Double Number/Letter", price: "₹2200"}
        ]
    },
    {
        id: 7,
        title: "Golden Anniversary Delight",
        category: "Anniversary Cakes",
        price: "₹1500",
        description: "Luxurious butterscotch cake with golden foil accents and caramel drip.",
        images: ["https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-4.0.3&w=800&q=80"],
        plans: [
            {feature: "1 Kg Cake", price: "₹1500"},
            {feature: "2 Kg Tiered Cake", price: "₹2800"}
        ]
    },
    {
        id: 8,
        title: "Minimalist Pastel Cake",
        category: "Private Cakes",
        price: "₹900",
        description: "Korean aesthetic minimalist cake with soft pastel frosting.",
        images: ["https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&w=800&q=80"],
        plans: [
            {feature: "Half Kg Lunchbox Style", price: "₹900"},
            {feature: "1 Kg Standard", price: "₹1600"}
        ]
    },
    {
        id: 9,
        title: "Classic White Wedding Cake",
        category: "Wedding Cakes",
        price: "₹5500",
        description: "Three-tier traditional white wedding cake with elegant piping.",
        images: ["https://images.unsplash.com/photo-1519671569435-08e16fd46f5e?ixlib=rb-4.0.3&w=800&q=80"],
        plans: [
            {feature: "5 Kg Three-Tier", price: "₹5500"},
            {feature: "8 Kg Four-Tier", price: "₹8500"}
        ]
    },
    {
        id: 10,
        title: "Ferrero Rocher Crunch",
        category: "Birthday Cakes",
        price: "₹1100",
        description: "Hazelnut chocolate cake loaded with Ferrero Rocher and Nutella.",
        images: ["https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&w=800&q=80"],
        plans: [
            {feature: "Half Kg Cake", price: "₹1100"},
            {feature: "1 Kg Premium Cake", price: "₹2000"}
        ]
    }
];

// --- Variables & Elements ---
let currentCategory = "All";
let visibleItems = 8;
const productsGrid = document.getElementById("products-grid");
const showMoreBtn = document.getElementById("show-more-btn");
const filterBtns = document.querySelectorAll(".filter-btn");
const searchBar = document.querySelector(".search-bar");
const searchClear = document.querySelector(".search-clear");
const searchIcon = document.querySelector(".search-icon");
const mobileSearchToggle = document.querySelector(".mobile-search-toggle");
const searchContainer = document.querySelector(".search-container");
let searchQuery = "";

// --- Render Cards ---
function renderCards() {
    productsGrid.innerHTML = "";
    
    // Filter products
    let filteredProducts = currentCategory === "All" 
        ? products 
        : products.filter(p => p.category === currentCategory);
        
    // Apply search query filter
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(p => 
            p.title.toLowerCase().includes(searchQuery) ||
            p.description.toLowerCase().includes(searchQuery)
        );
    }
        
    // Show "No matching items" message if no results
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <p>No matching items found</p>
            </div>
        `;
        showMoreBtn.style.display = "none";
        return;
    }
    
    // Slice for pagination
    const productsToShow = filteredProducts.slice(0, visibleItems);
    
    productsToShow.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card reveal";
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${product.images[0]}" alt="${product.title}" class="card-img">
            </div>
            <div class="card-body">
                <h3 class="card-title">${product.title}</h3>
                <p class="card-desc">${product.description}</p>
                <p class="card-price">${product.price}</p>
            </div>
        `;
        
        // Add click listener for modal
        card.addEventListener("click", () => openModal(product));
        
        productsGrid.appendChild(card);
    });
    
    // Add revealed class to make cards visible immediately
    setTimeout(() => {
        const newCards = document.querySelectorAll(".product-card.reveal");
        newCards.forEach(card => card.classList.add("revealed"));
    }, 100);

    // Hide/Show 'Show More' button
    if (visibleItems >= filteredProducts.length) {
        showMoreBtn.style.display = "none";
    } else {
        showMoreBtn.style.display = "inline-block";
    }
}

// --- Search Logic ---
if (searchBar) {
    searchBar.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        visibleItems = 8; // Reset pagination on search
        
        // Show/hide clear button and search icon based on input
        if (searchQuery) {
            searchClear.classList.add("visible");
            searchIcon.style.display = "none"; // Hide search icon when typing
        } else {
            searchClear.classList.remove("visible");
            searchIcon.style.display = "block"; // Show search icon when empty
        }
        
        renderCards();
    });
}

// Clear search button
if (searchClear) {
    searchClear.addEventListener("click", () => {
        searchBar.value = "";
        searchQuery = "";
        searchClear.classList.remove("visible");
        searchIcon.style.display = "block"; // Show search icon again
        visibleItems = 8;
        renderCards();
        searchBar.focus();
    });
}

// Mobile search toggle
if (mobileSearchToggle) {
    mobileSearchToggle.addEventListener("click", () => {
        searchContainer.classList.toggle("active");
        if (searchContainer.classList.contains("active")) {
            searchBar.focus();
        }
    });
}

// --- Filter Logic ---
filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        // Update active class
        filterBtns.forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
        
        // Reset variables and render
        currentCategory = e.target.getAttribute("data-filter");
        visibleItems = 8;
        renderCards();
    });
});

// --- Show More Logic ---
if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
        visibleItems += 8;
        renderCards();
    });
}

// --- Product Modal Logic ---
const modal = document.getElementById("product-modal");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalPlansList = document.getElementById("modal-plans-list");
const modalImageContainer = document.getElementById("modal-image-container");

function openModal(product) {
    modalTitle.textContent = product.title;
    modalDesc.textContent = product.description;
    
    // Render Plans
    modalPlansList.innerHTML = "";
    product.plans.forEach(plan => {
        const li = document.createElement("li");
        li.className = "plan-item";
        li.innerHTML = `
            <span class="plan-feature">${plan.feature}</span>
            <span class="plan-price">${plan.price}</span>
        `;
        modalPlansList.appendChild(li);
    });
    
    // Render Images (Static vs Carousel)
    modalImageContainer.innerHTML = "";
    if (product.images.length === 1) {
        modalImageContainer.innerHTML = `<img src="${product.images[0]}" alt="${product.title}">`;
    } else {
        // Build Carousel
        let carouselHTML = `
            <div class="carousel">
                <div class="carousel-inner" id="modal-carousel-inner">
                    ${product.images.map((img, idx) => `
                        <div class="carousel-item ${idx === 0 ? 'active' : ''}">
                            <img src="${img}" alt="${product.title} image ${idx + 1}">
                        </div>
                    `).join('')}
                </div>
                <button class="carousel-control prev" onclick="moveModalCarousel(-1)"><ion-icon name="chevron-back-outline"></ion-icon></button>
                <button class="carousel-control next" onclick="moveModalCarousel(1)"><ion-icon name="chevron-forward-outline"></ion-icon></button>
                <div class="carousel-dots" id="modal-carousel-dots">
                    ${product.images.map((_, idx) => `
                        <span class="dot ${idx === 0 ? 'active' : ''}" onclick="setModalCarousel(${idx})"></span>
                    `).join('')}
                </div>
            </div>
        `;
        modalImageContainer.innerHTML = carouselHTML;
        window.currentModalImageIndex = 0;
        window.modalImageCount = product.images.length;
    }
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}

if (modalClose) {
    modalClose.addEventListener("click", closeModal);
}

if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
}

// Modal Carousel Controls
window.moveModalCarousel = function(dir) {
    const newIdx = (window.currentModalImageIndex + dir + window.modalImageCount) % window.modalImageCount;
    setModalCarousel(newIdx);
};

window.setModalCarousel = function(idx) {
    window.currentModalImageIndex = idx;
    const items = document.querySelectorAll("#modal-carousel-inner .carousel-item");
    const dots = document.querySelectorAll("#modal-carousel-dots .dot");
    
    items.forEach(item => item.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    
    items[idx].classList.add("active");
    dots[idx].classList.add("active");
};

// --- Main Hero Carousel Logic ---
let currentHeroImg = 0;
const heroItems = document.querySelectorAll(".hero .carousel-item");
const heroDots = document.querySelectorAll(".hero .dot");
const heroPrev = document.querySelector(".hero .prev");
const heroNext = document.querySelector(".hero .next");

function updateHeroCarousel() {
    heroItems.forEach(item => item.classList.remove("active"));
    heroDots.forEach(dot => dot.classList.remove("active"));
    
    heroItems[currentHeroImg].classList.add("active");
    heroDots[currentHeroImg].classList.add("active");
}

function moveHeroCarousel(dir) {
    currentHeroImg = (currentHeroImg + dir + heroItems.length) % heroItems.length;
    updateHeroCarousel();
}

if (heroPrev) {
    heroPrev.addEventListener("click", () => moveHeroCarousel(-1));
}

if (heroNext) {
    heroNext.addEventListener("click", () => moveHeroCarousel(1));
}

heroDots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
        currentHeroImg = idx;
        updateHeroCarousel();
    });
});

// Auto slide hero carousel
setInterval(() => {
    moveHeroCarousel(1);
}, 5000);

// --- FAQ Accordion Logic ---
const accordionHeaders = document.querySelectorAll(".accordion-header");
accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const isActive = header.classList.contains("active");
        
        // Close all
        accordionHeaders.forEach(h => {
            h.classList.remove("active");
            h.nextElementSibling.style.maxHeight = null;
        });
        
        // Open clicked if it wasn't active
        if (!isActive) {
            header.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// --- Scroll Reveal Animations & Sticky Header ---
const reveals = document.querySelectorAll(".reveal");
const header = document.querySelector(".header");

const revealOnScroll = () => {
    const winHeight = window.innerHeight;
    const revealPoint = 150;
    
    // Check for reveals that need to be shown
    const allReveals = document.querySelectorAll(".reveal:not(.revealed)");
    allReveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < winHeight - revealPoint) {
            reveal.classList.add("revealed");
        }
    });

    // Sticky Header Styling
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        header.style.padding = "10px 0";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        header.style.padding = "15px 0";
    }
};

window.addEventListener("scroll", revealOnScroll);

// --- Form Validation ---
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        if (name && mobile) {
            alert("Thanks, " + name + "! Your message has been sent successfully.");
            contactForm.reset();
        } else {
            alert("Please fill in the required fields.");
        }
    });
}

// --- Mobile Bottom Nav Active State & Smooth Scroll ---
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".mobile-navbar .nav-item");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(current)) {
            item.classList.add("active");
        }
    });
});

// Initialize First Render
document.addEventListener("DOMContentLoaded", () => {
    renderCards();
    revealOnScroll(); // Trigger immediately for items in viewport
});