"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

const BlogPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
}: BlogPaginationProps) => {
  const getPageNumbers = () => {
    const pages = [];
    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }
    if (!pages.includes(totalPages) && totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent className="gap-1">
        <PaginationItem>
          <button
            onClick={() => onPageChange(1)}
            className="flex h-8 w-8 items-center justify-center rounded-full p-0 hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === 1 || disabled}
          >
            «
          </button>
        </PaginationItem>

        <PaginationItem>
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full p-0 hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === 1 || disabled}
          >
            ‹
          </button>
        </PaginationItem>

        {getPageNumbers().map((pageNumber, index) => (
          <PaginationItem key={index}>
            {pageNumber === "..." ? (
              <PaginationEllipsis className="h-8 w-8 p-0" />
            ) : (
              <button
                onClick={() => onPageChange(Number(pageNumber))}
                disabled={disabled}
                className={`flex h-8 w-8 items-center justify-center rounded-full p-0 hover:bg-gray-100 disabled:opacity-50 ${
                  currentPage === pageNumber
                    ? "bg-mint text-white hover:bg-[hsl(177,100%,35%)]"
                    : ""
                }`}
              >
                {pageNumber}
              </button>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full p-0 hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === totalPages || disabled}
          >
            ›
          </button>
        </PaginationItem>

        <PaginationItem>
          <button
            onClick={() => onPageChange(totalPages)}
            className="flex h-8 w-8 items-center justify-center rounded-full p-0 hover:bg-gray-100 disabled:opacity-50"
            disabled={currentPage === totalPages || disabled}
          >
            »
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
