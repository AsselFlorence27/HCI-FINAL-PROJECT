// Product Database
const products = [
  // Aerox Engine Parts
  {
    id: 1,
    name: "Polini Evolution Intake Manifold",
    model: "aerox",
    category: "engine",
    price: 4500,
    image: "public/polini-intake-manifold.jpg",
    description:
      "High-performance intake manifold for Yamaha Aerox. Increases air flow for better engine response and acceleration.",
    specs: ["Material: CNC Aluminum", "Flow Rate: +15%", "Weight: 0.8kg"],
  },
  {
    id: 2,
    name: "Variator Kit - 19x17mm",
    model: "aerox",
    category: "engine",
    price: 5200,
    image: "public/variator-kit-tuning.jpg",
    description: "Performance variator kit for improved acceleration and top speed. Perfect for tuning your Aerox.",
    specs: ["Roll Weight: 6-8g", "Tuned for 50cc conversion", "Racing Grade"],
  },
  {
    id: 3,
    name: "Dellorto PHVA 12 Carburetor",
    model: "aerox",
    category: "engine",
    price: 7500,
    image: "public/dellorto-carburetor-phva.jpg",
    description:
      "Premium carb from Italian manufacturer Dellorto. Delivers better fuel atomization and throttle response.",
    specs: ["Bore: 12mm", "Manual Choke", "Idle Adjuster: Yes"],
  },

  // Aerox Suspension Parts
  {
    id: 4,
    name: "YSS Front Shock Absorber - Adjustable",
    model: "aerox",
    category: "suspension",
    price: 8500,
    image: "public/yss-front-shock-adjustable.jpg",
    description: "Premium Thai shock absorber from YSS. Fully adjustable damping and preload for perfect handling.",
    specs: ["Type: Telescopic", "Travel: 100mm", "Damping: 6-stage Adjustable"],
  },
  {
    id: 5,
    name: "Brembo Rear Shock Spring",
    model: "aerox",
    category: "suspension",
    price: 5800,
    image: "public/brembo-rear-shock-spring.jpg",
    description: "Italian-made Brembo rear spring. Stiffer than OEM for better handling and stability.",
    specs: ["Spring Rate: 5.5 kN/mm", "Free Length: 190mm", "Material: Chrome Vanadium"],
  },

  // Aerox Brakes
  {
    id: 6,
    name: "Brembo Sintered Brake Pads",
    model: "aerox",
    category: "brakes",
    price: 3200,
    image: "public/brembo-sintered-brake-pads.jpg",
    description: "Sintered brake pads from Brembo. Superior stopping power and fade resistance at high temperatures.",
    specs: ["Friction Coefficient: 0.65", "Operating Temp: -40 to +400°C", "Set of 2 Pairs"],
  },
  {
    id: 7,
    name: "Wave Disc Brake Rotor - 220mm",
    model: "aerox",
    category: "brakes",
    price: 3800,
    image: "public/wave-brake-rotor-disc-220mm.jpg",
    description: "Performance wave rotor design. Improved cooling and better braking modulation than standard rotors.",
    specs: ["Diameter: 220mm", "Thickness: 3mm", "Type: Wave Pattern"],
  },

  // Aerox Body Parts
  {
    id: 8,
    name: "Puig Racing Windshield - Smoke",
    model: "aerox",
    category: "body",
    price: 5500,
    image: "public/puig-racing-windshield-smoke.jpg",
    description: "Spanish-designed racing windshield from Puig. Aggressive styling with excellent wind protection.",
    specs: ["Material: PMMA Acrylic", "Tint: Smoke", "Height: 38cm"],
  },
  {
    id: 9,
    name: "Carbon Fiber Side Mirrors",
    model: "aerox",
    category: "body",
    price: 7200,
    image: "public/carbon-fiber-side-mirrors.jpg",
    description: "Lightweight carbon fiber side mirrors. Adds aggressive styling and reduces weight.",
    specs: ["Material: Real Carbon", "Mirror: Blue-Tinted", "Weight Reduction: 200g"],
  },

  // Aerox Electrical Parts
  {
    id: 10,
    name: "Stage6 R/T High Voltage Ignition",
    model: "aerox",
    category: "electrical",
    price: 6800,
    image: "public/stage-6-intake-manifold.jpg",
    description: "High voltage ignition coil from Stage6. Improves combustion efficiency for better performance.",
    specs: ["Output Voltage: 40kV", "Spark Gap: Optimized", "Cold Start: Enhanced"],
  },

  // Nmax Engine Parts
  {
    id: 11,
    name: "Malossi Clutch Bell 17mm",
    model: "nmax",
    category: "engine",
    price: 6500,
    image: "public/malossi-variator-kit-nmax.jpg",
    description: "Premium clutch bell from Italian specialist Malossi. Better engagement for improved acceleration.",
    specs: ["Diameter: 17mm", "Material: Aluminum", "Gear Ratio: Optimized"],
  },
  {
    id: 12,
    name: "Mikuni VM24 Carburetor",
    model: "nmax",
    category: "engine",
    price: 8200,
    image: "public/mikuni-vm26-carburetor.jpg",
    description: "High-performance Mikuni carb for Nmax. Smooth power delivery and excellent throttle response.",
    specs: ["Bore: 24mm", "Jet Type: Adjustable", "Manual Choke: Yes"],
  },
  {
    id: 13,
    name: "Polini Full Exhaust System",
    model: "nmax",
    category: "engine",
    price: 12000,
    image: "public/polini-big-evo-straight-full-exhaust-system.jpg",
    description: "Complete exhaust system from Polini. Lightweight and performance-tuned for maximum power.",
    specs: ["Material: Stainless Steel", "Weight: 2.5kg", "Horsepower +5%"],
  },

  // Nmax Suspension Parts
  {
    id: 14,
    name: "KYB Front Shock Absorber",
    model: "nmax",
    category: "suspension",
    price: 9500,
    image: "public/kyb-front-650x650.jpg",
    description: "Japanese-made KYB shock absorber. Superior comfort and handling characteristics for daily riding.",
    specs: ["Type: Oil Damped", "Travel: 120mm", "Adjustable: Preload"],
  },
  {
    id: 15,
    name: "YSS Rear Adjustable Shock",
    model: "nmax",
    category: "suspension",
    price: 10500,
    image: "public/YSS Rear Adjustable Shock.jpg",
    description: "Fully adjustable rear shock from Thai manufacturer YSS. Perfect for custom tuning.",
    specs: ["Type: Monoshock", "Travel: 130mm", "Damping: 3-stage"],
  },

  // Nmax Brakes
  {
    id: 16,
    name: "EBC SV Brake Pads",
    model: "nmax",
    category: "brakes",
    price: 3500,
    image: "public/EBC SV Brake Pads.jpg",
    description: "Premium semi-metallic brake pads from EBC. Low dust and excellent heat dissipation.",
    specs: ["Type: Semi-Metallic", "Friction: 0.62", "Set of 2 Pairs"],
  },
  {
    id: 17,
    name: "Stainless Steel Brake Line Kit",
    model: "nmax",
    category: "brakes",
    price: 4200,
    image: "public/Stainless Steel Brake Line Kit.jpg",
    description: "Braided stainless steel brake lines. Better feedback and feel with reduced brake fade.",
    specs: ["Material: Stainless Steel Braid", "Length: Adjustable", "Fittings: Included"],
  },

  // Nmax Body Parts
  {
    id: 18,
    name: "LED Taillight Cluster",
    model: "nmax",
    category: "body",
    price: 6800,
    image: "public/LED Taillight Cluster.png",
    description: "Modern LED taillight cluster. Better visibility and stylish appearance compared to stock.",
    specs: ["Type: Full LED", "Color: Red", "Brightness: 1200 lm"],
  },
  {
    id: 19,
    name: "Street Racer Fairing Set",
    model: "nmax",
    category: "body",
    price: 9800,
    image: "public/Street Racer Fairing Set.jpg",
    description: "Complete fairing set with aggressive street racer design. Includes windshield and side panels.",
    specs: ["Material: ABS Plastic", "Color: Black with Red Accents", "Installation: Easy"],
  },

  // Nmax Electrical Parts
  {
    id: 20,
    name: "HID Xenon Headlight Kit",
    model: "nmax",
    category: "electrical",
    price: 11500,
    image: "public/HID Xenon Headlight Kit.jpg",
    description: "High-intensity discharge xenon headlight kit. Up to 3x brighter than halogen bulbs.",
    specs: ["Color: 5000K White", "Brightness: 3200 lm", "Ballast: Included"],
  },
]

