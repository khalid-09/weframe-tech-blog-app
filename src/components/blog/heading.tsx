"use client";

import { useRouter } from "next/navigation";
import BlogUserDetails from "./blog-user-details";

interface HeadingProps {
  title: string;
  author: string;
  date: string;
  readingTime: string;
  avatarUrl: string;
  backText: string;
}

const Heading = ({
  title = "Unlocking AI's potential in AI Healthcare",
  author = "Bernd Holbein",
  date = "11 Nov 2024",
  readingTime = "12 mins",
  avatarUrl = "https://cdn.builder.io/api/v1/image/assets%2F76cb628f6d0c4bb38273da6779617caf%2F0c75df2bd5f943398608b5f7c35ad77b",
  backText = "< ALL POST",
}: HeadingProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="mx-auto max-w-[75.125rem] space-y-6 py-4">
      <div>
        <p
          onClick={handleClick}
          className="cursor-pointer text-lg font-bold tracking-[-0.6px] text-mint"
        >
          {backText}
        </p>
        <h1 className="text-[5rem] font-medium leading-[5.313rem] tracking-[-0.325rem]">
          {title}
        </h1>
        <BlogUserDetails
          author={author}
          avatarUrl={avatarUrl}
          date={date}
          readingTime={readingTime}
        />
      </div>
    </div>
  );
};

export default Heading;
