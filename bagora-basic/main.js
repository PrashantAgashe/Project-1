// ============================================================
//  BAGORA – Shared JS  (cart, wishlist, loader, toast, search)
// ============================================================

// ── PRODUCTS DATA ──────────────────────────────────────────
const PRODUCTS = [
  { id: 1,  name: "Urban Backpack",         cat: "Backpacks", price: 1299, old: 1699, badge: "Bestseller", img: "images/urban_bag.jpg",             page: "urban_bag.html",             tags: ["backpack","urban","college","daily","campus","student","bag"] },
  { id: 2,  name: "Voyage Travel Bag",      cat: "Travel",    price: 2499, old: 3199, badge: "New",        img: "images/YOYAGE_TRAVEL_BAG.jpg",     page: "YOYAGE_TRAVEL_BAG.html",     tags: ["travel","voyage","luggage","trip","weekend","suitcase","bag"] },
  { id: 3,  name: "Classic Leather Tote",   cat: "Handbags",  price: 1899, old: null, badge: null,         img: "images/CLASSIC_TOTE_BAG.jpg",      page: "CLASSIC_TOTE_BAG.html",      tags: ["tote","leather","classic","handbag","women","shopping","bag"] },
  { id: 4,  name: "SlimLine Laptop Bag",    cat: "Laptop",    price: 1599, old: 1999, badge: "Sale",       img: "images/slimline_laptop_bag.jpg",   page: "slimline_laptop_bag.html",   tags: ["laptop","slim","office","work","professional","sleeve","tech","bag"] },
  { id: 5,  name: "Mini Crossbody Bag",     cat: "Handbags",  price:  899, old: null, badge: null,         img: "images/MINI_CROSS_BODY_BAG.jpg",   page: "MINI_CROSS_BODY_BAG.html",   tags: ["crossbody","mini","small","women","casual","shoulder","bag"] },
  { id: 6,  name: "Trekker Duffel Bag",     cat: "Travel",    price: 1799, old: 2299, badge: null,         img: "images/TREKKER_DUFFLE_BAG.jpg",    page: "TREKKER_DUFFLE_BAG.html",    tags: ["duffel","travel","gym","sports","trekker","overnight","bag"] },
  { id: 7,  name: "Office Briefcase",       cat: "Laptop",    price: 2199, old: null, badge: "Premium",    img: "images/OFFICE_BRIEFCASE.jpg",      page: "OFFICE_BRIEFCASE.html",      tags: ["briefcase","office","laptop","formal","professional","business","bag"] },
  { id: 8,  name: "Canvas Tote Bag",        cat: "Handbags",  price:  599, old:  799, badge: null,         img: "images/CANVAS_TOTE_BAG.jpg",       page: "CANVAS_TOTE_BAG.html",       tags: ["canvas","tote","eco","shopping","grocery","light","bag"] },
  { id: 9,  name: "Adventure Hiking Pack",  cat: "Backpacks", price: 3499, old: 4199, badge: "Top Rated",  img: "images/ADVENTURE_HIKING_BAG.jpg",  page: "ADVENTURE_HIKING_BAG.html",  tags: ["hiking","adventure","backpack","outdoor","trekking","mountain","bag"] },
  { id: 10, name: "Foldable Shopping Bag",  cat: "Totes",     price:  399, old: null, badge: null,         img: "images/FOLDABLE_SHOPPING_BAG.jpg", page: "FOLDABLE_SHOPPING_BAG.html", tags: ["foldable","shopping","eco","compact","reusable","light","bag"] },
];

const PRODUCT_DESCS = {
  1: "A versatile everyday backpack made from durable canvas with padded straps, multiple compartments, and a top carry handle. Perfect for college, work or travel.",
  2: "Spacious travel bag with water-resistant fabric, a TSA-approved lock compartment, and organized pockets. Ideal for weekend getaways and short trips.",
  3: "Elegant full-grain leather tote with a roomy interior, interior zip pocket and sturdy handles. A timeless accessory for everyday use.",
  4: "Slim, professional laptop bag with a padded 15.6 inch compartment, cable organizer pocket, and a quick-access front pocket. Built for the modern professional.",
  5: "Compact and stylish crossbody bag with an adjustable strap, phone pocket, and zip closure. Great for daily errands or a night out.",
  6: "Heavy-duty duffel with reinforced handles, large main compartment, and end pockets for shoes. Great for gym, sports, or overnight trips.",
  7: "Professional briefcase in premium faux leather with a padded laptop sleeve, document organizer, and secure combination lock. Style meets function.",
  8: "Lightweight cotton canvas tote with long handles and a solid base. Eco-friendly, washable, and roomy enough for groceries, books, or a beach day.",
  9: "60L hiking pack with a ventilated back panel, hydration sleeve, adjustable hip belt, and compression straps. Built for the trails.",
  10: "Ultra-lightweight foldable shopping bag that fits in your pocket. Holds up to 15kg. Eco-friendly alternative to single-use plastic bags.",
};

