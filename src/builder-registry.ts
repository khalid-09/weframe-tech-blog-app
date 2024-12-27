"use client"
import { builder, Builder } from "@builder.io/react";
import BannerImage from "./components/blog/banner-image";
import BlogBoldParagraph from "./components/blog/blog-bold-paragraph";
import BlogInfo from "./components/blog/blog-info";
import BlogList from "./components/blog/blog-list";
import BlogParagraph from "./components/blog/blog-paragraph";
import BlogSubHeading from "./components/blog/blog-sub-heading";
import BlogSubImage from "./components/blog/blog-sub-image";
import BlogTitle from "./components/blog/blog-title";
import Heading from "./components/blog/heading";
import RelatedPosts from "./components/blog/related-posts";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


Builder.registerComponent(Heading, {
    name: "Heading",
    inputs: [{
            name: "author",
            type: "string",
            required: true
        }, {
            name: "avatarUrl",
            type: "string",
            required: true
        }, {
            name: "backText",
            type: "string",
            required: true
        }, {
            name: "date",
            type: "string",
            required: true
        }, {
            name: "readingTime",
            type: "string",
            required: true
        }, {
            name: "title",
            type: "string",
            required: true
        }]
});

Builder.registerComponent(BannerImage, {
    name: "BannerImage",
    inputs: [{
            name: "imageUrl",
            type: "string",
            required: true
        }]
});

Builder.registerComponent(BlogBoldParagraph, {
    name: "BlogBoldParagraph",
    inputs: [{
            name: "text",
            type: "string",
            required: true
        }]
});

Builder.registerComponent(BlogParagraph, {
    name: "BlogParagraph",
    inputs: [{
            name: "text",
            type: "string",
            required: true
        }]
});

Builder.registerComponent(BlogSubHeading, {
    name: "BlogSubHeading",
    inputs: [{
            name: "text",
            type: "string",
            required: true
        }]
});

Builder.registerComponent(BlogTitle, {
    name: "BlogTitle",
    inputs: [{
            name: "text",
            type: "string",
            required: true
        }]
});

Builder.registerComponent(RelatedPosts, {
    name: "RelatedPosts"
});

Builder.registerComponent(BlogList, {
    name: "BlogList",
    inputs: [{
            name: "text",
            type: "string",
            required: true
        }]
});

Builder.registerComponent(BlogSubImage, {
    name: "BlogSubImage",
    inputs: [{
            name: "imageUrl",
            type: "string",
            required: true
        }]
});

Builder.registerComponent(BlogInfo, {
    name: "BlogInfo",
    inputs: [{
            name: "author",
            type: "string",
            required: true
        }, {
            name: "avatarUrl",
            type: "string",
            required: true
        }, {
            name: "date",
            type: "string",
            required: true
        }, {
            name: "facebookUrl",
            type: "string",
            required: true
        }, {
            name: "link",
            type: "string",
            required: true
        }, {
            name: "linkedinUrl",
            type: "string",
            required: true
        }, {
            name: "readingTime",
            type: "string",
            required: true
        }, {
            name: "tag",
            type: "string",
            required: true
        }, {
            name: "twitterUrl",
            type: "string",
            required: true
        }]
});
