interface BlogParagraphProps {
  text: string;
}

const BlogParagraph = ({
  text = "Lorem ipsum dolor sit amet consectetur. Enim quis et sapien id integer. Id pulvinar eleifend egestas risus dolor. Nec convallis nunc odio laoreet. Rhoncus eu nunc arcu nullam porttitor tortor placerat. Quisque amet eget nec amet sit sed. Sed morbi nibh venenatis quis at venenatis in. Enim urna adipiscing velit morbi ornare neque et dolor. Ultrices posuere turpis malesuada ut scelerisque nunc morbi nunc turpis. Est massa nulla bibendum cras nisl id augue. Ornare ut turpis vehicula ornare justo auctor laoreet diam id. Pellentesque elit cum nunc egestas imperdiet. Volutpat suspendisse neque ullamcorper eget massa posuere orci et imperdiet. ",
}: BlogParagraphProps) => {
  return <p className="content paragraph max-w-[75rem]">{text}</p>;
};

export default BlogParagraph;
