interface RelatedPostTitleProps {
  text: string;
}

const RelatedPostTitle = ({
  text = "Related Posts",
}: RelatedPostTitleProps) => {
  return (
    <h4 className="mb-6 w-full max-w-[26.625rem] text-3xl font-bold tracking-[-0.5px]">
      {text}
    </h4>
  );
};

export default RelatedPostTitle;
