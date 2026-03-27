/**
 * SHEVY SPACE - Car Interior Upholstery Services
 * Interactive functionality with cart, filtering, and WhatsApp ordering
 */

// ==========================================
// Interior Services Catalog - 50+ Items
// ==========================================
const obsParts = [
    // Car Seats (12 items - cycling local + pro images)
    {
        id: 1,
        name: "Premium Leather Seat Reupholstery",
        service: "car-seats",
        category: "leather",
        price: 1299.99,
        image: "ASSETS/IMG/5875073678620429547.jpg",
        badge: "Best Seller",
        description: "Full leather seat replacement with premium Italian leather"
    },
    {
        id: 3,
        name: "Custom Seat Embroidery",
        service: "car-seats",
        category: "custom",
        price: 899.99,
        image: "ASSETS/IMG/5875073678620429549.jpg",
        badge: "New",
        description: "Personalized embroidery on seats with your logo/name"
    },
    {
        id: 4,
        name: "Heated Seat Installation",
        service: "car-seats",
        category: "electrical",
        price: 799.99,
        image: "ASSETS/IMG/5875073678620429550.jpg",
        description: "Premium heated seat elements with temperature control"
    },
    {
        id: 5,
        name: "Vinyl Seat Repair",
        service: "car-seats",
        category: "vinyl",
        price: 499.99,
        image: "ASSETS/IMG/5875073678620429551.jpg",
        description: "Complete vinyl seat restoration and repair service"
    },
    {
        id: 6,
        name: "Recaro Sport Seat Installation",
        service: "car-seats",
        category: "sport",
        price: 2199.99,
        image: "ASSETS/IMG/5875073678620429552.jpg",
        description: "Professional Recaro racing seat installation"
    },
    {
        id: 7,
        name: "Two-Tone Leather Seats",
        service: "car-seats",
        category: "leather",
        price: 1599.99,
        image: "ASSETS/IMG/5875073678620429553.jpg",
        badge: "Popular",
        description: "Custom two-tone leather combination"
    },
    {
        id: 8,
        name: "Seat Foam Replacement",
        service: "car-seats",
        category: "repair",
        price: 399.99,
        image: "ASSETS/IMG/5875073678620429554.jpg",
        description: "New high-density foam for seat comfort"
    },
    {
        id: 9,
        name: "Perforated Leather Seats",
        service: "car-seats",
        category: "leather",
        price: 1399.99,
        image: "ASSETS/IMG/5875073678620429557.jpg",
        description: "Breathable perforated leather upholstery"
    },
    {
        id: 10,
        name: "Luxury Velvet Upholstery",
        service: "car-seats",
        category: "fabric",
        price: 1199.99,
        image: "ASSETS/IMG/5875073678620429562.jpg",
        description: "Premium velvet fabric for unique interiors"
    },
    {
        id: 11,
        name: "Carbon Fiber Seat Trim",
        service: "car-seats",
        category: "racing",
        price: 999.99,
        image: "ASSETS/IMG/5875073678620429563.jpg",
        description: "Real carbon fiber seat accents"
    },

    // Door Panels (8 items)
    
    {
        id: 14,
        name: "Wood Door Panel Inserts",
        service: "door-panels",
        category: "wood",
        price: 699.99,
        image: "ASSETS/IMG/5875073678620429547.jpg",
        description: "Genuine wood veneer door inserts"
    },
    {
        id: 15,
        name: "Carbon Fiber Door Panels",
        service: "door-panels",
        category: "carbon",
        price: 1299.99,
        image: "ASSETS/IMG/5875073678620429548.jpg",
        description: "Full carbon fiber door panel upgrade"
    },
    {
        id: 17,
        name: "Custom Door Panel Stitching",
        service: "door-panels",
        category: "custom",
        price: 599.99,
        image: "ASSETS/IMG/5875073678620429549.jpg",
        description: "Personalized stitching patterns"
    },
    {
        id: 18,
        name: "Piano Black Door Trim",
        service: "door-panels",
        category: "trim",
        price: 499.99,
        image: "ASSETS/IMG/5875073678620429550.jpg",
        description: "Glossy piano black finish"
    },
    {
        id: 20,
        name: "Brushed Aluminum Panels",
        service: "door-panels",
        category: "metal",
        price: 649.99,
        image: "ASSETS/IMG/5875073678620429551.jpg",
        description: "Premium brushed aluminum trim"
    },

    // Dashboard (8 items)
    {
        id: 21,
        name: "Custom Leather Dashboard",
        service: "dashboard",
        category: "leather",
        price: 1799.99,
        image: "ASSETS/IMG/5875073678620429552.jpg",
        badge: "Premium",
        description: "Hand-stitched leather dashboard cover"
    },
    {
        id: 22,
        name: "Carbon Fiber Dash Kit",
        service: "dashboard",
        category: "carbon",
        price: 2199.99,
        image: "ASSETS/IMG/5875073678620429553.jpg",
        description: "Complete carbon fiber gauge cluster"
    },
    {
        id: 24,
        name: "Digital Dash Conversion",
        service: "dashboard",
        category: "digital",
        price: 2999.99,
        image: "ASSETS/IMG/5875073678620429554.jpg",
        description: "Full digital gauge cluster upgrade"
    },
    {
        id: 26,
        name: "Custom Gauge Cluster",
        service: "dashboard",
        category: "gauges",
        price: 2499.99,
        image: "ASSETS/IMG/5875073678620429557.jpg",
        description: "Bespoke gauge faces and bezels"
    },
    {
        id: 27,
        name: "Dashboard LED Upgrade",
        service: "dashboard",
        category: "electrical",
        price: 899.99,
        image: "ASSETS/IMG/5875073678620429562.jpg",
        description: "Full LED illumination conversion"
    },
    {
        id: 28,
        name: "Piano Black Dash Trim",
        service: "dashboard",
        category: "trim",
        price: 1099.99,
        image: "ASSETS/IMG/5875073678620429563.jpg",
        description: "High gloss piano black finish"
    },

    // Carpets & Floor Mats (6 items)
    {
        id: 30,
        name: "Luxury Sheepskin Mats",
        service: "carpets",
        category: "luxury",
        price: 499.99,
        image: "ASSETS/IMG/5875073678620429547.jpg",
        description: "Genuine sheepskin floor mats"
    },
    {
        id: 31,
        name: "All-Weather Rubber Mats",
        service: "carpets",
        category: "rubber",
        price: 349.99,
        image: "ASSETS/IMG/5875073678620429548.jpg",
        description: "Heavy duty protective floor liners"
    },
    {
        id: 34,
        name: "Berber Carpet Upgrade",
        service: "carpets",
        category: "luxury",
        price: 799.99,
        image: "ASSETS/IMG/5875073678620429550.jpg",
        description: "High pile luxury berber carpet"
    },

    // Headliners (6 items)
    {
        id: 35,
        name: "Alcantara Headliner",
        service: "headliners",
        category: "alcantara",
        price: 999.99,
        image: "ASSETS/IMG/5875073678620429551.jpg",
        badge: "Popular",
        description: "Suede Alcantara roof lining"
    },
    {
        id: 37,
        name: "Leather Headliner",
        service: "headliners",
        category: "leather",
        price: 1199.99,
        image: "ASSETS/IMG/5875073678620429552.jpg",
        description: "Perforated leather roof lining"
    },
    {
        id: 38,
        name: "Custom Headliner Design",
        service: "headliners",
        category: "custom",
        price: 899.99,
        image: "ASSETS/IMG/5875073678620429553.jpg",
        description: "Bespoke pattern headliner"
    },
    {
        id: 40,
        name: "Suede Headliner Repair",
        service: "headliners",
        category: "repair",
        price: 499.99,
        image: "ASSETS/IMG/5875073678620429554.jpg",
        description: "Sagging headliner restoration"
    },

    // Furniture Upholstery (10 items)

    {
        id: 42,
        name: "Leather Dining Chairs",
        service: "furniture",
        category: "chairs",
        price: 899.99,
        image: "ASSETS/IMG/5875073678620429557.jpg",
        description: "Dining room chair upholstery"
    },
    {
        id: 44,
        name: "Boat Seat Upholstery",
        service: "furniture",
        category: "marine",
        price: 1999.99,
        image: "ASSETS/IMG/5875073678620429562.jpg",
        description: "Marine grade vinyl boat seats"
    },
    {
        id: 45,
        name: "Office Chair Reupholstery",
        service: "furniture",
        category: "office",
        price: 399.99,
        image: "ASSETS/IMG/5875073678620429563.jpg",
        description: "Executive office chair restoration"
    },
    {
        id: 48,
        name: "Bar Stool Upholstery",
        service: "furniture",
        category: "bar",
        price: 299.99,
        image: "ASSETS/IMG/5875073678620429547.jpg",
        description: "Commercial bar stool reupholstery"
    },
    {
        id: 49,
        name: "Antique Furniture Restoration",
        service: "furniture",
        category: "antique",
        price: 2999.99,
        image: "ASSETS/IMG/5875073678620429548.jpg",
        description: "Traditional upholstery restoration"
    },

    // Additional Services (mix of everything)
    {
        id: 51,
        name: "Complete Interior Package",
        service: "full-interior",
        category: "package",
        price: 5999.99,
        image: "ASSETS/IMG/5875073678620429549.jpg",
        badge: "Complete",
        description: "Seats, doors, dash, carpets - full interior"
    },
    {
        id: 52,
        name: "Quick Seat Repair",
        service: "car-seats",
        category: "repair",
        price: 199.99,
        image: "ASSETS/IMG/5875073678620429550.jpg",
        description: "Minor seat tear repair service"
    }
];

