import Feature from "./feature";
import { InsightsProps } from "./insights";

const CaseStudies = ({
  title,
  heading,
  subHeading,
  blogSelections = [],
}: InsightsProps) => {
  const blogIds = blogSelections
    .map((selection) => selection.blogRef?.id)
    .filter(Boolean);

  return (
    <section className="space-y-[3.75rem] px-10 pb-28 pt-32">
      <Feature
        title={title}
        subHeading={subHeading}
        heading={heading}
        selectedBlogIds={blogIds}
        category="case-studies"
      />
    </section>
  );
};

export default CaseStudies;
