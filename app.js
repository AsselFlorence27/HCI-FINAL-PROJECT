/* =========================
   PRODUCT DATABASE (FIXED IMAGE PATHS)
========================= */
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
    description: "Premium carb from Italian manufacturer Dellorto. Delivers better fuel atomization and throttle response.",
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
    image: "public/yuasa-battery-ytx9-bs.jpg",
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
    image: "public/yss-rear-adjustable-shock.jpg", // matches your file name
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
    image: "public/ebc-sv-brake-pads.jpg",
    description: "Premium semi-metallic brake pads from EBC. Low dust and excellent heat dissipation.",
    specs: ["Type: Semi-Metallic", "Friction: 0.62", "Set of 2 Pairs"],
  },
  {
    id: 17,
    name: "Stainless Steel Brake Line Kit",
    model: "nmax",
    category: "brakes",
    price: 4200,
    image: "public/stainless-steel-brake-line-kit.jpg",
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
    image: "public/led-taillight-cluster.png",
    description: "Modern LED taillight cluster. Better visibility and stylish appearance compared to stock.",
    specs: ["Type: Full LED", "Color: Red", "Brightness: 1200 lm"],
  },
  {
    id: 19,
    name: "Street Racer Fairing Set",
    model: "nmax",
    category: "body",
    price: 9800,
    image: "public/street-racer-fairing-set.jpg",
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
    image: "public/hid-xenon-headlight-kit.jpg",
    description: "High-intensity discharge xenon headlight kit. Up to 3x brighter than halogen bulbs.",
    specs: ["Color: 5000K White", "Brightness: 3200 lm", "Ballast: Included"],
  },
];

/* =========================
   STATE
========================= */
let cart = [];
try {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
} catch {
  cart = [];
}

let currentPage = "home";
let filteredProducts = [...products];

/* =========================
   DOM ELEMENTS
========================= */
const navLinksEl = document.getElementById("navLinks");
const menuToggleEl = document.getElementById("menuToggle");
const cartBtnEl = document.getElementById("cartBtn");
const cartModalEl = document.getElementById("cartModal");

const contactFormEl = document.getElementById("contactForm");
const checkoutFormEl = document.getElementById("checkoutForm");

const modelFilterEl = document.getElementById("modelFilter");
const categoryFilterEl = document.getElementById("categoryFilter");
const searchInputEl = document.getElementById("searchInput");

const toastEl = document.getElementById("toast");

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  displayProducts();
  updateCartCount();
  setActiveNavLink("home");
});

/* =========================
   EVENT LISTENERS
========================= */
function setupEventListeners() {
  if (menuToggleEl) {
    menuToggleEl.addEventListener("click", toggleMenu);
  }

  if (cartBtnEl) {
    cartBtnEl.addEventListener("click", openCart);
  }

  document.querySelectorAll("[data-page]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      navigatePage(page);
      document.querySelectorAll("[data-page]").forEach((a) => {
  a.classList.toggle("active", a.dataset.page === page)
})

    });
  });

  // close cart when clicking outside modal content
  if (cartModalEl) {
    cartModalEl.addEventListener("click", (e) => {
      if (e.target === cartModalEl) closeCart();
    });
  }

  // ESC closes cart modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cartModalEl && cartModalEl.classList.contains("active")) {
      closeCart();
    }
  });

  if (contactFormEl) {
    contactFormEl.addEventListener("submit", handleContactSubmit);
  }

  if (checkoutFormEl) {
    checkoutFormEl.addEventListener("submit", handleCheckoutSubmit);
    addLiveValidation(checkoutFormEl);
    addPaymentFormatters();
  }

  if (modelFilterEl) modelFilterEl.addEventListener("change", applyFilters);
  if (categoryFilterEl) categoryFilterEl.addEventListener("change", applyFilters);

  if (searchInputEl) {
    searchInputEl.addEventListener("input", applyFilters);
  }
}

/* =========================
   NAVIGATION
========================= */
function navigatePage(page) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));

  const pageEl = document.getElementById(`${page}-page`);
  if (pageEl) pageEl.classList.add("active");

  currentPage = page;
  setActiveNavLink(page);

  // Close mobile nav after click
  if (navLinksEl && navLinksEl.classList.contains("active")) {
    toggleMenu(false);
  }

  if (page === "products") {
    displayProducts();
  } else if (page === "checkout") {
    updateCheckoutSummary();
  }

  // accessibility: move focus to main for screen readers
  const main = document.getElementById("mainContent");
  if (main) main.focus();

  window.scrollTo(0, 0);
}

