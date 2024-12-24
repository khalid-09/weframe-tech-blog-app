import Image from "next/image";
import blog1 from "../../../public/blog-img-1.png";
import avatar from "../../../public/avatar.png";

const TopBlog = () => {
  return (
    <div className="mx-auto grid max-w-[83.25rem] grid-cols-3 gap-5">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="px-4 py-3">
          <div className="space-y-4">
            <Image
              src={blog1}
              alt="blog1"
              quality={50}
              className="rounded-xl"
            />
            <p className="text-xl font-semibold leading-[1.875rem] tracking-[-0.038rem]">
              Unlocking AI&apos;s potential in AI Healthcare
            </p>
            <p className="leading-[1.625rem] tracking-[-0.031rem] text-secondary-text">
              Our Ai Hackathons are intensive, collaborative sessions that spark
              Innovation
            </p>
            <div className="flex items-center gap-4">
              <Image
                quality={30}
                src={avatar}
                alt="blog1"
                className="rounded-xl"
              />
              <span className="font-medium leading-5 tracking-[-0.03rem] text-secondary-text">
                Bernd Holbein
              </span>
              <span className="shrink-0 rounded-full bg-mint px-3 py-1.5 text-white">
                Insights
              </span>
              <span className="font-medium leading-5 tracking-[-0.03rem] text-secondary-text">
                12 mins
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopBlog;
