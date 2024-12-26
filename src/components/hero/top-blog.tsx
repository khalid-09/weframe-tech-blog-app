import { builder } from "@builder.io/sdk";
import { transformToBlogData } from "@/lib/utils";
import BlogPagination from "./blog-pagination";
import BlogCard from "./blog-card";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const TopBlog = async () => {
  const allBlogs = await builder.getAll("blogs", {
    sort: {
      createdDate: 1,
    },
    fields: "id,name,data",
    query: { "data.category": "Blog" },
  });

  const blogs = transformToBlogData(allBlogs);

  return (
    <div className="space-y-28">
      <div className="mx-auto grid max-w-[83.25rem] grid-cols-1 gap-2 md:grid-cols-3 md:gap-5">
        {/* <div className="mx-auto flex max-w-[83.25rem] flex-wrap items-center gap-5"> */}
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div>
        <BlogPagination />
      </div>
    </div>
  );
};

export default TopBlog;
