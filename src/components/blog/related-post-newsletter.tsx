import { Input } from "../ui/input";

interface RelatedPostNewsletterProps {
  text: string;
  description: string;
  placeholder: string;
  buttonText: string;
}

const RelatedPostNewsletter = ({
  text = "Weframe Tech News Weekly",
  description = "Stay informed on our latest AI advancements and business insights by joining the Symbiofy newsletter. By subscribing, you consent to our Privacy Policy.",
  placeholder = "Enter your email",
  buttonText = "Join now",
}: RelatedPostNewsletterProps) => {
  return (
    <div className="mt-16 w-full max-w-[26.625rem] space-y-6 px-4 py-5">
      <div className="space-y-4">
        <h5 className="text-3xl font-bold leading-10 tracking-[0.5px]">
          {text}
        </h5>
        <p className="leading-6 tracking-[-0.5px] text-secondary-text">
          {description}
        </p>
      </div>
      <div className="flex rounded-lg shadow-sm shadow-black/5">
        <Input
          className="-me-px h-[2.813rem] flex-1 rounded-e-none bg-[#E4E4E7] p-4 shadow-none placeholder:text-base placeholder:font-medium placeholder:tracking-[-0.48px] placeholder:text-secondary-text focus-visible:z-10"
          placeholder={placeholder}
        />
        <button className="inline-flex h-[2.813rem] items-center rounded-e-lg border border-input bg-mint px-8 text-base font-bold text-white outline-offset-2 transition-colors hover:bg-accent hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default RelatedPostNewsletter;
