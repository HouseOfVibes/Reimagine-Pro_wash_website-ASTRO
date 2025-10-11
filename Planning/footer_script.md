# Footer Component Script - Reimagine Pro Wash

## Footer Structure

### Layout
**Style:** Multi-column footer with company information, services, and contact details
**Background:** Dark blue (#003366) with white text
**Sections:** 4 columns on desktop, stacked on mobile

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

## Services Quick Links

### Column Title
"Our Services"

### Residential Services
- House Washing
- Roof Cleaning  
- Driveway Cleaning
- Concrete Cleaning
- Deck & Fence Restoration
- Gutter Cleaning

### Commercial Services
- Building Exterior Washing
- Parking Lot Cleaning
- Storefront Cleaning
- Fleet Washing

### Specialty Services
- Rust Stain Removal
- Oil Stain Removal
- Mold & Mildew Treatment

---

## Service Areas Section

### Column Title
"Areas We Serve"

### Primary Service Areas
**Wake County:**
- Knightdale (Headquarters)
- Raleigh
- Cary
- Apex
- Wake Forest
- Garner

**Johnston County:**
- Clayton
- Smithfield
- Selma

**Additional Areas:**
- Durham
- Rocky Mount
- Fayetteville
- "& 50+ Mile Radius"

### Service Area Statement
"Proudly serving a 50+ mile radius from Knightdale, NC"

---

## Contact Information Section

### Column Title
"Contact Us"

### Primary Contact
**Phone:** (984) 202-4980
**Email:** info@rprowashnc.com
**Service Hours:** Mon-Sat: 8AM-6PM
**Service Area:** 50+ miles from Knightdale, NC

### Address (if applicable)
**Location:** Knightdale, NC
**Service Area:** Wake, Johnston, Durham Counties & Surrounding Areas

### Quick Contact CTAs
- **"Get Free Quote"** (button link to contact form)
- **"Call Now"** (direct phone link)
- **"Email Us"** (mailto link)

---

## Social Media & Online Presence

### Social Media Links
**Instagram:** 
- Link: https://www.instagram.com/reimagine_prowash/
- Icon: Instagram logo
- Text: "@reimagine_prowash"

**Facebook:**
- Link: https://www.facebook.com/people/Reimagine-Pro-Wash-More/61575086936289/
- Icon: Facebook logo  
- Text: "Reimagine Pro Wash & More"

### Social Media CTAs
- "Follow Us for Before/After Photos"
- "See Our Latest Projects"
- "Customer Reviews & Testimonials"

---

## Legal & Business Information

### Copyright Notice
"© 2024 Reimagine Pro Wash & More. All rights reserved."

### Business Credentials
- "Licensed Business"
- "Fully Insured"
- "Background Checked"
- "Professional Certified"

### Legal Links (if created)
- Privacy Policy
- Terms of Service
- Service Agreement

---

## Bottom Footer Bar

### Left Side
Copyright and business name

### Center
"Proudly serving Knightdale, NC and surrounding communities"

### Right Side
"Licensed & Insured Professional Service"

---

## Footer Content Script

### Value Propositions
- **Quality:** "Professional results you can see immediately"
- **Trust:** "Licensed, insured, and satisfaction guaranteed"
- **Service:** "Friendly, reliable, and on-time service"
- **Eco-Friendly:** "Safe for your family, pets, and plants"

### Call-to-Action Messages
- "Transform your property today"
- "Get your free estimate now"
- "Call for immediate service"
- "See the difference professional cleaning makes"

---

## SEO Footer Elements

### Location-Based Keywords
- "Pressure washing Knightdale NC"
- "House washing Wake County"
- "Commercial cleaning Johnston County"
- "Driveway cleaning Raleigh area"

### Service Keywords
- "Professional pressure washing"
- "Soft wash house cleaning"
- "Commercial building washing"
- "Eco-friendly cleaning services"

### Schema Markup Integration
- Business contact information
- Service area locations
- Operating hours
- Social media profiles

---

## Technical Implementation

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
      </div>
    </div>
    
    <div class="footer-section services-links">
      <h4>Our Services</h4>
      <ul>
        <li><a href="/services#residential">Residential Services</a></li>
        <li><a href="/services#commercial">Commercial Services</a></li>
        <li><a href="/services#specialty">Specialty Services</a></li>
      </ul>
    </div>
    
    <div class="footer-section service-areas">
      <h4>Areas We Serve</h4>
      <ul>
        <li>Knightdale, NC</li>
        <li>Raleigh, NC</li>
        <li>Cary, NC</li>
        <li>Wake County</li>
        <li>Johnston County</li>
        <li class="service-radius">50+ Mile Radius</li>
      </ul>
    </div>
    
    <div class="footer-section contact-info">
      <h4>Contact Us</h4>
      <div class="contact-item">
        <a href="tel:9842024980" class="phone-link">(984) 202-4980</a>
      </div>
      <div class="contact-item">
        <a href="mailto:info@rprowashnc.com">info@rprowashnc.com</a>
      </div>
      <div class="hours">Mon-Sat: 8AM-6PM</div>
      <div class="footer-cta">
        <a href="#contact" class="btn btn-primary">Get Free Quote</a>
      </div>
      <div class="social-links">
        <a href="https://www.instagram.com/reimagine_prowash/" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/people/Reimagine-Pro-Wash-More/61575086936289/" target="_blank">
          <i class="fab fa-facebook"></i>
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

### CSS Classes
- `.main-footer` - Main footer container
- `.footer-content` - Main content grid
- `.footer-section` - Individual footer columns
- `.company-info` - Company information section
- `.services-links` - Services navigation
- `.service-areas` - Service area listings
- `.contact-info` - Contact information
- `.trust-badges` - Credibility indicators
- `.footer-bottom` - Copyright bar
- `.social-links` - Social media icons

---

## Responsive Design

### Desktop (1200px+)
- 4-column layout
- Logo prominently displayed
- All information visible

### Tablet (768px - 1199px)  
- 2-column layout
- Condensed information
- Maintained readability

### Mobile (< 768px)
- Single column stack
- Collapsible sections
- Touch-friendly buttons
- Prominent phone number

---

## Footer Functionality

### Interactive Elements
- Clickable phone numbers
- Email links (mailto)
- Social media links (new tab)
- Service links to internal pages
- Smooth scroll for anchor links

### Accessibility
- Proper heading hierarchy (h4 for section titles)
- Alt text for logo and icons
- High contrast for readability
- Keyboard navigation support
- Screen reader friendly structure

---

## Brand Consistency

### Colors
- **Background:** Primary Blue (#003366)
- **Text:** White (#FFFFFF)
- **Links:** Accent Blue (#87CEEB)
- **Hover:** Light Blue (#1E90FF)
- **Badges:** White background, blue text

### Typography
- **Headings:** Bold, uppercase section titles
- **Body:** Clean, readable font
- **Links:** Underline on hover
- **Phone:** Larger, prominent display

---

## Performance Optimization

### Loading Strategy
- Footer loads after main content
- Lazy load social media icons
- Minimal JavaScript requirements
- Optimized images for logos/icons

### SEO Benefits
- Internal linking structure
- Location-based keywords
- Contact information markup
- Social media signals
- Business credibility indicators

---

## Content Updates

### Regular Updates Needed
- Copyright year (annual)
- Service areas (as business grows)
- Contact information (if changed)
- Social media links (if URLs change)
- Hours of operation (seasonal changes)

### Seasonal Messaging (Optional)
- Winter: "Preparing for spring cleaning"
- Spring: "Spring cleaning specials"
- Summer: "Beat the heat with clean surfaces"
- Fall: "Preparing for winter weather"

---

## Integration with Site

### Astro Implementation
- Include in Layout.astro
- Consistent across all pages
- Props for page-specific elements
- Shared component structure

### Analytics Tracking
- Track footer link clicks
- Monitor social media clicks
- Phone number click tracking
- Contact form conversions from footer CTA

---

## Trust Building Elements

### Credibility Indicators
- "Licensed & Insured" prominent display
- "100% Satisfaction Guarantee"
- "Free Estimates" offer
- Professional certifications (if applicable)
- Years of experience (when applicable)

### Local Business Signals
- Knightdale, NC headquarters emphasis
- Local service area specificity
- Community-focused messaging
- Regional contact information