function setActiveNavLink(page) {
  document.querySelectorAll(".nav-link, [data-page]").forEach((a) => {
    if (a.classList && a.classList.contains("nav-link")) {
      a.classList.toggle("active", a.dataset.page === page);
    }
  });
}

function toggleMenu(forceState) {
  if (!navLinksEl) return;
  const willOpen = typeof forceState === "boolean" ? forceState : !navLinksEl.classList.contains("active");
  navLinksEl.classList.toggle("active", willOpen);

  // aria-expanded
  if (menuToggleEl) {
    menuToggleEl.setAttribute("aria-expanded", String(willOpen));
  }
}

/* =========================
   PRODUCTS
========================= */
function displayProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  if (filteredProducts.length === 0) {
    grid.innerHTML = '<p class="no-products">No products found matching your filters.</p>';
    return;
  }

  filteredProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${escapeHtml(product.name)}">
      </div>
      <div class="product-info">
        <span class="product-model">${product.model.toUpperCase()}</span>
        <h3 class="product-name">${escapeHtml(product.name)}</h3>
        <p class="product-category">${escapeHtml(product.category)}</p>
        <p class="product-price">₱${product.price.toLocaleString("en-PH")}</p>
        <div class="product-actions">
          <button class="btn btn-primary btn-small" type="button" onclick="viewProduct(${product.id})">View Details</button>
          <button class="btn btn-secondary btn-small" type="button" onclick="quickAddToCart(${product.id})">Add Cart</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function viewProduct(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const detailContainer = document.getElementById("productDetailContainer");
  if (!detailContainer) return;

  detailContainer.innerHTML = `
    <div class="product-detail-wrapper">
      <div class="product-detail-image">
        <img src="${product.image}" alt="${escapeHtml(product.name)}">
      </div>
      <div class="product-detail-info">
        <h1>${escapeHtml(product.name)}</h1>
        <div class="product-detail-meta">
          <span class="detail-badge">Model: ${product.model.toUpperCase()}</span>
          <span class="detail-badge">Category: ${escapeHtml(product.category)}</span>
        </div>
        <p class="product-detail-price">₱${product.price.toLocaleString("en-PH")}</p>
        <p class="product-detail-description">${escapeHtml(product.description)}</p>

        <h4 class="specs-title">Specifications</h4>
        <ul class="specs-list">
          ${product.specs.map((s) => `<li>✓ ${escapeHtml(s)}</li>`).join("")}
        </ul>

        <div class="quantity-selector">
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" min="1" max="99" value="1" aria-label="Product quantity">
        </div>

        <button class="btn btn-primary add-to-cart-btn" type="button" onclick="addToCart(${productId})">
          Add to Cart
        </button>
      </div>
    </div>
  `;

  const breadcrumb = document.getElementById("productBreadcrumb");
  if (breadcrumb) breadcrumb.textContent = product.name;

  navigatePage("product-details");
}

function applyFilters() {
  const model = modelFilterEl ? modelFilterEl.value : "";
  const category = categoryFilterEl ? categoryFilterEl.value : "";
  const query = searchInputEl ? searchInputEl.value.trim().toLowerCase() : "";

  filteredProducts = products.filter((product) => {
    const matchModel = !model || product.model === model;
    const matchCategory = !category || product.category === category;
    const matchQuery =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.model.toLowerCase().includes(query);

    return matchModel && matchCategory && matchQuery;
  });

  displayProducts();
}

/* =========================
   CART
========================= */
function quickAddToCart(productId) {
  addProductToCart(productId, 1);
  showToast("Added to cart!");
}

function addToCart(productId) {
  const qtyEl = document.getElementById("quantity");
  const quantity = Number.parseInt(qtyEl ? qtyEl.value : "1", 10) || 1;

  if (quantity < 1) {
    showToast("Quantity must be at least 1", "error");
    return;
  }

  addProductToCart(productId, quantity);
  showToast("Added to cart!");
}

function addProductToCart(productId, quantity) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  saveCart();
  updateCartCount();
  updateCheckoutSummary();
}

function removeFromCart(productId) {
  const item = cart.find((i) => i.id === productId);
  cart = cart.filter((item) => item.id !== productId);

  saveCart();
  updateCartDisplay();
  updateCartCount();
  updateCheckoutSummary();

  if (item) showToast(`Removed: ${item.name}`);
}

function updateQuantity(productId, quantity) {
  const item = cart.find((item) => item.id === productId);
  if (!item) return;

  item.quantity = Math.max(1, quantity);

  saveCart();
  updateCartDisplay();
  updateCheckoutSummary();
  updateCartCount();
}

