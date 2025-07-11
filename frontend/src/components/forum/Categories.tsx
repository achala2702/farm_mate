import CategoryCard from "./CategoryCard";

export type TCategory = {
  id?: number;
  name: string;
  icon: string;
  description: string;
  topics_count: number;
};

interface CategoriesProps {
  categories: TCategory[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <div>
      <h1 className="text-2xl xl:text-4xl font-bold mb-6">Browse Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            icon={category.icon}
            description={category.description}
            topics_count={category.topics_count}
          />
        ))}
      </div>
    </div>
  );
}
