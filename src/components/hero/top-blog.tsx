"use client";

import { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import { transformToBlogData } from "@/lib/utils";
import BlogGrid from "./blog-grid";
import { BlogData } from "@/types/blog";
import BlogSkeleton from "./blog-skeleton";

const BLOGS_PER_PAGE = 9;

interface TopBlogProps {
  searchQuery: string;
  category: string;
}

const TopBlog = ({ searchQuery, category }: TopBlogProps) => {
  const [allBlogs, setAllBlogs] = useState<BlogData[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogData[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const query = category === "all" ? {} : { "data.category": category };
        const blogs = await builder.getAll("blogs", {
          sort: {
            createdDate: 1,
          },
          fields: "id,name,data",
          query: { ...query },
        });

        const transformedBlogs = transformToBlogData(blogs);
        setAllBlogs(transformedBlogs);
        setFilteredBlogs(transformedBlogs);
        setTotalPages(Math.ceil(transformedBlogs.length / BLOGS_PER_PAGE));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [category]);

  useEffect(() => {
    const filtered = allBlogs.filter((blog) =>
      blog.data.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredBlogs(filtered);
    setTotalPages(Math.ceil(filtered.length / BLOGS_PER_PAGE));
  }, [searchQuery, allBlogs]);

  if (isLoading) {
    return (
      <div className="space-y-28">
        <BlogSkeleton />
      </div>
    );
  }

  return (
    <div className="space-y-28">
      {filteredBlogs.length > 0 ? (
        <BlogGrid
          blogs={filteredBlogs}
          blogsPerPage={BLOGS_PER_PAGE}
          totalPages={totalPages}
        />
      ) : (
        <div className="text-center text-gray-500">
          <p>No blogs found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default TopBlog;

// import { builder } from "@builder.io/sdk";
// import { transformToNewBlogData } from "@/lib/utils";
// import BlogCard from "./blog-card";

// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// interface TopBlogProps {
//   category: string;
// }

// const TopBlog = async ({ category }: TopBlogProps) => {
//   const query = category === "all" ? {} : { "data.category": category };

//   const allBlogs = await builder.getAll("home-blogs", {
//     sort: {
//       createdDate: 1,
//     },
//     fields: "id,name,data",
//     query: { ...query },
//   });

//   const transformedBlogs = transformToNewBlogData(allBlogs);

//   return (
//     <div className="space-y-28">
//       <div>
//         {transformedBlogs.map((blog) => (
//           <BlogCard blog={blog} key={blog.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopBlog;
