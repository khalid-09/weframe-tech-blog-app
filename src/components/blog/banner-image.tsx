import Image from "next/image";

interface BannerImageProps {
  imageUrl: string;
}

const BannerImage = ({
  imageUrl = "https://cdn.builder.io/api/v1/image/assets%2F76cb628f6d0c4bb38273da6779617caf%2F28939266d7d342a787a7180b7f912797",
}: BannerImageProps) => {
  return (
    <div className="mx-auto max-w-[115rem]">
      <div className="relative aspect-[2.3/1] min-h-[20rem] w-full overflow-hidden rounded-3xl sm:min-h-[30rem] md:min-h-[40rem] lg:min-h-[49.938rem]">
        <Image
          src={imageUrl}
          alt="Blog Banner Image"
          fill
          className="absolute object-cover"
        />
      </div>
    </div>
  );
};

export default BannerImage;
