import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

const BlogPagination = () => {
  return (
    <Pagination>
      <PaginationContent className="gap-1">
        <PaginationItem>
          <PaginationLink
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full p-0"
          >
            «
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full p-0"
          >
            ‹
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            className="flex h-8 w-8 items-center justify-center rounded-full bg-mint p-0 text-white hover:bg-[hsl(177,100%,35%)]"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full p-0"
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full p-0"
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="h-8 w-8 p-0" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full p-0"
          >
            10
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full p-0"
          >
            ›
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full p-0"
          >
            »
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
