import Image from "next/image";

interface BlogSubImageProps {
  imageUrl: string;
}

const BlogSubImage = ({
  imageUrl = "https://cdn.builder.io/api/v1/image/assets%2F76cb628f6d0c4bb38273da6779617caf%2Ff9c7b3b4468b42e0bef690437273abe3",
}: BlogSubImageProps) => {
  return (
    <div className="relative mb-20 h-full min-h-[25rem] w-full max-w-[75rem] overflow-hidden rounded-3xl smCustom:mb-5">
      <Image
        src={imageUrl}
        alt="Blog Sub Image"
        fill
        className="absolute object-cover"
      />
    </div>
  );
};

export default BlogSubImage;