function openCart() {
  if (!cartModalEl) return;

  cartModalEl.classList.add("active");
  cartModalEl.setAttribute("aria-hidden", "false");
  updateCartDisplay();
}

function closeCart() {
  if (!cartModalEl) return;

  cartModalEl.classList.remove("active");
  cartModalEl.setAttribute("aria-hidden", "true");
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cartItems");
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart" aria-hidden="true"></i>
        <p>Your cart is empty</p>
      </div>
    `;
    updateCartTotals(0, 0, 0);
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map((item) => {
      const minusDisabled = item.quantity <= 1 ? "disabled" : "";
      return `
        <div class="cart-item">
          <div class="cart-item-image">
            <img src="${item.image}" alt="${escapeHtml(item.name)}">
          </div>
          <div class="cart-item-details">
            <p class="cart-item-name">${escapeHtml(item.name)}</p>
            <p class="cart-item-price">₱${item.price.toLocaleString("en-PH")}</p>
            <div class="cart-item-quantity">
              <button class="quantity-btn" type="button" ${minusDisabled} onclick="updateQuantity(${item.id}, ${
        item.quantity - 1
      })" aria-label="Decrease quantity">-</button>
              <span aria-label="Quantity">${item.quantity}</span>
              <button class="quantity-btn" type="button" onclick="updateQuantity(${item.id}, ${
        item.quantity + 1
      })" aria-label="Increase quantity">+</button>

              <button class="remove-btn" type="button" onclick="removeFromCart(${item.id})" aria-label="Remove item">
                <i class="fas fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  calculateCartTotals();
}

function calculateCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  updateCartTotals(subtotal, tax, total);
}

function updateCartTotals(subtotal, tax, total) {
  const subtotalEl = document.getElementById("subtotal");
  const taxEl = document.getElementById("tax");
  const totalEl = document.getElementById("total");

  if (subtotalEl) subtotalEl.textContent = `₱${subtotal.toLocaleString("en-PH")}`;
  if (taxEl) taxEl.textContent = `₱${tax.toLocaleString("en-PH")}`;
  if (totalEl) totalEl.textContent = `₱${total.toLocaleString("en-PH")}`;
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countEl = document.getElementById("cartCount");
  if (countEl) countEl.textContent = count;
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* =========================
   CHECKOUT
========================= */
function navigateToCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty!", "error");
    return;
  }
  closeCart();
  navigatePage("checkout");
}

