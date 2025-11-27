"use client";

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon, FolderIcon } from "@heroicons/react/24/outline";
import BlogCard from "@/components/BlogCard";

interface Category {
  id: string;
  name: string;
  slug: string;
  _count?: {
    posts: number;
  };
}

interface RecentPost {
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
}

interface BlogLayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
  currentCategory?: string | null;
}

export default function BlogLayout({
  children,
  showSidebar = true,
  currentCategory = null,
}: BlogLayoutProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingRecent, setLoadingRecent] = useState(true);

  useEffect(() => {
    if (showSidebar) {
      fetchCategories();
      fetchRecentPosts();
    }
  }, [showSidebar]);

  const fetchCategories = async () => {
    try {
      setLoadingCategories(true);
      const response = await fetch("/api/blog/categories");
      const data = await response.json();
      if (response.ok) {
        setCategories(data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoadingCategories(false);
    }
  };

  const fetchRecentPosts = async () => {
    try {
      setLoadingRecent(true);
      const response = await fetch("/api/blog/posts?limit=5");
      const data = await response.json();
      if (response.ok) {
        setRecentPosts(data.posts || []);
      }
    } catch (error) {
      console.error("Error fetching recent posts:", error);
    } finally {
      setLoadingRecent(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/blog/search?q=${encodeURIComponent(
        searchQuery
      )}`;
    }
  };

  const formatDate = (date: Date | string | null) => {
    if (!date) return "Draft";
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className={`grid ${
            showSidebar ? "lg:grid-cols-[1fr_320px]" : "grid-cols-1"
          } gap-8`}
        >
          {/* Main Content */}
          <main className="min-w-0">{children}</main>

          {/* Sidebar */}
          {showSidebar && (
            <aside className="space-y-8">
              {/* Search Bar */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MagnifyingGlassIcon className="h-5 w-5 text-indigo-600" />
                  Search
                </h3>
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-indigo-600 transition-colors"
                  >
                    <MagnifyingGlassIcon className="h-5 w-5" />
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FolderIcon className="h-5 w-5 text-indigo-600" />
                  Categories
                </h3>

                {loadingCategories ? (
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-10 bg-gray-100 rounded-full animate-pulse"
                      ></div>
                    ))}
                  </div>
                ) : categories.length === 0 ? (
                  <p className="text-gray-500 text-sm">No categories yet.</p>
                ) : (
                  <div className="space-y-2">
                    <Link
                      href="/blog"
                      className={`flex items-center justify-between px-3 py-2 rounded-full transition-colors ${
                        !currentCategory
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <span className="font-medium">All Posts</span>
                      <span
                        className={`text-sm ${
                          !currentCategory ? "text-white/80" : "text-gray-500"
                        }`}
                      >
                        {categories.reduce(
                          (sum, cat) => sum + (cat._count?.posts || 0),
                          0
                        )}
                      </span>
                    </Link>
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/blog?category=${category.id}`}
                        className={`flex items-center justify-between px-3 py-2 rounded-full transition-colors ${
                          currentCategory === category.id
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        <span className="font-medium truncate">
                          {category.name}
                        </span>
                        <span
                          className={`text-sm ml-2 ${
                            currentCategory === category.id
                              ? "text-white/80"
                              : "text-gray-500"
                          }`}
                        >
                          {category._count?.posts || 0}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Recent Posts
                </h3>

                {loadingRecent ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="space-y-2">
                        <div className="h-4 bg-gray-100 rounded animate-pulse"></div>
                        <div className="h-3 bg-gray-100 rounded w-2/3 animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                ) : recentPosts.length === 0 ? (
                  <p className="text-gray-500 text-sm">No posts yet.</p>
                ) : (
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          {/* Thumbnail */}
                          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
                            {post.coverImage ? (
                              <img
                                src={post.coverImage}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <svg
                                  className="w-6 h-6 text-white/50"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-1">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {formatDate(post.publishedAt)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Newsletter/CTA (Optional) */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                <p className="text-sm text-white/90 mb-4">
                  Get the latest articles and insights delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-2 bg-white text-indigo-600 font-semibold rounded-full text-center hover:bg-gray-100 transition-colors"
                  >
                    Subscribe Now
                  </Link>
                  <a
                    href="/feed.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-2 bg-white/10 text-white font-medium rounded-full text-center hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    RSS Feed
                  </a>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
