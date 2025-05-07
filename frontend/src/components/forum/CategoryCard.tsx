import { Category } from "./Categories";
import { Icon } from "@iconify/react";

export default function CategoryCard({
  name,
  icon,
  description,
  topics_count,
}: Category) {
  return (
    <div className=" flex flex-col justify-between min-h-44 bg-custom-card-bg rounded-2xl p-6">
      <div className="flex gap-4">
        <div className="border-gray-400 border flex items-center justify-center w-14 h-14 shrink-0 rounded-full">
        <Icon icon={icon} width="26" height="26" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">{name}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex items-center py-1 px-2 text-sm  justify-center self-start rounded-2xl border border-gray-400">
        <p>{topics_count} topics</p>
      </div>
    </div>
  );
}
