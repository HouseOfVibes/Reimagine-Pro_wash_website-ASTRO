# Header Component Script - Home Only Launch - Reimagine Pro Wash

## Brand Identity

### Logo
**Company Name:** Reimagine Pro Wash & More
**Logo Placement:** Left side of header
**Logo Alt Text:** "Reimagine Pro Wash & More - Professional Pressure Washing Services"

### Brand Colors
- **Primary Blue:** #003366
- **Dark Blue:** #1E90FF  
- **White:** #FFFFFF
- **Gray:** #4A4A4A
- **Accent Blue:** #87CEEB

---

## Navigation Menu (Simplified)

### Primary Navigation Items

#### Home
**Link:** / (index.astro)
**Text:** Home
**Description:** Homepage with services overview
**Status:** Active page

#### Services (Anchor Links)
**Link:** #services
**Text:** Services
**Description:** Scroll to services section on homepage

#### About (Anchor Links)
**Link:** #why-choose-us
**Text:** About Us
**Description:** Scroll to why choose us section

#### Gallery (Anchor Links)
**Link:** #gallery
**Text:** Gallery
**Description:** Scroll to gallery section on homepage

#### Contact (Anchor Links)
**Link:** #contact
**Text:** Contact
**Description:** Scroll to contact form on homepage

---

## Contact Information (Header)

### Phone Number
**Display:** (984) 202-4980
**Link:** tel:9842024980
**Icon:** Phone icon
**Position:** Top right of header

### Service Area
**Display:** "Serving Knightdale, NC & 50+ Mile Radius"
**Position:** Below phone number
**Style:** Smaller text, gray color

---

## Call-to-Action Buttons

### Primary CTA
**Text:** "Get Free Quote"
**Link:** #contact (scroll to contact form)
**Style:** Primary button (blue background, white text)
**Position:** Right side of navigation

### Secondary CTA (Mobile)
**Text:** "Call Now"
**Link:** tel:9842024980
**Style:** Secondary button (white background, blue text)
**Display:** Mobile only, in hamburger menu

---

## Mobile Navigation (Simplified)

### Hamburger Menu
**Position:** Right side (mobile)
**Style:** Three horizontal lines, blue color
**Animation:** Smooth slide-in menu

