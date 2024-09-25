import { useState } from "react";
import DisplayOptions from "@/components/ui/display-options";
import { FilterType } from "@/lib/types";

interface HeaderProps {
  title: string;
  description?: string;
  includeOptions: boolean;
}
export function MethodHeader({ title, includeOptions, description }: HeaderProps) {
    const [filter, setFilter] = useState<FilterType | null>(FilterType.Card);

  return (
    <div className="flex w-full p-5 bg-primary/20">
      <div className="flex flex-col flex-1">
        <h1 className="font-bold text-2xl">{title}</h1>
        {description ?? (
            <span className="font-light italic">{description}</span>
        )}
      </div>
      {includeOptions && includeOptions === true ? (
        <DisplayOptions selectedFilter={filter} onSelectFilter={setFilter} />
      ) : ''}
    </div>
  );
}

export default MethodHeader;
