"use client";

import Categories from "@/components/forum/Categories";
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

export default function ForumPage() {
  const handleSearch = () => {};
  return (
    <RootLayout>
      <Header searchFunction={handleSearch} />
      <Categories categories={categories_list}/>
    </RootLayout>
  );
}
