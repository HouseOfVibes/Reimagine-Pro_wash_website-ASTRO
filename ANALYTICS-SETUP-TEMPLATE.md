# Google Analytics 4 Setup Template for Astro Websites

This template provides a privacy-compliant Google Analytics 4 implementation with cookie consent banner.

---

## Quick Setup Checklist

- [ ] Replace `YOUR-GA4-MEASUREMENT-ID` with your actual GA4 ID (e.g., `G-XXXXXXXXXX`)
- [ ] Copy the GA4 script to your layout's `<head>`
- [ ] Copy the CookieConsent component to your components folder
- [ ] Import and add `<CookieConsent />` before `</body>` in your layout
- [ ] Customize colors to match your brand (optional)

---

## Step 1: GA4 Script (Add to Layout `<head>`)

Add this to your main layout file (e.g., `src/layouts/Layout.astro`) inside the `<head>` tag:

```html
<!-- Google Analytics 4 with Consent Mode -->
<script is:inline async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA4-MEASUREMENT-ID"></script>
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  // Set default consent to denied (privacy-first, updated by cookie banner)
  gtag('consent', 'default', {
    'analytics_storage': 'denied'
  });

  gtag('js', new Date());
  gtag('config', 'YOUR-GA4-MEASUREMENT-ID', {
    'anonymize_ip': true
  });
</script>
```

**Important:** Replace `YOUR-GA4-MEASUREMENT-ID` with your actual GA4 Measurement ID (found in Google Analytics > Admin > Data Streams > Your Stream > Measurement ID)

---

## Step 2: Cookie Consent Component

Create a new file at `src/components/CookieConsent.astro` with this content:

```astro
---
// Cookie Consent Banner with Google Analytics Integration
// Provides GDPR/CCPA compliant consent management
---

<div id="cookie-consent-banner" class="cookie-consent-banner">
    <div class="cookie-consent-content">
        <div class="cookie-consent-text">
            <p><strong>We value your privacy</strong></p>
            <p>We use cookies to analyze site traffic and improve your experience. By continuing to use our site, you consent to our use of cookies.</p>
        </div>
        <div class="cookie-consent-buttons">
            <button id="cookie-accept" class="btn-accept">Accept</button>
            <button id="cookie-decline" class="btn-decline">Decline</button>
        </div>
    </div>
</div>

<style>
    .cookie-consent-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(9, 36, 65, 0.98);
        backdrop-filter: blur(10px);
        color: #fff;
        padding: 20px;
        box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        display: none;
        animation: slideUp 0.4s ease-out;
    }

    .cookie-consent-banner.show {
        display: block;
    }

    @keyframes slideUp {
        from {
            transform: translateY(100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .cookie-consent-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
        flex-wrap: wrap;
    }

    .cookie-consent-text {
        flex: 1;
        min-width: 300px;
    }

    .cookie-consent-text p {
        margin: 0 0 8px 0;
        line-height: 1.6;
    }

    .cookie-consent-text strong {
        color: #6ccdf7;  /* CUSTOMIZE: Accent color */
        font-size: 1.1rem;
    }

    .cookie-consent-buttons {
        display: flex;
        gap: 15px;
        flex-shrink: 0;
    }

    .btn-accept,
    .btn-decline {
        padding: 12px 30px;
        border: none;
        border-radius: 5px;
        font-family: inherit;
        font-weight: 600;
        font-size: 0.95rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn-accept {
        /* CUSTOMIZE: Button gradient colors */
        background: linear-gradient(135deg, #0862b7 0%, #00a1f0 50%, #6ccdf7 100%);
        color: #fff;
    }

    .btn-accept:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 161, 240, 0.4);
    }

    .btn-decline {
        background: transparent;
        color: #fff;
        border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .btn-decline:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.5);
    }

    @media (max-width: 768px) {
        .cookie-consent-content {
            flex-direction: column;
            text-align: center;
            gap: 20px;
        }

        .cookie-consent-text {
            min-width: auto;
        }

        .cookie-consent-buttons {
            width: 100%;
            justify-content: center;
        }

        .btn-accept,
        .btn-decline {
            flex: 1;
            max-width: 150px;
        }
    }
</style>

<script is:inline>
    // Cookie consent functionality
    (function() {
        // CUSTOMIZE: Change cookie name for your site
        const COOKIE_NAME = 'site_cookie_consent';
        const COOKIE_EXPIRY_DAYS = 365;

        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
            return null;
        }

        function setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = `expires=${date.toUTCString()}`;
            document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
        }

        function initializeAnalytics(consent) {
            if (consent === 'accepted' && window.gtag) {
                // Update Google Analytics consent to granted
                window.gtag('consent', 'update', {
                    'analytics_storage': 'granted'
                });
            } else if (consent === 'declined' && window.gtag) {
                // Keep analytics disabled
                window.gtag('consent', 'update', {
                    'analytics_storage': 'denied'
                });
            }
        }

        function showBanner() {
            const banner = document.getElementById('cookie-consent-banner');
            if (banner) {
                banner.classList.add('show');
            }
        }

        function hideBanner() {
            const banner = document.getElementById('cookie-consent-banner');
            if (banner) {
                banner.classList.remove('show');
            }
        }

        function handleConsent(consent) {
            setCookie(COOKIE_NAME, consent, COOKIE_EXPIRY_DAYS);
            initializeAnalytics(consent);
            hideBanner();
        }

        // Check for existing consent on page load
        document.addEventListener('DOMContentLoaded', function() {
            const consent = getCookie(COOKIE_NAME);

            if (consent) {
                // User has already made a choice - apply it
                initializeAnalytics(consent);
            } else {
                // First-time visitor - show banner
                showBanner();
            }

            // Accept button handler
            const acceptBtn = document.getElementById('cookie-accept');
            if (acceptBtn) {
                acceptBtn.addEventListener('click', function() {
                    handleConsent('accepted');
                });
            }

            // Decline button handler
            const declineBtn = document.getElementById('cookie-decline');
            if (declineBtn) {
                declineBtn.addEventListener('click', function() {
                    handleConsent('declined');
                });
            }
        });

        // Set default consent state
        if (window.gtag) {
            window.gtag('consent', 'default', {
                'analytics_storage': 'denied'
            });
        }
    })();
</script>
```

