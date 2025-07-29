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

export default async function GetPosts(page: number, size: number):Promise<TPost[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/get-posts?page=${page}&size=${size}`
  );

  if(!res.ok) {
    throw new Error("Failed to fetch posts..!")
  }

  return res.json();
}
