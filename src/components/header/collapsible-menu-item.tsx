"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLinks } from "@/types/blog";
import Link from "next/link";

interface CollapsibleMenuItemProps {
  item: NavLinks["data"];
}

export function CollapsibleMenuItem({ item }: CollapsibleMenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(item);

  return (
    <div>
      <div
        className={`flex items-center py-2 ${item.subLinks ? "cursor-pointer" : ""}`}
        onClick={() => (item.subLinks ? setIsOpen(!isOpen) : null)}
      >
        {item.subLinks?.length === 0 ? (
          <Link href={item.link} className="w-full">
            <span className="flex-grow">{item.name}</span>
          </Link>
        ) : (
          <>
            <span className="flex-grow">{item.name}</span>
            <span className="ml-2">
              {isOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </span>
          </>
        )}
      </div>
      {isOpen && item.subLinks && (
        <div className="ml-4 border-l pl-4">
          {item.subLinks.map((subLink, index) => (
            <Link
              key={index}
              href={subLink.link}
              className="block py-2 text-sm hover:text-mint"
            >
              {subLink.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
