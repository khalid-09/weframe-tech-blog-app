import { cn } from "@/lib/utils";
import BlogHeading from "../blog-heading";

export interface CategoryProps {
  category?: "insights" | "case-studies";
  faq?: boolean;
}

const FeatureHeader = ({ category, faq }: CategoryProps) => {
  const getHeadingText = () => {
    if (faq) return "Frequently asked questions";
    return category === "insights"
      ? "Insights and updates"
      : "Explore our case studies";
  };

  const getParagraphText = () => {
    if (faq) {
      return "Explore to learn more about how Symbiofy can empower your business with AI-driven solutions.";
    }
    return category === "insights"
      ? "Stay informed with our latest articles."
      : "Discover how our AI transforms healthcare practices.";
  };

  return (
    <div className="mx-auto max-w-[47.5rem] space-y-5">
      <div className="space-y-4">
        <BlogHeading type={faq ? "faq" : "blog"} />
        <h2 className="text-5xl font-bold leading-[3.75rem] tracking-[-2px]">
          {getHeadingText()}
        </h2>
      </div>
      <p
        className={cn(
          "text-xl leading-8 tracking-[0.4px] text-secondary-text",
          faq && "text-base leading-[1.625rem] tracking-[-0.5px]",
        )}
      >
        {getParagraphText()}
      </p>
    </div>
  );
};

export default FeatureHeader;
