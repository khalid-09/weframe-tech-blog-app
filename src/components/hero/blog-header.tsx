import { Poppins } from "next/font/google";
import BlogHeading from "../blog-heading";
import { HeroProps } from "./hero";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const BlogHeader = ({ heading, subHeading, title }: HeroProps) => {
  return (
    <div className="space-y-2.5">
      <BlogHeading content={title} />
      <h1
        className={` ${poppins.className} text-6xl font-medium tracking-tight antialiased md:text-[5rem] md:leading-[5.313rem] md:tracking-[-0.325rem]`}
      >
        {heading}
      </h1>
      <p className="text-xl leading-8 tracking-[-0.46px] text-secondary-text md:text-2xl">
        {subHeading}
      </p>
    </div>
  );
};

export default BlogHeader;
