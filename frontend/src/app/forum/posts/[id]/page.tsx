import PostSection from "@/components/forum/PostSection";
import RootLayout from "@/layouts/RootLayout";
import { notFound } from "next/navigation";
import type { TPost } from "@/api/GetPosts";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/get-post/${id}`,{
    method:"GET",
    next: {revalidate: 0},
  });

  if(!res.ok){
    console.log("error");
  }

  const post:TPost = await res.json();

  //retun not found page if the id is not a number
  if (isNaN(Number(id))) {
    notFound();
  }

  return (
    <RootLayout>
      <PostSection post={post}/>
    </RootLayout>
  );
}
