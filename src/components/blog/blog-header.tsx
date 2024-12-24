import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const BlogHeader = () => {
  return (
    <div className="space-y-2.5">
      <h5 className="text-center text-lg font-bold uppercase leading-6 tracking-[-0.6px] text-mint">
        Blog
      </h5>
      <h1
        className={` ${poppins.className} text-6xl font-medium tracking-tight antialiased md:text-[5rem] md:leading-[5.313rem] md:tracking-[-0.325rem]`}
      >
        Explore our Knowledge Base
      </h1>
      <p className="text-xl leading-8 tracking-[-0.46px] text-secondary-text md:text-2xl">
        Insights and resources for AI in healthcare
      </p>
    </div>
  );
};

export default BlogHeader;
