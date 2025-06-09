import React from "react";
import type { ISkip } from "../types";
import SkipCard from "./SkipCard";

interface SkipListProps {
  skips: ISkip[];
  onSelect: (skip: ISkip) => void;
}

const SkipList: React.FC<SkipListProps> = ({ skips, onSelect }) => (
  <div className="flex flex-wrap gap-6 justify-center mt-8">
    {skips.map((skip) => (
      <SkipCard key={skip.id} skip={skip} onSelect={onSelect} />
    ))}
  </div>
);

export default SkipList;
