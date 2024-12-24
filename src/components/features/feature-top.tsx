import { builder } from "@builder.io/sdk";
import { transformToBlogData } from "@/lib/utils";
import FeatureCard from "./feature-card";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const FeatureTop = async () => {
  const allFeatures = await builder.getAll("blogs", {
    query: { "data.category": "Insights" },
  });

  const features = transformToBlogData(allFeatures);

  return (
    <div className="mx-auto grid max-w-[82.75rem] grid-cols-1 gap-2 md:grid-cols-3 md:gap-8">
      {features.map((feature) => (
        <FeatureCard key={feature.id} blog={feature} />
      ))}
    </div>
  );
};

export default FeatureTop;
