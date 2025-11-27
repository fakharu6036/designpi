# BlogCategoryNav Component

## Overview

A reusable blog category navigation component that displays all blog categories with active state highlighting and links to filtered category pages. Supports both horizontal (pills/tabs) and vertical (sidebar list) layouts.

## Features

- **Two Layout Variants**: Horizontal pills and vertical list
- **Active State Highlighting**: Gradient background for selected category
- **Post Count Display**: Shows number of posts per category
- **Responsive Design**: Adapts to different screen sizes
- **Loading States**: Skeleton animations while fetching
- **URL-based Selection**: Reads category from URL query params
- **Smooth Animations**: Hover effects and transitions

## Usage

### Basic Import

```tsx
import BlogCategoryNav from "@/components/BlogCategoryNav";
```

### Horizontal Variant (Pills/Tabs)

```tsx
<BlogCategoryNav variant="horizontal" showPostCount={true} />
```

### Vertical Variant (Sidebar List)

```tsx
<BlogCategoryNav variant="vertical" showPostCount={true} />
```

### With Custom Styling

```tsx
<BlogCategoryNav variant="horizontal" showPostCount={false} className="my-4" />
```

## Props

| Prop            | Type                         | Default        | Description            |
| --------------- | ---------------------------- | -------------- | ---------------------- |
| `variant`       | `"horizontal" \| "vertical"` | `"horizontal"` | Layout direction       |
| `showPostCount` | `boolean`                    | `true`         | Show/hide post counts  |
| `className`     | `string`                     | `""`           | Additional CSS classes |

## Layout Variants

### Horizontal Layout

- Pills/tabs design
- Scrollable on small screens
- Flex wrap on larger screens
- Icon + label + count badge
- Best for page headers

### Vertical Layout

- Sidebar list design
- Stacked items
- Compact spacing
- Better for narrow columns
- Best for sidebars

## Styling

### Active State

- Gradient background: `indigo-600` to `purple-600`
- White text
- Shadow elevation
- Badge with light background

### Inactive State

- White background with border
- Gray text
- Hover: light gray background
- Badge with gray background

### Loading State

- Skeleton rectangles
- Pulse animation
- 4 placeholder items
- Matches variant width

## Integration Examples

### Blog Listing Page

```tsx
"use client";

import { Suspense } from "react";
import BlogCategoryNav from "@/components/BlogCategoryNav";

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>

      {/* Category Navigation */}
      <Suspense fallback={<div>Loading categories...</div>}>
        <BlogCategoryNav variant="horizontal" showPostCount={true} />
      </Suspense>

      {/* Blog posts grid */}
    </div>
  );
}
```

### Sidebar Usage

```tsx
<aside className="w-64">
  <h3 className="font-bold mb-4">Categories</h3>
  <BlogCategoryNav variant="vertical" showPostCount={true} />
</aside>
```

### With BlogLayout

```tsx
import BlogLayout from "@/components/BlogLayout";
import BlogCategoryNav from "@/components/BlogCategoryNav";

export default function BlogPage() {
  return (
    <BlogLayout>
      <div className="mb-8">
        <BlogCategoryNav variant="horizontal" />
      </div>
      {/* Content */}
    </BlogLayout>
  );
}
```

## URL Structure

The component reads and links to:

```
/blog - All posts (no category filter)
/blog?category=CATEGORY_ID - Filtered by category
```

Example URLs:

- `/blog` - All posts
- `/blog?category=abc123` - Technology category
- `/blog?category=def456` - Design category

## Data Fetching

Fetches categories from: `/api/blog/categories`

Expected API response:

```json
[
  {
    "id": "abc123",
    "name": "Technology",
    "slug": "technology",
    "_count": {
      "posts": 15
    }
  },
  {
    "id": "def456",
    "name": "Design",
    "slug": "design",
    "_count": {
      "posts": 8
    }
  }
]
```

## Suspense Boundary

**Important**: Wrap component in Suspense when using in server components:

```tsx
import { Suspense } from "react";

<Suspense
  fallback={
    <div className="flex gap-2 animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-10 bg-gray-200 rounded-lg w-32"></div>
      ))}
    </div>
  }
>
  <BlogCategoryNav variant="horizontal" />
</Suspense>;
```

This is required because the component uses `useSearchParams()`.

## Responsive Behavior

### Horizontal Variant

- **Mobile**: Horizontal scroll with min-width
- **Tablet**: Flex wrap, 2-3 items per row
- **Desktop**: All items visible, wrapped

### Vertical Variant

- **All screens**: Stacked list, 100% width
- Truncates long category names
- Maintains consistent item height

## Customization

### Change Active Color

Edit the gradient in the component:

```tsx
// Current
from-indigo-600 to-purple-600

// Custom
from-blue-600 to-cyan-600
```

### Modify Post Count Badge

```tsx
// Hide counts
<BlogCategoryNav showPostCount={false} />

// Style in component
className={`px-2 py-0.5 text-xs rounded-full ...`}
```

### Add Icons to Categories

Extend the component to include category icons:

```tsx
{
  category.icon && <Icon className="h-4 w-4" />;
}
```

## Accessibility

- Semantic `<Link>` elements
- Keyboard navigation support
- Focus states on interactive elements
- Descriptive labels
- Screen reader friendly

## Performance

- Client-side fetching on mount
- Caches categories after first load
- Minimal re-renders
- Optimized with React hooks
- Lazy loading with Suspense

## Error Handling

- Try-catch around API calls
- Console error logging
- Graceful fallback (empty list)
- No crash on fetch failure

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- ES6+ JavaScript
- Next.js App Router

## Future Enhancements

Possible improvements:

1. Category icons/emojis
2. Nested subcategories
3. Category descriptions on hover
4. Sort options (alphabetical, post count)
5. Search/filter categories
6. Keyboard shortcuts
7. Drag-to-reorder (admin)
8. Color themes per category
