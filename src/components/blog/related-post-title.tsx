interface RelatedPostTitleProps {
  content: string;
}

const RelatedPostTitle = ({ content }: RelatedPostTitleProps) => {
  return (
    <div
      className="mb-6 w-full max-w-[26.625rem] text-3xl font-bold tracking-[-0.5px] smCustom:text-center"
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

export default RelatedPostTitle;
