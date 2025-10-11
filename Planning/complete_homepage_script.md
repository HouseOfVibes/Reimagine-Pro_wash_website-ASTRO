# Complete Home Page Script - Reimagine Pro Wash
*This document contains all the content, text, and technical specifications for your homepage*

---

## 📋 PAGE SETUP - SEO & Search Engine Optimization

### Complete SEO Meta Tags & Headers
*These tags help Google understand and rank your website*

#### Basic SEO Tags (Required)
```html
<head>
  <!-- Primary SEO Tags -->
  <title>Professional Pressure Washing Services | Reimagine Pro Wash & More | Knightdale, NC</title>
  <meta name="description" content="Professional pressure washing services in Knightdale, NC and surrounding areas. House washing, concrete cleaning, deck restoration, commercial services. Licensed & insured with 100% satisfaction guarantee.">
  <meta name="keywords" content="pressure washing knightdale nc, house washing, driveway cleaning, roof cleaning, commercial pressure washing, deck restoration, wake county pressure washing">
  
  <!-- Viewport for Mobile Responsiveness -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="UTF-8">
  
  <!-- Language and Location -->
  <html lang="en-US">
  <meta name="geo.region" content="US-NC">
  <meta name="geo.placename" content="Knightdale">
  <meta name="geo.position" content="35.7952;-78.4806">
</head>
```

#### Social Media Tags (Facebook & Twitter)
```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://rprowashnc.com/">
<meta property="og:title" content="Professional Pressure Washing Services | Reimagine Pro Wash & More">
<meta property="og:description" content="Transform your property with professional pressure washing services in Knightdale, NC. Licensed, insured, and eco-friendly solutions.">
<meta property="og:image" content="[YOUR_LOGO_URL_HERE]">
<meta property="og:site_name" content="Reimagine Pro Wash & More">
<meta property="og:locale" content="en_US">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://rprowashnc.com/">
<meta property="twitter:title" content="Professional Pressure Washing Services | Reimagine Pro Wash & More">
<meta property="twitter:description" content="Transform your property with professional pressure washing services in Knightdale, NC. Licensed, insured, and eco-friendly solutions.">
<meta property="twitter:image" content="[YOUR_LOGO_URL_HERE]">
```

