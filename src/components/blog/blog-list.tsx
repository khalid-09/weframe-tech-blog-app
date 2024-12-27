interface BlogListProps {
  text: string;
}

const BlogList = ({
  text = "Sed iaculis aenean sit sed risus arcu vitae integer elit.,Sed iaculis aenean sit sed risus arcu vitae integer elit.,Sed iaculis aenean sit sed risus arcu vitae integer elit.",
}: BlogListProps) => {
  const textArr = text.split(",");

  return (
    <div className="content mb-20 rounded-3xl bg-surfaceNeutral p-6">
      <ul className="list-disc space-y-3 px-6 text-2xl leading-8">
        {textArr.map((item, index) => (
          <li key={index} className="tracking-[-0.46px]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
