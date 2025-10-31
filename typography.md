# Reimagine Pro Wash - Typography Guide

This document defines the complete typography system used throughout the Reimagine Pro Wash website.

## Font Families

### Primary Fonts (Modern Pages)

**Google Fonts Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
```

#### Poppins
- **Usage**: Headings, titles, CTAs, emphasis text
- **Weights Available**: 300 (Light), 400 (Regular), 600 (Semi-Bold), 700 (Bold), 800 (Extra Bold)
- **Character**: Modern, geometric, clean

#### Open Sans
- **Usage**: Body text, paragraphs, descriptions
- **Weights Available**: 300 (Light), 400 (Regular), 600 (Semi-Bold), 700 (Bold)
- **Character**: Highly readable, neutral, professional

### Fallback Font (Standard Pages)

#### Arial
- **Usage**: Default body text on standard pages
- **Fallback**: sans-serif
- **Declaration**: `font-family: 'Arial', sans-serif;`

---

## Typography Scale

### Display Text
**Extra Large Display**
- Font Size: `5rem` (80px)
- Use Case: Hero headlines (Blog, Contact pages)
- Font Family: Poppins recommended
- Font Weight: 800 (Extra Bold)

**Large Display**
- Font Size: `4rem` (64px)
- Use Case: Major section headers
- Font Family: Poppins
- Font Weight: 700-800

### Headings

**H1 / Hero Title**
- Font Size: `3rem` (48px)
- Font Family: Poppins
- Font Weight: 800
- Line Height: Default
- Use Case: Page titles, hero sections

**H2 / Section Title**
- Font Size: `2.5rem` (40px)
- Font Family: Poppins
- Font Weight: 700
- Use Case: Major section headings

**H3 / Subsection Title**
- Font Size: `2rem` (32px)
- Font Family: Poppins
- Font Weight: 600-700
- Use Case: Subsections, feature headings

**H4 / Card Title**
- Font Size: `1.5rem` (24px)
- Font Family: Poppins
- Font Weight: 600-800
- Use Case: Card titles, smaller headings

**H5 / Small Heading**
- Font Size: `1.3rem` (20.8px)
- Font Family: Poppins
- Font Weight: 600
- Use Case: Small headings, testimonial names

**H6 / Micro Heading**
- Font Size: `1.1rem` (17.6px)
- Font Family: Poppins
- Font Weight: 600
- Use Case: Small labels, metadata headings

### Body Text

**Large Body**
- Font Size: `1.3rem` (20.8px)
- Font Family: Open Sans
- Line Height: 1.6
- Use Case: Lead paragraphs, important descriptions

**Regular Body**
- Font Size: `1.2rem` (19.2px)
- Font Family: Open Sans
- Line Height: 1.6
- Use Case: Standard paragraph text

**Body (Base)**
- Font Size: `1rem` (16px)
- Font Family: Open Sans / Arial
- Line Height: 1.6
- Use Case: Default body text

**Small Body**
- Font Size: `1.1rem` (17.6px)
- Font Family: Open Sans
- Line Height: 1.6-1.8
- Use Case: Secondary information, captions

**Extra Small / Caption**
- Font Size: `0.85rem` (13.6px)
- Font Family: Open Sans / Poppins
- Font Weight: 400-600
- Use Case: Fine print, navigation text, metadata

**Micro Text**
- Font Size: `0.65rem` (10.4px)
- Font Family: Poppins
- Font Weight: 400
- Letter Spacing: 0.1em
- Text Transform: uppercase
- Use Case: Labels, breadcrumbs, tags

### UI Elements

**Button Text**
- Font Size: `1rem` (16px)
- Font Family: Poppins
- Font Weight: 600-700 (Bold)
- Use Case: All button labels

**Small Button**
- Font Size: `0.85rem` (13.6px)
- Font Family: Poppins
- Font Weight: 600
- Use Case: Compact CTAs

**Navigation Links**
- Font Size: `1rem` (16px)
- Font Family: Poppins / Arial
- Font Weight: 500
- Use Case: Header navigation

**Logo Text**
- Font Size: `1.5rem` (24px)
- Font Family: Poppins / Arial
- Font Weight: Bold (700-800)
- Use Case: Brand name in header

---

## Font Weight Scale

### Poppins Weights
- **300** - Light (subtle headings, decorative text)
- **400** - Regular (labels, micro text)
- **600** - Semi-Bold (standard headings, buttons)
- **700** - Bold (major headings, emphasis)
- **800** - Extra Bold (hero titles, display text)

### Open Sans Weights
- **300** - Light (subtle body text)
- **400** - Regular (standard body text)
- **600** - Semi-Bold (emphasis, subheadings)
- **700** - Bold (strong emphasis)

### Arial Weights
- **Normal** - Default
- **Bold** - Headings, emphasis

---

## Line Height

### Standard Line Heights
- **Body Text**: `1.6` (comfortable reading)
- **Extended Reading**: `1.8` (long-form content)
- **Headings**: `1.2-1.4` (tighter, more impact)
- **Compact UI**: `1.5` (buttons, navigation)

---

## Letter Spacing

### Standard Values
- **Normal Text**: Default (0)
- **Tight Headings**: `-0.02em` (large display text)
- **Expanded Labels**: `0.1em` (uppercase micro text)

---

## Text Transform

### Use Cases
- **Uppercase**: Micro text (0.65rem), labels, breadcrumbs, tags
- **Capitalize**: Navigation items (optional)
- **None**: All headings and body text

---

## Typography Hierarchy Examples

### Hero Section
```css
.hero-title {
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;
}
```

### Section Headings
```css
.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
}

