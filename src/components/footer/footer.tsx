import Link from "next/link";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="px-10 py-2.5">
      <div className="xsCustom:flex-col xsCustom:items-start mx-auto flex max-w-[75.625rem] items-center justify-between gap-8 py-10">
        <div className="min-w-40 space-y-5">
          <h5 className="text-xl font-semibold tracking-[-0.6px]">About</h5>
          <ul className="space-y-3 font-medium tracking-[0.48px] text-secondary-text">
            <li>
              <Link href="/">Company Overview</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
            <li>
              <Link href="/">Press & Media</Link>
            </li>
            <li>
              <Link href="/">Testimonials</Link>
            </li>
          </ul>
        </div>
        <div className="min-w-40 space-y-5">
          <h5 className="text-xl font-semibold tracking-[-0.6px]">About</h5>
          <ul className="space-y-3 font-medium tracking-[0.48px] text-secondary-text">
            <li>
              <Link href="/">Company Overview</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
            <li>
              <Link href="/">Press & Media</Link>
            </li>
            <li>
              <Link href="/">Testimonials</Link>
            </li>
          </ul>
        </div>
        <div className="min-w-40 space-y-5">
          <h5 className="text-xl font-semibold tracking-[-0.6px]">About</h5>
          <ul className="space-y-3 font-medium tracking-[0.48px] text-secondary-text">
            <li>
              <Link href="/">Company Overview</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
            <li>
              <Link href="/">Press & Media</Link>
            </li>
            <li>
              <Link href="/">Testimonials</Link>
            </li>
          </ul>
        </div>
      </div>
      <Separator className="border-1 mb-4 text-[#666]" />
      <div className="xsCustom:flex-col-reverse mb-10 flex items-center justify-center gap-8 font-medium tracking-[-0.48px] text-[#666]">
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
