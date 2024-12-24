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
  };
}