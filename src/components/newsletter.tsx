import { ArrowUpRight } from "lucide-react";

const NewsLetter = () => {
  return (
    <header className="flex h-[4.188rem] items-center justify-between bg-newsletter px-4 text-white md:justify-center">
      <h4 className="w-2/3 text-sm leading-5 md:w-fit md:text-xl md:leading-8 md:tracking-[-0.4px]">
        Subscribe to our Newsletter For New & latest Blogs and Resources
      </h4>
      <ArrowUpRight className="size-8 text-mint" />
    </header>
  );
};

export default NewsLetter;
