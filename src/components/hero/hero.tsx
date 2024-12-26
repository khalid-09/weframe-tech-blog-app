import BlogHeader from "./blog-header";
import BlogWrap from "./blog-wrap";

const Hero = () => {
  return (
    <section className="space-y-[6.75rem] px-3 py-20 md:px-5 md:py-[6.5rem]">
      <BlogHeader />
      <BlogWrap />
    </section>
  );
};

export default Hero;
