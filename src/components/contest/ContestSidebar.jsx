import React from "react";
import { Link } from "react-router";
export default function ContestSidebar() {
  return (
    <div className="bg-base-100 p-6 rounded-xl shadow space-y-4">
      <Link to="submit_entry" className="btn btn-primary w-full">Submit My Entry</Link>
      <button className="btn btn-outline w-full">Message Contest Holder</button>
    </div>
  );
}
