"use client";

import { transformToBlogData } from "@/lib/utils";
import FeatureCard from "./feature-card";
import { builder } from "@builder.io/sdk";
import { BlogData } from "@/types/blog";
import { useEffect, useState } from "react";
import ViewAllButton from "./view-all-button";
import { CategoryProps } from "./feature-header";

interface FeatureTopProps extends CategoryProps {
  selectedBlogIds: string[];
}

const FeatureTop = ({ category, selectedBlogIds }: FeatureTopProps) => {
  const [features, setFeatures] = useState<BlogData[]>([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      if (!selectedBlogIds.length) return;

      const selectedFeatures = await builder.getAll("blogs", {
        fields: "id,name,data",
        query: {
          id: { $in: selectedBlogIds },
        },
      });

      const transformedFeatures = transformToBlogData(selectedFeatures);
      setFeatures(transformedFeatures);
    };

    fetchFeatures();
  }, [selectedBlogIds]);

  return (
    <>
      <div className="mx-auto grid max-w-[82.75rem] grid-cols-1 gap-2 md:grid-cols-3 md:gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.id} blog={feature} />
        ))}
      </div>
      {category === "case-studies" && features.length > 3 && <ViewAllButton />}
    </>
  );
};

export default FeatureTop;
