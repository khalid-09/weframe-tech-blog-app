import { ArrowUpRight } from "lucide-react";

const NewsLetter = () => {
  return (
    <header className="flex h-[4.188rem] items-center justify-center bg-newsletter text-white">
      <h4 className="text-xl leading-8 tracking-[-0.4px]">
        Subscribe to our Newsletter For New & latest Blogs and Resources
      </h4>
      <ArrowUpRight className="text-mint" size={26} />
    </header>
  );
};

export default NewsLetter;
