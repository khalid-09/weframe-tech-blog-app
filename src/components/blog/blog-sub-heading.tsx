interface BlogSubHeadingProps {
  content: string;
}

const BlogSubHeading = ({ content }: BlogSubHeadingProps) => {
  return (
    <div
      className="mb-6 w-full max-w-[75rem] text-3xl font-bold leading-10 tracking-[-0.5px]"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

export default BlogSubHeading;
