"use client";

import { useState } from "react";
import BlogCard from "./blog-card";
import BlogPagination from "./blog-pagination";
import { BlogData } from "@/types/blog";

interface BlogGridProps {
  blogs: BlogData[];
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
      <div className="mx-auto grid max-w-[83.25rem] grid-cols-1 gap-2 md:grid-cols-3 md:gap-5">
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
