import FeatureHeader, { CategoryProps } from "./feature-header";
import FeatureTop from "./feature-top";

export interface HeaderProps {
  title?: string;
  heading?: string;
  subHeading?: string;
}

export interface FeatureProps extends CategoryProps, HeaderProps {
  selectedBlogIds: string[];
}

const Feature = ({
  category,
  selectedBlogIds,
  heading,
  subHeading,
  title,
}: FeatureProps) => {
  return (
    <>
      <FeatureHeader
        heading={heading}
        subHeading={subHeading}
        title={title}
        category={category}
      />
      <FeatureTop category={category} selectedBlogIds={selectedBlogIds} />
    </>
  );
};

export default Feature;
