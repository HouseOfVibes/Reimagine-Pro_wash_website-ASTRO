# Deployment Guide for Reimagine Pro Wash Website

## InMotion Hosting cPanel Deployment

This project is configured for automatic deployment to InMotion Hosting using cPanel Git Version Control.

### Prerequisites

1. **Google Maps API Key**: Replace `YOUR_GOOGLE_MAPS_API_KEY` in the built files with your actual API key
2. **GitHub Repository**: Push this code to a GitHub repository
3. **InMotion Hosting Account**: With cPanel access and SSH enabled

### Deployment Steps

1. **Create GitHub Repository**
   - Push this code to a new GitHub repository
   - Make sure the repository is public or configure SSH keys for private repos

2. **cPanel Git Setup**
   - Log into cPanel
   - Go to **Files** → **Git Version Control**
   - Click **Create** and toggle **ON** "Clone a Repository"
   - Enter your GitHub repository URL
   - Set Repository Path to: `public_html/` (or subdirectory as needed)
   - Click **Create**

3. **Configure Google Maps**
   - Get a Google Maps JavaScript API key from Google Cloud Console
   - After first deployment, find and replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual key in the deployed files

4. **Deploy Updates**
   - Make changes to your local code
   - Commit and push to GitHub
   - In cPanel Git, go to **Manage** → **Pull or Deploy**
   - Click **Update from Remote** then **Deploy HEAD Commit**

### Files Structure

- `.cpanel.yml` - Deployment configuration for cPanel
- `dist/` - Built static files (created by `npm run build`)
- `src/` - Source code files
- `public/` - Static assets

### Build Process

The site uses Astro static site generation:

```bash
npm install
npm run build
```

The `.cpanel.yml` file automatically copies the built files from `dist/` to your public_html directory.

### Important Notes

- **API Key**: Remember to replace the Google Maps API key placeholder after deployment
- **Contact Form**: Uses FormSubmit.co service with email: info@rprowashnc.com
- **Coming Soon Pages**: Blog and Contact pages show "Coming Soon" content
- **SEO**: Structured data and meta tags are configured for local business SEO