import React from "react";
export default function PrizeCard({ amount, subtitle }) {
  return (
    <div className="p-4 bg-primary text-primary-content rounded-xl text-center shadow">
      <h2 className="text-3xl font-bold">{amount}</h2>
      <p className="text-sm opacity-80">{subtitle}</p>
    </div>
  );
}
