# RSS Feed

## Overview

Automatically generated RSS 2.0 XML feed containing the latest 50 published blog posts with full content and metadata.

## Access URL

- **Production**: `https://yourdomain.com/feed.xml`
- **Local**: `http://localhost:3000/feed.xml`

## Features

### RSS 2.0 Standard

Fully compliant with RSS 2.0 specification including:

- Channel metadata (title, description, link)
- Item entries with required fields
- Namespace support (Atom, Content, Dublin Core)
- Proper XML encoding and escaping

### Feed Metadata

```xml
<channel>
  <title>Designpi Blog</title>
  <description>Latest articles, tutorials, and insights</description>
  <language>en-us</language>
  <lastBuildDate>[Auto-generated from latest post]</lastBuildDate>
  <copyright>Copyright 2025 Designpi</copyright>
</channel>
```

### Item Fields

Each blog post includes:

- **title**: Post title (XML-escaped)
- **link**: Full URL to blog post
- **guid**: Permanent unique identifier
- **description**: Excerpt or content preview (300 chars)
- **content:encoded**: Full post content (CDATA)
- **pubDate**: Publication date (RFC 822 format)
- **author**: Author email and name
- **category**: Blog category name
- **enclosure**: Cover image (if available)

## Query Details

### Database Query

```typescript
await prisma.blogPost.findMany({
  where: {
    status: "PUBLISHED",
    publishedAt: { lte: new Date() },
  },
  include: {
    author: { select: { name: true, email: true } },
    category: { select: { name: true } },
  },
  orderBy: { publishedAt: "desc" },
  take: 50,
});
```

### Filters

- Only PUBLISHED posts
- Only posts with publishedAt in the past
- Ordered by newest first
- Limited to 50 most recent posts

## Caching

### HTTP Headers

```
Content-Type: application/xml; charset=utf-8
Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400
```

### Cache Strategy

- **Public cache**: Can be cached by CDN/proxy
- **Max age**: 1 hour (3600 seconds)
- **Stale-while-revalidate**: 24 hours (86400 seconds)

## Integration

### Auto-discovery

Added to `app/layout.tsx`:

```typescript
alternates: {
  types: {
    "application/rss+xml": [
      { url: "/feed.xml", title: "Designpi Blog RSS Feed" },
    ],
  },
}
```

This adds a `<link>` tag in the HTML head:

```html
<link
  rel="alternate"
  type="application/rss+xml"
  title="Designpi Blog RSS Feed"
  href="/feed.xml"
/>
```

### Sidebar Link

Added RSS Feed button in `BlogLayout` sidebar for easy subscription.

## RSS Readers

### Compatible Readers

- **Feedly**: https://feedly.com
- **Inoreader**: https://www.inoreader.com
- **NewsBlur**: https://newsblur.com
- **The Old Reader**: https://theoldreader.com
- **RSS Owl**: Desktop client
- **NetNewsWire**: macOS/iOS

### Testing

```bash
# View feed
curl https://yourdomain.com/feed.xml

# Validate XML
curl https://yourdomain.com/feed.xml | xmllint --format -

# Test in reader
# Paste feed URL: https://yourdomain.com/feed.xml
```

## XML Structure

### Example Output

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Designpi Blog</title>
    <link>https://designpi.com/blog</link>
    <description>Latest articles and insights</description>
    <language>en-us</language>
    <lastBuildDate>Mon, 25 Nov 2025 12:00:00 GMT</lastBuildDate>
    <atom:link href="https://designpi.com/feed.xml"
               rel="self" type="application/rss+xml"/>

    <item>
      <title>Getting Started with Next.js 16</title>
      <link>https://designpi.com/blog/nextjs-16-guide</link>
      <guid isPermaLink="true">https://designpi.com/blog/nextjs-16-guide</guid>
      <description><![CDATA[Learn the new features...]]></description>
      <content:encoded><![CDATA[<p>Full content here...</p>]]></content:encoded>
      <pubDate>Mon, 25 Nov 2025 10:00:00 GMT</pubDate>
      <author>john@designpi.com (John Doe)</author>
      <category>Tutorial</category>
      <enclosure url="https://example.com/cover.jpg" type="image/jpeg"/>
    </item>
    <!-- More items... -->
  </channel>
