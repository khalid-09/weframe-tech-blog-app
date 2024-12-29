import BlogCard from "@/components/hero/blog-card";
import { transformToBlogData } from "@/lib/utils";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const AllBlogsPage = async () => {
  const allBlogs = await builder.getAll("blogs", {
    sort: {
      createdDate: 1,
    },
    fields: "id,name,data",
  });

  const blogs = transformToBlogData(allBlogs);

  return (
    <section className="space-y-6 py-20">
      <h2 className="text-center text-4xl font-bold">All Blogs</h2>
      <div className="mx-auto grid max-w-[83.25rem] grid-cols-1 gap-2 md:grid-cols-3 md:gap-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default AllBlogsPage;