// ── BAG SVGs ───────────────────────────────────────────────
const BAG_SVG = {
  Backpacks: `<svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" width="110" height="110">
    <rect x="20" y="38" width="80" height="90" rx="10" fill="#8B4513"/>
    <rect x="40" y="22" width="40" height="28" rx="7" fill="#6b3410"/>
    <rect x="47" y="16" width="26" height="14" rx="5" fill="#5a2c0d"/>
    <rect x="30" y="65" width="60" height="38" rx="7" fill="#7a3b10"/>
    <circle cx="60" cy="84" r="5" fill="#C8860A"/>
    <line x1="30" y1="38" x2="20" y2="100" stroke="#5a2c0d" stroke-width="5" stroke-linecap="round"/>
    <line x1="90" y1="38" x2="100" y2="100" stroke="#5a2c0d" stroke-width="5" stroke-linecap="round"/>
  </svg>`,
  Travel: `<svg viewBox="0 0 130 150" fill="none" xmlns="http://www.w3.org/2000/svg" width="110" height="110">
    <rect x="15" y="30" width="100" height="110" rx="8" fill="#5D6D7E"/>
    <rect x="15" y="30" width="100" height="22" rx="8" fill="#4a5568"/>
    <rect x="47" y="8" width="36" height="34" rx="5" fill="#2C3E50"/>
    <rect x="22" y="58" width="86" height="4" rx="2" fill="#6B7C8D"/>
    <rect x="22" y="106" width="86" height="4" rx="2" fill="#6B7C8D"/>
    <rect x="52" y="72" width="26" height="28" rx="4" fill="#4A5568"/>
    <circle cx="34" cy="146" r="9" fill="#2C3E50"/><circle cx="96" cy="146" r="9" fill="#2C3E50"/>
    <circle cx="34" cy="146" r="4" fill="#6B7C8D"/><circle cx="96" cy="146" r="4" fill="#6B7C8D"/>
  </svg>`,
  Handbags: `<svg viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" width="110" height="110">
    <path d="M18 56 Q18 44 30 44 L100 44 Q112 44 112 56 L116 112 Q116 124 104 124 L26 124 Q14 124 14 112 Z" fill="#C49A6C"/>
    <path d="M44 44 Q44 22 65 18 Q86 22 86 44" stroke="#8B6347" stroke-width="7" fill="none" stroke-linecap="round"/>
    <rect x="38" y="70" width="54" height="28" rx="5" fill="#b08040" opacity="0.35"/>
    <circle cx="65" cy="84" r="6" fill="#B8860B"/>
  </svg>`,
  Laptop: `<svg viewBox="0 0 130 140" fill="none" xmlns="http://www.w3.org/2000/svg" width="110" height="110">
    <rect x="15" y="28" width="100" height="104" rx="7" fill="#2C2C2C"/>
    <rect x="23" y="36" width="84" height="88" rx="5" fill="#1A1410"/>
    <rect x="30" y="43" width="70" height="62" rx="3" fill="#333"/>
    <rect x="40" y="52" width="50" height="44" rx="2" fill="#4A3728"/>
    <path d="M44 76 L56 66 L68 72 L84 60" stroke="#C49A6C" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <rect x="35" y="108" width="12" height="8" rx="2" fill="#555"/>
    <rect x="83" y="108" width="12" height="8" rx="2" fill="#555"/>
  </svg>`,
  Totes: `<svg viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" width="110" height="110">
    <rect x="18" y="50" width="84" height="70" rx="6" fill="#6B8F71"/>
    <path d="M38 50 Q38 24 60 20 Q82 24 82 50" stroke="#4a6b50" stroke-width="7" fill="none" stroke-linecap="round"/>
    <rect x="30" y="70" width="60" height="3" rx="1.5" fill="#4a6b50"/>
    <rect x="42" y="80" width="36" height="24" rx="4" fill="#5a7f60" opacity="0.5"/>
  </svg>`,
};