</rss>
```

## Namespaces

### Atom

```xml
xmlns:atom="http://www.w3.org/2005/Atom"
```

Used for self-referencing link (`<atom:link>`).

### Content

```xml
xmlns:content="http://purl.org/rss/1.0/modules/content/"
```

Enables `<content:encoded>` for full HTML content.

### Dublin Core

```xml
xmlns:dc="http://purl.org/dc/elements/1.1/"
```

Available for extended metadata (creator, date, etc.).

## Security

### XML Escaping

Special characters are properly escaped:

- `&` → `&amp;`
- `<` → `&lt;`
- `>` → `&gt;`
- `"` → `&quot;`
- `'` → `&apos;`

### CDATA Sections

Content fields use CDATA to safely include HTML:

```xml
<description><![CDATA[Content with <tags>]]></description>
```

## Customization

### Change Feed Limit

Edit the `take` parameter:

```typescript
take: 50, // Change to desired number
```

### Modify Channel Info

Update channel metadata in the RSS template:

```typescript
<title>Your Blog Title</title>
<description>Your description</description>
```

### Add Custom Fields

Extend the item mapping:

```typescript
${post.customField ? `<customTag>${post.customField}</customTag>` : ""}
```

## Validation

### W3C Feed Validator

https://validator.w3.org/feed/

Steps:

1. Enter feed URL
2. Click "Check"
3. Review warnings/errors
4. Fix issues if any

### RSS Checker

https://rssboard.org/rss-validator/

Validates against RSS 2.0 specification.

## Performance

### Query Optimization

- Only selects needed fields
- Includes related data in single query
- Ordered efficiently with database indexes

### Response Time

- Typical: 50-200ms
- With caching: Near-instant from CDN
- Database query + XML generation

## Monitoring

### Analytics

Track RSS usage:

- Subscriber count via feed readers
- Request frequency
- Popular posts in feed
- Geographic distribution

### Health Check

```bash
# Check feed availability
curl -I https://yourdomain.com/feed.xml

# Expected response
HTTP/2 200
content-type: application/xml; charset=utf-8
cache-control: public, s-maxage=3600, stale-while-revalidate=86400
```

## SEO Benefits

### Syndication

- Content distribution across feed readers
- Increased reach and discoverability
- Faster indexing by aggregators

### Social Sharing

- Automatic sharing on platforms that support RSS
- News aggregators pick up content
- Blog networks can syndicate

## Troubleshooting

### Feed Not Updating

1. Check cache headers (1-hour delay expected)
2. Verify posts are PUBLISHED
3. Check publishedAt dates
4. Clear CDN cache if applicable

### Invalid XML

1. Run through validator
2. Check for unescaped characters
3. Verify CDATA sections are closed
4. Test with curl + xmllint

### Missing Posts

1. Verify post status is PUBLISHED
2. Check publishedAt <= current date
3. Ensure not beyond 50-post limit
4. Check database connection

### Encoding Issues

1. Ensure UTF-8 encoding in XML declaration
2. Verify database uses UTF-8
3. Check special character escaping
4. Test with international characters

## Future Enhancements

### Possible Features

1. **Podcast RSS**: Add iTunes namespace for audio
2. **Media RSS**: Enhanced image/video support
3. **Category Feeds**: Separate feeds per category
4. **Author Feeds**: Individual author RSS feeds
5. **Comments Feed**: RSS for blog comments
6. **Full-text Search**: Feed filtered by keywords
7. **Email Digests**: Convert RSS to email
8. **JSON Feed**: Alternative JSON format
9. **Atom Feed**: Separate Atom 1.0 feed
10. **Paginated Feeds**: Multiple pages for archives

### Advanced Options

- Feed analytics integration
- Subscriber authentication
- Premium content feeds
- Multilingual feeds
- Custom feed styling (XSLT)
