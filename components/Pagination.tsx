"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  hrefBuilder?: (page: number) => string;
  basePath?: string;
  baseQuery?: string;
  className?: string;
}

function getPages(current: number, total: number) {
  const pages: Array<number | "ellipsis"> = [];
  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  pages.push(1);
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  if (start > 2) pages.push("ellipsis");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push("ellipsis");

  pages.push(total);
  return pages;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  hrefBuilder,
  basePath,
  baseQuery,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPages(currentPage, totalPages);
  const isLinkMode =
    typeof hrefBuilder === "function" || basePath !== undefined;

  // Build href function
  const buildHref = (p: number): string => {
    if (hrefBuilder) return hrefBuilder(p);
    if (basePath) {
      const params = new URLSearchParams(baseQuery || "");
      params.set("page", p.toString());
      const query = params.toString();
      return `${basePath}${query ? `?${query}` : ""}`;
    }
    return "#";
  };

  const Prev = () => {
    const prevPage = Math.max(1, currentPage - 1);
    const commonClasses =
      "px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed";
    if (isLinkMode) {
      return (
        <Link
          href={buildHref(prevPage)}
          aria-label="Previous page"
          className={`${commonClasses} ${
            currentPage === 1 ? "pointer-events-none" : ""
          }`}
        >
          Previous
        </Link>
      );
    }
    return (
      <button
        onClick={() => onPageChange && onPageChange(prevPage)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className={commonClasses}
      >
        Previous
      </button>
    );
  };

  const Next = () => {
    const nextPage = Math.min(totalPages, currentPage + 1);
    const commonClasses =
      "px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed";
    if (isLinkMode) {
      return (
        <Link
          href={buildHref(nextPage)}
          aria-label="Next page"
          className={`${commonClasses} ${
            currentPage === totalPages ? "pointer-events-none" : ""
          }`}
        >
          Next
        </Link>
      );
    }
    return (
      <button
        onClick={() => onPageChange && onPageChange(nextPage)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className={commonClasses}
      >
        Next
      </button>
    );
  };

  const Page = ({ page }: { page: number }) => {
    const isActive = page === currentPage;
    const activeClasses =
      "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent";
    const inactiveClasses =
      "border border-gray-300 text-gray-700 hover:bg-gray-50";
    const commonClasses = "px-4 py-2 rounded-full font-semibold transition-all";

    if (isLinkMode) {
      return (
        <Link
          href={buildHref(page)}
          aria-label={`Page ${page}`}
          aria-current={isActive ? "page" : undefined}
          className={`${commonClasses} ${
            isActive ? activeClasses : inactiveClasses
          }`}
        >
          {page}
        </Link>
      );
    }
    return (
      <button
        onClick={() => onPageChange && onPageChange(page)}
        aria-label={`Page ${page}`}
        aria-current={isActive ? "page" : undefined}
        className={`${commonClasses} ${
          isActive ? activeClasses : inactiveClasses
        }`}
      >
        {page}
      </button>
    );
  };

  return (
    <nav
      aria-label="Pagination"
      className={`flex justify-center items-center gap-2 ${className}`}
    >
      <Prev />
      <div className="flex items-center gap-2">
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <span key={`e-${i}`} className="px-2 text-gray-400">
              …
            </span>
          ) : (
            <Page key={p} page={p} />
          )
        )}
      </div>
      <Next />
    </nav>
  );
}
