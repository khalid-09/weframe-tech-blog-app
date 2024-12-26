import FAQSCollection from "@/components/faqs/faqs-collection";
import FAQSHeader from "@/components/faqs/faqs-header";

const FAQS = () => {
  return (
    <section className="space-y-12 px-10 py-20">
      <FAQSHeader />
      <FAQSCollection />
    </section>
  );
};

export default FAQS;
