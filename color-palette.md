# Reimagine Pro Wash - Color Palette

This document defines the complete color palette used throughout the Reimagine Pro Wash website.

## Primary Brand Colors (Gallery Page)

### Blues
- **Primary Blue**: `#00a1f0` - Main brand color, used for primary CTAs and accents
- **Navy Blue**: `#092441` - Deep navy for headers and text emphasis
- **Deep Blue**: `#003463` - Mid-tone blue for gradients and backgrounds
- **Medium Blue**: `#0862b7` - Accent blue for interactive elements
- **Light Blue**: `#6ccdf7` - Highlights and hover states

### Neutrals
- **Silver**: `#95a3ae` - Subtle accents and borders
- **Charcoal**: `#04070c` - Primary text color
- **Mid Gray**: `#737a7e` - Secondary text and captions
- **Teal Gray**: `#8b99a0` - Supporting neutral tone
- **Off White**: `#fefefb` - Alternative background
- **Pure White**: `#ffffff` - Primary background

### Brand Gradients
- **Primary Gradient**: `linear-gradient(135deg, #092441 0%, #003463 50%, #00a1f0 100%)`
  - Dark navy to deep blue to primary blue
  - Used for hero sections and major backgrounds

- **CTA Gradient**: `linear-gradient(135deg, #00a1f0 0%, #0862b7 100%)`
  - Primary blue to medium blue
  - Used for call-to-action buttons

- **Alternate Gradient**: `linear-gradient(135deg, #0862b7 0%, #00a1f0 50%, #6ccdf7 100%)`
  - Medium blue through primary to light blue
  - Used for special sections and highlights

## Standard Brand Colors (Main Site)

### Primary Colors
- **Primary Blue**: `#1E90FF` - Dodger blue for primary elements
- **Dark Blue**: `#003366` - Deep blue for headings and emphasis
- **Accent Blue**: `#87CEEB` - Sky blue for subtle accents

### Neutrals
- **Gray**: `#4A4A4A` - Dark gray for body text
- **Light Gray**: `#F5F5F5` - Light backgrounds and subtle sections
- **White**: `#FFFFFF` - Primary background

### Additional Colors (Header Component)
- **Dark Blue (Alt)**: `#0066CC` - Hover states
- **Gray (Alt)**: `#B0B0B0` - Muted text
- **Black**: `#000000` - Mobile menu overlay
- **Card Background**: `#1C1C1C` - Dark mode elements

### Social Media Colors
- **Facebook Blue**: `#1877f2` - Facebook share button
- **Facebook Blue Hover**: `#166fe5` - Darker shade on hover

## Utility Colors

### Borders & Accents
- **Border Gray**: `#ddd` - Form inputs and card borders
- **Divider Gray**: `#eee` - Section dividers

### Background Variations
- **Light Background**: `#f8f9fa` - Alternative light background

## Color Usage Guidelines

### Text Hierarchy
1. **Primary Headings**: Navy Blue (`#092441`) or Dark Blue (`#003366`)
2. **Body Text**: Charcoal (`#04070c`) or Gray (`#4A4A4A`)
3. **Secondary Text**: Mid Gray (`#737a7e`) or Gray (`#B0B0B0`)
4. **Link Text**: Primary Blue (`#00a1f0` or `#1E90FF`)
5. **Link Hover**: Dark Blue or Navy Blue

### Button States
1. **Primary Button**: Background Primary Blue, Text White
2. **Primary Hover**: Background Dark Blue or Medium Blue
3. **Secondary Button**: Background White, Text Primary Blue, Border Primary Blue
4. **Secondary Hover**: Background Primary Blue, Text White

### Backgrounds
1. **Main Background**: White (`#ffffff`)
2. **Alternate Background**: Light Gray (`#F5F5F5`) or Off White (`#fefefb`)
3. **Feature Sections**: Primary Gradient or Light Blue backgrounds
4. **Dark Sections**: Navy Blue or Charcoal

## Accessibility Notes

### Contrast Ratios
Ensure all text meets WCAG AA standards:
- Large text (18pt+): Minimum 3:1 contrast ratio
- Normal text: Minimum 4.5:1 contrast ratio

### Focus States
All interactive elements use:
- **Focus Outline**: 2px solid Primary Blue
- **Focus Offset**: 2px

## CSS Variables Reference

```css
/* Gallery/Extended Palette */
:root {
  --primary-blue: #00a1f0;
  --navy-blue: #092441;
  --deep-blue: #003463;
  --medium-blue: #0862b7;
  --light-blue: #6ccdf7;
  --silver: #95a3ae;
  --charcoal: #04070c;
  --mid-gray: #737a7e;
  --teal-gray: #8b99a0;
  --off-white: #fefefb;
  --pure-white: #ffffff;
  --gradient-primary: linear-gradient(135deg, #092441 0%, #003463 50%, #00a1f0 100%);
  --gradient-cta: linear-gradient(135deg, #00a1f0 0%, #0862b7 100%);
}

/* Standard Palette */
:root {
  --primary-blue: #1E90FF;
  --dark-blue: #003366;
  --gray: #4A4A4A;
  --light-gray: #F5F5F5;
  --accent-blue: #87CEEB;
  --white: #FFFFFF;
}
```

## Notes

The site currently uses two different color palettes:
1. **Gallery page** uses a more refined palette with deeper blues and more gradient variations
2. **Main site** uses a brighter, more traditional blue palette

Consider standardizing to one palette for brand consistency.