// State Management
let cart = []
try {
  cart = JSON.parse(localStorage.getItem("cart")) || []
} catch {
  cart = []
}
let currentPage = "home"
let filteredProducts = [...products]

// DOM Elements
const navLinks = document.getElementById("navLinks")
const menuToggle = document.getElementById("menuToggle")
const cartBtn = document.getElementById("cartBtn")
const cartModal = document.getElementById("cartModal")
const contactForm = document.getElementById("contactForm")
const checkoutForm = document.getElementById("checkoutForm")
const modelFilter = document.getElementById("modelFilter")
const categoryFilter = document.getElementById("categoryFilter")

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners()
  displayProducts()
  updateCartCount()
})

// Event Listeners
function setupEventListeners() {
  if (menuToggle) menuToggle.addEventListener("click", toggleMenu)
  if (cartBtn) cartBtn.addEventListener("click", openCart)

  document.querySelectorAll("[data-page]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      navigatePage(link.dataset.page)
    })
  })

  if (cartModal) {
    cartModal.addEventListener("click", (e) => {
      if (e.target === cartModal) closeCart()
    })
  }

  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit)
  }

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckoutSubmit)
  }

  if (modelFilter) modelFilter.addEventListener("change", applyFilters)
  if (categoryFilter) categoryFilter.addEventListener("change", applyFilters)
}

