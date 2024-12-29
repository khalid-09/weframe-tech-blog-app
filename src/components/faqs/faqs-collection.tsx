import { builder } from "@builder.io/sdk";
import { transformToFaqData } from "@/lib/utils";
import FAQSAccordion from "./faqs-accordian";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const FAQSCollection = async () => {
  const allFaqs = await builder.getAll("faqs", {
    fields: "id,name,data",
    sort: {
      createdDate: 1,
    },
  });

  const faqs = transformToFaqData(allFaqs);

  return <FAQSAccordion faqs={faqs} />;
};

export default FAQSCollection;
