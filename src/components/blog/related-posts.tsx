"use client";

import { useEffect, useState } from "react";
import { BlogSelection } from "../features/insights";
import { BlogDataNew } from "@/types/blog";
import { builder } from "@builder.io/sdk";
import { transformToNewBlogData } from "@/lib/utils";
import RelatedPost from "./related-post";

interface RelatedPostsProps {
  blogSelections: BlogSelection[];
}

const RelatedPosts = ({ blogSelections = [] }: RelatedPostsProps) => {
  const blogIds = blogSelections
    .map((selection) => selection.blogRef?.id)
    .filter(Boolean);

  const [relatedBlogs, setRelatedBlogs] = useState<BlogDataNew[]>([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      if (!blogIds.length) return;

      const selectedBlogs = await builder.getAll("home-blogs", {
        fields: "id,name,data",
        query: {
          id: { $in: blogIds },
        },
        cachebust: true,
        enrich: true,
      });

      const transformedFeatures = transformToNewBlogData(selectedBlogs);
      setRelatedBlogs(transformedFeatures);
    };

    fetchFeatures();
  }, [relatedBlogs, blogIds]);

  return (
    <div className="flex flex-col gap-4 smCustom:items-center">
      {relatedBlogs.map((blog) => (
        <RelatedPost
          key={blog.id}
          imageUrl={blog.data.avatar}
          title={blog.data.title}
          description={blog.data.description}
          author={blog.data.authorName}
          tag={blog.data.tag}
          timeToRead={blog.data.timeToRead}
        />
      ))}
    </div>
  );
};

export default RelatedPosts;
