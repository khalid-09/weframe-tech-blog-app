import { cn } from "@/lib/utils";
import BlogHeading from "../blog-heading";
import { HeaderProps } from "./feature";

export interface CategoryProps {
  category?: "insights" | "case-studies";
  faq?: boolean;
}

interface FeatureHeaderProps extends CategoryProps, HeaderProps {}

const FeatureHeader = ({
  faq,
  subHeading,
  title,
  heading,
}: FeatureHeaderProps) => {
  const getHeadingText = () => {
    if (faq) return "Frequently asked questions";
    return heading;
  };

  const getParagraphText = () => {
    if (faq) {
      return "Explore to learn more about how Symbiofy can empower your business with AI-driven solutions.";
    }
    return subHeading;
  };

  return (
    <div className="mx-auto max-w-[47.5rem] space-y-5">
      <div className="space-y-4">
        <BlogHeading content={title} type={faq ? "faq" : undefined} />
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