#### Business Schema Markup (Local SEO)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Reimagine Pro Wash & More",
  "image": "[YOUR_LOGO_URL_HERE]",
  "description": "Professional pressure washing services for residential and commercial properties in Knightdale, NC and surrounding areas",
  "url": "https://rprowashnc.com",
  "telephone": "984-202-4980",
  "email": "info@rprowashnc.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Knightdale",
    "addressRegion": "NC",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.7952,
    "longitude": -78.4806
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Knightdale",
      "containedInPlace": {
        "@type": "State", 
        "name": "North Carolina"
      }
    },
    {
      "@type": "City",
      "name": "Raleigh"
    },
    {
      "@type": "City", 
      "name": "Cary"
    },
    {
      "@type": "City",
      "name": "Wake Forest" 
    },
    {
      "@type": "City",
      "name": "Durham"
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pressure Washing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "House Washing",
          "description": "Safe soft wash method for siding and roofs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Driveway Cleaning", 
          "description": "Remove oil stains and years of buildup"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Pressure Washing",
          "description": "Professional cleaning for businesses"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/people/Reimagine-Pro-Wash-More/61575086936289/",
    "https://www.instagram.com/reimagine_prowash/"
  ]
}
</script>
```

**Purpose:** These tags help Google understand your business, show rich results, and rank you for local searches

---

## 🎯 HERO SECTION - First Thing Visitors See
*This is the large banner area at the very top of your homepage*

### Your Company Logo (Circular Design)
*Replace [YOUR_LOGO_URL_HERE] with your actual logo image link*

**Logo URL:** [YOUR_LOGO_URL_HERE]
**Alt Text:** "Reimagine Pro Wash & More - Professional Pressure Washing Services"
**Style:** Circular logo (rounded, not square)
**Size:** 150px wide on desktop, 120px on mobile
**Purpose:** Professional branding that visitors see immediately

### Main Headline (Big Bold Text)
*The most important message visitors see first*

**Text:** "Professional Pressure Washing Services in **Knightdale, NC**"
**Purpose:** Immediately tells visitors what you do and where you serve

### Brand Promise (Your Slogan)
*Your memorable company motto*

**Text:** "Refresh. Renew. Reimagine."
**Purpose:** Reinforces your brand and what you offer customers

### Hero Description (Explanation Paragraph)
*Brief paragraph explaining your services and value*

**Text:** "Transform your property with our professional pressure washing services. Licensed, insured, and committed to delivering exceptional results with eco-friendly solutions."
**Purpose:** Builds trust and explains key benefits

### Action Buttons (What Visitors Click)
*These buttons get customers to contact you*

- **Primary Button:** "Get Free Quote" (Blue button, most important)
- **Secondary Button:** "Call (984) 202-4980" (White button with phone number)
**Purpose:** Give visitors clear ways to contact you for business

---

## 🔧 SERVICES SECTION - What You Offer
*This section shows all your pressure washing services to potential customers*

### Section Header (Introduction)
*The title and description for this whole services section*

**Main Title:** "Our Services"
**Subtitle:** "Professional cleaning solutions for homes and businesses"
**Purpose:** Introduces visitors to everything you can clean for them

### Residential Services (For Homeowners)
*Services you offer to people's houses and properties*

#### Service Card 1: House Washing
**Title:** House Washing
**Description:** Safe soft wash method for siding and roofs
**What This Means:** You clean the outside walls and roof of houses without damaging them

#### Service Card 2: Roof Cleaning
**Title:** Roof Cleaning
**Description:** Gentle soft wash removes algae and stains
**What This Means:** You remove green algae, black streaks, and stains from roofs safely

#### Service Card 3: Driveway Cleaning
**Title:** Driveway Cleaning
**Description:** Remove oil stains and years of buildup
**What This Means:** You clean driveways to remove car oil stains and make them look new

#### Service Card 4: Concrete Cleaning
**Title:** Concrete Cleaning
**Description:** Patios, walkways, and sidewalks
**What This Means:** You clean all concrete surfaces around homes (patios, walkways, etc.)

#### Service Card 5: Deck & Fence Restoration
**Title:** Deck & Fence Restoration
**Description:** Deep cleaning and optional staining
**What This Means:** You clean wooden decks and fences, plus can stain them to look new

#### Service Card 6: Gutter Cleaning
**Title:** Gutter Cleaning
**Description:** Complete gutter and downspout service
**What This Means:** You clean out gutters and the pipes that drain them

### Commercial Services (For Businesses)
*Services you offer to business owners and commercial properties*

#### Service Card 1: Building Exterior Washing
**Title:** Building Exterior Washing
**Description:** Professional commercial building cleaning
**What This Means:** You clean the outside walls of office buildings, stores, and warehouses

#### Service Card 2: Parking Lot Cleaning
**Title:** Parking Lot Cleaning
**Description:** Complete parking area maintenance
**What This Means:** You clean business parking lots to remove gum, stains, and debris

#### Service Card 3: Sidewalk Cleaning
**Title:** Sidewalk Cleaning
**Description:** Professional walkway maintenance
**What This Means:** You clean sidewalks around businesses so they look professional

#### Service Card 4: Storefront Cleaning
**Title:** Storefront Cleaning
**Description:** Keep your business looking professional
**What This Means:** You clean the front entrance and windows of stores and restaurants

#### Service Card 5: Dumpster Pad Cleaning
**Title:** Dumpster Pad Cleaning
**Description:** Health department compliant cleaning
**What This Means:** You clean the concrete areas where dumpsters sit (required by health codes)

#### Service Card 6: Fleet Washing
**Title:** Fleet Washing
**Description:** Commercial vehicle cleaning services
**What This Means:** You clean company trucks, vans, and delivery vehicles

---

## ⭐ WHY CHOOSE US SECTION - Why You're Better Than Competition
*This section builds trust by showing why customers should pick you over other pressure washing companies*

### Main Title (Section Header)
"Why Choose Reimagine Pro Wash?"
**Purpose:** Gets visitors to think about why you're the best choice

### Trust Feature 1: Licensed & Insured
**Title:** Licensed & Insured
**Description:** Fully licensed business with comprehensive insurance coverage for your peace of mind
**Why This Matters:** Customers know they're protected if something goes wrong, and you're a legitimate business

### Trust Feature 2: Eco-Friendly Solutions
**Title:** Eco-Friendly Solutions
**Description:** Biodegradable products and safe wastewater disposal practices
**Why This Matters:** Customers want cleaners that won't harm their plants, pets, or the environment

### Trust Feature 3: Specialized Equipment
**Title:** Specialized Equipment
**Description:** Right pressure and methods for every surface to prevent damage
**Why This Matters:** Shows you're professional and won't damage their property like amateurs might

### Trust Feature 4: 100% Satisfaction Guarantee
**Title:** 100% Satisfaction Guarantee
**Description:** We're not happy until you're completely satisfied with the results
**Why This Matters:** Removes risk for customers - if they're not happy, you'll make it right

### Trust Feature 5: Professional Experience
**Title:** Professional Experience
**Description:** Background in project management and customer service excellence
**Why This Matters:** Shows you're organized, reliable, and know how to handle projects professionally

### Trust Feature 6: Quality Results
**Title:** Quality Results
**Description:** Immediate, visible results that restore your property's curb appeal
**Why This Matters:** Promises customers will see dramatic improvement in their property's appearance

---

## Service Area Section

### Main Title
"Areas We Serve"

### Subtitle
"Serving 50+ mile radius from Knightdale, NC"

### Service Area Lists

#### Wake County
- Knightdale
- Raleigh
- Cary
- Apex
- Wake Forest
- Garner
- Holly Springs
- Morrisville
- Rolesville
- Fuquay-Varina
- Wendell

#### Johnston County
- Clayton
- Smithfield
- Selma
- Benson
- Four Oaks
- Wilson's Mills
- Kenly
- Pine Level

#### Additional Areas
- Durham
- Rocky Mount
- Fayetteville
- Goldsboro
- Wilson
- Louisburg
- Henderson
- Oxford
- Creedmoor
- & Many More!

---

## Gallery Section - Before/After Slider

### Main Title
"See The Difference"

### Subtitle
"Dramatic before and after results - Slide to reveal the transformation"

### Before/After Slider Items

#### Slider 1: House Washing Transformation
**Title:** House Washing Transformation
**Before Image URL:** [HOUSE_BEFORE_URL_HERE]
**After Image URL:** [HOUSE_AFTER_URL_HERE]
**Alt Text:** "House washing before and after comparison"
**Description:** "Soft wash house cleaning removes years of dirt and grime"

#### Slider 2: Driveway Cleaning Results
**Title:** Driveway Cleaning Results
**Before Image URL:** [DRIVEWAY_BEFORE_URL_HERE]
**After Image URL:** [DRIVEWAY_AFTER_URL_HERE]
**Alt Text:** "Driveway cleaning before and after comparison"
**Description:** "Professional pressure washing removes oil stains and buildup"

#### Slider 3: Deck Restoration Project
**Title:** Deck Restoration Project
**Before Image URL:** [DECK_BEFORE_URL_HERE]
**After Image URL:** [DECK_AFTER_URL_HERE]
**Alt Text:** "Deck restoration before and after comparison"
**Description:** "Complete deck cleaning and restoration service"

### 🔧 TECHNICAL IMPLEMENTATION - How the Slider Works
*This is the code that makes the drag-to-reveal sliders work. You can copy this to your developer.*

#### HTML Structure (The Basic Layout Code)
*This creates the slider container and images*
```html
<!-- Each slider needs this HTML structure -->
<div class="before-after-slider">
  <div class="slider-container">
    <!-- The BEFORE image (dirty/stained) -->
    <div class="before-image">
      <img src="[BEFORE_IMAGE_URL]" alt="Before cleaning">
    </div>
    <!-- The AFTER image (clean/restored) -->
    <div class="after-image">
      <img src="[AFTER_IMAGE_URL]" alt="After cleaning">
    </div>
    <!-- The draggable handle with arrows -->
    <div class="slider-handle">
      <div class="slider-button"></div>
    </div>
    <div class="slider-line"></div>
  </div>
  <!-- The BEFORE/AFTER text labels -->
  <div class="slider-labels">
    <span class="before-label">BEFORE</span>
    <span class="after-label">AFTER</span>
  </div>
