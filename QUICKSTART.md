# Quick Start Guide 🚀

Get your SEO Works clone up and running in minutes!

## Prerequisites Check

Before you start, make sure you have:
- ✅ Node.js 18 or higher installed ([Download](https://nodejs.org/))
- ✅ npm (comes with Node.js)
- ✅ A code editor (VS Code recommended)

## Installation Steps

### 1. Install Dependencies

```bash
cd seo-works-clone
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- All necessary dependencies

### 2. Start Development Server

```bash
npm run dev
```

Your site will be available at: **http://localhost:3000**

### 3. Make It Your Own

#### Change Brand Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#YOUR_COLOR',
  }
}
```

#### Update Content
- **Company Name**: Search and replace "THE SEO WORKS" in all files
- **Contact Info**: Update phone/email in `Header.tsx` and `Footer.tsx`
- **Services**: Edit service cards in `Services.tsx`
- **Testimonials**: Add your own in `Testimonials.tsx`

#### Add Your Logo
Replace the text logo in `Header.tsx` with an image:
```tsx
<Image src="/logo.png" alt="Logo" width={150} height={50} />
```

### 4. Build for Production

```bash
npm run build
npm start
```

## Common Customizations

### Adding a New Section
1. Create component: `components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add between existing sections

### Changing Fonts
1. Update Google Fonts import in `globals.css`
2. Update `tailwind.config.ts` fontFamily

### Adding Pages
Create new files in the `app` folder:
- `app/about/page.tsx` → /about
- `app/services/page.tsx` → /services
- `app/contact/page.tsx` → /contact

## Deployment Options

### Vercel (Easiest)
1. Push code to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Done! Auto-deploys on push

### Netlify
1. Build: `npm run build`
2. Publish directory: `.next`
3. Build command: `npm run build`

### Other Hosting
- Build the project
- Serve the `.next` folder
- Requires Node.js runtime

## Need Help?

### Common Issues

**Port 3000 already in use?**
```bash
# Use different port
PORT=3001 npm run dev
```

**Module not found?**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Next Steps

1. ✅ Install and run locally
2. 📝 Customize content and colors
3. 🖼️ Add your images and logo
4. 🚀 Deploy to production
5. 📈 Add analytics and tracking

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

Happy coding! 🎉
