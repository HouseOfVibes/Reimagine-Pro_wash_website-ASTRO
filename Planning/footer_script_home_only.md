# Footer Component Script - Home Only Launch - Reimagine Pro Wash

## Footer Structure (Simplified)

### Layout
**Style:** Multi-column footer with essential information only
**Background:** Dark blue (#003366) with white text
**Sections:** 3 columns on desktop, stacked on mobile

---

## Company Information Section

### Logo & Brand
**Logo:** Reimagine Pro Wash & More (white version)
**Tagline:** "Refresh. Renew. Reimagine."
**Description:** "Professional pressure washing services for residential and commercial properties in Knightdale, NC and surrounding areas."

### Trust Badges
- "Licensed & Insured"
- "100% Satisfaction Guarantee" 
- "Eco-Friendly Products"
- "Free Estimates"

---

## Services Overview (Simplified)

### Column Title
"Our Services"

### Service Categories (No Internal Links)
**Residential Services:**
- House Washing
- Roof Cleaning  
- Driveway Cleaning
- Concrete Cleaning
- Deck & Fence Restoration
- Gutter Cleaning

**Commercial Services:**
- Building Exterior Washing
- Parking Lot Cleaning
- Storefront Cleaning
- Fleet Washing

### Services CTA
**Button:** "See All Services" 
**Link:** #services (scroll to services section)

---

## Contact Information Section

### Column Title
"Contact Us"

### Primary Contact
**Phone:** (984) 202-4980
**Email:** info@rprowashnc.com
**Service Hours:** Mon-Sat: 8AM-6PM
**Service Area:** 50+ miles from Knightdale, NC

### Primary Service Areas (No Internal Links)
**Serving:**
- Knightdale, NC (Headquarters)
- Raleigh, Cary, Apex
- Wake & Johnston Counties
- Durham & Surrounding Areas
- **50+ Mile Radius**

### Quick Contact CTAs
- **"Get Free Quote"** (scroll to #contact)
- **"Call Now"** (tel:9842024980)
- **"Email Us"** (mailto:info@rprowashnc.com)

---

## Social Media & Online Presence

### Social Media Links
**Instagram:** 
- Link: https://www.instagram.com/reimagine_prowash/
- Icon: Instagram logo
- Text: "@reimagine_prowash"
- Target: _blank

**Facebook:**
- Link: https://www.facebook.com/people/Reimagine-Pro-Wash-More/61575086936289/
- Icon: Facebook logo  
- Text: "Reimagine Pro Wash & More"
- Target: _blank

### Social Media CTAs
- "Follow Us for Before/After Photos"
- "See Our Latest Projects"

---

## Legal & Business Information (Minimal)

### Copyright Notice
"© 2024 Reimagine Pro Wash & More. All rights reserved."

### Business Credentials
- "Licensed Business"
- "Fully Insured"
- "Professional Certified"

---

## Bottom Footer Bar

### Left Side
Copyright and business name

### Center
"Proudly serving Knightdale, NC and surrounding communities"

### Right Side
"Licensed & Insured Professional Service"

---

## Technical Implementation (Home Only)

### HTML Structure
```html
<footer class="main-footer">
  <div class="footer-content">
    <div class="footer-section company-info">
      <img src="/logo-white.png" alt="Reimagine Pro Wash & More" class="footer-logo">
      <p class="company-tagline">Refresh. Renew. Reimagine.</p>
      <p class="company-description">Professional pressure washing services for residential and commercial properties in Knightdale, NC and surrounding areas.</p>
      <div class="trust-badges">
        <span class="badge">Licensed & Insured</span>
        <span class="badge">100% Satisfaction</span>
        <span class="badge">Free Estimates</span>
        <span class="badge">Eco-Friendly</span>
      </div>
    </div>
    
    <div class="footer-section services-overview">
      <h4>Our Services</h4>
      <div class="service-categories">
        <div class="service-group">
          <h5>Residential</h5>
          <ul>
            <li>House Washing</li>
            <li>Roof Cleaning</li>
            <li>Driveway Cleaning</li>
            <li>Deck Restoration</li>
          </ul>
        </div>
        <div class="service-group">
          <h5>Commercial</h5>
          <ul>
            <li>Building Washing</li>
            <li>Parking Lots</li>
            <li>Storefronts</li>
            <li>Fleet Washing</li>
          </ul>
        </div>
      </div>
      <a href="#services" class="btn btn-outline scroll-link">See All Services</a>
    </div>
    
    <div class="footer-section contact-info">
      <h4>Contact Us</h4>
      <div class="contact-item">
        <strong>Phone:</strong>
        <a href="tel:9842024980" class="phone-link">(984) 202-4980</a>
      </div>
      <div class="contact-item">
        <strong>Email:</strong>
        <a href="mailto:info@rprowashnc.com">info@rprowashnc.com</a>
      </div>
      <div class="contact-item">
        <strong>Hours:</strong>
        <span>Mon-Sat: 8AM-6PM</span>
      </div>
      <div class="contact-item">
        <strong>Service Area:</strong>
        <span>50+ miles from Knightdale, NC</span>
      </div>
      
      <div class="service-areas">
        <p><strong>Serving:</strong> Knightdale, Raleigh, Cary, Wake County, Johnston County & Surrounding Areas</p>
      </div>
      
      <div class="footer-cta">
        <a href="#contact" class="btn btn-primary scroll-link">Get Free Quote</a>
        <a href="tel:9842024980" class="btn btn-secondary">Call Now</a>
      </div>
      
      <div class="social-links">
        <h5>Follow Us:</h5>
        <a href="https://www.instagram.com/reimagine_prowash/" target="_blank" rel="noopener">
          <i class="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>
        <a href="https://www.facebook.com/people/Reimagine-Pro-Wash-More/61575086936289/" target="_blank" rel="noopener">
          <i class="fab fa-facebook"></i>
          <span>Facebook</span>
        </a>
      </div>
    </div>
  </div>
  
  <div class="footer-bottom">
    <div class="footer-bottom-content">
      <p class="copyright">© 2024 Reimagine Pro Wash & More. All rights reserved.</p>
      <p class="service-area">Proudly serving Knightdale, NC and surrounding communities</p>
      <p class="credentials">Licensed & Insured Professional Service</p>
    </div>
  </div>
</footer>
```

### CSS Classes (Home Only Specific)
- `.main-footer` - Main footer container
- `.footer-content` - Main content grid (3 columns)
- `.footer-section` - Individual footer columns
- `.company-info` - Company information section
- `.services-overview` - Services summary (no links)
- `.service-categories` - Service groupings
- `.service-group` - Individual service categories
- `.contact-info` - Contact information
- `.trust-badges` - Credibility indicators
- `.footer-cta` - Call-to-action buttons
- `.scroll-link` - Smooth scroll anchor links
- `.social-links` - Social media section
- `.footer-bottom` - Copyright bar

### JavaScript Functionality (Home Only)
```javascript
// Smooth scrolling for footer anchor links
document.querySelectorAll('.footer .scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
```

---

## Content Strategy (Home Only Launch)

### Service Listings (No Navigation)
- Display services for information only
- No internal page links
- "See All Services" scrolls to homepage section
- Focus on primary service categories

### Contact Focus
- Prominent phone number
- Multiple contact methods
- Clear service area information
- Strong call-to-action buttons

### Trust Building
- Professional certifications
- Service area transparency  
- Social proof through social media
- Clear business information

---

## SEO Elements (Single Page)

### Local SEO Focus
- Knightdale, NC prominence
- Service area keywords
- Contact information markup
- Business credentials

### Schema Markup (Footer)
```json
{
  "@type": "Organization",
  "name": "Reimagine Pro Wash & More",
  "url": "https://rprowashnc.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-984-202-4980",
    "contactType": "customer service"
  }
}
```

---

## 📱 COMPLETE RESPONSIVE FOOTER DESIGN

### All Device Responsive Breakpoints
```css
/* 🖥️ LARGE DESKTOP: 1440px and up */
@media (min-width: 1440px) {
  .footer-content {
    max-width: 1400px;
    grid-template-columns: 2fr 1fr 1.5fr;  /* Company | Services | Contact */
    gap: 60px;
    padding: 60px 40px;
  }
  
  .footer-logo {
    height: 60px;                          /* Larger footer logo */
  }
  
  .company-description {
    font-size: 1.1rem;                     /* Bigger description text */
    line-height: 1.6;
  }
  
  .footer-section h4 {
    font-size: 1.4rem;                     /* Larger section headers */
    margin-bottom: 25px;
  }
  
  .service-group h5 {
    font-size: 1.1rem;
  }
  
  .contact-item {
    font-size: 1.1rem;                     /* Bigger contact info */
    margin-bottom: 15px;
  }
  
  .phone-link {
    font-size: 1.3rem;                     /* Prominent phone number */
  }
  
  .footer-cta .btn {
    padding: 15px 35px;                    /* Larger buttons */
    font-size: 1.1rem;
  }
}

/* 💻 DESKTOP: 1200px to 1439px */
@media (min-width: 1200px) and (max-width: 1439px) {
  .footer-content {
    max-width: 1200px;
    grid-template-columns: 2fr 1fr 1.5fr;
    gap: 50px;
    padding: 50px 30px;
  }
  
  .footer-logo {
    height: 50px;
  }
  
  .company-description {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .footer-section h4 {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
  
  .contact-item {
    font-size: 1rem;
    margin-bottom: 12px;
  }
  
  .phone-link {
    font-size: 1.2rem;
  }
}

/* 💻 LAPTOP: 992px to 1199px */
@media (min-width: 992px) and (max-width: 1199px) {
  .footer-content {
    max-width: 960px;
    grid-template-columns: 1.5fr 1fr 1.5fr;
    gap: 40px;
    padding: 45px 20px;
  }
  
  .footer-logo {
    height: 45px;
  }
  
  .company-description {
    font-size: 0.95rem;
  }
  
  .footer-section h4 {
    font-size: 1.2rem;
  }
  
  .service-categories {
    display: flex;
    flex-direction: column;              /* Stack service groups */
    gap: 15px;
  }
  
  .service-group ul {
    display: flex;
    flex-wrap: wrap;                     /* Wrap service items */
    gap: 10px;
  }
  
  .service-group li {
    font-size: 0.9rem;
  }
  
  .contact-item {
    font-size: 0.95rem;
  }
  
  .phone-link {
    font-size: 1.1rem;
  }
  
  .footer-cta .btn {
    padding: 12px 25px;
    font-size: 0.95rem;
  }
}

/* 📱 TABLET: 768px to 991px */
@media (min-width: 768px) and (max-width: 991px) {
  .footer-content {
    max-width: 720px;
    grid-template-columns: 1fr 1fr;      /* 2 columns: Company+Services | Contact */
    gap: 40px;
    padding: 40px 15px;
  }
  
  .services-overview {
    grid-column: 1;                      /* Services with company info */
  }
  
  .contact-info {
    grid-column: 2;
  }
  
  .footer-logo {
    height: 40px;
    margin-bottom: 15px;
  }
  
  .company-tagline {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  
  .company-description {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
  
  .trust-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  }
  
  .badge {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
  
  .footer-section h4 {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
  
  .service-categories {
    display: grid;
    grid-template-columns: 1fr 1fr;      /* 2 service columns */
    gap: 20px;
  }
  
  .service-group h5 {
    font-size: 0.95rem;
    margin-bottom: 8px;
  }
  
  .service-group li {
    font-size: 0.85rem;
    padding: 3px 0;
  }
  
  .contact-item {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  
  .phone-link {
    font-size: 1.1rem;
    font-weight: bold;
  }
  
  .footer-cta {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }
  
  .footer-cta .btn {
    flex: 1;
    padding: 12px 20px;
    font-size: 0.9rem;
  }
  
  .social-links {
    display: flex;
    gap: 15px;
    justify-content: center;
  }
}

/* 📱 MOBILE LARGE: 576px to 767px */
@media (min-width: 576px) and (max-width: 767px) {
  .footer-content {
    max-width: 540px;
    grid-template-columns: 1fr;          /* Single column layout */
    gap: 30px;
    padding: 35px 15px;
  }
  
  .company-info {
    text-align: center;                  /* Center company info */
  }
  
  .footer-logo {
    height: 35px;
    margin: 0 auto 15px;
  }
  
  .company-tagline {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  
  .company-description {
    font-size: 0.9rem;
    margin-bottom: 15px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .trust-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    margin-bottom: 25px;
  }
  
  .services-overview {
    text-align: center;
  }
  
  .footer-section h4 {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
  
  .service-categories {
    display: flex;
    justify-content: space-around;       /* Space out service groups */
    gap: 25px;
  }
  
  .service-group {
    flex: 1;
  }
  
  .service-group h5 {
    font-size: 0.95rem;
    margin-bottom: 8px;
  }
  
  .service-group li {
    font-size: 0.85rem;
    text-align: left;
  }
  
  .btn.btn-outline {
    margin-top: 15px;
    padding: 12px 30px;
  }
  
  .contact-info {
    text-align: center;
  }
  
  .contact-item {
    font-size: 0.95rem;
    margin-bottom: 12px;
  }
  
  .phone-link {
    font-size: 1.2rem;
    font-weight: bold;
    display: block;
    margin-bottom: 15px;
  }
  
  .service-areas p {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
  
  .footer-cta {
    display: flex;
    flex-direction: column;              /* Stack CTA buttons */
    gap: 10px;
    max-width: 300px;
    margin: 0 auto 20px;
  }
  
  .footer-cta .btn {
    width: 100%;
    padding: 15px;
    font-size: 1rem;
  }
  
  .social-links {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
  
  .social-links a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
  }
}

/* 📱 MOBILE SMALL: 320px to 575px */
@media (max-width: 575px) {
  .main-footer {
    margin-top: 0;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 30px 10px;
  }
  
  .company-info {
    text-align: center;
  }
  
  .footer-logo {
    height: 30px;
    margin-bottom: 12px;
  }
  
  .company-tagline {
    font-size: 1rem;
    margin-bottom: 8px;
  }
  
  .company-description {
    font-size: 0.85rem;
    line-height: 1.4;
    margin-bottom: 15px;
  }
  
  .trust-badges {
    display: grid;
    grid-template-columns: 1fr 1fr;      /* 2x2 grid for badges */
    gap: 8px;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .badge {
    font-size: 0.75rem;
    padding: 6px 8px;
    text-align: center;
  }
  
  .services-overview {
    text-align: center;
  }
  
  .footer-section h4 {
    font-size: 1rem;
    margin-bottom: 12px;
  }
  
  .service-categories {
    display: flex;
    flex-direction: column;              /* Stack service groups */
    gap: 15px;
    text-align: left;
  }
  
  .service-group h5 {
    font-size: 0.9rem;
    margin-bottom: 6px;
    color: var(--primary-blue);
  }
  
  .service-group ul {
    display: grid;
    grid-template-columns: 1fr 1fr;      /* 2 columns for service items */
    gap: 4px;
  }
  
  .service-group li {
    font-size: 0.8rem;
    padding: 2px 0;
  }
  
  .btn.btn-outline {
    margin-top: 15px;
    padding: 12px 25px;
    font-size: 0.9rem;
  }
  
  .contact-info {
    text-align: center;
  }
  
  .contact-item {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  
  .contact-item strong {
    display: block;                      /* Stack labels above values */
    margin-bottom: 3px;
    font-size: 0.8rem;
    color: var(--gray);
  }
  
  .phone-link {
    font-size: 1.1rem;
    font-weight: bold;
    display: block;
    padding: 12px;
    background: var(--light-gray);
    border-radius: 8px;
    margin-bottom: 15px;
    text-decoration: none;
  }
  
  .service-areas p {
    font-size: 0.85rem;
    margin-bottom: 20px;
    line-height: 1.4;
  }
  
  .footer-cta {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
  }
  
  .footer-cta .btn {
    width: 100%;
    padding: 15px;
    font-size: 0.95rem;
    border-radius: 8px;
  }
  
  .social-links h5 {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  
  .social-links {
    display: flex;
    gap: 25px;
    justify-content: center;
  }
  
  .social-links a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    text-decoration: none;
    padding: 10px;
    background: var(--light-gray);
    border-radius: 8px;
    min-width: 80px;
  }
  
  .social-links i {
    font-size: 1.5rem;
  }
  
  /* Footer bottom bar adjustments */
  .footer-bottom {
    padding: 20px 10px;
  }
  
  .footer-bottom-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
  
  .footer-bottom-content p {
    font-size: 0.8rem;
    margin: 0;
  }
}

/* 🖱️ TOUCH DEVICE OPTIMIZATIONS */
@media (hover: none) and (pointer: coarse) {
  .footer-cta .btn {
    min-height: 44px;                    /* Apple recommended touch target */
  }
  
  .social-links a {
    min-height: 44px;
    min-width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .phone-link {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Remove hover effects on touch devices */
  .footer-cta .btn:hover,
  .social-links a:hover {
    transform: none;
  }
}

/* ♿ ACCESSIBILITY IMPROVEMENTS */
@media (max-width: 767px) {
  .footer-section h4 {
    position: relative;
  }
  
  /* Add collapsible sections for mobile if needed */
  .footer-section.collapsible h4::after {
    content: '+';
    position: absolute;
    right: 0;
    font-size: 1.2rem;
  }
  
  .footer-section.collapsible.open h4::after {
    content: '-';
  }
  
  .footer-section.collapsible .footer-section-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  
  .footer-section.collapsible.open .footer-section-content {
    max-height: 500px;
  }
}
```

---

## Performance (Single Page)

### Optimization
- No internal page links to load
- Minimal JavaScript (smooth scroll only)
- Social media links external only
- Fast anchor navigation

### Loading Strategy
- Footer loads after main content
- Social media icons lazy load
- Contact information immediate priority

---

## Future Expansion Ready

### Easy Updates for Page Addition
- Change "See All Services" to link to /services page
- Add page navigation links as needed
- Maintain current styling structure
- Update JavaScript for page navigation

### Current vs Future Structure
```html
<!-- Current (Home Only) -->
<a href="#services" class="scroll-link">See All Services</a>

<!-- Future (With Pages) -->
<a href="/services">See All Services</a>
```

---

## Analytics Tracking (Home Only)

### Track These Interactions
- Scroll link clicks (to homepage sections)
- Phone number clicks
- Email clicks
- Social media clicks
- CTA button clicks

### Conversion Goals
- Contact form submissions (from footer CTA)
- Phone calls initiated
- Email inquiries
- Social media follows

---

## Brand Consistency (Single Page)

### Messaging Focus
- Professional service emphasis
- Local business credentials
- Trust and reliability
- Easy contact access

### Visual Hierarchy
1. **Company branding** (logo, tagline)
2. **Services overview** (what we do)
3. **Contact information** (how to reach us)
4. **Social proof** (follow us)
5. **Legal/credentials** (trust indicators)

---

## Call-to-Action Strategy (Home Only)

### Primary CTAs
- "Get Free Quote" (scroll to contact form)
- "Call Now" (direct phone link)

### Secondary CTAs
- "See All Services" (scroll to services section)
- Social media follows

### CTA Placement
- Multiple "Get Free Quote" buttons
- Prominent phone number
- Clear email contact
- Easy social media access