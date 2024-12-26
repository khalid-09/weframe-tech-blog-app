"use client"
import { builder, Builder } from "@builder.io/react";
import BannerImage from "./components/blog/banner-image";
import BlogCard from "./components/hero/blog-card";
import BlogHeader from "./components/hero/blog-header";
import BlogHeading from "./components/blog-heading";
import BlogPagination from "./components/hero/blog-pagination";
import BlogWrap from "./components/hero/blog-wrap";
import CaseStudies from "./components/features/case-studies";
import FAQS from "./components/faqs/faqs";
import Feature from "./components/features/feature";
import Heading from "./components/blog/heading";
import Hero from "./components/hero/hero";
import Insights from "./components/features/insights";
import Navbar from "./components/header/navbar";
import NewsLetter from "./components/newsletter";
import SearchInput from "./components/hero/search-input";
import TopBlog from "./components/hero/top-blog";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


Builder.registerComponent(Navbar, {
    name: "Navbar",
});

Builder.registerComponent(NewsLetter, {
    name: "NewsLetter",
});

Builder.registerComponent(SearchInput, {
    name: "SearchInput",
});

Builder.registerComponent(BlogCard, {
    name: "BlogCard",
    inputs: [
        {
            name: "blog",
            type: "object",
            hideFromUI: true,
            meta: {
                ts: "BlogData",
            },
            required: true,
        },
    ],
});

Builder.registerComponent(Hero, {
    name: "Hero",
});

Builder.registerComponent(BlogHeader, {
    name: "BlogHeader",
});

Builder.registerComponent(BlogWrap, {
    name: "BlogWrap",
});

Builder.registerComponent(BlogHeading, {
    name: "BlogHeading",
    inputs: [
        {
            name: "type",
            type: "string",
            enum: ["blog", "faq"],
            required: true,
        },
    ],
});

Builder.registerComponent(BlogPagination, {
    name: "BlogPagination",
});

Builder.registerComponent(TopBlog, {
    name: "TopBlog",
});

Builder.registerComponent(Feature, {
    name: "Feature",
    inputs: [
        {
            name: "category",
            type: "string",
            enum: ["case-studies", "insights"],
        },
        {
            name: "faq",
            type: "boolean",
        },
    ],
});

Builder.registerComponent(FAQS, {
    name: "FAQS",
});

Builder.registerComponent(Insights, {
    name: "Insights",
});

Builder.registerComponent(CaseStudies, {
    name: "CaseStudies",
});

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
