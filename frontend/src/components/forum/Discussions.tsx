import { useState } from "react";
import Button from "../button";
import DiscussionCard from "./DiscussionCard";

export type TDiscussion = {
  id: number;
  title: string;
  preview: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  votes: number;
  comments: number;
  timeAgo: string;
};

type DiscussionsProps = {
  discussions: TDiscussion[];
};

const tabs = ["Trending", "Latest", "Most Popular"];

export default function Discussions({ discussions }: DiscussionsProps) {
  const [activeTab, SetActiveTab] = useState("Trending");

  const handleViewAllClick = () => {};

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
        {discussions.map((discussion) => (
          <DiscussionCard key={discussion.id} discussion={discussion} />
        ))}
      </div>
    </div>
  );
}
