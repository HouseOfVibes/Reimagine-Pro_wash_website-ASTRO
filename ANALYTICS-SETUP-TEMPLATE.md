# Google Analytics 4 Setup for Astro Sites

## Current Configuration
- **Measurement ID:** G-8ZYCWEHB9H
- **Type:** Google Analytics 4 (GA4)
- **Method:** Global Site Tag (gtag.js)

## Implementation Steps

### 1. Create GA4 Property
Visit Google Analytics, navigate to Admin settings, select "Create Property," establish a Web data stream, and note your Measurement ID (format: G-XXXXXXXXXX).

### 2. Add Tracking Code to Layout
Place this in `src/layouts/Layout.astro` at the top of the `<head>` section:

```astro
<head>
  <!-- Google tag (gtag.js) -->
  <script is:inline async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script is:inline>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

**Critical Astro Requirement:** The `is:inline` directive on both script tags prevents Astro from bundling during build, ensuring scripts function correctly.

### 3. Content Security Policy Headers
If using CSP (e.g., in `vercel.json`), allow these domains:

| Directive | Domain | Purpose |
|-----------|--------|---------|
| script-src | https://www.googletagmanager.com | Load gtag.js |
| script-src | https://www.google-analytics.com | Analytics functionality |
| script-src | 'unsafe-inline' | Inline gtag configuration |
| connect-src | https://www.google-analytics.com | Send analytics data |

### 4. Verify Installation
Deploy your site, visit it, navigate to Google Analytics > Reports > Realtime, and confirm your visit appears. Alternatively, use the Google Tag Assistant browser extension.

### Optional: Environment-Specific Tracking
Conditionally render scripts only in production:

```astro
---
const isProd = import.meta.env.PROD;
---

<head>
  {isProd && (
    <>
      <script is:inline async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script is:inline>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
      </script>
    </>
  )}
</head>
```

## Troubleshooting
- Check browser console for CSP errors
- Verify Measurement ID starts with "G-"
- Confirm `is:inline` directives are present
- Disable ad blockers (they may block Analytics)
- Allow 24-48 hours for data to appear in reports
