import React from "react";
export default function StatusBadge({ status }) {
  const styles = {
    Pending: "badge-warning",
    Confirmed: "badge-success",
    Rejected: "badge-error",
  };

  return (
    <div className={`badge ${styles[status]} px-3 py-2 capitalize`}>
      {status.replace("_", " ")}
    </div>
  );
}