function getBagSVG(cat) { return BAG_SVG[cat] || BAG_SVG['Handbags']; }
function getDesc(id)     { return PRODUCT_DESCS[id] || ''; }

// ── WISHLIST ───────────────────────────────────────────────
function getWishlist() {
  try { return JSON.parse(localStorage.getItem('bagora_wish')) || []; } catch { return []; }
}
function saveWishlist(w) { localStorage.setItem('bagora_wish', JSON.stringify(w)); }
function isWished(id)    { return getWishlist().includes(id); }

function toggleWishlist(id) {
  let w = getWishlist();
  if (w.includes(id)) {
    w = w.filter(x => x !== id);
    showToast('💔 Removed from wishlist');
  } else {
    w.push(id);
    showToast('❤️ Added to wishlist!');
  }
  saveWishlist(w);
  refreshWishCount();
  document.querySelectorAll(`.heart-btn[data-id="${id}"]`).forEach(btn => {
    const wished = w.includes(id);
    btn.classList.toggle('wished', wished);
    btn.querySelector('path').setAttribute('fill', wished ? '#e53e3e' : 'none');
    btn.querySelector('path').setAttribute('stroke', wished ? '#e53e3e' : '#fff');
    btn.title = wished ? 'Remove from Wishlist' : 'Add to Wishlist';
  });
  // If on wishlist page, re-render
  if (typeof renderWishlistPage === 'function') renderWishlistPage();
}

function refreshWishCount() {
  const count = getWishlist().length;
  document.querySelectorAll('.wish-count').forEach(el => el.textContent = count);
}

// ── CART ───────────────────────────────────────────────────
function getCart() {
  try { return JSON.parse(localStorage.getItem('bagora_cart')) || []; } catch { return []; }
}
function saveCart(cart) { localStorage.setItem('bagora_cart', JSON.stringify(cart)); }

function addToCart(id, qty = 1) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const cart = getCart();
  const existing = cart.find(x => x.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id: p.id, name: p.name, price: p.price, cat: p.cat, qty });
  saveCart(cart);
  refreshCartCount();
  showToast('🛍 "' + p.name + '" added to cart!');
}

function removeFromCart(id) {
  saveCart(getCart().filter(x => x.id !== id));
  refreshCartCount();
  if (typeof renderCartPage === 'function') renderCartPage();
}

function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(x => x.id === id);
  if (item) { item.qty = Math.max(1, item.qty + delta); saveCart(cart); }
  if (typeof renderCartPage === 'function') renderCartPage();
}

function refreshCartCount() {
  const total = getCart().reduce((a, b) => a + b.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = total);
}

// ── PRODUCT CARD BUILDER ───────────────────────────────────
function buildProductCard(p) {
  const wished   = isWished(p.id);
  const discount = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
  const imgHtml  = p.img
    ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.4s;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'">`
    : getBagSVG(p.cat);
  const pageLink = p.page || `product.html?id=${p.id}`;
  return `
    <div class="product-card" onclick="window.location='${pageLink}'" style="cursor:pointer;">
      <div class="prod-img-wrap" style="overflow:hidden;">
        ${imgHtml}
        <button class="heart-btn${wished ? ' wished' : ''}" data-id="${p.id}"
          title="${wished ? 'Remove from Wishlist' : 'Add to Wishlist'}"
          onclick="event.stopPropagation();toggleWishlist(${p.id})">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="${wished ? '#e53e3e' : 'none'}" stroke="${wished ? '#e53e3e' : 'rgba(255,255,255,0.9)'}" stroke-width="2"/>
          </svg>
        </button>
        ${p.badge ? `<span class="prod-badge">${p.badge}</span>` : ''}
        ${discount ? `<span class="prod-discount">-${discount}%</span>` : ''}
      </div>
      <div class="prod-info">
        <span class="prod-cat-label">${p.cat}</span>
        <h3>${p.name}</h3>
        <div class="prod-price-row">
          <span class="prod-price">₹${p.price.toLocaleString()}</span>
          ${p.old ? `<span class="prod-old">₹${p.old.toLocaleString()}</span>` : ''}
        </div>
        <div class="prod-btns">
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();addToCart(${p.id})">🛍 Add to Cart</button>
          <a href="${pageLink}" class="btn btn-outline btn-sm" onclick="event.stopPropagation()">View</a>
        </div>
      </div>
    </div>`;
}

