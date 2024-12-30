import RelatedPostForm from "./related-post-form";

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
      <RelatedPostForm placeholder={placeholder} buttonText={buttonText} />
    </div>
  );
};

export default RelatedPostNewsletter;
