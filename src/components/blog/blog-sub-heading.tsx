interface BlogSubHeadingProps {
  text: string;
}

const BlogSubHeading = ({
  text = "Artificial Intelligence x Healthcare",
}: BlogSubHeadingProps) => {
  return (
    <h4 className="mb-6 w-full max-w-[75rem] text-3xl font-bold leading-10 tracking-[-0.5px]">
      {text}
    </h4>
  );
};

export default BlogSubHeading;
