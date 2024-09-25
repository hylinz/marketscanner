import { FilterType } from "@/lib/types";
import React from "react";
import { FaChartPie, FaChartLine, FaList, FaClone } from "react-icons/fa"; // Import icons

interface DisplayOptionsProps {
  selectedFilter: FilterType | null;
  onSelectFilter: (filter: FilterType) => void;
}

const DisplayOptions: React.FC<DisplayOptionsProps> = ({
  selectedFilter,
  onSelectFilter,
}) => {
  return (
    <div className="flex space-x-4 bg-secondary items-center px-10 py-2 rounded-full">
      <span
        className={`p-2 ${
          selectedFilter === FilterType.Chart
            ? "bg-primary/80 rounded-full"
            : ""
        }`}
      >
        <FaChartPie
          onClick={() => onSelectFilter(FilterType.Chart)}
          className={`transition-all duration-300 hover:scale-125 hover:cursor-pointer ${
            selectedFilter === FilterType.Chart
              ? "font-bold text-secondary"
              : ""
          }`}
        />
      </span>
      <span
        className={`p-2 ${
          selectedFilter === FilterType.Trend
            ? "bg-primary/80 rounded-full"
            : ""
        }`}
      >
        <FaChartLine
          onClick={() => onSelectFilter(FilterType.Trend)}
          className={`transition-all duration-300 hover:scale-125 hover:cursor-pointer ${
            selectedFilter === FilterType.Trend
              ? "font-bold text-secondary"
              : ""
          }`}
        />
      </span>

      <span
        className={`p-2 ${
          selectedFilter === FilterType.List ? "bg-primary/80 rounded-full" : ""
        }`}
      >
        <FaList
          onClick={() => onSelectFilter(FilterType.List)}
          className={`transition-all duration-300 hover:scale-125 hover:cursor-pointer ${
            selectedFilter === FilterType.List ? "font-bold text-secondary" : ""
          }`}
        />
      </span>

      <span
        className={`p-2 ${
          selectedFilter === FilterType.Card ? "bg-primary/80 rounded-full" : ""
        }`}
      >
        <FaClone
          onClick={() => onSelectFilter(FilterType.Card)}
          className={`transition-all duration-300 hover:scale-125 hover:cursor-pointer ${
            selectedFilter === FilterType.Card ? "font-bold text-secondary" : ""
          }`}
        />
      </span>
    </div>
  );
};

export default DisplayOptions;