// Navigation
function navigatePage(page) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"))

  const pageEl = document.getElementById(`${page}-page`)
  if (pageEl) pageEl.classList.add("active")

  currentPage = page

  if (navLinks && navLinks.classList.contains("active")) {
    toggleMenu()
  }

  if (page === "products") {
    displayProducts()
  } else if (page === "checkout") {
    updateCheckoutSummary()
  }

  window.scrollTo(0, 0)
}

function toggleMenu() {
  if (!navLinks) return
  navLinks.classList.toggle("active")
}

// Products
function displayProducts() {
  const grid = document.getElementById("productsGrid")
  if (!grid) return

  grid.innerHTML = ""

  if (filteredProducts.length === 0) {
    grid.innerHTML = '<p class="no-products">No products found matching your filters.</p>'
    return
  }

  filteredProducts.forEach((product) => {
    const card = document.createElement("div")
    card.className = "product-card"
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <span class="product-model">${product.model.toUpperCase()}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-category">${product.category}</p>
        <p class="product-price">₱${product.price.toLocaleString("en-PH")}</p>
        <div class="product-actions">
          <button class="btn btn-primary btn-small" onclick="viewProduct(${product.id})">View Details</button>
          <button class="btn btn-secondary btn-small" onclick="quickAddToCart(${product.id})">Add Cart</button>
        </div>
      </div>
    `
    grid.appendChild(card)
  })
}

function viewProduct(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  const detailContainer = document.getElementById("productDetailContainer")
  if (!detailContainer) return

  detailContainer.innerHTML = `
    <div class="product-detail-wrapper">
      <div class="product-detail-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-detail-info">
        <h1>${product.name}</h1>
        <div class="product-detail-meta">
          <span class="detail-badge">Model: ${product.model.toUpperCase()}</span>
          <span class="detail-badge">Category: ${product.category}</span>
        </div>
        <p class="product-detail-price">₱${product.price.toLocaleString("en-PH")}</p>
        <p class="product-detail-description">${product.description}</p>
        <div>
          <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Specifications</h4>
          <ul style="list-style: none; margin-bottom: 2rem;">
            ${product.specs
              .map((spec) => `<li style="margin-bottom: 0.5rem; color: var(--text-light);">✓ ${spec}</li>`)
              .join("")}
          </ul>
        </div>
        <div class="quantity-selector">
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" min="1" max="99" value="1" aria-label="Product quantity">
        </div>
        <button class="btn btn-primary add-to-cart-btn" onclick="addToCart(${productId})">Add to Cart</button>
      </div>
    </div>
  `

  const breadcrumb = document.getElementById("productBreadcrumb")
  if (breadcrumb) breadcrumb.textContent = product.name

  navigatePage("product-details")
}

function applyFilters() {
  const model = modelFilter ? modelFilter.value : ""
  const category = categoryFilter ? categoryFilter.value : ""

  filteredProducts = products.filter((product) => {
    return (!model || product.model === model) && (!category || product.category === category)
  })

  displayProducts()
}

// Cart Functions
function quickAddToCart(productId) {
  addProductToCart(productId, 1)
  showNotification("Added to cart!")
}

function addToCart(productId) {
  const qtyEl = document.getElementById("quantity")
  const quantity = Number.parseInt(qtyEl ? qtyEl.value : "1", 10) || 1
  addProductToCart(productId, quantity)
  showNotification("Added to cart!")
}

function addProductToCart(productId, quantity) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({ ...product, quantity })
  }

  saveCart()
  updateCartCount()
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  saveCart()
  updateCartDisplay()
  updateCartCount()
  updateCheckoutSummary()
}

function updateQuantity(productId, quantity) {
  const item = cart.find((item) => item.id === productId)
  if (item) {
    item.quantity = Math.max(1, quantity)
    saveCart()
    updateCartDisplay()
    updateCheckoutSummary()
    updateCartCount()
  }
}

function openCart() {
  if (!cartModal) return
  cartModal.classList.add("active")
  updateCartDisplay()
}

function closeCart() {
  if (!cartModal) return
  cartModal.classList.remove("active")
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cartItems")
  if (!cartItemsContainer) return

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <p>Your cart is empty</p>
      </div>
    `
    updateCartTotals(0, 0, 0)
    return
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-item-details">
            <p class="cart-item-name">${item.name}</p>
            <p class="cart-item-price">₱${item.price.toLocaleString("en-PH")}</p>
            <div class="cart-item-quantity">
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
              <span>${item.quantity}</span>
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
              <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
            </div>
          </div>
        </div>
      `,
    )
    .join("")

  calculateCartTotals()
}

function calculateCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.12
  const total = subtotal + tax

  updateCartTotals(subtotal, tax, total)
}

function updateCartTotals(subtotal, tax, total) {
  const subtotalEl = document.getElementById("subtotal")
  const taxEl = document.getElementById("tax")
  const totalEl = document.getElementById("total")

  if (subtotalEl) subtotalEl.textContent = `₱${subtotal.toLocaleString("en-PH")}`
  if (taxEl) taxEl.textContent = `₱${tax.toLocaleString("en-PH")}`
  if (totalEl) totalEl.textContent = `₱${total.toLocaleString("en-PH")}`
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  const countEl = document.getElementById("cartCount")
  if (countEl) countEl.textContent = count
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

// Checkout Functions
function navigateToCheckout() {
  if (cart.length === 0) {
    showNotification("Your cart is empty!", "error")
    return
  }
  closeCart()
  navigatePage("checkout")
}

function updateCheckoutSummary() {
  const itemsList = document.getElementById("checkoutItemsList")
  if (!itemsList) return

  itemsList.innerHTML = cart
    .map(
      (item) => `
        <div class="checkout-item">
          <div class="checkout-item-detail">
            <p class="checkout-item-name">${item.name}</p>
            <p class="checkout-item-qty">Qty: ${item.quantity}</p>
          </div>
          <p class="checkout-item-price">₱${(item.price * item.quantity).toLocaleString("en-PH")}</p>
        </div>
      `,
    )
    .join("")

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.12
  const total = subtotal + tax

  const sEl = document.getElementById("checkoutSubtotal")
  const tEl = document.getElementById("checkoutTax")
  const totEl = document.getElementById("checkoutTotal")

  if (sEl) sEl.textContent = `₱${subtotal.toLocaleString("en-PH")}`
  if (tEl) tEl.textContent = `₱${tax.toLocaleString("en-PH")}`
  if (totEl) totEl.textContent = `₱${total.toLocaleString("en-PH")}`
}

function handleCheckoutSubmit(e) {
  e.preventDefault()

  const firstNameEl = document.getElementById("firstName")
  const lastNameEl = document.getElementById("lastName")
  const addressEl = document.getElementById("address")
  const cityEl = document.getElementById("city")

  const firstName = firstNameEl ? firstNameEl.value.trim() : ""
  const lastName = lastNameEl ? lastNameEl.value.trim() : ""
  const address = addressEl ? addressEl.value.trim() : ""
  const city = cityEl ? cityEl.value.trim() : ""

  // NOTE: If you have TWO different email inputs (contact + checkout),
  // rename checkout one in HTML to id="checkoutEmail" (recommended).
  const checkoutEmailEl = document.getElementById("checkoutEmail") || document.getElementById("email")
  const email = checkoutEmailEl ? checkoutEmailEl.value.trim() : ""

  if (!firstName || !lastName || !address || !city) {
    showNotification("Please fill in all required fields", "error")
    return
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal * 1.12

  const orderData = {
    orderNumber: "YMP-" + Date.now(),
    date: new Date().toLocaleDateString(),
    items: cart.length,
    total: total.toFixed(2),
    email,
  }

  cart = []
  saveCart()
  updateCartCount()

  const successDetails = document.getElementById("successDetails")
  if (successDetails) {
    successDetails.innerHTML = `
      <div class="success-detail-row">
        <span class="success-detail-label">Order Number:</span>
        <span class="success-detail-value">${orderData.orderNumber}</span>
      </div>
      <div class="success-detail-row">
        <span class="success-detail-label">Date:</span>
        <span class="success-detail-value">${orderData.date}</span>
      </div>
      <div class="success-detail-row">
        <span class="success-detail-label">Items:</span>
        <span class="success-detail-value">${orderData.items}</span>
      </div>
      <div class="success-detail-row">
        <span class="success-detail-label">Total:</span>
        <span class="success-detail-value">₱${orderData.total}</span>
      </div>
    `
  }

  navigatePage("success")
}

// Form Handling
function handleContactSubmit(e) {
  e.preventDefault()

  const nameEl = document.getElementById("name")
  const subjectEl = document.getElementById("subject")
  const messageEl = document.getElementById("message")

  // NOTE: If you have TWO different email inputs (contact + checkout),
  // rename contact one in HTML to id="contactEmail" (recommended).
  const contactEmailEl = document.getElementById("contactEmail") || document.getElementById("email")

  const name = nameEl ? nameEl.value.trim() : ""
  const email = contactEmailEl ? contactEmailEl.value.trim() : ""
  const subject = subjectEl ? subjectEl.value.trim() : ""
  const message = messageEl ? messageEl.value.trim() : ""

  if (!name || !email || !subject || !message) {
    showNotification("Please fill in all fields", "error")
    return
  }

  showNotification("Message sent successfully! We will contact you soon.")
  if (contactForm) contactForm.reset()
}

// Utilities
function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    padding: 1rem 1.5rem;
    background-color: ${type === "error" ? "var(--danger-color)" : "var(--success-color)"};
    color: white;
    border-radius: 6px;
    box-shadow: var(--shadow);
    z-index: 2000;
    animation: slideIn 0.3s ease;
  `
  notification.textContent = message
  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease"
    setTimeout(() => notification.remove(), 300)
  }, 3000)
}

// Add animation styles
const style = document.createElement("style")
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(400px); opacity: 0; }
  }

  .no-products {
    grid-column: 1 / -1;
    text-align: center;
    padding: 3rem;
    color: var(--text-light);
    font-size: 1.1rem;
  }
`
document.head.appendChild(style)
