"use client";

import { Icon } from "@iconify/react";
import Button from "../button";

export type TPost = {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  votes: number;
  timeAgo: string;
  imageSrc: string;
};

type PostSectionProps = {
  post: TPost;
};

export default function PostSection({ post }: PostSectionProps) {
  return (
    <section className="w-full bg-custom-card-bg rounded-2xl p-10">
      <div className="flex flex-col gap-4 md:gap-6 w-full">
        <p className="bg-background w-fit px-2 py-1 rounded-2xl font-extralight italic text-xs md:text-sm">
          {post.category}
        </p>
        <div className="flex flex-col gap-1 md:gap-4">
          <h1 className="font-bold text-base md:text-lg lg:text-xl">
            {post.title}
          </h1>
          <div className=" flex gap-2 items-center">
            <img
              src={post.author.avatar}
              className="rounded-full w-10 h-10 object-cover"
            />
            <div>
              <p className="md:text-base text-sm">{post.author.name}</p>
              <p className="md:text-sm text-xs">{post.timeAgo}</p>
            </div>
          </div>
          <p className="text-sm md:text-base">{post.content}</p>
          <img
            src={post.imageSrc}
            alt="post-img"
            className="object-cover rounded-2xl w-4/5 mx-auto my-2"
          />
        </div>
        <div className=" flex items-center justify-between">
          <div className=" flex gap-2 items-center justify-center">
            <img
              src={post.author.avatar}
              className="rounded-full w-6 h-6 object-cover"
            />
            <p className="md:text-sm text-xs">
              Posted by <strong>{post.author.name}</strong>: {post.timeAgo}
            </p>
          </div>
          <Button
            icon="meteor-icons:share"
            text="Share"
            className="bg-background px-4 py-2 rounded-md"
            onClick={() => console.log("share clicked")}
          />
        </div>
      </div>
    </section>
  );
}