</div>
```

#### CSS Styling Code (How It Looks)
*This code controls the appearance, colors, and layout of the slider*
```css
/* Main container for each slider */
.before-after-slider {
  position: relative;        /* Allows positioning of elements inside */
  width: 100%;              /* Takes full width of container */
  max-width: 600px;         /* Maximum width of 600 pixels */
  margin: 0 auto;           /* Centers the slider */
  overflow: hidden;         /* Hides any content outside boundaries */
  border-radius: 10px;      /* Rounds the corners */
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);  /* Adds shadow for depth */
}

.slider-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.before-image, .after-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.before-image img, .after-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.after-image {
  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
  transition: clip-path 0.1s ease;
}

.slider-handle {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background: white;
  cursor: ew-resize;
  z-index: 10;
  transform: translateX(-50%);
}

.slider-button {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  background: white;
  border: 3px solid var(--primary-blue);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: ew-resize;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

.slider-button::before,
.slider-button::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 8px;
  height: 8px;
  background: var(--primary-blue);
  transform: translateY(-50%);
}

.slider-button::before {
  left: 8px;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
}

.slider-button::after {
  right: 8px;
  clip-path: polygon(100% 0, 0 50%, 100% 100%);
}

.slider-labels {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 5;
}

.before-label, .after-label {
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
```

#### JavaScript Code (Makes It Interactive)
*This code makes the slider respond to mouse clicks and dragging*
```javascript
// Find all sliders on the page and make them interactive
document.querySelectorAll('.before-after-slider').forEach(slider => {
  // Get the important parts of each slider
  const container = slider.querySelector('.slider-container');
  const afterImage = slider.querySelector('.after-image');
  const handle = slider.querySelector('.slider-handle');
  let isDragging = false;  // Track if user is currently dragging

  // Function that updates the slider position
  function updateSlider(x) {
    // Calculate where the mouse/finger is as a percentage (0-100%)
    const rect = container.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
    
    // Move the dividing line and reveal the after image
    afterImage.style.clipPath = `polygon(${percentage}% 0%, 100% 0%, 100% 100%, ${percentage}% 100%)`;
    handle.style.left = `${percentage}%`;
  }

  // DESKTOP: When user clicks and drags with mouse
  handle.addEventListener('mousedown', (e) => {
    isDragging = true;        // Start tracking drag
    e.preventDefault();       // Prevent text selection
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;  // Only work if actively dragging
    updateSlider(e.clientX);  // Update slider position
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;       // Stop tracking drag
  });

  // MOBILE: When user touches and drags with finger
  handle.addEventListener('touchstart', (e) => {
    isDragging = true;        // Start tracking touch
    e.preventDefault();       // Prevent scrolling
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;  // Only work if actively touching
    updateSlider(e.touches[0].clientX);  // Update slider position
  });

  document.addEventListener('touchend', () => {
    isDragging = false;       // Stop tracking touch
  });

  // BOTH: When user clicks/taps anywhere on image (not just handle)
  container.addEventListener('click', (e) => {
    updateSlider(e.clientX);  // Move slider to click position
  });
});
// End of slider functionality
```

### 📱 COMPLETE RESPONSIVE DESIGN - All Device Sizes
*This ensures your website looks perfect on every device*

#### Device Breakpoints (Screen Sizes)
```css
/* 🖥️ LARGE DESKTOP: 1440px and up */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;    /* Wider container for large screens */
  }
  
  .hero h1 {
    font-size: 4rem;      /* Bigger headline */
  }
  
  .services-grid {
    grid-template-columns: repeat(4, 1fr);  /* 4 services per row */
  }
  
  .before-after-slider {
    max-width: 700px;     /* Larger sliders */
  }
}

