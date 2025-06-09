import React from "react";
import {
  FaBan,
  FaPoundSign,
  FaRegClock,
  FaRoad,
  FaRulerCombined,
  FaWeightHanging,
} from "react-icons/fa";
import type { ISkip } from "../types";

interface SkipCardProps {
  skip: ISkip;
  onSelect: (skip: ISkip) => void;
}

const getSkipImageUrl = (size: number) =>
  `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${size}-yarder-skip.jpg`;

const SkipCard: React.FC<SkipCardProps> = ({ skip, onSelect }) => (
  <div
    className="bg-white rounded-xl shadow-lg flex flex-row p-8 items-stretch w-full max-w-5xl border hover:shadow-2xl transition cursor-pointer relative group mx-auto mb-8"
    style={{
      padding: "1.5rem",
      borderRadius: "1rem",
      margin: "0 auto 2rem",
      flexWrap: "wrap",
      flexBasis: "calc(50% - 1.5rem)",
    }}
    onClick={() => onSelect(skip)}
  >
    {/* <div className="flex-shrink-0 flex items-center justify-center md:pr-6 md:border-r border-gray-200 mb-4 md:mb-0"> */}
    <img
      src={getSkipImageUrl(skip.size)}
      alt={`Skip size ${skip.size}`}
      style={{ maxHeight: "128px" }}
      className="flex-1 w-1/3 rounded-lg object-contain bg-gray-100 mr-6"
      onError={(e) => {
        (
          e.target as HTMLImageElement
        ).src = `https://placehold.co/300x180?text=${skip.size}yd³`;
      }}
    />
    {/* </div> */}
    <div className="flex-1 w-2/3 flex justify-between">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 w-full items-center px-2">
        <div
          className="flex items-center gap-3 text-lg font-semibold"
          style={{ gap: "0.75rem" }}
        >
          <FaRulerCombined className="text-blue-600 bg-blue-100 rounded-full p-1 text-2xl" />
          <span>{skip.size} yd³ Skip</span>
        </div>
        <div
          className="flex items-center gap-3 text-gray-700"
          style={{ gap: "0.75rem" }}
        >
          <FaWeightHanging
            className={
              skip.allows_heavy_waste
                ? "text-green-600 bg-green-100"
                : "text-gray-400 bg-gray-100"
            }
            style={{
              borderRadius: "9999px",
              padding: "2px",
              fontSize: "1.5rem",
            }}
          />
          <span>
            {skip.allows_heavy_waste ? "Allows heavy waste" : "No heavy waste"}
          </span>
        </div>
        <div
          className="flex items-center gap-3 text-gray-700"
          style={{ gap: "0.75rem" }}
        >
          <FaRoad
            className={
              skip.allowed_on_road
                ? "text-green-600 bg-green-100"
                : "text-red-600 bg-red-100"
            }
            style={{
              borderRadius: "9999px",
              padding: "2px",
              fontSize: "1.5rem",
            }}
          />
          <span>
            Allowed on road: <b>{skip.allowed_on_road ? "Yes" : "No"}</b>
          </span>
        </div>
        <div
          className="flex items-center gap-3 text-gray-700"
          style={{ gap: "0.75rem" }}
        >
          <FaRegClock className="text-purple-600 bg-purple-100 rounded-full p-1 text-2xl" />
          <span className="font-medium">Hire Period:</span>{" "}
          {skip.hire_period_days} days
        </div>
        <div
          className="flex items-center gap-3 text-gray-700"
          style={{ gap: "0.75rem" }}
        >
          <FaPoundSign className="text-yellow-600 bg-yellow-100 rounded-full p-1 text-2xl" />
          <span className="font-medium">Price:</span> £
          {(skip.price_before_vat + skip.vat).toFixed(2)}
        </div>
        {skip.forbidden && (
          <div className="flex items-center gap-2 text-red-600 font-bold bg-white/80 px-2 py-1 rounded shadow col-span-full">
            <FaBan className="text-red-600" /> Forbidden
          </div>
        )}
      </div>
    </div>
  </div>
);

export default SkipCard;