// ==========================================
// Service Categories Data
// ==========================================
const serviceCategories = [
    {
        id: "car-seats",
        name: "Car Seats",
        icon: "fas fa-couch",
        count: 12,
        description: "Premium seat reupholstery & customization"
    },
    {
        id: "door-panels",
        name: "Door Panels",
        icon: "fas fa-door-open",
        count: 8,
        description: "Luxury door panel upgrades"
    },
    {
        id: "dashboard",
        name: "Dashboards",
        icon: "fas fa-tachometer-alt",
        count: 8,
        description: "Custom gauge cluster & trim"
    },
    {
        id: "carpets",
        name: "Carpets & Mats",
        icon: "fas fa-road",
        count: 6,
        description: "Flooring solutions & mats"
    },
    {
        id: "headliners",
        name: "Headliners",
        icon: "fas fa-star",
        count: 6,
        description: "Roof lining & LED lighting"
    },
    {
        id: "furniture",
        name: "Furniture",
        icon: "fas fa-chair",
        count: 10,
        description: "Home & commercial upholstery"
    }
];

// ==========================================
// Application State
// ==========================================
localStorage.getItem('chevySpaceCart')
let filteredParts = [...obsParts];
let filteredServices = [...obsParts];
let interiorServices = obsParts;
let cart = JSON.parse(localStorage.getItem('chevySpaceCart')) || [];

