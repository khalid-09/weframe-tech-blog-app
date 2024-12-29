interface BlogBoldParagraphProps {
  text: string;
}

const BlogBoldParagraph = ({
  text = "Vitae enim nec adipiscing eu id nisl. Quam eleifend quis molestie tristique eget dui vestibulum. Consectetur neque elementum velit fringilla aliquam ut. Ipsum gravida tincidunt enim placerat odio. Elementum velit sed eget integer enim massa fermentum ultricies. Duis purus dignissim vulputate a lectus odio et vel sit. Posuere in amet elementum cursus tortor sit lacus in ac.",
}: BlogBoldParagraphProps) => {
  return <p className="paragraph w-full max-w-[75rem] font-medium">{text}</p>;
};

export default BlogBoldParagraph;
