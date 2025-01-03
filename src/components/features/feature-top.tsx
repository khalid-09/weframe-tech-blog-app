"use client";

import { transformToNewBlogData } from "@/lib/utils";
import FeatureCard from "./feature-card";
import { builder } from "@builder.io/sdk";
import { BlogDataNew } from "@/types/blog";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CategoryProps } from "./feature-header";

interface FeatureTopProps extends CategoryProps {
  selectedBlogIds: string[];
}

const FeatureTop = ({ category, selectedBlogIds }: FeatureTopProps) => {
  const [features, setFeatures] = useState<BlogDataNew[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const ITEMS_PER_PAGE = 3;

  useEffect(() => {
    const fetchFeatures = async () => {
      if (!selectedBlogIds.length) return;

      const selectedFeatures = await builder.getAll("home-blogs", {
        fields: "id,name,data",
        query: {
          id: { $in: selectedBlogIds },
        },
        enrich: true,
        cachebust: true,
      });

      const transformedFeatures = transformToNewBlogData(selectedFeatures);
      setFeatures(transformedFeatures);
    };

    fetchFeatures();
  }, [selectedBlogIds]);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, features.length));
  };

  const handleViewLess = () => {
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const visibleFeatures = features.slice(0, visibleCount);
  const hasMoreItems =
    category === "case-studies" && visibleCount < features.length;

  const isExpanded = visibleCount > ITEMS_PER_PAGE;

  return (
    <div className="flex flex-col gap-8">
      <div className="mx-auto flex max-w-[82.75rem] flex-wrap items-center justify-center gap-4 md:gap-8">
        {visibleFeatures.map((feature) => (
          <FeatureCard key={feature.id} blog={feature} />
        ))}
      </div>
      {category === "case-studies" && features.length > ITEMS_PER_PAGE && (
        <div className="flex items-center justify-center">
          {hasMoreItems ? (
            <Button
              onClick={handleViewMore}
              className="h-[3.25rem] w-[12.75rem] shrink-0 rounded-[8px] border border-mint bg-white p-4 text-start text-base font-bold tracking-[-0.8px] text-mint transition duration-300 hover:bg-mint hover:text-white"
            >
              View All
            </Button>
          ) : (
            isExpanded && (
              <Button
                onClick={handleViewLess}
                className="h-[3.25rem] w-[12.75rem] shrink-0 rounded-[8px] border border-mint bg-white p-4 text-start text-base font-bold tracking-[-0.8px] text-mint transition duration-300 hover:bg-mint hover:text-white"
              >
                View Less
              </Button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default FeatureTop;
