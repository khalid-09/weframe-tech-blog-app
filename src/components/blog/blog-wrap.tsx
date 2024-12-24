import Link from "next/link";
import SearchInput from "./search-input";
import TopBlog from "./top-blog";

const BlogWrap = () => {
  return (
    <div className="space-y-10">
      <div className="mx-auto flex max-w-[80.25rem] items-center justify-between">
        <ul className="hidden items-center gap-4 font-medium leading-5 tracking-[-0.48px] text-secondary-text md:flex">
          <li>
            <Link href="/">View All</Link>
          </li>
          <li>
            <Link href="/" className="text-mint">
              Healthcare trends
            </Link>
          </li>
          <li>
            <Link href="/">AI Insights</Link>
          </li>
          <li>
            <Link href="/">Case Studies</Link>
          </li>
          <li>
            <Link href="/">Best Practices</Link>
          </li>
        </ul>
        <SearchInput />
      </div>
      <TopBlog />
    </div>
  );
};

export default BlogWrap;
