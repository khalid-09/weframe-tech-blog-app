import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSAccordion = ({
  faqs,
}: {
  faqs: { id: string; data: { question: string; answer: string } }[];
}) => {
  return (
    <div className="mx-auto max-w-[75.25rem]">
      <Accordion className="space-y-6" type="single" collapsible>
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i + 1}
            value={`item-${i + 1}`}
            className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_2px_20px_0_rgba(0,0,0,0.05)]"
          >
            <AccordionTrigger className="p-8 hover:bg-gray-50 hover:no-underline smCustom:p-6">
              <span className="text-left text-xl font-medium tracking-[-0.42px] smCustom:text-base">
                {faq.data.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[68.125rem] p-8 pt-0 leading-6 tracking-[-0.5px] text-secondary-text smCustom:p-6 smCustom:text-sm">
              {faq.data.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSAccordion;
