interface BlogTitleProps {
  text: string;
}

const BlogTitle = ({ text = "Introduction" }: BlogTitleProps) => {
  return (
    <h3 className="mb-6 w-full max-w-[75rem] text-5xl font-bold leading-[3.75rem] tracking-[-2px]">
      {text}
    </h3>
  );
};

export default BlogTitle;
