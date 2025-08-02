"use client";

import RootLayout from "@/layouts/RootLayout";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import DiscussionCard from "@/components/forum/DiscussionCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import GetPosts from "@/api/GetPosts";
import type { TData } from "@/api/GetPosts";

export default function AllPosts() {
  const router = useRouter();
  const size = 5;
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<TData>({
      queryKey: ["posts"],
      queryFn: ({ pageParam = 0 }) => GetPosts(pageParam as number, size),
      getNextPageParam: (lastPage) =>
        lastPage.hasNextPage ? lastPage.nextPage : undefined,
      initialPageParam: 0,
    });

  //navigate to an individual discussion
  const handleDiscussionClick = (discussionId: number) => {
    setTimeout(() => {
      router.push(`/forum/posts/${discussionId}`);
    }, 200);
  };

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    //observer to watch and fetch next page
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    //calling the observer
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <RootLayout className="flex flex-col gap-4 mt-6">
      {data?.pages.map((page) =>
        page.posts.map((discussion) => (
          <DiscussionCard
            key={discussion.postId}
            onDiscussionClick={() => handleDiscussionClick(discussion.postId)}
            discussion={discussion}
          />
        ))
      )}
      <div ref={loadMoreRef} className="h-10" />
      {isFetchingNextPage && <p className="text-center">Loading more...</p>}
    </RootLayout>
  );
}
