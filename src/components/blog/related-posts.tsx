import AvatarImage from "../avatar-image";
import { Input } from "../ui/input";

const RelatedPosts = () => {
  return (
    <>
      <h4 className="mb-6 w-full max-w-[26.625rem] text-3xl font-bold tracking-[-0.5px]">
        Related Posts
      </h4>
      <div className="">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="mb-4 w-full max-w-[26.625rem] space-y-4 rounded-xl bg-surfaceNeutral px-6 py-5"
          >
            <h6 className="text-xl font-semibold tracking-[-0.6px]">
              Unlocking AI&apos;s potential in AI Healthcare
            </h6>
            <p className="leading-[1.625rem] text-secondary-text">
              Our Ai Hackathons are intensive, collaborative sessions that spark
              Innovation
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <AvatarImage avatar="https://cdn.builder.io/api/v1/image/assets%2F76cb628f6d0c4bb38273da6779617caf%2F0c75df2bd5f943398608b5f7c35ad77b" />
                <span className="font-medium tracking-[0.48px] text-secondary-text">
                  Bernd Holbein
                </span>
              </div>
              <span className="rounded-full bg-mint px-3 py-1.5 text-white">
                Insights
              </span>
              <span className="font-medium tracking-[-0.48px] text-secondary-text">
                12 mins
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 w-full max-w-[26.625rem] space-y-6 px-4 py-5">
        <div className="space-y-4">
          <h5 className="text-3xl font-bold leading-10 tracking-[0.5px]">
            Weframe Tech News Weekly
          </h5>
          <p className="leading-6 tracking-[-0.5px] text-secondary-text">
            Stay informed on our latest AI advancements and business insights by
            joining the Symbiofy newsletter. By subscribing, you consent to our
            Privacy Policy.
          </p>
        </div>
        <div className="flex rounded-lg shadow-sm shadow-black/5">
          <Input
            className="-me-px h-[2.813rem] flex-1 rounded-e-none bg-[#E4E4E7] p-4 shadow-none placeholder:text-base placeholder:font-medium placeholder:tracking-[-0.48px] placeholder:text-secondary-text focus-visible:z-10"
            placeholder="Enter your email"
          />
          <button className="inline-flex h-[2.813rem] items-center rounded-e-lg border border-input bg-mint px-8 text-base font-bold text-white outline-offset-2 transition-colors hover:bg-accent hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50">
            Join now
          </button>
        </div>
      </div>
    </>
  );
};

export default RelatedPosts;
