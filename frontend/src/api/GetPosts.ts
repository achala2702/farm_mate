export interface TPost {
  postId: number;
  title: string;
  category: string;
  content: string;
  votes: number | null;
  imageUrl: string;
  postAuthor: {
    authorId: number;
    authorEmail: string;
    authorFirstName: string;
    authorLastName: string;
  };
  comments: any[]; // jsut for now
  createdAt:string
}

export type TData = {
  posts: TPost[];
  currentPage: number;
  hasNextPage: boolean;
  nextPage: number;
}

export default async function GetPosts(page: number, size: number):Promise<TData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/get-posts?page=${page}&size=${size}`
  );

  if(!res.ok) {
    throw new Error("Failed to fetch posts..!")
  }

  return res.json();
}