.section-description {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
}
```

### Card Components
```css
.card-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
}

.card-body {
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}
```

### Labels & Metadata
```css
.label {
  font-family: 'Poppins', sans-serif;
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

### Buttons
```css
.btn {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
}

.btn-small {
  font-size: 0.85rem;
  font-weight: 600;
}
```

---

## Responsive Typography

### Mobile Breakpoints
**Recommended Adjustments** (max-width: 768px):

```css
@media (max-width: 768px) {
  /* Display Text */
  .display-xxl { font-size: 4rem; } /* was 5rem */
  .display-xl { font-size: 2rem; } /* was 4rem */

  /* Headings */
  h1 { font-size: 2rem; } /* was 3rem */
  h2 { font-size: 1.8rem; } /* was 2.5rem */
  h3 { font-size: 1.5rem; } /* was 2rem */

  /* Body */
  body { font-size: 1rem; } /* maintain readability */

  /* Buttons */
  .btn { font-size: 1.1rem; } /* slightly larger for touch */
}
```

---

## Accessibility Guidelines

### Minimum Sizes
- **Body Text**: Never below 16px (1rem)
- **Interactive Elements**: Minimum 14px (0.875rem)
- **Labels**: Minimum 12px (0.75rem)

### Contrast Requirements
- **Normal Text** (< 18pt): 4.5:1 contrast ratio
- **Large Text** (≥ 18pt or ≥ 14pt bold): 3:1 contrast ratio

### Font Weight Accessibility
- Avoid weights lighter than 300 for body text
- Use 400-600 for optimal readability
- Reserve 700-800 for emphasis only

---

## CSS Variables (Recommended Implementation)

```css
:root {
  /* Font Families */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Open Sans', sans-serif;
  --font-fallback: 'Arial', sans-serif;

  /* Font Sizes */
  --text-xs: 0.65rem;    /* 10.4px */
  --text-sm: 0.85rem;    /* 13.6px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.2rem;     /* 19.2px */
  --text-xl: 1.5rem;     /* 24px */
  --text-2xl: 2rem;      /* 32px */
  --text-3xl: 2.5rem;    /* 40px */
  --text-4xl: 3rem;      /* 48px */
  --text-5xl: 4rem;      /* 64px */
  --text-6xl: 5rem;      /* 80px */

  /* Font Weights */
  --weight-light: 300;
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-extrabold: 800;

  /* Line Heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;
  --leading-loose: 1.8;

  /* Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.1em;
}
```

---

## Best Practices

### Do's
✅ Use Poppins for headings and emphasis
✅ Use Open Sans for body text and descriptions
✅ Maintain consistent line-height (1.6) for readability
✅ Use font-weight to create hierarchy
✅ Keep body text at 1rem (16px) minimum
✅ Use uppercase sparingly (labels and micro text only)

### Don'ts
❌ Don't mix too many font families (stick to 2-3)
❌ Don't use font sizes below 0.65rem except for decorative purposes
❌ Don't use light weights (300) for small text
❌ Don't use all caps for long-form content
❌ Don't sacrifice readability for style

---

## Font Loading Strategy

### Current Implementation
Fonts are loaded via Google Fonts CDN with `display=swap` for performance:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
```

### Performance Optimization (Recommended)
Consider implementing font subsetting or self-hosting for:
- Faster load times
- Better caching control
- Reduced external dependencies
- GDPR compliance

---

## Page-Specific Typography

### Gallery & About Pages
- Primary: Poppins (headings)
- Secondary: Open Sans (body)
- Style: Modern, clean, professional

### Blog, Contact, Standard Pages
- Mixed: Poppins headings with larger display sizes
- Body: Open Sans / Arial fallback
- Style: Readable, traditional

### Header Navigation
- Font: Poppins / Arial
- Weight: 500 (medium)
- Size: 1rem
- Style: Clean, simple

---

## Notes

The site uses two typography approaches:
1. **Modern pages** (Gallery, About, Index) use Poppins + Open Sans combination
2. **Standard pages** (older templates) use Arial fallback

**Recommendation**: Standardize all pages to use Poppins + Open Sans for brand consistency.
