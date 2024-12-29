"use client";

import { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import { transformToBlogData } from "@/lib/utils";
import FeatureCard from "./feature-card";
import { CategoryProps } from "./feature-header";
import ViewAllButton from "./view-all-button";
import { BlogData } from "@/types/blog";

const FeatureTop = ({ category }: CategoryProps) => {
  const [features, setFeatures] = useState<BlogData[]>([]);
  const [totalFeatures, setTotalFeatures] = useState(0);

  useEffect(() => {
    const fetchFeatures = async () => {
      const allFeatures = await builder.getAll("blogs", {
        fields: "id,name,data",
        query: { "data.category": category },
      });

      const transformedFeatures = transformToBlogData(allFeatures);
      setFeatures(transformedFeatures.slice(0, 3));
      setTotalFeatures(allFeatures.length);
    };

    fetchFeatures();
  }, [category]);

  return (
    <>
      <div className="mx-auto grid max-w-[82.75rem] grid-cols-1 gap-2 md:grid-cols-3 md:gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.id} blog={feature} />
        ))}
      </div>
      {totalFeatures > 3 && (
        <div className="mx-auto mt-20">
          <ViewAllButton />
        </div>
      )}
    </>
  );
};

export default FeatureTop;
