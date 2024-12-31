"use client";

import { useState } from "react";
import BlogCard from "./blog-card";
import BlogPagination from "./blog-pagination";
import { BlogDataNew } from "@/types/blog";

interface BlogGridProps {
  blogs: BlogDataNew[];
  blogsPerPage: number;
  totalPages: number;
}

const BlogGrid = ({ blogs, blogsPerPage, totalPages }: BlogGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  return (
    <>
      <div className="mx-auto flex max-w-[83.25rem] flex-wrap items-center justify-center gap-4 md:gap-0">
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div>
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default BlogGrid;
