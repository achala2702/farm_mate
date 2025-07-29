"use client";

import RootLayout from "@/layouts/RootLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DiscussionCard from "@/components/forum/DiscussionCard";
import { useQuery } from "@tanstack/react-query";
import GetPosts from "@/api/GetPosts";
import type { TPost } from "@/api/GetPosts";

export default function AllPosts() {
  const router = useRouter();
  // const [posts, setPosts] = useState<TPost[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const size = 5;

    const {data, isLoading, error} = useQuery<TPost[]>({
      queryKey:["posts", page, size],
      queryFn: ({queryKey})=>{
        const [_key, page, size] = queryKey;
        return GetPosts(page as number, size as  number);
      }
    });

  // const fetchPosts = async () => {
  //   const res = await fetch(
  //     `http://localhost:8080/api/posts/get-posts?page=${page}&size=${size}`
  //   );
  //   const newPosts = await res.json();
  //   if (newPosts.length < size) {
  //     setHasMore(false);
  //   }
  //   setPosts((prev) => [...prev, ...newPosts]);
  //   console.log(posts);
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, [page]);

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 100 >=
  //     document.documentElement.offsetHeight
  //   ) {
  //     if (hasMore) {
  //       setPage((prev) => prev + 1);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [hasMore]);

  //navigate to an individual discussion
  const handleDiscussionClick = (discussionId: number) => {
    setTimeout(() => {
      router.push(`/forum/posts/${discussionId}`);
    }, 200);
  };

  return (
    <RootLayout className="flex flex-col gap-4 mt-6">
      {data?.map((discussion) => (
        <DiscussionCard
          key={discussion.postId}
          onDiscussionClick={() => handleDiscussionClick(discussion.postId)}
          discussion={discussion}
        />
      ))}
    </RootLayout>
  );
}
