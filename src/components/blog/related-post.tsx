import AvatarImage from "../avatar-image";

interface RelatedPostProps {
  imageUrl: string;
  title: string;
  description: string;
  author: string;
  tag: string;
  timeToRead: string;
}

const RelatedPost = ({
  imageUrl = "https://cdn.builder.io/api/v1/image/assets%2F76cb628f6d0c4bb38273da6779617caf%2F0c75df2bd5f943398608b5f7c35ad77b",
  title = "Unlocking AI's potential in AI Healthcare",
  description = "Our Ai Hackathons are intensive, collaborative sessions that spark Innovation",
  author = "Bernd Holbein",
  tag = "Insights",
  timeToRead = "12 mins",
}: RelatedPostProps) => {
  return (
    <div className="mb-4 w-full max-w-[26.625rem] space-y-4 rounded-xl bg-surfaceNeutral px-6 py-5">
      <h6 className="text-xl font-semibold tracking-[-0.6px]">{title}</h6>
      <p className="leading-[1.625rem] text-secondary-text">{description}</p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <AvatarImage avatar={imageUrl} />
          <span className="font-medium tracking-[0.48px] text-secondary-text">
            {author}
          </span>
        </div>
        <span className="rounded-full bg-mint px-3 py-1.5 text-white">
          {tag}
        </span>
        <span className="font-medium tracking-[-0.48px] text-secondary-text">
          {timeToRead}
        </span>
      </div>
    </div>
  );
};

export default RelatedPost;
