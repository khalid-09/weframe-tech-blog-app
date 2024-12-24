import { BlogData } from "@/types/blog";
import Image from "next/image";

interface BlogCardProps {
  blog: BlogData;
}

const BlogCard = ({
  blog: {
    data: {
      authorName,
      avatar,
      displayImage,
      timeToRead,
      tag,
      title,
      description,
    },
  },
}: BlogCardProps) => {
  return (
    <div className="px-2 py-1.5 md:px-4 md:py-3">
      <div className="space-y-4">
        <div className="relative min-h-[17.563rem] max-w-[24.625rem] overflow-hidden rounded-xl">
          <Image
            src={displayImage}
            alt="blog1"
            fill
            quality={50}
            className="absolute object-cover"
          />
        </div>
        <p className="text-xl font-semibold leading-[1.875rem] tracking-[-0.038rem]">
          {title}
        </p>
        <p className="line-clamp-2 max-w-[24.625rem] leading-[1.625rem] tracking-[-0.031rem] text-secondary-text">
          {description}
        </p>
        <div className="flex items-center gap-4">
          <div className="relative size-[2.625rem] overflow-hidden rounded-full">
            <Image
              quality={30}
              src={avatar}
              alt="avatar image"
              fill
              className="absolute object-cover"
            />
          </div>
          <span className="font-medium leading-5 tracking-[-0.03rem] text-secondary-text">
            {authorName}
          </span>
          <span className="shrink-0 rounded-full bg-mint px-3 py-1.5 text-white">
            {tag[0]}
          </span>
          <span className="font-medium leading-5 tracking-[-0.03rem] text-secondary-text">
            {timeToRead} mins
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
