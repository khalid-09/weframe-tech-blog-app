interface BlogParagraphProps {
  content: string;
}

const BlogParagraph = ({ content }: BlogParagraphProps) => {
  return (
    <div
      className="paragraph w-full max-w-[75rem]"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

export default BlogParagraph;
