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
        className={` ${poppins.className} text-[5rem] font-medium leading-[5.313rem] tracking-[-0.325rem] antialiased`}
      >
        Explore our Knowledge Base
      </h1>
      <p className="text-2xl leading-8 tracking-[-0.46px] text-secondary-text">
        Insights and resources for AI in healthcare
      </p>
    </div>
  );
};

export default BlogHeader;
