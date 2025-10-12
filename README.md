# Reimagine Pro Wash Website

Professional pressure washing services website built with Astro v4.16.18.

## About

This is the official website for Reimagine Pro Wash & More, a professional pressure washing company serving Knightdale, NC and surrounding areas within a 50+ mile radius.

**Website Features:**
- Fully responsive design
- Interactive before/after image sliders
- Service showcase with 9+ services
- Contact form with email integration
- Service area coverage map
- About and Gallery pages
- SEO-optimized with Google Maps integration
- Eco-friendly and insured badge displays

**Contact Information:**
- **Phone:** (984) 202-4980
- **Email:** info@rprowashnc.com
- **Service Area:** Knightdale, NC + 50 mile radius

## Project Structure

```
├── public/
│   └── images/           # Local images (logo, services, before/after photos)
├── src/
│   └── pages/
│       ├── index.astro   # Homepage
│       ├── about.astro   # About page
│       ├── gallery.astro # Gallery page
│       └── blog.astro    # Blog page (coming soon)
└── dist/                 # Build output
```

## Tech Stack

- **Framework:** Astro v4.16.18
- **Styling:** CSS with custom properties (CSS variables)
- **Icons:** Font Awesome 6.0.0
- **Fonts:** Google Fonts (Poppins, Open Sans)
- **Deployment:** cPanel via .cpanel.yml

## Design System

**Brand Colors:**
- Primary Blue: `#00a1f0`
- Navy Blue: `#092441`
- Deep Blue: `#003463`
- Light Blue: `#6ccdf7`
- Pure White: `#ffffff`

**Key Features:**
- Blue gradient backgrounds
- Animated water effects in hero section
- White borders on key sections
- Mix-blend-mode effects on logo
- Interactive comparison sliders

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Visit: http://localhost:4321

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Pages

- **Home (/)** - Hero, services, before/after sliders, contact form
- **About (/about)** - Company story, values, commitment
- **Gallery (/gallery)** - Before/after project photos
- **Blog (/blog)** - Coming soon

## Services Offered

1. House Washing
2. Pool Deck Cleaning
3. Hardscapes Cleaning
4. Gutter Cleaning
5. Commercial Pressure Washing
6. Deck Restoration
7. Fence Cleaning
8. Brick Restoration
9. Graffiti Removal

## Service Area

Serving 12+ communities including:
- Raleigh
- Durham
- Cary
- Wake Forest
- Garner
- Clayton
- Apex
- Holly Springs
- Fuquay-Varina
- Morrisville
- Chapel Hill
- Wendell

## Deployment

The site is deployed via cPanel using `.cpanel.yml` configuration:
- Builds are triggered on push to main branch
- Files are deployed to the home directory on rprowashnc.com
- `.htaccess` handles routing and redirects

## Recent Updates

- Added comprehensive footer with social links and contact info
- Removed "Licensed" references (now "Fully Insured")
- Updated email to info@rprowashnc.com throughout site
- Added white borders to contact section cards
- Implemented contact form with mailto functionality
- Added Google Maps links for SEO optimization
- Created interactive before/after image sliders

## Contact Form

The contact form uses a mailto: link approach to send quote requests directly to info@rprowashnc.com with pre-formatted information including:
- Customer name, email, phone
- Service requested
- Project details

## License

© 2025 Reimagine Pro Wash & More. All rights reserved.
