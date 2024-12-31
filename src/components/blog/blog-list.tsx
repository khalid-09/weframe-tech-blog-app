interface BlogListProps {
  content: string;
}

const BlogList = ({ content }: BlogListProps) => {
  return (
    <div className="mb-20 w-full max-w-[75rem] overflow-hidden rounded-3xl bg-surfaceNeutral p-6 smCustom:mb-10">
      <div
        className="prose prose-lg list-disc break-words text-2xl leading-8 tracking-[-0.46px] smCustom:prose-sm marker:text-black smCustom:text-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default BlogList;
