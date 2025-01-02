"use client";

import { useState } from "react";
import BlogCard from "./blog-card";
import BlogPagination from "./blog-pagination";
import { BlogDataNew } from "@/types/blog";
import { motion } from "motion/react";

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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="mx-auto flex max-w-[83.25rem] flex-wrap items-center justify-center gap-4 md:gap-0"
      >
        {currentBlogs.map((blog, i) => (
          <BlogCard index={i} key={blog.id} blog={blog} />
        ))}
      </motion.div>
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
