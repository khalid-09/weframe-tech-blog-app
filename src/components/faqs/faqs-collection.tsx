import { transformToFaqData } from "@/lib/utils";
import { builder } from "@builder.io/sdk";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const FAQSCollection = async () => {
  const allFaqs = await builder.getAll("faqs", {
    fields: "id,name,data",
    sort: {
      createdDate: 1,
    },
  });

  const faqs = transformToFaqData(allFaqs);

  return (
    <div className="mx-auto max-w-[75.25rem]">
      <Accordion className="space-y-6" type="single" collapsible>
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i + 1}
            value={`item-${i + 1}`}
            className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_2px_20px_0_rgba(0,0,0,0.05)]"
          >
            <AccordionTrigger className="p-8 hover:bg-gray-50 hover:no-underline">
              <span className="text-left text-xl font-medium tracking-[-0.42px]">
                {faq.data.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[68.125rem] p-8 pt-0 leading-6 tracking-[-0.5px] text-secondary-text">
              {faq.data.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSCollection;
