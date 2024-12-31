"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { NavLinks } from "@/types/blog";

export const NavItem = ({ navLink }: { navLink: NavLinks }) => {
  if (navLink.data.subLinks && navLink.data.subLinks.length > 0) {
    return (
      <li className="leading-5 tracking-[-0.48px] transition duration-300 hover:scale-105">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="link"
              className="p-0 font-medium text-secondary-text"
            >
              <span>{navLink.data.name}</span>
              <ChevronDown size={18} className="ml-2" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <ul className="space-y-2">
              {navLink.data.subLinks.map((subLink, index) => (
                <li key={index}>
                  <Link
                    href={subLink.link}
                    className="block p-2 hover:bg-accent"
                  >
                    {subLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </li>
    );
  }

  return (
    <li className="leading-5 tracking-[-0.48px] transition duration-300 hover:scale-105">
      <Link href={navLink.data.link} className="inline-flex items-center gap-2">
        <span>{navLink.data.name}</span>
      </Link>
    </li>
  );
};
