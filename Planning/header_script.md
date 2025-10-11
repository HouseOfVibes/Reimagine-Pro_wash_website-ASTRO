# Header Component Script - Reimagine Pro Wash

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

## Navigation Menu

### Primary Navigation Items

#### Home
**Link:** / (index.astro)
**Text:** Home
**Description:** Homepage with services overview

#### Services  
**Link:** /services
**Text:** Services
**Description:** Detailed services page
**Dropdown Menu:**
- Residential Services
- Commercial Services
- Specialty Services

#### About
**Link:** /about (if created)
**Text:** About Us
**Description:** Company background and team

#### Gallery
**Link:** /gallery (if created)
**Text:** Gallery
**Description:** Before/after photo gallery

#### Blog
**Link:** /blog
**Text:** Blog
**Description:** Pressure washing tips and updates

#### Contact
**Link:** /contact
**Text:** Contact
**Description:** Contact form and information

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

## Mobile Navigation

### Hamburger Menu
**Position:** Right side (mobile)
**Style:** Three horizontal lines, blue color
**Animation:** Smooth slide-in menu

### Mobile Menu Items
1. Home
2. Services
   - Residential
   - Commercial  
   - Specialty
3. About Us
4. Gallery
5. Blog
6. Contact
7. **Call (984) 202-4980** (prominent button)
8. **Get Free Quote** (primary CTA)

---

## Header Styles & Behavior

### Desktop Header
**Layout:** Horizontal navigation bar
**Background:** White with subtle shadow
**Height:** 80px
**Sticky:** Yes (stays at top when scrolling)

### Mobile Header
**Layout:** Collapsed hamburger menu
**Background:** White
**Height:** 60px
**Sticky:** Yes

### Scroll Behavior
**Effect:** Header shrinks slightly on scroll
**Shadow:** Increases shadow on scroll
**Animation:** Smooth 0.3s transition

---

## Header Content Script

### Business Tagline (Optional)
**Text:** "Professional Pressure Washing Services"
**Position:** Small text under logo (desktop only)
**Color:** Gray (#4A4A4A)

### Emergency/Hours Info (Optional)
**Text:** "Mon-Sat: 8AM-6PM"
**Position:** Top bar above main header
**Style:** Small text, centered

---

## SEO Elements

### Title Attribute
**Logo Link Title:** "Reimagine Pro Wash - Professional Pressure Washing Services in Knightdale, NC"

### Navigation Alt Text
- Home: "Return to homepage"
- Services: "View our pressure washing services" 
- Contact: "Contact us for a free quote"

---

## Accessibility Features

### Keyboard Navigation
- Tab order: Logo → Navigation → CTA Button → Mobile Menu
- Enter/Space key activation for all buttons
- Escape key closes mobile menu

### Screen Reader Support
- Proper heading hierarchy (h1 for logo, nav for navigation)
- ARIA labels for mobile menu toggle
- Skip to content link for screen readers

### Focus States
- Visible focus indicators for all interactive elements
- High contrast focus outlines
- Logical tab order

---

## Technical Implementation

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
        <li><a href="/">Home</a></li>
        <li class="dropdown">
          <a href="/services">Services</a>
          <ul class="dropdown-menu">
            <li><a href="/services#residential">Residential</a></li>
            <li><a href="/services#commercial">Commercial</a></li>
            <li><a href="/services#specialty">Specialty</a></li>
          </ul>
        </li>
        <li><a href="/about">About</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    
    <div class="header-cta">
      <div class="contact-info">
        <a href="tel:9842024980" class="phone-link">
          (984) 202-4980
        </a>
        <span class="service-area">Knightdale, NC & Surrounding Areas</span>
      </div>
      <a href="#contact" class="btn btn-primary">Get Free Quote</a>
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
- `.dropdown` - Dropdown menu items
- `.header-cta` - Call-to-action area
- `.mobile-menu-toggle` - Mobile hamburger button
- `.nav-menu` - Navigation list
- `.phone-link` - Phone number link
- `.service-area` - Service area text

### JavaScript Functionality
- Mobile menu toggle
- Scroll-based header effects
- Dropdown menu interactions
- Smooth scroll to anchor links

---

## Brand Messaging in Header

### Value Propositions (Subtle)
- "Licensed & Insured" (small badge)
- "Free Quotes" (in CTA)
- "Professional Service" (tagline)

### Trust Indicators
- Professional logo design
- Clear contact information
- Service area transparency
- Easy navigation structure

---

## Responsive Breakpoints

### Desktop (1200px+)
- Full navigation visible
- Logo left, menu center, CTA right
- Contact info above CTA button

### Tablet (768px - 1199px)
- Condensed navigation
- Smaller logo
- CTA button prominent

### Mobile (< 768px)
- Hamburger menu
- Logo left, menu toggle right
- Full-screen mobile menu overlay

---

## Header Performance

### Optimization
- Lazy load logo image
- Minimal JavaScript for menu
- CSS-only hover effects where possible
- Compressed images

### Loading Priority
- Logo image: High priority
- Navigation: Immediate
- Dropdown menus: On hover/click
- Mobile menu: On toggle

---

## Integration Notes

### Astro Implementation
- Use as layout component
- Import in Layout.astro
- Pass page-specific props if needed
- Maintain consistency across all pages

### Content Management
- Logo file in /public/images/
- Navigation items configurable
- Contact information centralized
- Easy to update phone/service area