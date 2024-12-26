interface BlogTitleProps {
  text: string;
}

const BlogTitle = ({ text = "Introduction" }: BlogTitleProps) => {
  return (
    <h3 className="w-full max-w-[75rem] grow-0 border px-2.5 text-5xl font-bold leading-[3.75rem] tracking-[-2px]">
      {text}
    </h3>
  );
};

export default BlogTitle;
