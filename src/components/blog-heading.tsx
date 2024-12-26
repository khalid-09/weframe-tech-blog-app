interface BlogHeadingProps {
  type: "blog" | "faq";
}

const BlogHeading = ({ type = "blog" }: BlogHeadingProps) => {
  return (
    <h5 className="text-center text-lg font-bold uppercase leading-6 tracking-[-0.6px] text-mint">
      {type}
    </h5>
  );
};

export default BlogHeading;
