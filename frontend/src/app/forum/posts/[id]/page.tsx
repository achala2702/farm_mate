import PostSection, { TPost } from "@/components/forum/PostSection";
import RootLayout from "@/layouts/RootLayout";
import { notFound } from "next/navigation";

const post:TPost = {
  id: 2,
  title: "Dealing with unexpected tomato blight in greenhouse conditions",
  content:
    "I've been growing tomatoes in my greenhouse for the past 5 years with great success, but this season I'm facing a blight issue that I can't seem to get under control.\n\nThe symptoms started with small brown spots on the lower leaves, which quickly spread upward. I've been carefully removing affected leaves and ensuring good air circulation, but it's still spreading.\n\nI'm committed to organic practices and don't want to use chemical fungicides. Has anyone successfully dealt with greenhouse tomato blight using organic methods? Any specific treatments or preventative measures you'd recommend?\n\nI'd appreciate any advice, as these tomatoes are a significant part of my farm's income.",
  author: {
    name: "Emily Jones",
    avatar:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=80&h=80&auto=format&fit=crop&q=80",
  },
  category: "Plant Diseases",
  votes: 42,
  timeAgo: "5 hours ago",
  imageSrc:
    "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1000&auto=format&fit=crop&q=80",
};

const comments = [
  {
    id: 1,
    author: {
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=80&h=80&auto=format&fit=crop&q=80",
    },
    content:
      "I had a similar issue last year. What worked for me was a combination of neem oil spray (2 tablespoons per gallon of water, applied every 7 days) and increasing the spacing between plants for better air circulation. Also, water at the base rather than overhead to keep the leaves dry.",
    votes: 15,
    timeAgo: "4 hours ago",
    replies: 2,
  },
  {
    id: 2,
    author: {
      name: "Emily Jones",
      avatar:
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=80&h=80&auto=format&fit=crop&q=80",
      isOP: true,
    },
    content:
      "Thanks for the quick response, Michael! I have been watering at the base only, but I haven't tried neem oil yet. I'll give that a try tomorrow morning. How quickly did you notice improvement after starting the neem oil treatment?",
    votes: 3,
    timeAgo: "3 hours ago",
    level: 1,
  },
  {
    id: 3,
    author: {
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=80&h=80&auto=format&fit=crop&q=80",
    },
    content:
      "It took about 10-14 days to see significant improvement. Be consistent with the application and make sure to get good coverage on both sides of the leaves. Also, the earlier you catch it, the better your chances of controlling it.",
    votes: 7,
    timeAgo: "3 hours ago",
    level: 2,
  },
  {
    id: 4,
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=80&h=80&auto=format&fit=crop&q=80",
    },
    content:
      "Blight can be challenging, especially in greenhouse environments where humidity tends to be higher. In addition to what Michael suggested, I'd recommend a preventative spray of compost tea once every two weeks. It introduces beneficial microorganisms that can help suppress the pathogen. Also, make sure you're rotating your tomato crops even within the greenhouse - don't plant them in the same spot year after year.",
    votes: 21,
    timeAgo: "2 hours ago",
  },
  {
    id: 5,
    author: {
      name: "Robert Williams",
      avatar:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&auto=format&fit=crop&q=80",
    },
    content:
      "Don't forget to thoroughly sanitize your greenhouse between growing seasons. I steam clean all surfaces and growing media to eliminate any lingering pathogens. It's labor-intensive but has virtually eliminated disease issues in my greenhouse operation.",
    votes: 9,
    timeAgo: "1 hour ago",
  },
];

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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