// ==========================================
// DOM Elements (Updated IDs)
const elements = {
    header: document.getElementById('header'),
    navMenu: document.getElementById('navMenu'),
    menuToggle: document.getElementById('menuToggle'),
    searchBtn: document.getElementById('searchBtn'),
    searchModal: document.getElementById('searchModal'),
    searchInput: document.getElementById('searchInput'),
    closeSearch: document.getElementById('closeSearch'),
    cartBtn: document.getElementById('cartBtn'),
    cartModal: document.getElementById('cartModal'),
    cartItems: document.getElementById('cartItems'),
    cartCount: document.getElementById('cartCount'),
    cartTotal: document.getElementById('cartTotal'),
    closeCart: document.getElementById('closeCart'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    categoriesGrid: document.getElementById('categoriesGrid'),
    productsGrid: document.getElementById('productsGrid'),
    productsCount: document.getElementById('productsCount'),
    filterService: document.getElementById('filterService'),
    filterCategory: document.getElementById('filterCategory'),
    minPrice: document.getElementById('minPrice'),
    maxPrice: document.getElementById('maxPrice'),
    applyFilters: document.getElementById('applyFilters'),
    resetFilters: document.getElementById('resetFilters'),
    sortSelect: document.getElementById('sortSelect'),
    contactForm: document.getElementById('contactForm')
};

// ==========================================
// Initialize Application
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts(interiorServices);
    updateCartCount();
    setupEventListeners();
    setupSmoothScrolling();
});

