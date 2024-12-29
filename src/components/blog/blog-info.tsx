import Link from "next/link";
import BlogUserDetails from "./blog-user-details";
import linkicon from "../../../public/socials/link.png";
import xicon from "../../../public/socials/x.png";
import ldnicon from "../../../public/socials/ldn.png";
import faicon from "../../../public/socials/fa.png";
import Image from "next/image";

interface BlogInfoProps {
  avatarUrl: string;
  readingTime: string;
  date: string;
  author: string;
  tag: string;
  twitterUrl: string;
  linkedinUrl: string;
  facebookUrl: string;
  link: string;
}

const BlogInfo = ({
  avatarUrl = "https://cdn.builder.io/api/v1/image/assets%2F76cb628f6d0c4bb38273da6779617caf%2F0c75df2bd5f943398608b5f7c35ad77b",
  readingTime = "12 mins",
  date = "11 Nov 2024",
  author = "Bernd Holbein",
  tag = "AI Healthcare",
  twitterUrl = "",
  linkedinUrl = "",
  facebookUrl = "",
  link = "",
}: BlogInfoProps) => {
  return (
    <div className="flex w-full max-w-[75rem] items-center justify-between gap-4">
      <div className="flex w-full items-center gap-6">
        <BlogUserDetails
          avatarUrl={avatarUrl}
          author={author}
          date={date}
          readingTime={readingTime}
        />
        <span className="text-sm font-medium text-mint">{tag}</span>
      </div>
      <div className="flex items-center gap-4">
        <Link href={link}>
          <Image
            src={linkicon}
            alt="Link"
            width={40}
            height={40}
            quality={40}
          />
        </Link>
        <Link href={twitterUrl}>
          <Image src={xicon} alt="Link" width={40} height={40} quality={40} />
        </Link>
        <Link href={linkedinUrl}>
          <Image src={ldnicon} alt="Link" width={40} height={40} quality={40} />
        </Link>
        <Link href={facebookUrl}>
          <Image src={faicon} alt="Link" width={40} height={40} quality={40} />
        </Link>
      </div>
    </div>
  );
};

export default BlogInfo;
