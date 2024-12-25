import BlogHeading from "../blog-heading";

export interface CategoryProps {
  category: "insights" | "case-studies";
}

const FeatureHeader = ({ category }: CategoryProps) => {
  return (
    <div className="mx-auto max-w-[47.5rem] space-y-5">
      <div className="space-y-4">
        <BlogHeading />
        <h2 className="text-5xl font-bold leading-[3.75rem] tracking-[-2px]">
          {category === "insights"
            ? "Insights and updates"
            : "Explore our case studies"}
        </h2>
      </div>
      <p className="text-xl leading-8 tracking-[0.4px] text-secondary-text">
        {category === "insights"
          ? " Stay Informed with our latest articles"
          : "Discover how our AI transforms healthcare pratices"}
      </p>
    </div>
  );
};

export default FeatureHeader;
