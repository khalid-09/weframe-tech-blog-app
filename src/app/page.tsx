import CaseStudies from "@/components/features/case-studies";
import FAQS from "@/components/faqs/faqs";
import Insights from "@/components/features/insights";
import Hero from "@/components/hero/hero";

// import { RenderBuilderContent } from "@/components/builder";
// import { builder } from "@builder.io/sdk";

// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// const HomePage = async () => {
//   const builderModelName = "page";
//   const content = await builder
//     .get(builderModelName, {
//       userAttributes: {
//         urlPath: "/",
//       },
//     })
//     .toPromise();

//   return (
//     <>
//       <RenderBuilderContent content={content} model={builderModelName} />
//     </>
//   );
// };

const HomePage = () => {
  return (
    <>
      <Hero />
      <Insights />
      <CaseStudies />
      <FAQS />
    </>
  );
};

export default HomePage;
