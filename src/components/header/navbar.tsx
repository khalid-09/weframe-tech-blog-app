import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";
import { transformToNavLinksData } from "@/lib/utils";
import { builder } from "@builder.io/sdk";
import { NavItem } from "./nav-item";
import MobileNav from "./mobile-nav";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const Navbar = async () => {
  const allNavLinks = await builder.getAll("nav-links", {
    sort: {
      createdDate: 1,
    },
    cachebust: true,
    enrich: true,
    fields: "id,name,data",
  });

  const navLinks = transformToNavLinksData(allNavLinks);

  return (
    <nav className="flex max-h-[6.25rem] items-center justify-between border-[0.5px] border-b border-black border-opacity-30 bg-white px-4 py-4 md:px-10 md:py-6">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          className="h-10 w-16 md:h-[3.875rem] md:w-[7.929rem]"
          quality={50}
        />
      </Link>
      <ul className="hidden items-center gap-10 font-medium text-secondary-text md:flex">
        {navLinks.map((navLink) => (
          <NavItem key={navLink.id} navLink={navLink} />
        ))}
      </ul>
      <div className="gap hidden items-center gap-6 md:flex mdCustom:hidden">
        <div className="space-x-3">
          <Button className="h-[3.25rem] w-[6.063rem] border-2 border-mint bg-white px-5 py-4 font-bold text-mint shadow-none transition duration-300 hover:bg-mint hover:text-white">
            Login
          </Button>
          <Button className="h-[3.25rem] w-[9.5rem] bg-mint px-5 py-4 font-bold text-white shadow-none transition duration-300 hover:border-2 hover:border-mint hover:bg-white hover:text-mint">
            Register Now
          </Button>
        </div>
        <ThemeToggle />
      </div>
      <MobileNav navLinks={navLinks} />
    </nav>
  );
};

export default Navbar;
