import BlogHeading from "../blog-heading";

const FeatureHeader = () => {
  return (
    <div className="mx-auto max-w-[47.5rem] space-y-5">
      <div className="space-y-4">
        <BlogHeading />
        <h2 className="text-5xl font-bold leading-[3.75rem] tracking-[-2px]">
          Insights and updates
        </h2>
      </div>
      <p className="text-xl leading-8 tracking-[0.4px] text-secondary-text">
        Stay Informed with our latest articles
      </p>
    </div>
  );
};

export default FeatureHeader;
