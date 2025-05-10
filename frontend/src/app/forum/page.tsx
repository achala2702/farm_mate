"use client";

import Categories from "@/components/forum/Categories";
import Discussions from "@/components/forum/Discussions";
import Header from "@/components/forum/Header";
import RootLayout from "@/layouts/RootLayout";

const categories_list = [
  { id:1, name: "Plant Diseases", icon: "mdi:leaf", description: "Identify and treat plant diseases effectively", topics_count: 12 },
  { id:2, name: "Market Trends", icon: "solar:chart-bold", description: "Analyze market trends and pricing forecasts", topics_count: 12 },
  { id:3, name: "Weather Updates", icon: "oi:rain", description: "Weather forecasts and climate discussions", topics_count: 12 },
  { id:4, name: "Best Practices", icon: "uis:calender", description: "Farming techniques and best practices", topics_count: 12 },
  { id:5, name: "Equipment & Tools", icon: "typcn:spanner", description: "Discussions about farming equipment and tools", topics_count: 12 },
  { id:6, name: "Marketplace", icon: "mdi:marketplace", description: "Buy and sell farming products", topics_count: 12 },
];

const discussions = [
  {
    id: 1,
    title: "What's the best crop rotation strategy for small organic farms?",
    preview: "I'm planning my first full season of organic vegetable farming on a 2-acre plot. Looking for advice on effective crop rotation to minimize pest issues and soil depletion.",
    author: {
      name: "John Smith",
      avatar: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=80&h=80&auto=format&fit=crop&q=80"
    },
    category: "Best Practices",
    votes: 24,
    comments: 13,
    timeAgo: "2 days ago"
  },
  {
    id: 2,
    title: "Dealing with unexpected tomato blight in greenhouse conditions",
    preview: "My greenhouse tomatoes are showing signs of blight despite controlled conditions. Has anyone successfully treated this without chemicals?",
    author: {
      name: "Emily Jones",
      avatar: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=80&h=80&auto=format&fit=crop&q=80"
    },
    category: "Plant Diseases",
    votes: 42,
    comments: 27,
    timeAgo: "5 hours ago"
  },
  {
    id: 3,
    title: "Grain market predictions for next season - what are you planning?",
    preview: "With the current market volatility, I'm trying to decide whether to increase or decrease my wheat acreage. What's everyone else planning?",
    author: {
      name: "Robert Williams",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=80&h=80&auto=format&fit=crop&q=80"
    },
    category: "Market Trends",
    votes: 18,
    comments: 34,
    timeAgo: "1 day ago"
  },
  {
    id: 4,
    title: "Experiences with new electric tractors?",
    preview: "Considering investing in an electric tractor. Has anyone made the switch? Looking for real-world performance data and experiences.",
    author: {
      name: "Jessica Brown",
      avatar: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=80&h=80&auto=format&fit=crop&q=80"
    },
    category: "Equipment & Tools",
    votes: 31,
    comments: 19,
    timeAgo: "3 days ago"
  },
  {
    id: 5,
    title: "Extreme weather preparation strategies - what's working for you?",
    preview: "As we face more unpredictable weather patterns, I'd like to hear how others are adapting their growing seasons and protection methods.",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=80&h=80&auto=format&fit=crop&q=80"
    },
    category: "Weather Updates",
    votes: 56,
    comments: 42,
    timeAgo: "2 weeks ago"
  }
];

export default function ForumPage() {
  const handleSearch = () => {};
  return (
    <RootLayout>
      <Header searchFunction={handleSearch} />
      <Categories categories={categories_list}/>
      <Discussions discussions = {discussions}/>
    </RootLayout>
  );
}
