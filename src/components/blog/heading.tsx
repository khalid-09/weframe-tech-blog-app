"use client";

import { useRouter } from "next/navigation";
import BlogUserDetails from "./blog-user-details";

interface HeadingProps {
  title: string;
  author: string;
  date: string;
  readingTime: string;
  avatarUrl: string;
}

const Heading = ({
  title = "Unlocking AI's potential in AI Healthcare",
  author = "Bernd Holbein",
  date = "11 Nov 2024",
  readingTime = "12 mins",
  avatarUrl = "https://cdn.builder.io/api/v1/image/assets%2F76cb628f6d0c4bb38273da6779617caf%2F0c75df2bd5f943398608b5f7c35ad77b",
}: HeadingProps) => {
  const backText = "< ALL POSTS";
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="mx-auto my-3 w-full max-w-[75rem] sm:px-6 lg:px-8">
      <div className="space-y-4 sm:space-y-6">
        <p
          onClick={handleClick}
          className="cursor-pointer text-base font-bold tracking-normal text-mint sm:text-lg sm:tracking-[-0.6px]"
        >
          {backText}
        </p>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl sm:font-medium sm:leading-snug sm:tracking-normal md:text-5xl md:leading-snug md:tracking-tight lg:text-[5rem] lg:leading-[1.0625] lg:tracking-[-0.325rem]">
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
