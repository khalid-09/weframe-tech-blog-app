import { RenderBuilderContent } from "@/components/builder";
// import { transformToNewBlogData } from "@/lib/utils";
// import { BlogDataNew } from "@/types/blog";
import { builder } from "@builder.io/sdk";
// import { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// export const generateMetadata = async ({
//   params,
// }: BlogPageProps): Promise<Metadata> => {
//   const slug = (await params).slug;

//   const builderBlog = (await builder.get("home-blogs", {
//     fields: "id,name,data",
//     query: {
//       "data.slug": slug,
//     },
//   })) as BlogDataNew;

//   if (!builderBlog) {
//     return {
//       title: "Blog Not Found",
//       description: "The requested blog post could not be found",
//     };
//   }

//   return {
//     title: builderBlog.data.title,
//     description: builderBlog.data.description,
//     authors: [{ name: builderBlog.data.authorName }],
//     category: builderBlog.data.category,
//     keywords: [builderBlog.data.tag, builderBlog.data.category],
//     openGraph: {
//       title: builderBlog.data.title,
//       description: builderBlog.data.description,
//       images: [
//         {
//           url: builderBlog.data.displayImage,
//           width: 1200,
//           height: 630,
//           alt: builderBlog.data.title,
//         },
//       ],
//       authors: builderBlog.data.authorName,
//       tags: [builderBlog.data.tag],
//       type: "article",
//       publishedTime: new Date().toISOString(),
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: builderBlog.data.title,
//       description: builderBlog.data.description,
//       images: [builderBlog.data.displayImage],
//       creator: builderBlog.data.authorName,
//     },
//     other: {
//       "reading-time": builderBlog.data.timeToRead,
//       "author-avatar": builderBlog.data.avatar,
//     },
//   };
// };

// export const generateStaticParams = async () => {
//   const allBlogs = await builder.getAll("home-blogs", {
//     sort: {
//       createdDate: 1,
//     },
//     fields: "id,name,data",
//   });

//   const blogs = transformToNewBlogData(allBlogs);

//   return blogs.map((blog) => ({
//     slug: blog.data.slug,
//   }));
// };

const BlogPage = async ({ params }: BlogPageProps) => {
  const builderModelName = "all-blogs";
  const slug = (await params).slug;
  const content = await builder
    .get(builderModelName, {
      query: {
        "data.slug": slug,
      },
    })
    .promise();

  return (
    <article className="overflow-hidden px-10 py-16 smCustom:px-4 smCustom:py-8">
      <RenderBuilderContent content={content} model={builderModelName} />
    </article>
  );
};

export default BlogPage;
