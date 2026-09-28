/* ============================================================
   TiruvannamalaiRooms.com — Main Application Logic
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  initHeader();
  initMobileMenu();
  initScrollAnimations();
  initFAQ();
  initStickyMobileCTA();
  initCallFAB();
  initScrollToTop();
  initSmoothScroll();
  initLanguageTranslator();

  // Initialize WhatsApp form
  if (window.TvmWhatsApp) {
    window.TvmWhatsApp.init();
  }
});

/* --- Sticky Header --- */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

/* --- Mobile Menu --- */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.mobile-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('open');

    if (isOpen) {
      nav.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      nav.classList.add('open');
      toggle.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  });

  // Close on link click
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });
}

/* --- Scroll Animations --- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
}

/* --- FAQ Accordion --- */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      item.classList.toggle('open');
      question.setAttribute('aria-expanded', !isOpen);
    });
  });
}

/* --- Sticky Mobile CTA --- */
function initStickyMobileCTA() {
  const stickyCta = document.querySelector('.sticky-cta');
  if (!stickyCta) return;

  const hero = document.querySelector('.hero') || document.querySelector('.page-hero');
  if (!hero) {
    // If no hero, show sticky after scroll
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        stickyCta.classList.add('visible');
      } else {
        stickyCta.classList.remove('visible');
      }
    }, { passive: true });
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        stickyCta.classList.add('visible');
      } else {
        stickyCta.classList.remove('visible');
      }
    },
    { threshold: 0 }
  );

  observer.observe(hero);
}

/* --- Call FAB --- */
function initCallFAB() {
  // Inject call FAB HTML if not already present (covers pages without components.js)
  if (!document.getElementById('call-fab-wrapper')) {
    const wrapper = document.createElement('div');
    wrapper.id = 'call-fab-wrapper';
    wrapper.className = 'call-fab-wrapper';
    wrapper.innerHTML = `
      <div class="call-fab-popup" id="call-fab-popup">
        <div class="call-fab-popup-arrow"></div>
        <div class="call-fab-popup-content">
          <div class="call-fab-popup-header">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            <span>Call Us Directly</span>
          </div>
          <a href="tel:+916385533382" class="call-fab-number">
            <span class="call-fab-number-text">+91 63855 33382</span>
            <span class="call-fab-call-btn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Call Us
            </span>
          </a>
          <p class="call-fab-hint">Tap to call now — We're here to help!</p>
        </div>
      </div>
      <button class="call-fab-btn" id="call-fab-btn" aria-label="Call us">
        <svg class="call-fab-icon" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        <span class="call-fab-badge">1</span>
      </button>`;
    document.body.appendChild(wrapper);
  }

  const btn = document.getElementById('call-fab-btn');
  const popup = document.getElementById('call-fab-popup');
  if (!btn || !popup) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = popup.classList.contains('open');

    if (isOpen) {
      popup.classList.remove('open');
      btn.classList.remove('active');
    } else {
      popup.classList.add('open');
      btn.classList.add('active');
      // Remove badge once user has seen the popup
      const badge = btn.querySelector('.call-fab-badge');
      if (badge) {
        badge.classList.add('seen');
      }
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#call-fab-wrapper')) {
      popup.classList.remove('open');
      btn.classList.remove('active');
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('open')) {
      popup.classList.remove('open');
      btn.classList.remove('active');
      btn.focus();
    }
  });
}

/* --- Scroll to Top --- */
function initScrollToTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 600) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --- Smooth Scroll for Anchors --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 72;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* --- Lazy Load Images --- */
function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  if (images.length === 0) return;

  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }
          img.classList.add('loaded');
          imgObserver.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });

    images.forEach((img) => imgObserver.observe(img));
  } else {
    // Fallback
    images.forEach((img) => {
      img.src = img.dataset.src;
    });
  }
}

/* --- Language Translator --- */
function initLanguageTranslator() {
  const translateDiv = document.createElement('div');
  translateDiv.id = 'google_translate_element';
  translateDiv.className = 'g-translate-wrapper';
  
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    siteHeader.appendChild(translateDiv);
  } else {
    document.body.appendChild(translateDiv);
  }

  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,ta,te,kn,hi'
    }, 'google_translate_element');
  };

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.head.appendChild(script);
}
