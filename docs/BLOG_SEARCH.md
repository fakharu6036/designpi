# Blog Search Page

## Overview

The blog search page (`/blog/search`) provides server-side full-text search capabilities across blog posts using Prisma filtering. It searches through title, excerpt, content, SEO title, and SEO description fields.

## Features

### 1. Full-Text Search

- **Multi-field search**: Searches across title, excerpt, content, seoTitle, and seoDescription
- **Case-insensitive**: All searches ignore case
- **Server-side rendering**: Fast, SEO-friendly search results
- **Real-time results**: No client-side delays

### 2. Category Filtering

- Filter results by blog category
- Shows all categories with active highlighting
- Combines with search query for refined results
- Category filter displays alongside search results

### 3. Pagination

- 12 posts per page
- Smart pagination with ellipsis for large page counts
- Shows pages: First, Last, Current, and ±1 adjacent pages
- Previous/Next navigation buttons
- Page count display

### 4. UI Features

- **Active filters display**: Shows current search query and category as removable badges
- **Results count**: Displays total number of matching posts
- **Empty state**: User-friendly message when no results found
- **Loading states**: Skeleton screens during data fetch
- **Responsive grid**: 1/2/3 columns based on screen size

## Usage

### Basic Search

Navigate to `/blog/search?q=your-search-term`

Example: `/blog/search?q=javascript`

### Category Filter

Add category parameter: `/blog/search?q=javascript&category=category-id`

### Pagination

Add page parameter: `/blog/search?q=javascript&page=2`

### Combined Filters

Combine all parameters:

```
/blog/search?q=react&category=abc123&page=2
```

## Integration Points

### 1. BlogLayout Component

The search sidebar in BlogLayout redirects to `/blog/search?q=query`

### 2. Blog Listing Page

The main blog page search form can redirect to `/blog/search` for advanced search

### 3. Direct Links

Link to search from anywhere:

```tsx
<Link href="/blog/search?q=example">Search Results</Link>
```

## Technical Implementation

### Server-Side Search

```typescript
const whereClause = {
  status: "PUBLISHED",
  publishedAt: { lte: new Date() },
  OR: [
    { title: { contains: query, mode: "insensitive" } },
    { excerpt: { contains: query, mode: "insensitive" } },
    { content: { contains: query, mode: "insensitive" } },
    { seoTitle: { contains: query, mode: "insensitive" } },
    { seoDescription: { contains: query, mode: "insensitive" } },
  ],
};
```

### Prisma Query

```typescript
const posts = await prisma.blogPost.findMany({
  where: whereClause,
  include: {
    category: { select: { name: true, slug: true } },
    author: { select: { name: true, image: true } },
  },
  orderBy: { publishedAt: "desc" },
  skip: (page - 1) * POSTS_PER_PAGE,
  take: POSTS_PER_PAGE,
});
```

### Performance Optimization

- Parallel queries for posts, count, and categories
- Suspense boundary with skeleton loading
- Image priority for first 3 results
- Server-side rendering for instant results

## SEO Configuration

### Metadata

- Dynamic title based on search query
- Custom description for search pages
- `robots: { index: false }` to prevent indexing search result pages
- Still follows links for crawler discovery

### URL Structure

Clean, readable URLs:

- `/blog/search?q=keyword` (search)
- `/blog/search?q=keyword&category=id` (filtered)
- `/blog/search?q=keyword&page=2` (paginated)

## Components Used

### BlogCard

Reusable card component displaying:

- Cover image with fallback
- Title and excerpt
- Category badge
- Author info
- Publication date
- Hover animations

### BlogLayout

Two-column layout with:

- Main content area
- Sidebar with categories, recent posts, search

### Heroicons

- MagnifyingGlassIcon (search)
- FunnelIcon (filters)
- XMarkIcon (remove filters)

## Customization

### Adjust Posts Per Page

Change `POSTS_PER_PAGE` constant:

```typescript
const POSTS_PER_PAGE = 12; // Default: 12
```

### Modify Search Fields

Edit the `OR` array in `whereClause`:

```typescript
OR: [
  { title: { contains: query, mode: "insensitive" } },
  // Add or remove fields
];
```

### Change Pagination Display

Modify the pagination filter logic:

```typescript
.filter((pageNum) => {
  // Customize which page numbers to show
  return pageNum === 1 || pageNum === totalPages || Math.abs(pageNum - currentPage) <= 1;
})
```

## Future Enhancements

### Potential Improvements

1. **Search suggestions**: Auto-complete while typing
2. **Search history**: Recent searches for logged-in users
3. **Advanced filters**: Date range, author, tags
4. **Sort options**: Relevance, date, popularity
5. **Search analytics**: Track popular search terms
6. **Highlighted excerpts**: Show matching text snippets
7. **Saved searches**: Bookmark search queries
8. **Search API**: Expose as JSON endpoint for external use

### Database Optimization

For better search performance:

1. Add full-text search indexes in MySQL
2. Implement search ranking/relevance scoring
3. Cache frequent search queries
4. Use search-specific database like Elasticsearch for large content

## Error Handling

### Empty Query

If no query provided, shows all published posts (like blog listing)

### Invalid Category

Gracefully handles non-existent category IDs

### Invalid Page

Defaults to page 1 if page number is invalid

### Database Errors

Catches and logs errors, shows user-friendly message

## Testing

### Test Cases

1. Search with single keyword
2. Search with multiple words
3. Search with special characters
4. Category filter only
5. Combined search + category
6. Pagination navigation
7. Empty results
8. No search query
9. Remove filter badges
10. Responsive layout on mobile

### Manual Testing

```bash
# Run dev server
npm run dev

# Test URLs
http://localhost:3000/blog/search?q=test
http://localhost:3000/blog/search?q=javascript&category=xyz
http://localhost:3000/blog/search?q=react&page=2
```
