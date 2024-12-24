"use client";

import { builder, Builder } from "@builder.io/react";
import Navbar from "./components/header/navbar";
import NewsLetter from "./components/newsletter";
import SearchInput from "./components/blog/search-input";

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
