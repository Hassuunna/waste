import React from "react";
import type { ISkip } from "../types";

interface SkipConfirmModalProps {
  skip: ISkip | null;
  onClose: () => void;
  onConfirm: () => void;
}

const getSkipImageUrl = (size: number) =>
  `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${size}-yarder-skip.jpg`;

const SkipConfirmModal: React.FC<SkipConfirmModalProps> = ({
  skip,
  onClose,
  onConfirm,
}) => {
  if (!skip) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-md z-10 flex flex-col items-center">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Confirm Your Selection</h2>
        <img
          src={getSkipImageUrl(skip.size)}
          alt={`Skip size ${skip.size}`}
          className="rounded w-full h-32 object-contain mb-4 bg-gray-100"
          style={{ width: "100%", height: "128px" }}
          onError={(e) => {
            (
              e.target as HTMLImageElement
            ).src = `https://placehold.co/300x180?text=${skip.size}yd³`;
          }}
        />
        <div className="mb-2">
          Size: <b>{skip.size} yd³</b>
        </div>
        <div className="mb-2">
          Hire Period: <b>{skip.hire_period_days} days</b>
        </div>
        <div className="mb-2">
          Price: <b>£{(skip.price_before_vat + skip.vat).toFixed(2)}</b>
        </div>
        <div className="mb-2">
          Allowed on road: <b>{skip.allowed_on_road ? "Yes" : "No"}</b>
        </div>
        <div className="mb-2">
          {skip.allows_heavy_waste ? "Allows heavy waste" : "No heavy waste"}
        </div>
        {skip.forbidden && (
          <div className="text-red-600 font-bold">Forbidden</div>
        )}
        <div className="flex gap-4 mt-6 justify-end">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipConfirmModal;
