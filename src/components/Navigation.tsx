import React from "react";

const Navigation: React.FC = () => (
  <nav className="w-full bg-blue-700 text-white px-6 py-4 flex items-center justify-between shadow">
    <div className="text-2xl font-bold">Skip Waste</div>
    <div className="space-x-4">{/* Add navigation links here if needed */}</div>
  </nav>
);

export default Navigation;
