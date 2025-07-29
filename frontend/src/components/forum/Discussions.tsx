"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query"; 
import Button from "../button";
import DiscussionCard from "./DiscussionCard";
import GetPosts from "@/api/GetPosts";
import type { TPost } from "@/api/GetPosts";

const tabs = ["Trending", "Latest", "Most Popular"];

export default function Discussions() {
  const [activeTab, SetActiveTab] = useState("Trending");
  const router = useRouter();
  const size = 5;
  const page = 0;

  const {data, isLoading, error} = useQuery<TPost[]>({
    queryKey:["posts", page, size],
    queryFn: ({queryKey})=>{
      const [_key, page, size] = queryKey;
      return GetPosts(page as number, size as  number);
    }
  });

  const handleViewAllClick = () => {
    router.push("forum/posts");
  };

  //navigate to an individual discussion
  const handleDiscussionClick = (discussionId: number) => {
    setTimeout(() => {
      router.push(`forum/posts/${discussionId}`);
    }, 200);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl xl:text-4xl font-bold">Discussions</h1>
        <Button
          text="View All"
          className="border-1 border-custom-card-bg rounded-xl px-4 py-2"
          onClick={handleViewAllClick}
        />
      </div>
      <div className="flex bg-custom-card-bg p-1 sm:ml-0 mx-auto rounded-md gap-2 w-fit">
        {tabs.map((tab) => (
          <Button
            key={tab}
            text={tab}
            onClick={() => SetActiveTab(tab)}
            className={`p-3 lg:p-4 rounded-md ${
              tab === activeTab ? "bg-background" : ""
            }`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-6">
        {data?.map((discussion) => (
          <DiscussionCard
            key={discussion.postId}
            onDiscussionClick={() => handleDiscussionClick(discussion.postId)}
            discussion={discussion}
          />
        ))}
      </div>
    </div>
  );
}