// ── TOAST ──────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.innerHTML = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ── PAGE LOADER ────────────────────────────────────────────
function initLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hide'), 800);
  });
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      loader.classList.remove('hide');
      setTimeout(() => { window.location.href = href; }, 500);
    });
  });
}

// ── KEYWORD SEARCH ─────────────────────────────────────────
function searchProducts(q) {
  q = q.toLowerCase().trim();
  if (!q) return [];
  return PRODUCTS.filter(p => {
    return p.name.toLowerCase().includes(q)
      || p.cat.toLowerCase().includes(q)
      || p.tags.some(t => t.includes(q));
  });
}

function highlight(text, q) {
  if (!q) return text;
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:#fff3cd;padding:0 2px;border-radius:2px;">$1</mark>');
}

function initSearch() {
  const input = document.getElementById('search-input');
  const btn   = document.getElementById('search-btn');
  const panel = document.getElementById('search-results');
  if (!input || !btn || !panel) return;

  function doSearch() {
    const q = input.value.trim();
    if (!q) return;
    const hits = searchProducts(q);
    const box  = document.getElementById('search-result-box');

    if (hits.length === 0) {
      box.innerHTML = `
        <div style="text-align:center;padding:30px 0;color:#aaa;">
          <div style="font-size:40px;margin-bottom:8px;">🔍</div>
          <p style="font-size:15px;font-weight:600;color:#555;">No results for "<strong>${q}</strong>"</p>
          <p style="font-size:12px;margin-top:6px;">Try: backpack, leather, travel, laptop, tote…</p>
        </div>`;
    } else {
      box.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid #eee;">
          <span style="font-size:14px;font-weight:600;color:var(--brown);">
            ${hits.length} result${hits.length>1?'s':''} for "<em>${q}</em>"
          </span>
          <a href="products.html" style="font-size:12px;color:var(--gold);font-weight:600;">View all products →</a>
        </div>` +
        hits.map(p => `
          <div class="search-result-item" onclick="window.location='product.html?id=${p.id}'">
            <div class="sri-img">
              <div style="transform:scale(0.38);transform-origin:center;width:140px;height:140px;display:flex;align-items:center;justify-content:center;">
                ${getBagSVG(p.cat)}
              </div>
            </div>
            <div class="sri-info">
              <span class="sri-name">${highlight(p.name, q)}</span>
              <span class="sri-cat">${p.cat}</span>
              <div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px;">
                ${p.tags.filter(t => t.includes(q.toLowerCase())).slice(0, 4).map(t =>
                  `<span class="sri-tag">${highlight(t, q)}</span>`).join('')}
              </div>
            </div>
            <div class="sri-price">
              <span>₹${p.price.toLocaleString()}</span>
              ${p.old ? `<span style="font-size:11px;color:#bbb;text-decoration:line-through;display:block;">₹${p.old.toLocaleString()}</span>` : ''}
            </div>
          </div>`).join('');
    }
    panel.classList.add('open');
  }

  // Live search on typing (min 2 chars)
  input.addEventListener('input', () => {
    if (input.value.trim().length >= 2) doSearch();
    else { document.getElementById('search-result-box').innerHTML = ''; panel.classList.remove('open'); }
  });
  btn.addEventListener('click', doSearch);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  panel.addEventListener('click', e => { if (e.target === panel) panel.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') panel.classList.remove('open'); });
}

// ── NAV ACTIVE ─────────────────────────────────────────────
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
}

// ── INJECT GLOBAL FLOATING BUTTONS ────────────────────────
function injectGlobalUI() {
  if (!document.querySelector('.cart-float')) {
    const cf = document.createElement('a');
    cf.href = 'cart.html';
    cf.className = 'cart-float';
    cf.innerHTML = `🛍 Cart <span class="cart-count" style="background:rgba(255,255,255,0.2);border-radius:20px;padding:1px 8px;font-size:12px;">0</span>`;
    document.body.appendChild(cf);
  }
  if (!document.getElementById('scroll-top')) {
    const st = document.createElement('button');
    st.id = 'scroll-top';
    st.innerHTML = '↑';
    st.title = 'Back to top';
    st.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(st);
    window.addEventListener('scroll', () => {
      st.classList.toggle('visible', window.scrollY > 300);
    });
  }
}

// ── INIT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  refreshCartCount();
  refreshWishCount();
  initLoader();
  initSearch();
  setActiveNav();
  injectGlobalUI();
});
