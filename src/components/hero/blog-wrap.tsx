"use client";

import { useState } from "react";
import SearchInput from "./search-input";
import TopBlog from "./top-blog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const links = [
  {
    value: "all",
    text: "View All",
  },
  {
    value: "Blog",
    text: "Healthcare trends",
  },
  {
    value: "insights",
    text: "AI Insights",
  },
  {
    value: "case-studies",
    text: "Case Studies",
  },
  {
    value: "best",
    text: "Best Practices",
  },
];

const BlogWrap = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="space-y-10">
      <div className="mx-auto flex max-w-[80.25rem] items-center justify-between">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex items-center justify-between">
            <TabsList className="flex-wrap gap-4 bg-white p-0">
              {links.map(({ value, text }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="p-0 text-lg font-medium leading-5 tracking-[-0.48px] text-secondary-text"
                >
                  {text}
                </TabsTrigger>
              ))}
            </TabsList>
            <SearchInput onSearch={handleSearch} />
          </div>
          {links.map(({ value }) => (
            <TabsContent className="mt-10 p-0" key={value} value={value}>
              <TopBlog searchQuery={searchQuery} category={value} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default BlogWrap;
