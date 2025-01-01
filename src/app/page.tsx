import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import FAQS from "@/components/faqs/faqs";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// export const dynamic = "force-dynamic";

const HomePage = async () => {
  const builderModelName = "page";
  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/",
      },
    })
    .toPromise();
  return (
    <>
      <RenderBuilderContent content={content} model={builderModelName} />
      <FAQS />
    </>
  );
};

export default HomePage;
