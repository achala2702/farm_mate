"use client";

import { Icon } from "@iconify/react";
import Button from "../button";
import type {TPost} from "@/api/GetPosts";
import FormatTimesAgo from "@/utils/FormateTimesAgo";

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
              src={"/images/person.png"}
              className="rounded-full w-10 h-10 object-cover"
            />
            <div>
              <p className="md:text-base text-sm">{post.postAuthor.authorFirstName + " " + post.postAuthor.authorLastName}</p>
              <p className="md:text-sm text-xs">{FormatTimesAgo(new Date(post.createdAt))}</p>
            </div>
          </div>
          <p className="text-sm md:text-base">{post.content}</p>
          <img
            src={post.imageUrl}
            alt="post-img"
            className="object-cover rounded-2xl w-4/5 mx-auto my-2"
          />
        </div>
        <div className=" flex items-center justify-between">
          <div className=" flex gap-2 items-center justify-center">
            <Icon
              icon="ion:arrow-up-outline"
              className="w-5 h-5 md:w-6 md:h-6 hover:text-foreground/60 active:scale-90 transition-all duration-150"
              onClick={() => console.log("up clicked")}
            />
            <p className="text-sm md:text-lg">{post.votes}</p>
            <Icon
              icon="ion:arrow-down-outline"
              className="w-5 h-5 md:w-6 md:h-6 hover:text-foreground/60 active:scale-90 transition-all duration-150"
              onClick={() => console.log("down clicked")}
            />
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
