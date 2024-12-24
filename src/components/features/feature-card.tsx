import { BlogData } from "@/types/blog";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FeatureCardProps {
  blog: BlogData;
}

const FeatureCard = ({
  blog: {
    data: { tag, displayImage, timeToRead, title, description },
  },
}: FeatureCardProps) => {
  return (
    <div className="max-w-[24.625rem] space-y-2.5 rounded-xl bg-white md:max-w-full">
      <div className="relative min-h-[17.563rem] max-w-[26.625rem] overflow-hidden rounded-xl">
        <Image
          src={displayImage}
          fill
          alt="Picture of the author"
          className="absolute object-cover"
        />
      </div>
      <div className="space-y-4 p-4">
        <div className="flex items-center gap-6">
          <span className="bg-mint px-2 py-1 font-medium text-white">
            {tag[0]}
          </span>
          <span className="font-medium tracking-[-0.48px]">
            {timeToRead} mins
          </span>
        </div>
        <p className="text-xl font-semibold leading-7 tracking-[-0.6px]">
          {title}
        </p>
        <p className="leading-6 tracking-[-0.5px] text-secondary-text opacity-80">
          {description}
        </p>
        <Link href="/" className="flex items-center gap-2 text-mint">
          <span className="font-medium tracking-[-0.48px] underline underline-offset-4">
            Read more
          </span>
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
