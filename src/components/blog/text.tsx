import { cn } from "@/lib/utils";

const Text = ({ content }: { content: string }) => {
  const hasUlElement = /<ul[^>]*>/.test(content);
  const listClasses = hasUlElement ? "p-6 rounded-3xl bg-surfaceNeutral" : "";

  return (
    <div
      className={cn(
        `prose prose-sm mb-2 max-w-[75rem] break-words md:prose-base lg:prose-lg marker:text-black prose-ul:list-disc prose-ul:text-black`,
        listClasses,
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Text;
