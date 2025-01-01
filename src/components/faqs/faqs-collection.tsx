import { builder } from "@builder.io/sdk";
import { transformToFaqData } from "@/lib/utils";
import FAQSAccordion from "./faqs-accordian";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const revalidate = 60;

const FAQSCollection = async () => {
  const allFaqs = await builder.getAll("faqs", {
    fields: "id,name,data",
    sort: {
      createdDate: 1,
    },
    cache: false,
    options: {
      noTargeting: true,
    },
  });

  const faqs = transformToFaqData(allFaqs);

  return <FAQSAccordion faqs={faqs} />;
};

export default FAQSCollection;
