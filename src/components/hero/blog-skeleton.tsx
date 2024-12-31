import { Skeleton } from "@/components/ui/skeleton";

const BlogCardSkeleton = () => {
  return (
    <div className="px-2 py-1.5 md:px-4 md:py-3">
      <div className="space-y-4">
        <Skeleton className="h-[17.563rem] max-w-[24.625rem] rounded-xl" />

        <Skeleton className="h-7 w-full max-w-[24.625rem]" />

        <div className="space-y-2">
          <Skeleton className="h-6 w-full max-w-[24.625rem]" />
          <Skeleton className="h-6 w-3/4 max-w-[18.625rem]" />
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-8 w-16 rounded-full" />
          <Skeleton className="h-5 w-20" />
        </div>
      </div>
    </div>
  );
};

const BlogSkeleton = () => {
  return (
    <div className="mx-auto grid max-w-[83.25rem] grid-cols-1 gap-2 md:grid-cols-3 md:gap-5">
      {[...Array(9)].map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default BlogSkeleton;
