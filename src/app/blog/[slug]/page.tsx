import BlogBoldParagraph from "@/components/blog/blog-bold-paragraph";
import BlogInfo from "@/components/blog/blog-info";
import BlogList from "@/components/blog/blog-list";
import BlogParagraph from "@/components/blog/blog-paragraph";
import BlogSubHeading from "@/components/blog/blog-sub-heading";
import BlogSubImage from "@/components/blog/blog-sub-image";
import BlogTitle from "@/components/blog/blog-title";
import { RenderBuilderContent } from "@/components/builder";
import CaseStudies from "@/components/features/case-studies";
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

  console.log(content.data.blocks[0]);

  return (
    <section className="px-10 py-16">
      <div className="space-y-3">
        <RenderBuilderContent content={content} model={builderModelName} />
      </div>
      {/* <BlogInfo /> */}
      {/* <div className="mx-auto flex max-w-[1666px] gap-10">
        <div>
          <BlogTitle />
          <BlogParagraph />
          <BlogParagraph text="Ornare ac sem tortor elementum morbi. Dictum imperdiet pharetra id nulla id cursus. Orci arcu egestas sed tempor. Aliquam at vitae orci velit nullam integer magnis. Vitae in gravida felis tristique. Gravida egestas hendrerit pretium tristique nunc consequat. Enim mi nascetur viverra ornare porta varius mauris justo in. In adipiscing venenatis feugiat sem neque. Sapien enim donec feugiat amet. Malesuada tortor maecenas pellentesque nulla." />
          <BlogSubHeading />
          <BlogParagraph text="Lorem ipsum dolor sit amet consectetur. Enim quis et sapien id integer. Id pulvinar eleifend egestas risus dolor. Nec convallis nunc odio laoreet. Rhoncus eu nunc arcu nullam porttitor tortor placerat. Quisque amet eget nec amet sit sed. Sed morbi nibh venenatis quis at venenatis in. Enim urna adipiscing velit morbi ornare neque et dolor. Ultrices posuere turpis malesuada ut scelerisque nunc morbi nunc turpis. Est massa nulla bibendum cras nisl id augue. Ornare ut turpis vehicula ornare justo auctor laoreet diam id. Pellentesque elit cum nunc egestas imperdiet. Volutpat suspendisse neque ullamcorper eget massa posuere orci et imperdiet. " />
          <BlogParagraph text="Vitae enim nec adipiscing eu id nisl. Quam eleifend quis molestie tristique eget dui vestibulum. Consectetur neque elementum velit fringilla aliquam ut. Ipsum gravida tincidunt enim placerat odio. Elementum velit sed eget integer enim massa fermentum ultricies. Duis purus dignissim vulputate a lectus odio et vel sit. Posuere in amet elementum cursus tortor sit lacus in ac." />
          <BlogList
            text={[
              "Sed iaculis aenean sit sed risus arcu vitae integer elit.",
              "Sed iaculis aenean sit sed risus arcu vitae integer elit.",
              "Sed iaculis aenean sit sed risus arcu vitae integer elit.",
            ]}
          />
          <BlogBoldParagraph />
          <BlogSubHeading />
          <BlogParagraph text="Lorem ipsum dolor sit amet consectetur. Enim quis et sapien id integer. Id pulvinar eleifend egestas risus dolor. Nec convallis nunc odio laoreet. Rhoncus eu nunc arcu nullam porttitor tortor placerat. Quisque amet eget nec amet sit sed. Sed morbi nibh venenatis quis at venenatis in. Enim urna adipiscing velit morbi ornare neque et dolor. Ultrices posuere turpis malesuada ut scelerisque nunc morbi nunc turpis. Est massa nulla bibendum cras nisl id augue. Ornare ut turpis vehicula ornare justo auctor laoreet diam id. Pellentesque elit cum nunc egestas imperdiet. Volutpat suspendisse neque ullamcorper eget massa posuere orci et imperdiet. " />
          <BlogSubImage />
          <BlogBoldParagraph text="Ornare ac sem tortor elementum morbi. Dictum imperdiet pharetra id nulla id cursus. Orci arcu egestas sed tempor. Aliquam at vitae orci velit nullam integer magnis. Vitae in gravida felis tristique. Gravida egestas hendrerit pretium tristique nunc consequat. Enim mi nascetur viverra ornare porta varius mauris justo in. In adipiscing venenatis feugiat sem neque. Sapien enim donec feugiat amet. Malesuada tortor maecenas pellentesque nulla." />
          <BlogList
            text={[
              "Sed iaculis aenean sit sed risus arcu vitae integer elit.",
              "Sed iaculis aenean sit sed risus arcu vitae integer elit.",
              "Sed iaculis aenean sit sed risus arcu vitae integer elit.",
            ]}
          />
          <BlogBoldParagraph text="Ornare ac sem tortor elementum morbi. Dictum imperdiet pharetra id nulla id cursus. Orci arcu egestas sed tempor. Aliquam at vitae orci velit nullam integer magnis. Vitae in gravida felis tristique. Gravida egestas hendrerit pretium tristique nunc consequat. Enim mi nascetur viverra ornare porta varius mauris justo in. In adipiscing venenatis feugiat sem neque. Sapien enim donec feugiat amet. Malesuada tortor maecenas pellentesque nulla. Vitae enim nec adipiscing eu id nisl. Quam eleifend quis molestie tristique eget dui vestibulum. Consectetur neque elementum velit fringilla aliquam ut. Ipsum gravida tincidunt enim placerat odio. Elementum velit sed eget integer enim massa fermentum ultricies. Duis purus dignissim vulputate a lectus odio et vel sit. Posuere in amet elementum cursus tortor sit lacus in ac." />
        </div>
        <div className="w-full max-w-[26.625rem] bg-black">Related Posts</div>
      </div> */}
      <CaseStudies />
    </section>
  );
};

export default BlogPage;
