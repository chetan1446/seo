# Deployment Guide 🚀

Complete guide to deploying your SEO Works clone to various platforms.

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All content is updated (company name, contact info, services)
- [ ] Images are optimized and properly referenced
- [ ] Environment variables are configured
- [ ] Build runs successfully locally (`npm run build`)
- [ ] No console errors in production build
- [ ] SEO meta tags are updated in `app/layout.tsx`
- [ ] Favicon and app icons are added to `app` folder

## Option 1: Vercel (Recommended) ⚡

**Best for:** Fastest deployment, automatic HTTPS, serverless functions

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   
3. **Configure (Optional)**
   - Add environment variables in project settings
   - Set custom domain in domains section
   - Configure build settings if needed

### Vercel CLI Alternative:
```bash
npm install -g vercel
vercel login
vercel
```

**Pros:**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Instant rollbacks
- Preview deployments

## Option 2: Netlify 🌐

**Best for:** Static site hosting, form handling, CI/CD

### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

3. **Or use Git integration**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository
   - Build command: `npm run build`
   - Publish directory: `.next`

**Pros:**
- Form handling
- Edge functions
- Split testing
- Analytics

## Option 3: AWS Amplify ☁️

**Best for:** AWS ecosystem integration

### Steps:

1. **Connect to Git**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   amplify init
   ```

2. **Add hosting**
   ```bash
   amplify add hosting
   amplify publish
   ```

**Pros:**
- AWS integration
- Full stack capabilities
- Custom domains
- CI/CD pipeline

## Option 4: DigitalOcean App Platform 🌊

**Best for:** Developers wanting more control

### Steps:

1. **Create App**
   - Go to DigitalOcean App Platform
   - Connect GitHub repository
   - Configure build settings:
     - Build Command: `npm run build`
     - Run Command: `npm start`

2. **Configure environment**
   - Set NODE_ENV=production
   - Add any API keys

**Pros:**
- Predictable pricing
- Developer-friendly
- Good documentation

## Option 5: Railway 🚂

**Best for:** Simple deployment with databases

### Steps:

1. **Deploy from GitHub**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login and deploy
   railway login
   railway init
   railway up
   ```

2. **Or use web interface**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Deploy from GitHub

**Pros:**
- Easy database setup
- Environment variables
- Simple pricing

## Option 6: Self-Hosted VPS 💻

**Best for:** Maximum control and customization

### Steps:

1. **Server Setup** (Ubuntu 22.04)
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js 18
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   ```

2. **Deploy Application**
   ```bash
   # Clone repository
   git clone YOUR_REPO_URL
   cd seo-works-clone
   
   # Install dependencies
   npm install
   
   # Build
   npm run build
   
   # Start with PM2
   pm2 start npm --name "seo-works" -- start
   pm2 save
   pm2 startup
   ```

3. **Setup Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

**Pros:**
- Full control
- No platform limitations
- Can be cost-effective at scale

## Environment Variables Setup

Create `.env.local` (don't commit this!):

```env
# Production URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API Keys (if using)
CONTACT_FORM_API_KEY=your_key_here
```

### Add to deployment platform:
- **Vercel/Netlify**: Project Settings → Environment Variables
- **Railway**: Variables tab
- **VPS**: Create .env.local on server

## Post-Deployment Tasks

1. **Test the site**
   - Check all pages load
   - Test forms and interactions
   - Verify mobile responsiveness
   - Test different browsers

2. **Setup monitoring**
   - Add Google Analytics
   - Setup error tracking (Sentry)
   - Configure uptime monitoring

3. **Performance optimization**
   - Enable caching headers
   - Configure CDN
   - Optimize images
   - Enable compression

4. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Verify Bing Webmaster Tools
   - Setup robots.txt
   - Add schema markup

## Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records as shown
4. Wait for SSL certificate (automatic)

### For Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records
4. Enable HTTPS (automatic)

### DNS Configuration Example:

**A Record:**
```
Type: A
Name: @
Value: [Platform IP]
```

**CNAME Record (www):**
```
Type: CNAME
Name: www
Value: [Platform domain]
```

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working
- Check variable names start with `NEXT_PUBLIC_`
- Restart dev server after adding variables
- Verify they're set in platform settings

### 404 on Routes
- Ensure using Next.js App Router
- Check file naming in `app` folder
- Verify build completed successfully

### Slow Performance
- Enable Image Optimization
- Use CDN for assets
- Enable caching headers
- Minimize JavaScript bundles

## Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        # Add your deployment step here
```

## Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for security issues
npm audit
npm audit fix
```

### Monitoring
- Set up uptime monitoring
- Configure error tracking
- Monitor Core Web Vitals
- Track deployment success rate

## Support

Need help deploying? Check:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Guides](https://vercel.com/guides)
- Platform-specific documentation

---

**Remember:** Always test in a staging environment before deploying to production!
