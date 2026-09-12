/* ============================================================
   TiruvannamalaiRooms.com — WhatsApp Integration
   WhatsApp-first enquiry flow
   ============================================================ */

const WHATSAPP_CONFIG = {
  number: '916385533382',
  fallbackUrl: 'https://web.whatsapp.com/',
};

/**
 * Build a professional WhatsApp message from form data
 */
function buildWhatsAppMessage(formData) {
  const lines = ['Hello Tiruvannamalai Rooms,', '', 'I am looking for accommodation in Tiruvannamalai.', ''];

  if (formData.checkin) {
    lines.push(`Check-in: ${formatDate(formData.checkin)}`);
  }
  if (formData.checkout) {
    lines.push(`Check-out: ${formatDate(formData.checkout)}`);
  }

  // Guests
  const guestParts = [];
  if (formData.adults && formData.adults > 0) {
    guestParts.push(`${formData.adults} adult${formData.adults > 1 ? 's' : ''}`);
  }
  if (formData.children && formData.children > 0) {
    guestParts.push(`${formData.children} child${formData.children > 1 ? 'ren' : ''}`);
  }
  if (guestParts.length > 0) {
    lines.push(`Guests: ${guestParts.join(', ')}`);
  }

  if (formData.budget && formData.budget !== 'no-preference') {
    lines.push(`Budget: ${formData.budget}`);
  }

  lines.push('');

  if (formData.location && formData.location !== 'no-preference') {
    lines.push(`Preferred location:`);
    lines.push(formData.location);
    lines.push('');
  }

  if (formData.stayType && formData.stayType !== 'any') {
    lines.push(`Stay type:`);
    lines.push(formData.stayType);
    lines.push('');
  }

  // Requirements
  if (formData.requirements && formData.requirements.length > 0) {
    lines.push(`Requirements:`);
    lines.push(formData.requirements.join(', '));
    lines.push('');
  }

  if (formData.additional && formData.additional.trim()) {
    lines.push(`Additional requirements:`);
    lines.push(formData.additional.trim());
    lines.push('');
  }

  lines.push('Please help me find a suitable room.');
  lines.push('');
  lines.push('Thank you.');

  return lines.join('\n');
}

/**
 * Format a date string to a readable format
 */
function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch (e) {
    return dateStr;
  }
}

/**
 * Generate WhatsApp URL with encoded message
 */
function generateWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encoded}`;
}

/**
 * Open WhatsApp with pre-filled message
 */
function openWhatsApp(message) {
  const url = generateWhatsAppUrl(message);
  window.open(url, '_blank');
}

/**
 * Collect form data from the enquiry form
 */
function collectFormData() {
  const form = document.getElementById('enquiry-form');
  if (!form) return null;

  const checkin = form.querySelector('#checkin')?.value || '';
  const checkout = form.querySelector('#checkout')?.value || '';
  const adults = parseInt(document.getElementById('adults-count')?.textContent || '2', 10);
  const children = parseInt(document.getElementById('children-count')?.textContent || '0', 10);
  const budget = form.querySelector('#budget')?.value || '';
  const location = form.querySelector('#location')?.value || '';
  const stayType = form.querySelector('#stay-type')?.value || '';
  const additional = form.querySelector('#additional')?.value || '';

  // Collect checked requirements
  const requirements = [];
  form.querySelectorAll('input[name="requirements"]:checked').forEach((cb) => {
    requirements.push(cb.value);
  });

  return {
    checkin,
    checkout,
    adults,
    children,
    budget,
    location,
    stayType,
    requirements,
    additional,
  };
}

/**
 * Validate the form — at minimum check-in is required
 */
function validateForm(formData) {
  const errors = [];

  if (!formData.checkin) {
    errors.push('Please select a check-in date.');
  }

  if (!formData.checkout) {
    errors.push('Please select a check-out date.');
  }

  if (formData.checkin && formData.checkout) {
    const checkinDate = new Date(formData.checkin);
    const checkoutDate = new Date(formData.checkout);
    if (checkoutDate <= checkinDate) {
      errors.push('Check-out date must be after check-in date.');
    }
  }

  if (formData.adults < 1) {
    errors.push('At least 1 adult is required.');
  }

  return errors;
}

/**
 * Show validation errors
 */
function showErrors(errors) {
  // Remove existing error messages
  document.querySelectorAll('.form-error').forEach((el) => el.remove());

  if (errors.length === 0) return;

  const errorContainer = document.createElement('div');
  errorContainer.className = 'form-error';
  errorContainer.setAttribute('role', 'alert');
  errorContainer.style.cssText = `
    background: rgba(220, 38, 38, 0.1);
    border: 1px solid rgba(220, 38, 38, 0.3);
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    color: #FCA5A5;
    font-size: 0.875rem;
  `;

  errors.forEach((err) => {
    const p = document.createElement('p');
    p.textContent = err;
    p.style.margin = '0.25rem 0';
    errorContainer.appendChild(p);
  });

  const form = document.getElementById('enquiry-form');
  const submitSection = form.querySelector('.form-submit');
  if (submitSection) {
    submitSection.insertBefore(errorContainer, submitSection.firstChild);
  }
}

/**
 * Handle form submission → WhatsApp
 */
function handleFormSubmit(e) {
  e.preventDefault();

  const formData = collectFormData();
  if (!formData) return;

  const errors = validateForm(formData);
  if (errors.length > 0) {
    showErrors(errors);
    return;
  }

  showErrors([]); // Clear errors
  const message = buildWhatsAppMessage(formData);
  openWhatsApp(message);
}

/**
 * Quick WhatsApp — general enquiry (no form)
 */
function quickWhatsApp() {
  const message = encodeURIComponent(
    'Hello Tiruvannamalai Rooms,\n\nI would like to know more about accommodation options in Tiruvannamalai.\n\nPlease help.\n\nThank you.'
  );
  window.open(`https://wa.me/${WHATSAPP_CONFIG.number}?text=${message}`, '_blank');
}

/**
 * Initialize WhatsApp form
 */
function initWhatsAppForm() {
  const form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  const checkinInput = document.getElementById('checkin');
  const checkoutInput = document.getElementById('checkout');

  if (checkinInput) {
    checkinInput.setAttribute('min', today);
    checkinInput.addEventListener('change', function () {
      if (checkoutInput) {
        // Set checkout min to the day after checkin
        const nextDay = new Date(this.value);
        nextDay.setDate(nextDay.getDate() + 1);
        checkoutInput.setAttribute('min', nextDay.toISOString().split('T')[0]);
        // If current checkout is before new min, reset it
        if (checkoutInput.value && checkoutInput.value <= this.value) {
          checkoutInput.value = nextDay.toISOString().split('T')[0];
        }
      }
    });
  }

  if (checkoutInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    checkoutInput.setAttribute('min', tomorrow.toISOString().split('T')[0]);
  }

  // Guest stepper buttons
  initGuestStepper('adults', 1, 20, 2);
  initGuestStepper('children', 0, 10, 0);

  // Quick WhatsApp buttons
  document.querySelectorAll('[data-whatsapp="quick"]').forEach((btn) => {
    btn.addEventListener('click', quickWhatsApp);
  });
}

/**
 * Initialize guest count stepper
 */
function initGuestStepper(type, min, max, initial) {
  const display = document.getElementById(`${type}-count`);
  const minusBtn = document.getElementById(`${type}-minus`);
  const plusBtn = document.getElementById(`${type}-plus`);

  if (!display || !minusBtn || !plusBtn) return;

  let count = initial;
  display.textContent = count;

  minusBtn.addEventListener('click', () => {
    if (count > min) {
      count--;
      display.textContent = count;
    }
  });

  plusBtn.addEventListener('click', () => {
    if (count < max) {
      count++;
      display.textContent = count;
    }
  });
}

// Export for use
window.TvmWhatsApp = {
  init: initWhatsAppForm,
  quick: quickWhatsApp,
  handleSubmit: handleFormSubmit,
};
