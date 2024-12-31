interface BlogBoldParagraphProps {
  content: string;
}

const BlogBoldParagraph = ({ content }: BlogBoldParagraphProps) => {
  return (
    <div
      className="paragraph w-full max-w-[75rem] px-0 font-medium smCustom:max-w-full"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

export default BlogBoldParagraph;
