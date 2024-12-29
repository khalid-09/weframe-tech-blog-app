"use client";
import { builder, Builder } from "@builder.io/react";
import BannerImage from "./components/blog/banner-image";
import BlogBoldParagraph from "./components/blog/blog-bold-paragraph";
import BlogInfo from "./components/blog/blog-info";
import BlogList from "./components/blog/blog-list";
import BlogParagraph from "./components/blog/blog-paragraph";
import BlogSubHeading from "./components/blog/blog-sub-heading";
import BlogSubImage from "./components/blog/blog-sub-image";
import BlogTitle from "./components/blog/blog-title";
import CaseStudies from "./components/features/case-studies";
import Heading from "./components/blog/heading";
import Hero from "./components/hero/hero";
import Insights from "./components/features/insights";
import RelatedPost from "./components/blog/related-post";
import RelatedPostNewsletter from "./components/blog/related-post-newsletter";
import RelatedPosts from "./components/blog/related-posts";
import RelatedPostTitle from "./components/blog/related-post-title";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(BannerImage, {
  name: "BannerImage",
  inputs: [
    {
      name: "imageUrl",
      type: "file",
      required: true,
    },
  ],
});

Builder.registerComponent(BlogBoldParagraph, {
  name: "BlogBoldParagraph",
  inputs: [
    {
      name: "text",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(BlogParagraph, {
  name: "BlogParagraph",
  inputs: [
    {
      name: "text",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(BlogSubHeading, {
  name: "BlogSubHeading",
  inputs: [
    {
      name: "text",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(BlogTitle, {
  name: "BlogTitle",
  inputs: [
    {
      name: "text",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(BlogList, {
  name: "BlogList",
  inputs: [
    {
      name: "text",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(BlogSubImage, {
  name: "BlogSubImage",
  inputs: [
    {
      name: "imageUrl",
      type: "file",
      required: true,
    },
  ],
});

Builder.registerComponent(BlogInfo, {
  name: "BlogInfo",
  inputs: [
    {
      name: "author",
      type: "string",
      required: true,
    },
    {
      name: "avatarUrl",
      type: "file",
      required: true,
    },
    {
      name: "date",
      type: "string",
      required: true,
    },
    {
      name: "facebookUrl",
      type: "string",
      required: true,
    },
    {
      name: "link",
      type: "string",
      required: true,
    },
    {
      name: "linkedinUrl",
      type: "string",
      required: true,
    },
    {
      name: "readingTime",
      type: "string",
      required: true,
    },
    {
      name: "tag",
      type: "string",
      required: true,
    },
    {
      name: "twitterUrl",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [
    {
      name: "author",
      type: "string",
      required: true,
    },
    {
      name: "avatarUrl",
      type: "file",
      meta: {
        ts: "string",
      },
      required: true,
    },
    {
      name: "backText",
      type: "string",
      required: true,
    },
    {
      name: "date",
      type: "string",
      required: true,
    },
    {
      name: "readingTime",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Hero, {
  name: "Hero",
});

Builder.registerComponent(Insights, {
  name: "Insights",
});

Builder.registerComponent(CaseStudies, {
  name: "CaseStudies",
});

Builder.registerComponent(RelatedPost, {
  name: "RelatedPost",
  inputs: [
    {
      name: "author",
      type: "string",
      required: true,
    },
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "imageUrl",
      type: "file",
      required: true,
    },
    {
      name: "tag",
      type: "string",
      required: true,
    },
    {
      name: "timeToRead",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(RelatedPostNewsletter, {
  name: "RelatedPostNewsletter",
  inputs: [
    {
      name: "buttonText",
      type: "string",
      required: true,
    },
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "placeholder",
      type: "string",
      required: true,
    },
    {
      name: "text",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(RelatedPostTitle, {
  name: "RelatedPostTitle",
  inputs: [
    {
      name: "text",
      type: "string",
      required: true,
    },
  ],
});
