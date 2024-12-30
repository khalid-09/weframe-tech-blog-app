import Feature from "./feature";

interface BuilderReference {
  "@type": "@builder.io/core:Reference";
  id: string;
  model: string;
}

export interface BlogSelection {
  blogRef: BuilderReference;
}

export interface InsightsProps {
  title: string;
  heading: string;
  subHeading: string;
  blogSelections?: BlogSelection[];
}

const Insights = ({
  blogSelections = [],
  title,
  heading,
  subHeading,
}: InsightsProps) => {
  const blogIds = blogSelections
    .map((selection) => selection.blogRef?.id)
    .filter(Boolean);

  return (
    <section className="space-y-20 bg-surfaceNeutral px-10 pb-28 pt-32 smCustom:px-4">
      <Feature
        title={title}
        heading={heading}
        subHeading={subHeading}
        category="insights"
        selectedBlogIds={blogIds}
      />
    </section>
  );
};

export default Insights;
