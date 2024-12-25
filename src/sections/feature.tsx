import FeatureHeader, {
  CategoryProps,
} from "@/components/features/feature-header";
import FeatureTop from "@/components/features/feature-top";
import ViewAllButton from "@/components/features/view-all-button";

const Feature = ({ category }: CategoryProps) => {
  return (
    <>
      <FeatureHeader category={category} />
      <FeatureTop category={category} />
      {category === "case-studies" && <ViewAllButton />}
    </>
  );
};

export default Feature;
