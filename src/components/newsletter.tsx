import { ArrowUpRight } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400"] });

const NewsLetter = () => {
  return (
    <div
      className={`flex h-[4.188rem] items-center justify-center bg-newsletter text-white antialiased ${inter.className}}`}
    >
      <span className="text-xl">
        Subscribe to our Newsletter For New & latest Blogs and Resources
      </span>
      <ArrowUpRight className="text-mint" size={26} />
    </div>
  );
};

export default NewsLetter;
