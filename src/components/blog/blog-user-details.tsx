import AvatarImage from "../avatar-image";

interface BlogUserDetailsProps {
  avatarUrl: string;
  author: string;
  date: string;
  readingTime: string;
}

const BlogUserDetails = ({
  avatarUrl,
  author,
  date,
  readingTime,
}: BlogUserDetailsProps) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="flex items-center gap-2.5">
        <AvatarImage avatar={avatarUrl} className="size-[3.15rem]" />
        <span>{author}</span>
      </div>
      <span>{date}</span>
      <span>{readingTime}</span>
    </div>
  );
};

export default BlogUserDetails;
