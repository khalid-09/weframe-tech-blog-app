import BlogHeader from "./blog-header";
import BlogWrap from "./blog-wrap";

export interface HeroProps {
  title: string;
  heading: string;
  subHeading: string;
}

const Hero = ({ title, heading, subHeading }: HeroProps) => {
  return (
    <section className="space-y-[6.75rem] bg-white px-3 py-20 text-black md:px-5 md:py-[6.5rem]">
      <BlogHeader title={title} heading={heading} subHeading={subHeading} />
      <BlogWrap />
    </section>
  );
};

export default Hero;
