# Dynamic Sitemap & Robots.txt

## Overview

Automatically generated sitemap.xml and robots.txt files for SEO optimization, dynamically including all published blog posts and categories with proper metadata.

## Files Created

### 1. `/app/sitemap.ts`

Dynamic sitemap generator that queries the database for published content.

### 2. `/app/robots.ts`

Robots.txt configuration with sitemap reference and crawling rules.

## Sitemap Features

### Dynamic Content

- **Published Blog Posts**: All published posts with their slugs
- **Blog Categories**: All category pages
- **Static Pages**: Homepage, About, Services, Pricing, Contact, Blog
- **Real-time Updates**: Reflects latest content from database

### SEO Metadata

Each route includes:

- **URL**: Full absolute URL
- **Last Modified**: From database `updatedAt` timestamp
- **Change Frequency**: How often content typically changes
- **Priority**: Relative importance (0.0 to 1.0)

### Priority Hierarchy

```
1.0 - Homepage
0.9 - Services, Pricing, Blog Listing
0.8 - Individual Blog Posts, About
0.7 - Categories, Contact
0.5 - Search Pages
```

### Change Frequency

- **Daily**: Homepage, Blog Listing, Search
- **Weekly**: Blog Posts, Categories
- **Monthly**: Static pages (Services, Pricing, etc.)

## Routes Included

### Static Routes

```typescript
/ - Homepage (priority: 1.0, daily)
/about - About page (priority: 0.8, monthly)
/services - Services page (priority: 0.9, monthly)
/pricing - Pricing page (priority: 0.9, monthly)
/contact - Contact page (priority: 0.7, monthly)
/blog - Blog listing (priority: 0.9, daily)
/blog/search - Search page (priority: 0.5, daily)
```

### Dynamic Routes

```typescript
/blog/[slug] - Blog post pages (priority: 0.8, weekly)
/blog/category/[slug] - Category pages (priority: 0.7, weekly)
```

## Robots.txt Configuration

### Allowed

- `/` - All public pages
- `/blog/*` - All blog content
- `/pricing`, `/services`, `/contact` - Static pages

### Disallowed

- `/admin/*` - Admin dashboard
- `/portal/*` - Client portal
- `/api/*` - API endpoints
- `/auth/*` - Authentication pages
- `/blog/search*` - Search result pages (duplicate content)

### Special Rules

- **GPTBot**: Disallowed (prevents AI scraping)
- **ChatGPT-User**: Disallowed (prevents AI scraping)
- **Sitemap Reference**: Includes link to sitemap.xml

## Implementation Details

### Prisma Query

```typescript
const blogPosts = await prisma.blogPost.findMany({
  where: {
    status: "PUBLISHED",
    publishedAt: { lte: new Date() },
  },
  select: {
    slug: true,
    updatedAt: true,
    publishedAt: true,
  },
  orderBy: {
    publishedAt: "desc",
  },
});
```

### Base URL Configuration

Uses environment variable for production URLs:

```typescript
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://designpi.com";
```

### Type Safety

Fully typed with Next.js MetadataRoute types:

```typescript
Promise<MetadataRoute.Sitemap>;
MetadataRoute.Robots;
```

## Accessing the Files

### Sitemap

- **URL**: `https://yourdomain.com/sitemap.xml`
- **Format**: XML
- **Auto-generated**: Yes, on each request

### Robots.txt

- **URL**: `https://yourdomain.com/robots.txt`
- **Format**: Text
- **Auto-generated**: Yes, on each request

## Environment Setup

### Required Environment Variable

Add to `.env.local`:

```bash
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### Development

During development, defaults to placeholder URL. Update for production deployment.

## SEO Benefits

### Search Engine Optimization

1. **Discovery**: Helps search engines find all pages
2. **Indexing**: Provides metadata for better indexing
3. **Freshness**: Shows when content was updated
4. **Priorities**: Guides crawlers to important content

### Best Practices

- ✅ Dynamic updates (no manual editing)
- ✅ Proper last modified dates
- ✅ Priority and frequency hints
- ✅ Excludes search pages (duplicate content)
- ✅ Blocks AI scrapers
- ✅ References sitemap in robots.txt

## Verification

### Google Search Console

1. Add sitemap: `https://yourdomain.com/sitemap.xml`
2. Monitor indexing status
3. Check for errors

### Bing Webmaster Tools

1. Submit sitemap URL
2. Verify crawl stats
3. Monitor coverage

### Manual Testing

```bash
# View sitemap
curl https://yourdomain.com/sitemap.xml

# View robots.txt
curl https://yourdomain.com/robots.txt

# Validate XML
curl https://yourdomain.com/sitemap.xml | xmllint --format -
```

## Example Output

### Sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://designpi.com/</loc>
    <lastmod>2025-11-25</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://designpi.com/blog/getting-started-with-nextjs</loc>
    <lastmod>2025-11-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- More URLs... -->
</urlset>
```

### Robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /portal/
Disallow: /api/
Disallow: /auth/
Disallow: /blog/search

User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

Sitemap: https://designpi.com/sitemap.xml
```

## Maintenance

### Automatic Updates

The sitemap automatically updates when:

- New blog posts are published
- Posts are updated
- Categories are added/modified
- No manual intervention needed

### Performance

- Queries are optimized (select only needed fields)
- Results are ordered efficiently
- No caching issues (generated per request)

## Advanced Configuration

### Adding New Static Routes

Edit `app/sitemap.ts`:

```typescript
{
  url: `${baseUrl}/new-page`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.8,
}
```

### Excluding Specific Posts

Add conditions to the where clause:

```typescript
where: {
  status: "PUBLISHED",
  publishedAt: { lte: new Date() },
  // Add custom conditions
  featured: true, // Only featured posts
}
```

### Multiple Sitemaps

For large sites (>50,000 URLs), create sitemap index:

```typescript
// app/sitemap.ts - index
// app/sitemap-posts.ts - posts only
// app/sitemap-categories.ts - categories only
```

## Troubleshooting

### Sitemap Not Updating

1. Check database connection
2. Verify Prisma client is updated: `npx prisma generate`
3. Clear Next.js cache: `rm -rf .next`
4. Rebuild: `npm run build`

### Wrong Base URL

1. Check environment variable: `NEXT_PUBLIC_BASE_URL`
2. Verify it's set in production deployment
3. Restart server after changes

### Missing Routes

1. Verify posts are PUBLISHED status
2. Check publishedAt is in the past
3. Ensure slugs are unique
4. Check Prisma query filters

## Future Enhancements

### Possible Improvements

1. **Image Sitemap**: Add images to sitemap entries
2. **News Sitemap**: Dedicated sitemap for news/blog content
3. **Video Sitemap**: If adding video content
4. **Multi-language**: Add hreflang annotations
5. **Sitemap Index**: Split into multiple sitemaps for scale
6. **Cache Layer**: Redis caching for performance
7. **Incremental Updates**: Only regenerate changed entries

### Analytics Integration

Track sitemap usage:

- Which pages get crawled most
- Indexing success rates
- Time to index new content
- Coverage reports from search engines
