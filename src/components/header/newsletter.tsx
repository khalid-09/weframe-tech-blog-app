// import { transformToNewsLetterData } from "@/lib/utils";
import { NewsLetter as AccouncementType } from "@/types/blog";
import { builder } from "@builder.io/sdk";
import { ArrowUpRight } from "lucide-react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const NewsLetter = async () => {
  const {
    data: { text },
  } = (await builder.get("newsletter", {
    fields: "data.text",
    cachebust: true,
    enrich: true,
  })) as AccouncementType;

  return (
    <header className="flex h-[4.188rem] items-center justify-between bg-newsletter px-4 text-white md:justify-center">
      <h4 className="w-2/3 text-sm leading-5 md:w-fit md:text-xl md:leading-8 md:tracking-[-0.4px]">
        {text}
      </h4>
      <ArrowUpRight className="size-8 text-mint" />
    </header>
  );
};

export default NewsLetter;
