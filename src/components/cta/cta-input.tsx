import { Mail } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CTAInput = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="text-shadeGrey relative w-full">
        <Input
          id="input-09"
          className="border-shadeGrey placeholder:text-shadeGrey peer min-h-[4.167rem] w-full border-[1.33px] ps-11 placeholder:tracking-[-0.5px]"
          placeholder="Enter your email"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Mail size={26} strokeWidth={2} aria-hidden="true" />
        </div>
      </div>
      <Button className="h-[3.375rem] bg-mint">Book a meeting</Button>
    </div>
  );
};

export default CTAInput;
