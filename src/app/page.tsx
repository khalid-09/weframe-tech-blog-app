import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import FAQS from "@/components/faqs/faqs";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const HomePage = async () => {
  const builderModelName = "blog-section";
  const content = await builder.get(builderModelName).promise();
  return (
    <>
      <RenderBuilderContent content={content} model={builderModelName} />
      <FAQS />
    </>
  );
};

export default HomePage;
