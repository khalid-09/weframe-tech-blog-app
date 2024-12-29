"use client";

import BlogHeader from "./blog-header";
import BlogWrap from "./blog-wrap";

const Hero = () => {
  return (
    <section className="space-y-[6.75rem] bg-white px-3 py-20 text-black md:px-5 md:py-[6.5rem]">
      <BlogHeader />
      <BlogWrap />
    </section>
  );
};

export default Hero;
