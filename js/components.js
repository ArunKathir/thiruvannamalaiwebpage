/* ============================================================
   TiruvannamalaiRooms.com — Shared Components
   Injects header, footer, mobile nav, sticky CTA on subpages
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  injectHeader();
  injectFooter();
  injectStickyMobileCTA();
  injectScrollToTop();
});

function injectHeader() {
  const placeholder = document.getElementById('header-placeholder');
  if (!placeholder) return;

  placeholder.outerHTML = `
  <header class="site-header" id="site-header">
    <div class="container header-inner">
      <a href="index.html" class="logo" aria-label="Tiruvannamalai Rooms — Home">
        <img src="assets/images/logo.webp" alt="Tiruvannamalai Rooms logo" width="44" height="44">
        <span class="logo-text">
          <span class="brand-name">Tiruvannamalai Rooms</span>
          <span class="brand-tagline">Handpicked Stays</span>
        </span>
      </a>
      <nav class="main-nav" aria-label="Main navigation">
        <div class="nav-dropdown">
          <a href="rooms-in-tiruvannamalai.html" aria-haspopup="true">Rooms ▾</a>
          <div class="nav-dropdown-menu" role="menu">
            <a href="rooms-in-tiruvannamalai.html" role="menuitem">All Rooms</a>
            <a href="best-rooms-in-tiruvannamalai.html" role="menuitem">Best Rooms</a>
            <a href="premium-rooms-in-tiruvannamalai.html" role="menuitem">Premium Rooms</a>
            <a href="family-rooms-in-tiruvannamalai.html" role="menuitem">Family Rooms</a>
            <a href="budget-rooms-in-tiruvannamalai.html" role="menuitem">Budget Rooms</a>
          </div>
        </div>
        <div class="nav-dropdown">
          <a href="rooms-near-arunachaleswarar-temple.html" aria-haspopup="true">By Location ▾</a>
          <div class="nav-dropdown-menu" role="menu">
            <a href="rooms-near-arunachaleswarar-temple.html" role="menuitem">Near Arunachaleswarar Temple</a>
            <a href="hotels-near-arunachaleswarar-temple.html" role="menuitem">Hotels Near Temple</a>
            <a href="rooms-near-ramana-ashram.html" role="menuitem">Near Ramana Ashram</a>
            <a href="rooms-for-girivalam.html" role="menuitem">For Girivalam</a>
          </div>
        </div>
        <a href="hotels-in-tiruvannamalai.html">Hotels</a>
        <div class="nav-dropdown">
          <a href="blog.html" aria-haspopup="true">Blog & Guides ▾</a>
          <div class="nav-dropdown-menu" role="menu">
            <a href="blog.html" role="menuitem">All Articles</a>
            <a href="guide/how-to-do-girivalam-on-pournami.html" role="menuitem">Pournami Girivalam Guide</a>
            <a href="blog/1-day-tiruvannamalai-itinerary.html" role="menuitem">1-Day Itinerary</a>
            <a href="guide/weather-and-seasons-tiruvannamalai.html" role="menuitem">Weather Guide</a>
            <a href="guide/vegetarian-food-guide-tiruvannamalai.html" role="menuitem">Food Guide</a>
            <a href="blog/pournami-girivalam-dates.html" role="menuitem">Pournami Dates</a>
          </div>
        </div>
        <a href="how-it-works.html">How It Works</a>
        <a href="about-us.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div class="header-cta">
        <a href="https://wa.me/916385533382" target="_blank" rel="noopener" class="btn-whatsapp-sm" aria-label="WhatsApp us">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
      </div>
      <button class="mobile-menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
  <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
    <div class="mobile-nav-inner">
      <span class="mobile-nav-group-title">Accommodation</span>
      <a href="rooms-in-tiruvannamalai.html">All Rooms</a>
      <a href="hotels-in-tiruvannamalai.html">Hotels</a>
      <a href="best-rooms-in-tiruvannamalai.html">Best Rooms</a>
      <a href="premium-rooms-in-tiruvannamalai.html">Premium Rooms</a>
      <a href="family-rooms-in-tiruvannamalai.html">Family Rooms</a>
      <a href="budget-rooms-in-tiruvannamalai.html">Budget Rooms</a>
      <span class="mobile-nav-group-title">By Location</span>
      <a href="rooms-near-arunachaleswarar-temple.html">Near Temple</a>
      <a href="hotels-near-arunachaleswarar-temple.html">Hotels Near Temple</a>
      <a href="rooms-near-ramana-ashram.html">Near Ramana Ashram</a>
      <a href="rooms-for-girivalam.html">For Girivalam</a>
      <span class="mobile-nav-group-title">Information</span>
      <a href="blog.html">Blog & Guides</a>
      <a href="guide/how-to-do-girivalam-on-pournami.html">- Pournami Girivalam Guide</a>
      <a href="blog/1-day-tiruvannamalai-itinerary.html">- 1-Day Itinerary</a>
      <a href="guide/weather-and-seasons-tiruvannamalai.html">- Weather & Seasons</a>
      <a href="tiruvannamalai-accommodation-guide.html">Accommodation Types</a>
      <a href="where-to-stay-in-tiruvannamalai.html">Where to Stay</a>
      <a href="how-it-works.html">How It Works</a>
      <a href="about-us.html">About Us</a>
      <a href="contact.html">Contact</a>
      <a href="faq.html">FAQ</a>
    </div>
    <div class="mobile-nav-cta">
      <a href="https://wa.me/916385533382" target="_blank" rel="noopener" class="btn btn-whatsapp" style="width:100%;">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Talk to Us on WhatsApp
      </a>
    </div>
  </nav>`;
}

function injectFooter() {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  placeholder.outerHTML = `
  <footer class="site-footer" id="site-footer">
    <div class="container footer-main">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo" aria-label="Tiruvannamalai Rooms — Home">
            <img src="assets/images/logo.webp" alt="Tiruvannamalai Rooms logo" width="40" height="40">
            <span class="logo-text">
              <span class="brand-name">Tiruvannamalai Rooms</span>
              <span class="brand-tagline">Handpicked Stays</span>
            </span>
          </a>
          <p>We are a local accommodation booking agency in Tiruvannamalai. We personally find and recommend quality stays based on your budget, location preference and requirements. We are not a hotel — we connect you with the right property.</p>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <a href="mailto:ak3333247@gmail.com">ak3333247@gmail.com</a>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <a href="https://wa.me/916385533382" target="_blank" rel="noopener">WhatsApp: +91 63855 33382</a>
          </div>
        </div>
        <div class="footer-column">
          <div style="font-size: 1.125rem; font-weight: 600; margin-bottom: 1.25rem; color: #fff;">Accommodation</div>
          <div class="footer-links">
            <a href="rooms-in-tiruvannamalai.html">Rooms in Tiruvannamalai</a>
            <a href="hotels-in-tiruvannamalai.html">Hotels in Tiruvannamalai</a>
            <a href="premium-rooms-in-tiruvannamalai.html">Premium Rooms</a>
            <a href="family-rooms-in-tiruvannamalai.html">Family Rooms</a>
            <a href="budget-rooms-in-tiruvannamalai.html">Budget Rooms</a>
            <a href="best-rooms-in-tiruvannamalai.html">Best Rooms</a>
          </div>
        </div>
        <div class="footer-column">
          <div style="font-size: 1.125rem; font-weight: 600; margin-bottom: 1.25rem; color: #fff;">By Location</div>
          <div class="footer-links">
            <a href="rooms-near-arunachaleswarar-temple.html">Near Arunachaleswarar Temple</a>
            <a href="hotels-near-arunachaleswarar-temple.html">Hotels Near Temple</a>
            <a href="rooms-near-ramana-ashram.html">Near Ramana Ashram</a>
            <a href="rooms-for-girivalam.html">For Girivalam</a>
            <a href="where-to-stay-in-tiruvannamalai.html">Where to Stay</a>
            <a href="tiruvannamalai-accommodation-guide.html">Accommodation Guide</a>
          </div>
        </div>
        <div class="footer-column">
          <div style="font-size: 1.125rem; font-weight: 600; margin-bottom: 1.25rem; color: #fff;">Company</div>
          <div class="footer-links">
            <a href="about-us.html">About Us</a>
            <a href="how-it-works.html">How It Works</a>
            <a href="verification-process.html">Verification Process</a>
            <a href="partner-with-us.html">Partner With Us</a>
            <a href="contact.html">Contact</a>
            <a href="faq.html">FAQ</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="footer-bottom">
        <p>&copy; 2024–2026 Tiruvannamalai Rooms. All rights reserved. Tiruvannamalai Rooms is an accommodation booking agency. We do not own or operate hotels.</p>
        <div class="footer-bottom-links">
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="terms.html">Terms &amp; Conditions</a>
          <a href="cancellation-policy.html">Cancellation Policy</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function injectStickyMobileCTA() {
  const existing = document.getElementById('sticky-cta');
  if (existing) return;

  const div = document.createElement('div');
  div.className = 'sticky-cta';
  div.id = 'sticky-cta';
  div.innerHTML = `
    <a href="index.html" class="btn btn-primary">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      Find My Room
    </a>
    <a href="https://wa.me/916385533382" target="_blank" rel="noopener" class="btn btn-whatsapp" style="padding: var(--space-3);">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      WhatsApp
    </a>`;
  document.body.appendChild(div);
}

function injectScrollToTop() {
  const existing = document.querySelector('.scroll-top');
  if (existing) return;

  const btn = document.createElement('button');
  btn.className = 'scroll-top';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>';
  document.body.appendChild(btn);
}
