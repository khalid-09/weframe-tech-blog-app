interface BlogTitleProps {
  text: string;
}

const BlogTitle = ({ text = "Introduction" }: BlogTitleProps) => {
  return (
    <h3 className="content mb-6 text-5xl font-bold leading-[3.75rem] tracking-[-2px]">
      {text}
    </h3>
  );
};

export default BlogTitle;
