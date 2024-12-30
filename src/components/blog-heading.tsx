interface BlogHeadingProps {
  type?: "blog" | "faq";
  content?: string;
}

const BlogHeading = ({ type, content }: BlogHeadingProps) => {
  return (
    <h5 className="text-center text-lg font-bold uppercase leading-6 tracking-[-0.6px] text-mint">
      {type ? type : content}
    </h5>
  );
};

export default BlogHeading;
