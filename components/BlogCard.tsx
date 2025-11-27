import Link from "next/link";
import Image from "next/image";
import {
  CalendarIcon,
  FolderIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    coverImage: string | null;
    publishedAt: Date | string | null;
    category?: {
      name: string;
      slug: string;
    } | null;
    author?: {
      name: string | null;
      image: string | null;
    } | null;
  };
  priority?: boolean;
}

export default function BlogCard({ post, priority = false }: BlogCardProps) {
  const formatDate = (date: Date | string | null) => {
    if (!date) return "Draft";
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getAuthorInitials = (name: string | null) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Cover Image */}
      <div className="relative h-56 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            priority={priority}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-20 h-20 text-white opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
        )}

        {/* Category Badge */}
        {post.category && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-indigo-600 rounded-full text-xs font-semibold shadow-md">
              <FolderIcon className="h-3.5 w-3.5" />
              {post.category.name}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* Author */}
          <div className="flex items-center gap-2">
            {post.author?.image ? (
              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <Image
                  src={post.author.image}
                  alt={post.author.name || "Author"}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">
                {post.author?.name ? (
                  getAuthorInitials(post.author.name)
                ) : (
                  <UserIcon className="h-4 w-4" />
                )}
              </div>
            )}
            <span className="text-sm text-gray-700 font-medium">
              {post.author?.name || "Anonymous"}
            </span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-1.5 text-gray-500">
            <CalendarIcon className="h-4 w-4" />
            <span className="text-sm">{formatDate(post.publishedAt)}</span>
          </div>
        </div>
      </div>

      {/* Hover Indicator */}
      <div className="h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </Link>
  );
}
