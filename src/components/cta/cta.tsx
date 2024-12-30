import Image from "next/image";
import bg from "../../../public/bg.jpeg";
import CTAInput from "./cta-form";

const CTA = () => {
  return (
    <section className="relative min-h-[53.083rem] w-full bg-black/20 px-10 py-[6.5rem] text-black">
      <Image src={bg} fill className="absolute -z-10 object-cover" alt="bg" />

      <div className="absolute inset-[6.5rem_2.5rem] space-y-24 rounded-xl bg-white px-8 py-[6.5rem] pt-36">
        <div className="mx-auto max-w-[61.875rem] space-y-24">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold tracking-[-2px]">
              Schedule Your Consultation Today
            </h2>
            <p className="text-xl tracking-[-0.4px] text-secondary-text">
              Weframe tech is the modern, award-winning platform that empowers
              some of the largest names in healthcare and advisory sectors.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[42.313rem] space-y-2">
          <CTAInput />
          <div className="tracking-[-0.5px] text-shadeGrey">
            By submitting you agree to our privacy policy.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
