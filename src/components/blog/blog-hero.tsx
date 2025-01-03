import { BlogDataNew } from "@/types/blog";
import BannerImage from "./banner-image";
import Heading from "./heading";

interface BlogHeroProps {
  blog: BlogDataNew["data"];
  createdDate: string;
}

const BlogHero = ({ blog, createdDate }: BlogHeroProps) => {
  return (
    <div className="px-4">
      <Heading
        title={blog.title}
        author={blog.authorName}
        avatarUrl={blog.avatar}
        readingTime={blog.timeToRead}
        date={createdDate}
      />
      <BannerImage imageUrl={blog.displayImage} />
    </div>
  );
};

export default BlogHero;