/* 💻 DESKTOP: 1200px to 1439px */
@media (min-width: 1200px) and (max-width: 1439px) {
  .container {
    max-width: 1200px;
  }
  
  .hero h1 {
    font-size: 3.5rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(3, 1fr);  /* 3 services per row */
  }
  
  .hero-content {
    grid-template-columns: 2fr 1fr;        /* Logo on right side */
    gap: 60px;
  }
}

/* 💻 LAPTOP: 992px to 1199px */
@media (min-width: 992px) and (max-width: 1199px) {
  .container {
    max-width: 960px;
    padding: 0 15px;
  }
  
  .hero h1 {
    font-size: 3rem;
  }
  
  .hero-content {
    grid-template-columns: 1fr;            /* Stack logo below text */
    gap: 40px;
    text-align: center;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);  /* 2 services per row */
    gap: 30px;
  }
  
  .before-after-slider {
    max-width: 500px;
  }
}

/* 📱 TABLET: 768px to 991px */
@media (min-width: 768px) and (max-width: 991px) {
  .container {
    max-width: 720px;
    padding: 0 15px;
  }
  
  .hero {
    padding: 80px 0;
  }
  
  .hero h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
  
  .hero-description {
    font-size: 1.1rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);  /* 2 services per row */
    gap: 25px;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);  /* 2 features per row */
    gap: 30px;
  }
  
  .slider-container {
    height: 350px;                          /* Medium slider height */
  }
  
  .contact-content {
    grid-template-columns: 1fr;             /* Stack contact info */
    gap: 40px;
  }
}

