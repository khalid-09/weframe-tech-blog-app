"use client"
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Navbar from "./components/header/navbar";
import NewsLetter from "./components/newsletter";
import SearchInput from "./components/blog/search-input";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


Builder.registerComponent(Counter, {
    name: "Counter",
    inputs: [
        {
            name: "initialCount",
            type: "number",
        },
    ],
});

Builder.registerComponent(Navbar, {
    name: "Navbar",
});

Builder.registerComponent(NewsLetter, {
    name: "NewsLetter",
});

Builder.registerComponent(SearchInput, {
    name: "SearchInput"
});
