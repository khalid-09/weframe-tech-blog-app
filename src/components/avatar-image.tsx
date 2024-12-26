import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarImageProps {
  avatar: string;
  className?: string;
}

const AvatarImage = ({ avatar, className }: AvatarImageProps) => {
  return (
    <div
      className={cn(
        "relative size-[2.625rem] overflow-hidden rounded-full",
        className,
      )}
    >
      <Image
        quality={30}
        src={
          avatar ||
          "https://cdn.builder.io/api/v1/image/assets%2F76cb628f6d0c4bb38273da6779617caf%2F0c75df2bd5f943398608b5f7c35ad77b"
        }
        alt="avatar image"
        fill
        className="absolute object-cover"
      />
    </div>
  );
};

export default AvatarImage;
