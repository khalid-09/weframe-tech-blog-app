import {
  BlogData,
  BlogDataNew,
  FaqData,
  FooterData,
  NavLinks,
  NewsLetter,
} from "@/types/blog";
import { BuilderContent } from "@builder.io/sdk";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//**Functions to add a type guard for fetched data **/

export const transformToBlogData = (blogs: BuilderContent[]): BlogData[] => {
  return blogs
    .filter(
      (blog): blog is BlogData =>
        blog.id !== undefined && blog.data?.title !== undefined,
    )
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
        slug: blog.data?.slug || `${blog.id}`,
      },
    }));
};

export const transformToNewBlogData = (
  blogs: BuilderContent[],
): BlogDataNew[] => {
  return blogs
    .filter(
      (blog): blog is BlogDataNew =>
        blog.id !== undefined && blog.data?.title !== undefined,
    )
    .map((blog) => ({
      id: blog.id!,
      name: blog.name || "Untitled",
      data: {
        displayImage: blog.data?.displayImage || "",
        title: blog.data?.title || "No title",
        description: blog.data?.description || "No description",
        avatar: blog.data?.avatar || "",
        authorName: blog.data?.authorName || "Unknown Author",
        tag: blog.data?.tag || "Ai Healthcare",
        timeToRead: blog.data?.timeToRead || "5 mins",
        category: blog.data?.category || "Uncategorized",
        slug: blog.data?.slug || `${blog.id}`,
      },
    }));
};

export const transformToFaqData = (faqs: BuilderContent[]): FaqData[] => {
  return faqs
    .filter(
      (faq): faq is FaqData =>
        faq.id !== undefined && faq.data?.question !== undefined,
    )
    .map((faq) => ({
      id: faq.id!,
      name: faq.name || "Untitled",
      data: {
        question: faq.data?.question || "No question",
        answer: faq.data?.answer || "No answer",
      },
    }));
};

export const transformToNavLinksData = (
  navLinks: BuilderContent[],
): NavLinks[] => {
  return navLinks
    .filter(
      (navLink): navLink is NavLinks =>
        navLink.id !== undefined && navLink.data?.name !== undefined,
    )
    .map((navLink) => ({
      id: navLink.id!,
      name: navLink.name || "Untitled",
      data: {
        name: navLink.data?.name || "No name",
        link: navLink.data?.link || "#",
        subLinks: navLink.data.subLinks || [],
      },
    }));
};

export const transformToNewsLetterData = (
  newsLetter: BuilderContent[],
): NewsLetter => {
  if (!newsLetter || newsLetter.length === 0) {
    return {
      text: "Subscribe to our Newsletter For New & latest Blogs and Resources",
    };
  }

  const firstNewsletter = newsLetter[0];

  return {
    text:
      firstNewsletter.data?.text ||
      "Subscribe to our Newsletter For New & latest Blogs and Resources",
  };
};

export const transformToFooterData = (
  footerData: BuilderContent[],
): FooterData[] => {
  return footerData
    .filter(
      (footer): footer is FooterData =>
        footer.id !== undefined && footer.data?.linkHeading !== undefined,
    )
    .map((footer) => ({
      id: footer.id!,
      name: footer.name || "Untitled",
      data: {
        linkHeading: footer.data?.linkHeading || "No link heading",
        linkSubLinks: footer.data?.linkSubLinks || [],
      },
    }));
};
