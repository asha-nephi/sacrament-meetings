"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-between gap-4 text-sm"
    >
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="rounded-full border border-border px-4 py-1.5 font-medium transition-colors hover:bg-border"
        >
          Previous
        </Link>
      ) : (
        <span />
      )}

      <span className="font-medium text-muted">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className="rounded-full border border-border px-4 py-1.5 font-medium transition-colors hover:bg-border"
        >
          Next
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
