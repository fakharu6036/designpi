"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { FolderIcon } from "@heroicons/react/24/outline";

interface Category {
  id: string;
  name: string;
  slug: string;
  _count?: {
    posts: number;
  };
}

interface BlogCategoryNavProps {
  variant?: "horizontal" | "vertical";
  showPostCount?: boolean;
  className?: string;
}

export default function BlogCategoryNav({
  variant = "horizontal",
  showPostCount = true,
  className = "",
}: BlogCategoryNavProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentCategory = searchParams ? searchParams.get("category") : null;

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/blog/categories");
      const data = await response.json();
      if (response.ok) {
        setCategories(data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={className}>
        <div
          className={`flex ${
            variant === "horizontal" ? "flex-row" : "flex-col"
          } gap-2 animate-pulse`}
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-10 bg-gray-200 rounded-full"
              style={{ width: variant === "horizontal" ? "120px" : "100%" }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  const totalPosts = categories.reduce(
    (sum, cat) => sum + (cat._count?.posts || 0),
    0
  );

  // Horizontal variant (like tabs/pills)
  if (variant === "horizontal") {
    return (
      <div className={`overflow-x-auto ${className}`}>
        <div className="flex flex-wrap gap-2 min-w-max pb-2">
          {/* All Posts */}
          <Link
            href="/blog"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
              !currentCategory
                ? "bg-primary text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <FolderIcon className="h-4 w-4" />
            <span>All Posts</span>
            {showPostCount && (
              <span
                className={`px-2 py-0.5 text-xs rounded-full ${
                  !currentCategory
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {totalPosts}
              </span>
            )}
          </Link>

          {/* Category Pills */}
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/blog?category=${category.id}`}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                currentCategory === category.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <span>{category.name}</span>
              {showPostCount && (
                <span
                  className={`px-2 py-0.5 text-xs rounded-full ${
                    currentCategory === category.id
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {category._count?.posts || 0}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Vertical variant (like sidebar list)
  return (
    <div className={className}>
      <div className="space-y-1">
        {/* All Posts */}
        <Link
          href="/blog"
          className={`flex items-center justify-between px-3 py-2 rounded-full transition-colors ${
            !currentCategory
              ? "bg-primary text-white"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <FolderIcon className="h-4 w-4 flex-shrink-0" />
            <span className="font-medium truncate">All Posts</span>
          </div>
          {showPostCount && (
            <span
              className={`text-sm ml-2 flex-shrink-0 ${
                !currentCategory ? "text-white/80" : "text-gray-500"
              }`}
            >
              {totalPosts}
            </span>
          )}
        </Link>

        {/* Category List */}
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/blog?category=${category.id}`}
            className={`flex items-center justify-between px-3 py-2 rounded-full transition-colors ${
              currentCategory === category.id
                ? "bg-primary text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <span className="font-medium truncate">{category.name}</span>
            {showPostCount && (
              <span
                className={`text-sm ml-2 flex-shrink-0 ${
                  currentCategory === category.id
                    ? "text-white/80"
                    : "text-gray-500"
                }`}
              >
                {category._count?.posts || 0}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
