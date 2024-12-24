import Feature from "@/sections/feature";
import Hero from "@/sections/hero";

const HomePage = () => {
  return (
    <>
      <section className="space-y-[6.75rem] px-3 py-20 md:px-5 md:py-[6.5rem]">
        <Hero />
      </section>
      <section className="space-y-20 bg-surfaceNeutral px-10 pb-28 pt-32">
        <Feature />
      </section>
    </>
  );
};

export default HomePage;
