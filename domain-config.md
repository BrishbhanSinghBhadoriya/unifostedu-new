# Domain Configuration for Unifost

## Primary Domain
- **Main Domain**: `unifostedu.com`
- **Secondary Domain**: `unifost.com` (redirects to unifostedu.com)

## Configuration Changes Made

### 1. Next.js Configuration
- Updated `next.config.js` with redirect rules
- Added `_redirects` file for static hosting

### 2. SEO Configuration
- Updated `metadataBase` in `layout.jsx` to use `unifostedu.com`
- Updated all Open Graph and Twitter Card URLs to use `unifostedu.com`
- Updated structured data URLs to use `unifostedu.com`
- Updated sitemap and robots.txt base URLs to use `unifostedu.com`

### 3. Component Updates
- Updated all component files to use `unifostedu.com`
- Updated API endpoints and external links
- Updated canonical URLs

### 4. Generated Files
- Updated `sitemap.xml` with `unifostedu.com` domain
- Updated `robots.txt` with `unifostedu.com` domain

## Redirect Configuration

### Next.js Redirects (for server-side)
```javascript
async redirects() {
  return [
    {
      source: '/(.*)',
      has: [
        {
          type: 'host',
          value: 'unifost.com',
        },
      ],
      destination: 'https://unifostedu.com/:path*',
      permanent: true,
    },
  ];
}
```

### Static Hosting Redirects (Netlify/Vercel)
```
unifost.com/* https://unifostedu.com/:splat 301!
```

## SEO Benefits
1. **Consolidated Domain Authority**: All traffic and backlinks point to `unifostedu.com`
2. **Consistent Branding**: Single domain for better brand recognition
3. **Better Search Rankings**: No duplicate content issues
4. **Improved User Experience**: Users always land on the correct domain

## Implementation Notes
- Both domains will work, but `unifost.com` will redirect to `unifostedu.com`
- All internal links now point to `unifostedu.com`
- Search engines will index `unifostedu.com` as the primary domain
- Social media shares will use `unifostedu.com` URLs