// ==========================================
// Event Listeners Setup (Updated for new IDs)
function setupEventListeners() {
    window.addEventListener('scroll', handleScroll);
    elements.menuToggle?.addEventListener('click', toggleMobileMenu);
    elements.searchBtn?.addEventListener('click', openSearchModal);
    elements.closeSearch?.addEventListener('click', closeSearchModal);
    elements.searchInput?.addEventListener('input', handleSearch);
    elements.cartBtn?.addEventListener('click', openCartModal);
    elements.closeCart?.addEventListener('click', closeCartModal);
    elements.checkoutBtn?.addEventListener('click', checkoutViaWhatsApp);
    elements.applyFilters?.addEventListener('click', applyServiceFilters);
    elements.resetFilters?.addEventListener('click', resetServiceFilters);
    elements.sortSelect?.addEventListener('change', sortServices);
    if (elements.contactForm) {
        elements.contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    document.addEventListener('click', (e) => {
        if (e.target === elements.searchModal) closeSearchModal();
        if (e.target === elements.cartModal) closeCartModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSearchModal();
            closeCartModal();
        }
    });
}

function handleScroll() {
    if (window.scrollY > 50) {
        elements.header.classList.add('scrolled');
    } else {
        elements.header.classList.remove('scrolled');
    }
}

function toggleMobileMenu() {
    elements.navMenu.classList.toggle('active');
    const icon = elements.menuToggle.querySelector('i');
    if (elements.navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

function openSearchModal() {
    elements.searchModal.classList.add('active');
    elements.searchInput.focus();
}

function closeSearchModal() {
    elements.searchModal.classList.remove('active');
    elements.searchInput.value = '';
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredServices = [...interiorServices];
    } else {
        filteredServices = interiorServices.filter(service => 
            service.name.toLowerCase().includes(searchTerm) ||
            service.service.toLowerCase().includes(searchTerm) ||
            service.category.toLowerCase().includes(searchTerm) ||
            service.description.toLowerCase().includes(searchTerm)
        );
    }
    
    sortServices();
    renderProducts(filteredServices);
    updateProductsCount(filteredServices.length);
}

// Cart Functions (unchanged logic)
function addToCart(serviceId) {
    const service = interiorServices.find(s => s.id === serviceId);
    if (!service) return;
    
    const existingItem = cart.find(item => item.id === serviceId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...service,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    renderCartItems();
    showNotification(`${service.name} added to cart!`);
}

function removeFromCart(serviceId) {
    cart = cart.filter(item => item.id !== serviceId);
    saveCart();
    updateCartCount();
    renderCartItems();
}

function updateQuantity(serviceId, change) {
    const item = cart.find(item => item.id === serviceId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(serviceId);
    } else {
        saveCart();
        updateCartCount();
        renderCartItems();
    }
}

function saveCart() {
localStorage.setItem('chevySpaceCart', JSON.stringify(cart));
}

function updateCartCount() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    elements.cartCount.textContent = totalCount;
}

function renderCartItems() {
    if (cart.length === 0) {
        elements.cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        elements.cartTotal.textContent = '$0.00';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        html += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });
    
    elements.cartItems.innerHTML = html;
    elements.cartTotal.textContent = '$' + total.toFixed(2);
}

