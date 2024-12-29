"use client";

import FeatureHeader, {
  CategoryProps,
} from "@/components/features/feature-header";
import FeatureTop from "@/components/features/feature-top";

const Feature = ({ category }: CategoryProps) => {
  return (
    <>
      <FeatureHeader category={category} />
      <FeatureTop category={category} />
    </>
  );
};

export default Feature;
