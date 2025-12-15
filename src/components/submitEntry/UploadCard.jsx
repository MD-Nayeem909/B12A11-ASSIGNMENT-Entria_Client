import React from "react";
export default function UploadCard({ file }) {
  return (
    <div className="aspect-square bg-base-300 rounded-xl flex items-center justify-center text-sm p-3 text-center overflow-hidden">
      <p className="truncate">{file.name}</p>
    </div>
  );
}