function checkoutViaWhatsApp() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    const phoneNumber = '33752903982';
    let message = 'Hello SHEVY SPACE! I want to order interior services:%0A%0A';
    
    cart.forEach(item => {
        message += `- ${item.name} (${item.service})%0A`;
        message += `  Price: $${item.price.toFixed(2)} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}%0A%0A`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `Total: $${total.toFixed(2)}%0A%0APlease quote and schedule!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

function openCartModal() {
    elements.cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();
}

function closeCartModal() {
    elements.cartModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Categories Rendering
function renderCategories() {
    const html = serviceCategories.map(category => `
        <div class="category-card" onclick="filterByCategory('${category.id}')">
            <div class="category-icon">
                <i class="${category.icon}"></i>
            </div>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        </div>
    `).join('');
    
    elements.categoriesGrid.innerHTML = html;
}

function filterByCategory(serviceId) {
    elements.filterService.value = serviceId;
    applyServiceFilters();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Products Rendering (updated 'products' -> 'services')
function renderProducts(services) {
    if (services.length === 0) {
        elements.productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No services found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }
    
    const html = services.map(service => `
        <div class="product-card">
            <div class="product-image">
                <img src="${service.image}" alt="${service.name}" loading="lazy">
                ${service.badge ? `<span class="product-badge">${service.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${service.name}</h3>
                <p class="product-category">${formatCategory(service.category)} - ${formatService(service.service)}</p>
                <p class="product-price">$${service.price.toFixed(2)}</p>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${service.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    elements.productsGrid.innerHTML = html;
}

function updateProductsCount(count) {
    elements.productsCount.textContent = `${count} services found`;
}

// Filter Functions (updated IDs)
function applyServiceFilters() {
    const serviceType = elements.filterService?.value || '';
    const category = elements.filterCategory?.value || '';
    const minPrice = parseFloat(elements.minPrice.value) || 0;
    const maxPrice = parseFloat(elements.maxPrice.value) || Infinity;
    
    filteredServices = interiorServices.filter(service => {
        const matchService = !serviceType || service.service === serviceType;
        const matchCategory = !category || service.category === category;
        const matchPrice = service.price >= minPrice && service.price <= maxPrice;
        
        return matchService && matchCategory && matchPrice;
    });
    
    sortServices();
    renderProducts(filteredServices);
    updateProductsCount(filteredServices.length);
}

function resetServiceFilters() {
    elements.filterService.value = '';
    elements.filterCategory.value = '';
    elements.minPrice.value = '';
    elements.maxPrice.value = '';
    
    filteredServices = [...interiorServices];
    sortServices();
    renderProducts(filteredServices);
    updateProductsCount(filteredServices.length);
}

function sortServices() {
    const sortValue = elements.sortSelect.value;
    
    switch (sortValue) {
        case 'price-low':
            filteredServices.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredServices.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredServices.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            filteredServices.sort((a, b) => a.id - b.id);
    }
    
    renderProducts(filteredServices);
}

// Contact Form (updated vehicle -> service)
function handleContactSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const service = document.getElementById('contactVehicle').value;
    const message = document.getElementById('contactMessage').value;
    
    const phoneNumber = '33752903982';
    const whatsappMessage = `Hello SHEVY SPACE!%0AName: ${name}%0AEmail: ${email}%0AService: ${formatService(service)}%0A%0AMessage: ${message}%0APlease contact me!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    
    elements.contactForm.reset();
    showNotification('Message sent via WhatsApp!');
}

// Utility Functions
function formatCategory(category) {
    const words = category.split('-');
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function formatService(service) {
    const serviceNames = {
        'car-seats': 'Car Seats',
        'door-panels': 'Door Panels',
        'dashboard': 'Dashboard',
        'carpets': 'Carpets',
        'headliners': 'Headliners',
        'furniture': 'Furniture Upholstery'
    };
    return serviceNames[service] || service;
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
if (!document.querySelector('style[data-notification]')) {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    style.setAttribute('data-notification', 'true');
    document.head.appendChild(style);
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                elements.navMenu.classList.remove('active');
            }
        });
    });
}

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.filterByCategory = filterByCategory;
