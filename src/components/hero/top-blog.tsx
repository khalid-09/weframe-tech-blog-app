"use client";

import { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import { transformToBlogData } from "@/lib/utils";
import BlogGrid from "./blog-grid";
import { BlogData } from "@/types/blog";

const BLOGS_PER_PAGE = 9;

const TopBlog = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchBlogs = async () => {
      const allBlogs = await builder.getAll("blogs", {
        sort: {
          createdDate: 1,
        },
        fields: "id,name,data",
        query: { "data.category": "Blog" },
      });

      const transformedBlogs = transformToBlogData(allBlogs);
      setBlogs(transformedBlogs);
      setTotalPages(Math.ceil(transformedBlogs.length / BLOGS_PER_PAGE));
    };

    fetchBlogs();
  }, []);

  return (
    <div className="space-y-28">
      <BlogGrid
        blogs={blogs}
        blogsPerPage={BLOGS_PER_PAGE}
        totalPages={totalPages}
      />
    </div>
  );
};

export default TopBlog;
