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
import RelatedPostNewsletter from "./components/blog/related-post-newsletter";
import RelatedPostTitle from "./components/blog/related-post-title";
import RelatedPosts from "./components/blog/related-posts";
import Text from "./components/blog/text";

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
      name: "content",
      type: "richText",
      defaultValue:
        "<p>Vitae enim nec adipiscing eu id nisl. Quam eleifend quis molestie tristique eget dui vestibulum. Consectetur neque elementum velit fringilla aliquam ut. Ipsum gravida tincidunt enim placerat odio. Elementum velit sed eget integer enim massa fermentum ultricies. Duis purus dignissim vulputate a lectus odio et vel sit. Posuere in amet elementum cursus tortor sit lacus in ac.</p>",
    },
  ],
});

Builder.registerComponent(BlogParagraph, {
  name: "BlogParagraph",
  inputs: [
    {
      name: "content",
      type: "richText",
      defaultValue:
        "<p>Lorem ipsum dolor sit amet consectetur. Enim quis et sapien id integer. Id pulvinar eleifend egestas risus dolor. Nec convallis nunc odio laoreet. Rhoncus eu nunc arcu nullam porttitor tortor placerat. Quisque amet eget nec amet sit sed. Sed morbi nibh venenatis quis at venenatis in. Enim urna adipiscing velit morbi ornare neque et dolor. Ultrices posuere turpis malesuada ut scelerisque nunc morbi nunc turpis. Est massa nulla bibendum cras nisl id augue. Ornare ut turpis vehicula ornare justo auctor laoreet diam id. Pellentesque elit cum nunc egestas imperdiet. Volutpat suspendisse neque ullamcorper eget massa posuere orci et imperdiet.</p>",
    },
  ],
});

Builder.registerComponent(BlogSubHeading, {
  name: "BlogSubHeading",
  inputs: [
    {
      name: "content",
      type: "richText",
      defaultValue: "<h4>Artificial Intelligence x Healthcare</h4>",
    },
  ],
});

Builder.registerComponent(BlogTitle, {
  name: "BlogTitle",
  inputs: [
    {
      name: "content",
      type: "richText",
      defaultValue: "<h2>Introduction</h2>",
    },
  ],
});

Builder.registerComponent(RelatedPostTitle, {
  name: "RelatedPostTitle",
  inputs: [
    {
      name: "content",
      type: "richText",
      defaultValue: "<h2>Related Posts</h2>",
    },
  ],
});

Builder.registerComponent(BlogList, {
  name: "BlogList",
  inputs: [
    {
      name: "content",
      type: "richText",
      defaultValue:
        "<ul><li>Sample Item 1</li><li>Sample Item 2</li><li>Sample Item 3</li></ul>",
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
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
      defaultValue: "BLOG",
    },
    {
      name: "heading",
      type: "string",
      required: true,
      defaultValue: "Explore our Knowledge Base",
    },
    {
      name: "subHeading",
      type: "string",
      required: true,
      defaultValue: "Insights and resources for AI in healthcare.",
    },
  ],
});

Builder.registerComponent(Insights, {
  name: "Insights",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
      defaultValue: "BLOG",
    },
    {
      name: "heading",
      type: "string",
      required: true,
      defaultValue: "Insights and updates",
    },
    {
      name: "subHeading",
      type: "string",
      required: true,
      defaultValue: "Stay informed with our latest articles.",
    },
    {
      name: "blogSelections",
      type: "list",
      subFields: [
        {
          name: "blogRef",
          type: "reference",
          model: "home-blogs",
          friendlyName: "Select Blog",
        },
      ],
      defaultValue: [],
      friendlyName: "Blog Selections",
      helperText: "Add blogs to display in this section",
    },
  ],
});

Builder.registerComponent(CaseStudies, {
  name: "CaseStudies",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
      defaultValue: "BLOG",
    },
    {
      name: "heading",
      type: "string",
      required: true,
      defaultValue: "Explore our case studies",
    },
    {
      name: "subHeading",
      type: "string",
      required: true,
      defaultValue: "Discover how our AI transforms healthcare pratices.",
    },
    {
      name: "blogSelections",
      type: "list",
      subFields: [
        {
          name: "blogRef",
          type: "reference",
          model: "home-blogs",
          friendlyName: "Select Blog",
        },
      ],
      defaultValue: [],
      friendlyName: "Blog Selections",
      helperText: "Add blogs to display in this section",
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

Builder.registerComponent(RelatedPosts, {
  name: "RelatedPosts",
  inputs: [
    {
      name: "blogSelections",
      type: "list",
      subFields: [
        {
          name: "blogRef",
          type: "reference",
          model: "home-blogs",
          friendlyName: "Select Blog",
        },
      ],
      defaultValue: [],
      friendlyName: "Blog Selections",
      helperText: "Add blogs to display in this section",
    },
  ],
});

Builder.registerComponent(Text, {
  override: true,
  name: "Text",
  inputs: [
    {
      name: "content",
      type: "richText",
    },
  ],
});
