export interface BlogData {
  id: string;
  name: string;
  data: {
    displayImage: string;
    title: string;
    description: string;
    avatar: string;
    authorName: string;
    tag: string[];
    timeToRead: number;
    category: string;
    slug: string;
  };
}

export interface FaqData {
  id: string;
  name: string;
  data: {
    question: string;
    answer: string;
  };
}

export interface NavLinks {
  id: string;
  name: string;
  data: {
    name: string;
    link: string;
  };
}

export interface NewsLetter {
  text: string;
}
