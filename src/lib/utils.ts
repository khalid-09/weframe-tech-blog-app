import { BlogData } from "@/types/blog";
import { BuilderContent } from "@builder.io/sdk";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const transformToBlogData = (blogs: BuilderContent[]): BlogData[] => {
  return blogs
    .filter(
      (blog): blog is BlogData =>
        blog.id !== undefined && blog.data?.title !== undefined,
    ) // Type guard
    .map((blog) => ({
      id: blog.id!,
      name: blog.name || "Untitled",
      data: {
        displayImage: blog.data?.displayImage || "",
        title: blog.data?.title || "No title",
        description: blog.data?.description || "No description",
        avatar: blog.data?.avatar || "",
        authorName: blog.data?.authorName || "Unknown Author",
        tag: blog.data?.tag || [],
        timeToRead: blog.data?.timeToRead || 0,
        category: blog.data?.category || "Uncategorized",
      },
    }));
};
