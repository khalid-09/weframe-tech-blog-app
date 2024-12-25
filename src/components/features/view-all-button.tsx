import { Button } from "../ui/button";

const ViewAllButton = () => {
  return (
    <div className="flex items-center justify-center">
      <Button className="h-[3.25rem] w-[12.75rem] shrink-0 rounded-[8px] border border-mint bg-white p-4 text-start text-base font-bold tracking-[-0.8px] text-mint transition duration-300 hover:bg-mint hover:text-white">
        View All
      </Button>
    </div>
  );
};

export default ViewAllButton;
