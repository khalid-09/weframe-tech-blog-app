import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";

const Navbar = () => {
  return (
    <nav className="flex max-h-[6.25rem] items-center justify-between border-[0.5px] border-b border-black border-opacity-30 bg-white px-6 py-4 md:px-10 md:py-6">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          className="h-[3.875rem] w-[7.929rem]"
          quality={50}
        />
      </Link>
      <ul className="hidden items-center gap-10 font-medium text-secondary-text md:flex">
        <li className="leading-5 tracking-[-0.48px] transition duration-300 hover:scale-105">
          <Link href="/">AI Consulting</Link>
        </li>
        <li className="leading-5 tracking-[-0.48px] transition duration-300 hover:scale-105">
          <Link href="/">AI Toolbox</Link>
        </li>
        <li className="leading-5 tracking-[-0.48px] transition duration-300 hover:scale-105">
          <Link href="/">Content Health</Link>
        </li>
        <li className="leading-5 tracking-[-0.48px] transition duration-300 hover:scale-105">
          <Link href="/" className="inline-flex items-center gap-2">
            <span>Resources</span>
            <ChevronDown size={18} />
          </Link>
        </li>
      </ul>
      <div className="gap hidden items-center gap-6 md:flex">
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
    </nav>
  );
};

export default Navbar;