function updateCheckoutSummary() {
  const itemsList = document.getElementById("checkoutItemsList");
  if (!itemsList) return;

  if (cart.length === 0) {
    itemsList.innerHTML = `<p class="empty-state">No items yet.</p>`;
  } else {
    itemsList.innerHTML = cart
      .map(
        (item) => `
          <div class="checkout-item">
            <div class="checkout-item-detail">
              <p class="checkout-item-name">${escapeHtml(item.name)}</p>
              <p class="checkout-item-qty">Qty: ${item.quantity}</p>
            </div>
            <p class="checkout-item-price">₱${(item.price * item.quantity).toLocaleString("en-PH")}</p>
          </div>
        `
      )
      .join("");
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  const sEl = document.getElementById("checkoutSubtotal");
  const tEl = document.getElementById("checkoutTax");
  const totEl = document.getElementById("checkoutTotal");

  if (sEl) sEl.textContent = `₱${subtotal.toLocaleString("en-PH")}`;
  if (tEl) tEl.textContent = `₱${tax.toLocaleString("en-PH")}`;
  if (totEl) totEl.textContent = `₱${total.toLocaleString("en-PH")}`;
}

/* =========================
   CHECKOUT
========================= */
function handleCheckoutSubmit(e) {
  e.preventDefault();

  const firstNameEl = document.getElementById("firstName");
  const lastNameEl = document.getElementById("lastName");
  const addressEl = document.getElementById("address");
  const cityEl = document.getElementById("city");

  const firstName = firstNameEl ? firstNameEl.value.trim() : "";
  const lastName = lastNameEl ? lastNameEl.value.trim() : "";
  const address = addressEl ? addressEl.value.trim() : "";
  const city = cityEl ? cityEl.value.trim() : "";

  // ✅ single email source with fallback
  const checkoutEmailEl =
    document.getElementById("checkoutEmail") || document.getElementById("email");
  const email = checkoutEmailEl ? checkoutEmailEl.value.trim() : "";

  // Basic required fields
  if (!firstName || !lastName || !address || !city) {
    // If your project has showNotification, use it; otherwise fall back to toast
    if (typeof showNotification === "function") {
      showNotification("Please fill in all required fields", "error");
    } else {
      showToast("Please fill in all required fields", "error");
    }
    return;
  }

  const requiredIds = [
    "firstName",
    "lastName",
    "address",
    "city",
    "zipcode",
    "cardName",
    "cardNumber",
    "expiry",
    "cvv",
  ];

  const missing = validateRequired(requiredIds);

  if (missing.length > 0) {
    showToast("Please fill in all required fields", "error");
    const firstMissing = document.getElementById(missing[0]);
    if (firstMissing) firstMissing.focus();
    return;
  }

  // Totals: subtotal + 12% tax (consistent with cart display)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  const orderData = {
    orderNumber: "YMP-" + Date.now(),
    date: new Date().toLocaleDateString(),
    items: cart.reduce((sum, i) => sum + i.quantity, 0),
    total: total.toFixed(2),
    email,
  };

  // Clear cart + UI
  cart = [];
  saveCart();
  updateCartCount();
  updateCheckoutSummary();
  updateCartDisplay();

  // Show success summary
  const successDetails = document.getElementById("successDetails");
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
    `;
  }

  showToast("Purchase completed successfully!");
  if (checkoutFormEl) checkoutFormEl.reset();

  navigatePage("success");
}

/* =========================
   CONTACT
========================= */
function handleContactSubmit(e) {
  e.preventDefault();

  const nameEl = document.getElementById("name");
  const subjectEl = document.getElementById("subject");
  const messageEl = document.getElementById("message");

  const name = nameEl ? nameEl.value.trim() : "";
  const subject = subjectEl ? subjectEl.value.trim() : "";
  const message = messageEl ? messageEl.value.trim() : "";

  const contactEmailEl =
    document.getElementById("contactEmail") || document.getElementById("email");
  const email = contactEmailEl ? contactEmailEl.value.trim() : "";

  const missing = [];
  if (!name) missing.push("name");
  if (!email) missing.push("contactEmail");
  if (!subject) missing.push("subject");
  if (!message) missing.push("message");

  clearErrors(["name", "contactEmail", "subject", "message"]);
  missing.forEach((id) => setError(id));

  if (missing.length > 0) {
    showToast("Please fill in all fields", "error");
    const firstMissing = document.getElementById(missing[0]);
    if (firstMissing) firstMissing.focus();
    return;
  }

  showToast("Message sent successfully! We will contact you soon.");
  if (contactFormEl) contactFormEl.reset();
}


/* =========================
   UTILITIES (TOAST + VALIDATION + FORMATTING)
========================= */
let toastTimer = null;

function showToast(message, type = "success") {
  // If toast exists (recommended)
  if (toastEl) {
    toastEl.className = "toast"; // reset
    toastEl.textContent = message;

    toastEl.classList.add("toast-show");
    toastEl.classList.add(type === "error" ? "toast-error" : "toast-success");

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove("toast-show");
    }, 2500);

    return;
  }

  // Fallback (if user didn't add toast)
  const notification = document.createElement("div");
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    padding: 1rem 1.5rem;
    background-color: ${type === "error" ? "#dc3545" : "#28a745"};
    color: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    z-index: 2000;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 2500);
}

function validateRequired(ids) {
  const missing = [];
  clearErrors(ids);

  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const val = el.value.trim();
    if (!val) {
      missing.push(id);
      setError(id);
    }
  });

  return missing;
}

function setError(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add("input-error");
}

function clearErrors(ids) {
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.remove("input-error");
  });
}

function addLiveValidation(formEl) {
  formEl.querySelectorAll("input, textarea, select").forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim()) input.classList.remove("input-error");
    });
  });
}

function addPaymentFormatters() {
  const cardNumber = document.getElementById("cardNumber");
  const expiry = document.getElementById("expiry");
  const cvv = document.getElementById("cvv");

  if (cardNumber) {
    cardNumber.addEventListener("input", () => {
      let v = cardNumber.value.replace(/\D/g, "").slice(0, 16);
      v = v.replace(/(\d{4})(?=\d)/g, "$1 ");
      cardNumber.value = v;
    });
  }

  if (expiry) {
    expiry.addEventListener("input", () => {
      let v = expiry.value.replace(/\D/g, "").slice(0, 4);
      if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2);
      expiry.value = v;
    });
  }

  if (cvv) {
    cvv.addEventListener("input", () => {
      cvv.value = cvv.value.replace(/\D/g, "").slice(0, 4);
    });
  }
}

// Prevent basic HTML injection in product rendering
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