### Mobile Menu Items
1. **Home** (current page)
2. **Services** (scroll to #services)
3. **About Us** (scroll to #why-choose-us)
4. **Gallery** (scroll to #gallery)
5. **Contact** (scroll to #contact)
6. **Call (984) 202-4980** (prominent button)
7. **Get Free Quote** (scroll to #contact)

---

## 📱 RESPONSIVE HEADER DESIGN - All Devices

### Complete Responsive Breakpoints
```css
/* 🖥️ LARGE DESKTOP: 1440px and up */
@media (min-width: 1440px) {
  .main-header {
    height: 90px;                    /* Taller header for large screens */
  }
  
  .header-container {
    max-width: 1400px;
    padding: 0 40px;
  }
  
  .logo-link img {
    height: 50px;                    /* Larger logo */
  }
  
  .nav-link {
    font-size: 1.1rem;              /* Bigger navigation text */
    margin: 0 20px;
  }
  
  .phone-link {
    font-size: 1.2rem;              /* Bigger phone number */
  }
  
  .btn {
    padding: 15px 35px;             /* Larger buttons */
    font-size: 1.1rem;
  }
}

/* 💻 DESKTOP: 1200px to 1439px */
@media (min-width: 1200px) and (max-width: 1439px) {
  .main-header {
    height: 80px;
  }
  
  .header-container {
    max-width: 1200px;
    padding: 0 30px;
  }
  
  .logo-link img {
    height: 45px;
  }
  
  .nav-link {
    font-size: 1rem;
    margin: 0 15px;
  }
  
  .phone-link {
    font-size: 1.1rem;
  }
  
  .service-area {
    font-size: 0.9rem;
  }
}

/* 💻 LAPTOP: 992px to 1199px */
@media (min-width: 992px) and (max-width: 1199px) {
  .main-header {
    height: 75px;
  }
  
  .header-container {
    max-width: 960px;
    padding: 0 20px;
  }
  
  .logo-link img {
    height: 40px;
  }
  
  .nav-link {
    font-size: 0.95rem;
    margin: 0 12px;
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .phone-link {
    font-size: 1rem;
  }
  
  .service-area {
    font-size: 0.8rem;
  }
  
  .btn {
    padding: 12px 25px;
    font-size: 0.95rem;
  }
}

/* 📱 TABLET: 768px to 991px */
@media (min-width: 768px) and (max-width: 991px) {
  .main-header {
    height: 70px;
  }
  
  .header-container {
    max-width: 720px;
    padding: 0 15px;
  }
  
  .logo-link img {
    height: 35px;
  }
  
  /* Hide full navigation, show mobile menu */
  .main-navigation {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: block;              /* Show hamburger menu */
  }
  
  .header-cta {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
  }
  
  .phone-link {
    font-size: 0.95rem;
    font-weight: bold;
  }
  
  .service-area {
    font-size: 0.7rem;
    display: none;               /* Hide on tablet to save space */
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}

/* 📱 MOBILE LARGE: 576px to 767px */
@media (min-width: 576px) and (max-width: 767px) {
  .main-header {
    height: 65px;
  }
  
  .header-container {
    padding: 0 15px;
  }
  
  .logo-link img {
    height: 32px;
  }
  
  .main-navigation {
    display: none;               /* Hide desktop navigation */
  }
  
  .mobile-menu-toggle {
    display: block;
    width: 30px;
    height: 30px;
  }
  
  .header-cta .contact-info {
    display: none;               /* Hide contact info to save space */
  }
  
  .header-cta .btn {
    display: none;               /* Hide CTA button in header */
  }
  
  /* Show phone number in mobile menu instead */
}

/* 📱 MOBILE SMALL: 320px to 575px */
@media (max-width: 575px) {
  .main-header {
    height: 60px;
  }
  
  .header-container {
    padding: 0 10px;
  }
  
  .logo-link img {
    height: 28px;
  }
  
  .main-navigation {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: block;
    width: 28px;
    height: 28px;
  }
  
  .header-cta {
    display: none;               /* Hide all header CTAs on small mobile */
  }
  
  /* All actions moved to mobile menu */
}

/* 📱 MOBILE MENU STYLES (All Mobile Sizes) */
@media (max-width: 991px) {
  .mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;                /* Start off-screen */
    width: 300px;
    height: 100vh;
    background: white;
    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
    transition: right 0.3s ease;
    z-index: 1000;
    overflow-y: auto;
  }
  
  .mobile-menu.active {
    right: 0;                    /* Slide in when active */
  }
  
  .mobile-menu-header {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .mobile-menu-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--gray);
  }
  
  .mobile-menu-items {
    padding: 20px 0;
  }
  
  .mobile-menu-item {
    display: block;
    padding: 15px 20px;
    border-bottom: 1px solid #f5f5f5;
    color: var(--gray);
    text-decoration: none;
    font-size: 1.1rem;
    transition: background 0.3s ease;
  }
  
  .mobile-menu-item:hover {
    background: var(--light-gray);
  }
  
  .mobile-menu-item.active {
    color: var(--primary-blue);
    font-weight: bold;
  }
  
  .mobile-menu-cta {
    padding: 20px;
    border-top: 2px solid var(--light-gray);
  }
  
  .mobile-menu .phone-link {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--primary-blue);
    text-decoration: none;
    margin-bottom: 15px;
    text-align: center;
    padding: 15px;
    background: var(--light-gray);
    border-radius: 8px;
  }
  
  .mobile-menu .btn {
    width: 100%;
    margin-bottom: 10px;
    justify-content: center;
    font-size: 1rem;
    padding: 15px;
  }
}

/* 🖱️ TOUCH DEVICE OPTIMIZATIONS */
@media (hover: none) and (pointer: coarse) {
  .nav-link {
    min-height: 44px;            /* Apple recommended touch target */
    display: flex;
    align-items: center;
  }
  
  .mobile-menu-toggle {
    min-width: 44px;
    min-height: 44px;
  }
  
  .btn {
    min-height: 44px;
  }
  
  /* Remove hover effects on touch devices */
  .nav-link:hover {
    background: transparent;
  }
}

/* 🔄 SCROLL BEHAVIOR (All Devices) */
.main-header.scrolled {
  box-shadow: 0 2px 20px rgba(0,0,0,0.1);
}

@media (min-width: 992px) {
  .main-header.scrolled {
    height: 70px;                /* Shrink header on scroll */
  }
  
  .main-header.scrolled .logo-link img {
    height: 35px;                /* Smaller logo on scroll */
  }
}

@media (max-width: 991px) {
  .main-header.scrolled {
    height: 55px;                /* Mobile header shrink */
  }
  
  .main-header.scrolled .logo-link img {
    height: 25px;
  }
}
```

### Header Behavior
**Desktop:** Horizontal navigation bar, shrinks on scroll
**Tablet:** Hamburger menu with contact info
**Mobile:** Minimal header, full-screen mobile menu
**Sticky:** Yes (stays at top when scrolling on all devices)
**Animation:** Smooth 0.3s transitions

---

## Technical Implementation (Simplified)

### HTML Structure
```html
<header class="main-header">
  <div class="header-container">
    <div class="logo-section">
      <a href="/" class="logo-link">
        <img src="/logo.png" alt="Reimagine Pro Wash & More">
      </a>
    </div>
    
    <nav class="main-navigation">
      <ul class="nav-menu">
        <li><a href="/" class="nav-link active">Home</a></li>
        <li><a href="#services" class="nav-link scroll-link">Services</a></li>
        <li><a href="#why-choose-us" class="nav-link scroll-link">About</a></li>
        <li><a href="#gallery" class="nav-link scroll-link">Gallery</a></li>
        <li><a href="#contact" class="nav-link scroll-link">Contact</a></li>
      </ul>
    </nav>
    
    <div class="header-cta">
      <div class="contact-info">
        <a href="tel:9842024980" class="phone-link">
          (984) 202-4980
        </a>
        <span class="service-area">Knightdale, NC & Surrounding Areas</span>
      </div>
      <a href="#contact" class="btn btn-primary scroll-link">Get Free Quote</a>
    </div>
    
    <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>
```

### CSS Classes
- `.main-header` - Main header container
- `.header-container` - Inner content wrapper  
- `.logo-section` - Logo area
- `.main-navigation` - Navigation menu
- `.nav-link` - Navigation links
- `.scroll-link` - Smooth scroll anchor links
- `.active` - Current page/section indicator
- `.header-cta` - Call-to-action area
- `.mobile-menu-toggle` - Mobile hamburger button
- `.phone-link` - Phone number link
- `.service-area` - Service area text

### JavaScript Functionality (Home Only)
- Mobile menu toggle
- Smooth scroll to sections
- Active section highlighting on scroll
- Header scroll effects
- Close mobile menu on link click

```javascript
// Smooth scrolling for anchor links
document.querySelectorAll('.scroll-link').forEach(link => {
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
    
    // Close mobile menu if open
    const mobileMenu = document.querySelector('.nav-menu');
    mobileMenu.classList.remove('active');
  });
});

// Active section highlighting
window.addEventListener('scroll', function() {
  const sections = ['services', 'why-choose-us', 'gallery', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');
  
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    const navLink = document.querySelector(`[href="#${sectionId}"]`);
    
    if (section && navLink) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');
      }
    }
  });
});
```

---

## SEO Elements (Home Only)

### Navigation Structure
- Clear hierarchy with home as primary
- Descriptive anchor links for sections
- Proper semantic navigation markup

### Accessibility (Home Only)
- Skip to content link
- Proper ARIA labels
- Keyboard navigation support
- Focus management for mobile menu

---

## Brand Messaging (Simplified)

### Header Tagline
**Text:** "Professional Pressure Washing Services"
**Position:** Small text under logo (desktop only)
**Color:** Gray (#4A4A4A)

### Trust Indicators (Minimal)
- Phone number prominence
- Service area transparency
- Professional presentation

---

## Performance (Single Page)

### Optimization
- Minimal JavaScript for smooth scrolling
- CSS-only mobile menu animation
- Single page load - no route changes
- Fast anchor link navigation

### Loading Strategy
- Header loads first (critical path)
- Logo high priority
- Navigation immediate
- Scroll effects after page load

---

## Future Expansion Ready

### Easy Updates for Additional Pages
- Change anchor links (#section) to page links (/page)
- Add new navigation items to array
- Update JavaScript to handle page navigation
- Maintain current styling and structure

### Navigation Structure for Growth
```html
<!-- Current (Home Only) -->
<a href="#services" class="nav-link scroll-link">Services</a>

<!-- Future (With Pages) -->
<a href="/services" class="nav-link">Services</a>
```

---

## Content Strategy (Home Only Launch)

### Navigation Labels
- **Home:** Clear indication of current page
- **Services:** Direct to services information
- **About:** Why choose us section
- **Gallery:** Before/after showcase
- **Contact:** Quote request form

### Call-to-Action Focus
- Primary focus on "Get Free Quote"
- Secondary focus on phone contact
- All CTAs lead to contact section
- Clear conversion path

---

## Mobile Experience (Home Only)

### Simplified Mobile Menu
- **Home** (current page indicator)
- **Services** (smooth scroll)
- **About** (smooth scroll)
- **Gallery** (smooth scroll)
- **Contact** (smooth scroll)
- **Call Now** (direct phone link)

### Touch-Friendly Design
- Large tap targets
- Easy thumb navigation
- Quick access to phone number
- Smooth scrolling experience

---

## Analytics Tracking (Home Only)

### Track These Interactions
- Mobile menu toggles
- Anchor link clicks
- Phone number clicks
- Quote button clicks
- Section visibility (scroll tracking)

### Goal Conversions
- Contact form submissions
- Phone calls initiated
- Email link clicks
- Time spent in each section