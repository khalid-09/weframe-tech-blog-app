import Link from "next/link";
import { Separator } from "../ui/separator";
import { builder } from "@builder.io/sdk";
import { transformToFooterData } from "@/lib/utils";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const revalidate = 60;

const Footer = async () => {
  const allFooterData = await builder.getAll("footer", {
    sort: {
      createdDate: 1,
    },
    cache: false,
    options: {
      noTargeting: true,
    },
    fields: "id,name,data",
  });

  const footerData = transformToFooterData(allFooterData);

  return (
    <footer className="px-10 py-2.5">
      <div className="mx-auto flex max-w-[75.625rem] items-center justify-between gap-8 py-10 xsCustom:flex-col xsCustom:items-start">
        {footerData.map((footerContent) => (
          <div key={footerContent.id} className="min-w-40 space-y-5">
            <h5 className="text-xl font-semibold tracking-[-0.6px]">
              {footerContent.data.linkHeading}
            </h5>
            <ul className="space-y-3 font-medium tracking-[0.48px] text-secondary-text">
              {footerContent.data.linkSubLinks.map((link) => (
                <li key={link.linkName}>
                  <Link href={link.link}>{link.linkName}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator className="border-1 mb-4 mt-20 text-[#666]" />
      <div className="flex items-center justify-center gap-8 font-medium tracking-[-0.48px] text-[#666] smCustom:mb-10 xsCustom:flex-col-reverse">
        <p>©2024 @weframetech · All rights reserved.</p>
        <p className="flex items-center gap-6">
          <span>Terms of use</span>
          <span>Privacy Policy</span>
          <span>Security</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
