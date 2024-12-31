interface BlogTitleProps {
  content: string;
}

const BlogTitle = ({ content }: BlogTitleProps) => {
  return (
    <div className="mb-6 w-full max-w-[75rem]">
      <div
        className="prose prose-lg break-words text-5xl font-bold leading-[3.75rem] tracking-[-2px] smCustom:prose-sm smCustom:text-3xl smCustom:leading-[2.5rem]"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default BlogTitle;
