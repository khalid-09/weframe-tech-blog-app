import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import FAQS from "@/components/faqs/faqs";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const HomePage = async () => {
  const builderModelName = "page";
  const content = await builder
    .get(builderModelName, {
      cachebust: true,
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
