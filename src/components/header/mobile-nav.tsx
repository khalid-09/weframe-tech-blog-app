"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "../../../public/logo.png";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import { NavLinks } from "@/types/blog";
import Link from "next/link";
import { CollapsibleMenuItem } from "./collapsible-menu-item";

interface MobileNavProps {
  navLinks: NavLinks[];
}

const MobileNav = ({ navLinks }: MobileNavProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="items-center justify-center md:hidden mdCustom:flex"
          size="icon"
          variant="outline"
        >
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-[65%] flex-col">
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
          <SheetDescription>
            <Image
              src={logo}
              alt="logo"
              className="h-10 w-16 md:h-[3.875rem] md:w-[7.929rem]"
              quality={50}
            />
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 flex flex-1 flex-col justify-between">
          <div className="space-y-4">
            {navLinks.map((navLink) => (
              <div key={navLink.id}>
                {navLink.data.subLinks ? (
                  <CollapsibleMenuItem item={navLink.data} />
                ) : (
                  <Link
                    href={navLink.data.link}
                    className="block py-2 hover:text-mint"
                  >
                    {navLink.data.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <SheetFooter className="flex gap-2">
            <SheetClose asChild>
              <Button className="h-[3.25rem] w-full border-2 border-mint bg-white px-5 py-4 font-bold text-mint shadow-none transition duration-300 hover:bg-mint hover:text-white">
                Login
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button className="h-[3.25rem] w-full bg-mint px-5 py-4 font-bold text-white shadow-none transition duration-300 hover:border-2 hover:border-mint hover:bg-white hover:text-mint">
                Register Now
              </Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
