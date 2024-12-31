import { LucideArrowDownWideNarrow, Search } from "lucide-react";
import { Input } from "../ui/input";
import { ChangeEvent } from "react";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative smCustom:mt-10">
      <Input
        className="peer h-[2.625rem] min-w-[20.335rem] rounded-[8px] border border-mint pe-9 ps-10 shadow-[0_6px_30px_0_rgba(0,0,0,0.04)] placeholder:text-base"
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        <Search
          size={20}
          className="text-mint"
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
        <LucideArrowDownWideNarrow
          size={24}
          strokeWidth={2}
          aria-hidden="true"
          className="text-mint"
        />
      </div>
    </div>
  );
};

export default SearchInput;
