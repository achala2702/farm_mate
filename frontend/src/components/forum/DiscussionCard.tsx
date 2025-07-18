"use client";

import { useState } from "react";
import { TDiscussion } from "./Discussions";
import { Icon } from "@iconify/react";

type DiscussionProps = {
  discussion: TDiscussion;
  onDiscussionClick: () => void;
};

export default function DiscussionCard({
  discussion,
  onDiscussionClick,
}: DiscussionProps) {
  const [votes, setVotes] = useState(discussion.votes || 0);

  //handle vote clicking
  const handleVoteClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); //prevent card click navigation

    setVotes((prev) => prev + 1);
    
    //backend update logic
  };

  return (
    <div
      onClick={onDiscussionClick}
      className="bg-custom-card-bg flex gap-4 opcaity-100 hover:opacity-90 duration-150 active:scale-98 transition-all cursor-pointer rounded-2xl p-6"
    >
      <div
        onClick={handleVoteClick}
        className="flex flex-col items-center hover:bg-background p-2 rounded-md h-fit active:scale-98"
      >
        <Icon icon="ion:arrow-up-outline" className="w-4 h-4 md:w-5 md:h-5" />
        <p className="text-sm md:text-base">{votes}</p>
      </div>
      <div className="flex flex-col gap-4 md:gap-6 w-full">
        <p className="bg-background w-fit px-2 py-1 rounded-2xl font-extralight italic text-xs md:text-sm">
          {discussion.category}
        </p>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-base md:text-lg lg:text-xl">
            {discussion.title}
          </h1>
          <p className="text-sm md:text-base">{discussion.preview}</p>
        </div>
        <div className=" flex items-center justify-between">
          <div className=" flex gap-2 items-center justify-center">
            <img
              src={discussion.author.avatar}
              className="rounded-full w-6 h-6 object-cover"
            />
            <p className="md:text-sm text-xs">
              Posted by <strong>{discussion.author.name}</strong>:{" "}
              {discussion.timeAgo}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1">
              <Icon
                icon="fluent:comment-32-regular"
                className="w-4 h-4 md:w-5 md:h-5"
              />
              <p className="text-sm md:text-base">{discussion.comments}</p>
            </div>
            <Icon icon="meteor-icons:share" className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