/* 📱 MOBILE LARGE: 576px to 767px */
@media (min-width: 576px) and (max-width: 767px) {
  .container {
    max-width: 540px;
    padding: 0 15px;
  }
  
  .hero {
    padding: 60px 0;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;             /* Single column */
    gap: 20px;
  }
  
  .service-card {
    padding: 25px;
  }
  
  .slider-container {
    height: 300px;                          /* Smaller slider */
  }
  
  .btn {
    width: 100%;                            /* Full width buttons */
    max-width: 300px;
  }
}

/* 📱 MOBILE SMALL: 320px to 575px */
@media (max-width: 575px) {
  .container {
    padding: 0 10px;                       /* Less padding for small screens */
  }
  
  .hero {
    padding: 40px 0;
  }
  
  .hero h1 {
    font-size: 1.8rem;                     /* Much smaller headline */
    line-height: 1.1;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;                 /* Stack buttons vertically */
    align-items: center;
    gap: 15px;
  }
  
  .btn {
    width: 100%;
    font-size: 1rem;
    padding: 15px 30px;
  }
  
  .logo-placeholder, .hero-image img {
    width: 100px;                          /* Smaller logo */
    height: 100px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .service-card {
    padding: 20px;
    text-align: center;
  }
  
  .service-icon {
    width: 60px;                           /* Smaller icons */
    height: 60px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;            /* Single column features */
    gap: 20px;
  }
  
  .feature-icon {
    width: 70px;
    height: 70px;
  }
  
  .slider-container {
    height: 250px;                         /* Smallest slider */
  }
  
  .slider-button {
    width: 30px;                           /* Smaller slider handle */
    height: 30px;
  }
  
  .before-label, .after-label {
    font-size: 0.7rem;
    padding: 4px 10px;
  }
  
  .service-areas-grid {
    grid-template-columns: 1fr;            /* Single column areas */
    gap: 15px;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;            /* Single column testimonials */
    gap: 20px;
  }
  
  .testimonial {
    padding: 25px 20px;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    font-size: 16px;                       /* Prevents zoom on iOS */
  }
  
  section {
    padding: 40px 0;                       /* Less section padding */
  }
  
  h2 {
    font-size: 1.7rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
}

/* 🖱️ TOUCH DEVICE OPTIMIZATIONS */
@media (hover: none) and (pointer: coarse) {
  .btn {
    min-height: 44px;                      /* Apple recommended touch target */
  }
  
  .service-card:hover {
    transform: none;                       /* Remove hover effects on touch */
  }
  
  .feature:hover .feature-icon {
    transform: none;
  }
  
  /* Make slider easier to use on touch devices */
  .slider-handle {
    width: 4px;                            /* Wider touch target */
  }
  
  .slider-button {
    min-width: 44px;
    min-height: 44px;
  }
}

/* 🌙 DARK MODE SUPPORT (Optional) */
@media (prefers-color-scheme: dark) {
  /* Add dark mode styles if desired */
  :root {
    --text-color: #ffffff;
    --bg-color: #1a1a1a;
  }
}

/* ♿ ACCESSIBILITY & REDUCED MOTION */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;  /* Disable animations */
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* 🖨️ PRINT STYLES */
@media print {
  .hero-buttons,
  .slider-handle,
  .contact-form {
    display: none;                         /* Hide interactive elements */
  }
  
  .before-after-slider {
    display: none;                         /* Hide sliders in print */
  }
  
  body {
    font-size: 12pt;
    color: black;
    background: white;
  }
}
```

---

## Testimonials Section

### Main Title
"What Our Customers Say"

### Testimonial 1
**Rating:** ⭐⭐⭐⭐⭐
**Text:** "Absolutely blown away by the results! My deck looks brand new - it's like they turned back time. Highly recommend Reimagine Pro Wash!"
**Attribution:** - Happy Customer

### Testimonial 2
**Rating:** ⭐⭐⭐⭐⭐
**Text:** "Professional service from start to finish. They protected all my plants and left everything cleaner than I could have imagined."
**Attribution:** - Satisfied Homeowner

### Testimonial 3
**Rating:** ⭐⭐⭐⭐⭐
**Text:** "Great communication and excellent results. Our commercial property looks fantastic and our customers have noticed the difference."
**Attribution:** - Business Owner

---

## Contact Section

### Main Title
"Get Your Free Quote Today"

### Subtitle
"Ready to transform your property? Contact us for a free estimate!"

### Contact Information

#### Phone
**(984) 202-4980**

#### Email
**info@rprowashnc.com**

#### Service Area
**50+ miles from Knightdale, NC**

#### Social Media
- **Instagram:** https://www.instagram.com/reimagine_prowash/
- **Facebook:** https://www.facebook.com/people/Reimagine-Pro-Wash-More/61575086936289/

### Contact Form Script

#### Form Fields
1. **Name** (required)
2. **Email** (required)
3. **Phone** (required)
4. **Service Type** (dropdown)
   - Select a service...
   - Residential Services
   - Commercial Services
   - Specialty Services
   - Multiple Services
5. **Property Address** (placeholder: "City, NC")
6. **Message/Details** (textarea placeholder: "Tell us about your project...")
7. **Preferred Contact Method** (dropdown)
   - Phone
   - Email
   - Either

#### Form Configuration
- **Action:** https://formsubmit.co/info@rprowashnc.com
- **Method:** POST
- **Hidden Fields:**
  - `_subject`: "New Quote Request - Reimagine Pro Wash"
  - `_captcha`: false
  - `_next`: "#contact"

---

## Key Messaging Points

### Trust Builders
- Licensed and insured professional service
- Project management background for reliability
- 100% satisfaction guarantee
- Eco-friendly biodegradable products
- Specialized equipment prevents damage

### Value Propositions
- Immediate visible results
- Right pressure for each surface type
- Safe wastewater disposal practices
- Professional customer service
- Comprehensive insurance coverage

### Urgency Creators
- Free quote offer
- Immediate results
- Curb appeal transformation
- Professional business image

---

## Call-to-Action Variations

### Primary CTAs
- "Get Free Quote"
- "Request Free Estimate"
- "Call (984) 202-4980"

### Secondary CTAs
- "See Our Work"
- "Learn More"
- "Contact Us"

### Social Proof CTAs
- "Read Reviews"
- "Follow Us"
- "See Before/After"

---

## SEO Keywords Integration

### Primary Keywords
- Professional pressure washing services
- Knightdale NC pressure washing
- House washing services
- Commercial pressure washing
- Driveway cleaning

### Location-Based Keywords
- Pressure washing Raleigh NC
- Cary pressure washing
- Wake County cleaning services
- Johnston County pressure washing
- Durham area power washing

### Service-Specific Keywords
- Soft wash house cleaning
- Roof cleaning services
- Concrete cleaning
- Deck restoration
- Commercial building washing

---

## Technical Implementation Notes

### Schema Markup (Structured Data)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Reimagine Pro Wash & More",
  "description": "Professional pressure washing services for residential and commercial properties",
  "url": "https://rprowashnc.com",
  "telephone": "984-202-4980",
  "email": "info@rprowashnc.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Knightdale",
    "addressRegion": "NC",
    "addressCountry": "US"
  }
}
```

### Google Maps Integration
- Service area radius: 50 miles from Knightdale
- Center coordinates: 35.7952, -78.4806
- Marker locations for all major service areas
- Custom styling to match brand colors

### Performance Optimization
- Lazy loading for images
- Compressed image formats
- Minified CSS/JavaScript
- Mobile-first responsive design

---

## Brand Voice & Tone

### Voice Characteristics
- Professional yet approachable
- Confident in expertise
- Customer-focused
- Results-oriented
- Trustworthy and reliable

### Tone Guidelines
- Use active voice
- Be specific about benefits
- Include technical credibility
- Emphasize safety and care
- Highlight immediate results

### Messaging Hierarchy
1. **Primary:** Professional transformation results
2. **Secondary:** Trust and reliability factors
3. **Supporting:** Technical expertise and safety
4. **Proof:** Customer satisfaction and guarantees