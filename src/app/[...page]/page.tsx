import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import FAQS from "@/components/faqs/faqs";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
}

const builderModelName = "page";

// export const dynamic = "force-dynamic";

const Page = async ({ params }: PageProps) => {
  const isRootPath = (await params).page?.[0] === "__index";
  const urlPath = isRootPath ? "/" : `/${(await params).page?.join("/")}`;
  const content = await builder
    .get(builderModelName, {
      cachebust: true,
      userAttributes: {
        urlPath,
      },
      enrich: true,
    })
    .toPromise();

  return (
    <>
      <RenderBuilderContent content={content} model={builderModelName} />
      <FAQS />
    </>
  );
};

export default Page;
