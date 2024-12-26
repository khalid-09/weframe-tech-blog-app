import BlogTitle from "@/components/blog/blog-title";
import { RenderBuilderContent } from "@/components/builder";
import { builder } from "@builder.io/sdk";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

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
    <section className="px-10 py-16">
      <div className="space-y-3">
        <RenderBuilderContent content={content} model={builderModelName} />
      </div>
      <div className="mx-auto flex max-w-[1666px] gap-10">
        <BlogTitle />
        <div className="w-full max-w-[26.625rem] bg-black">Related Posts</div>
      </div>
    </section>
  );
};

export default BlogPage;
