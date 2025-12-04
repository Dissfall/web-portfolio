# Deployment Guide

This guide covers different deployment options for your Astro portfolio site.

## Quick Deploy Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Astro settings
6. Click "Deploy"

**Custom Domain**: Add your domain in Project Settings → Domains

### Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Custom Domain**: Site settings → Domain management

### Cloudflare Pages

1. Push your code to GitHub
2. Visit [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click "Create a project"
4. Connect to GitHub
5. Build settings:
   - Framework preset: Astro
   - Build command: `pnpm build`
   - Build output directory: `dist`
6. Click "Save and Deploy"

### GitHub Pages

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      - name: Install dependencies
        run: pnpm install
      - name: Build
        run: pnpm build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

2. Enable GitHub Pages in repository settings
3. Push to main branch

## Environment Variables

If you add any API integrations, create `.env` file:

```bash
# Example
PUBLIC_SITE_URL=https://yourdomain.com
# Add other variables as needed
```

For deployment platforms, add these in their dashboard under Environment Variables.

## Custom Domain Setup

### DNS Configuration

Add these records to your DNS provider:

**For Apex Domain (example.com):**
- Type: A
- Name: @
- Value: [Your host's IP]

**For Subdomain (www.example.com):**
- Type: CNAME
- Name: www
- Value: [Your deployment URL]

### SSL/HTTPS

All recommended platforms provide free SSL certificates automatically.

## Performance Optimization

Before deploying:

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Minify Assets**: Astro does this automatically in production
3. **Check Bundle Size**: Run `pnpm build` and review output
4. **Test Lighthouse Score**: Aim for 90+ in all categories

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify dark/light mode toggle works
- [ ] Check mobile responsiveness
- [ ] Test contact form functionality
- [ ] Verify blog posts render properly
- [ ] Test skills chart animation
- [ ] Check resume PDF download
- [ ] Verify all links work
- [ ] Test on multiple browsers
- [ ] Check Lighthouse scores

## Monitoring

Consider adding:

- **Google Analytics**: Track visitor behavior
- **Sentry**: Error monitoring
- **Uptime Robot**: Monitor site availability

## Updating Content

### Blog Posts

1. Add new `.mdx` file to `src/content/blog/`
2. Commit and push
3. Automatic deployment triggers

### Projects

1. Edit `src/pages/projects.astro`
2. Update project array
3. Commit and push

### Resume

1. Replace `public/Heorhi_backend_engineer.pdf`
2. Commit and push

## Troubleshooting

**Build Fails:**
- Check Node.js version (18+)
- Clear cache: `rm -rf node_modules .astro && pnpm install`
- Check for TypeScript errors: `pnpm astro check`

**Styles Not Loading:**
- Verify base URL in `astro.config.mjs`
- Check browser console for errors

**Chart Not Rendering:**
- Ensure Chart.js is installed
- Check browser console for errors
- Verify script is loading

## Support

For deployment issues:
- Astro Docs: https://docs.astro.build
- Platform-specific docs
- Community Discord servers