---

## Step 3: Update Your Layout File

Import and use the CookieConsent component in your layout:

```astro
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import CookieConsent from '../components/CookieConsent.astro';
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />

    <!-- Google Analytics 4 with Consent Mode -->
    <script is:inline async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA4-MEASUREMENT-ID"></script>
    <script is:inline>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', { 'analytics_storage': 'denied' });
      gtag('js', new Date());
      gtag('config', 'YOUR-GA4-MEASUREMENT-ID', { 'anonymize_ip': true });
    </script>

    <!-- Your other head content -->
  </head>
  <body>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
    <CookieConsent />
  </body>
</html>
```

---

## Customization Guide

### Colors to Update

| Element | Current Value | Location in CookieConsent.astro |
|---------|---------------|--------------------------------|
| Banner background | `rgba(9, 36, 65, 0.98)` | `.cookie-consent-banner` |
| Accent text color | `#6ccdf7` | `.cookie-consent-text strong` |
| Button gradient | `#0862b7, #00a1f0, #6ccdf7` | `.btn-accept` |
| Button hover shadow | `rgba(0, 161, 240, 0.4)` | `.btn-accept:hover` |

### Cookie Settings

| Setting | Current Value | How to Change |
|---------|---------------|---------------|
| Cookie name | `site_cookie_consent` | Update `COOKIE_NAME` in script |
| Cookie duration | 365 days | Update `COOKIE_EXPIRY_DAYS` in script |

---

## How It Works

### Flow Diagram

```
User visits site
       ↓
GA4 loads with consent=denied (no tracking yet)
       ↓
Check for existing consent cookie
       ↓
   ┌───┴───┐
   ↓       ↓
Cookie    No cookie
exists    found
   ↓       ↓
Apply     Show
saved     consent
consent   banner
   ↓       ↓
         User clicks
         Accept/Decline
              ↓
         Save cookie
         Update gtag consent
              ↓
         Analytics enabled/disabled
```

### Consent Mode Values

| User Action | `analytics_storage` | Tracking Status |
|-------------|---------------------|-----------------|
| First visit (default) | `denied` | No tracking |
| Clicks "Accept" | `granted` | Full tracking |
| Clicks "Decline" | `denied` | No tracking |
| Return visit (accepted) | `granted` | Full tracking |
| Return visit (declined) | `denied` | No tracking |

---

## Optional: Vercel Analytics (for Vercel deployments)

If deploying to Vercel, add this to your `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
});
```

---

## Finding Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (gear icon)
3. In the Property column, click **Data Streams**
4. Click on your web stream
5. Copy the **Measurement ID** (starts with `G-`)

---

## Compliance Notes

This implementation is designed to be compliant with:

- **GDPR** (EU): Consent required before tracking
- **CCPA** (California): Provides opt-out mechanism
- **ePrivacy Directive**: Cookie notice with clear choices

The key privacy features:
- Default consent is `denied` - no tracking until user accepts
- IP anonymization enabled (`anonymize_ip: true`)
- Clear Accept/Decline options
- Consent remembered for 365 days
- Works even if JavaScript fails (no tracking by default)

---

## Troubleshooting

### Analytics not tracking after Accept
- Check browser console for errors
- Verify GA4 Measurement ID is correct
- Confirm gtag is defined: `typeof gtag` should return `"function"`

### Banner keeps showing
- Check if cookies are being blocked by browser
- Clear site cookies and test again
- Check for JavaScript errors in console

### Testing consent
1. Open DevTools > Application > Cookies
2. Delete the `site_cookie_consent` cookie
3. Refresh page - banner should appear
4. Click Accept/Decline and verify cookie is set
