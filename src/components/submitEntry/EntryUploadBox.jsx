import { useState } from "react";
import { Upload } from "lucide-react";

export default function EntryUploadBox({ register }) {
  const [files, setFiles] = useState([]);

  const handleSelect = (e) => {
    setFiles([...e.target.files]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleRemove = (index) =>
    setFiles((prev) => prev.filter((_, i) => i !== index));

  const allowDrag = (e) => e.preventDefault();

  return (
    <div className="space-y-3">
      <div
        className="border-2 border-dashed border-gray-400 rounded-xl p-10 text-center bg-base-200 transition cursor-pointer"
        onDrop={handleDrop}
        onDragOver={allowDrag}
      >
        <h3 className="font-semibold text-lg">Add Files</h3>
        <p className="text-sm opacity-70">Drag multiple files here</p>
        <p className="my-2">or</p>

        <label className="btn btn-outline cursor-pointer inline-flex gap-2 items-center">
          <Upload size={18} /> Browse Your Files
          <input
            type="file"
            className="hidden"
            multiple
            required
            {...register("files")}
            onChange={handleSelect}
          />
        </label>
      </div>

      <p className="text-xs opacity-70">
        Supported file types:{" "}
        <span className="font-semibold">GIF, JPEG, JPG, PNG</span>
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {files.map((file, i) => (
          <div
            key={i}
            className="relative group bg-base-200 rounded-xl overflow-hidden"
          >
            {/* Thumbnail */}
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="w-full h-32 object-cover"
            />

            {/* Remove Button */}
            <button
              className="absolute top-2 right-2 btn btn-xs btn-error hidden bg-white group-hover:flex"
              onClick={() => handleRemove(i)}
            >
              X
            </button>

            {/* Upload Progress */}
            {file.progress !== undefined && (
              <div className="absolute bottom-0 left-0 w-full h-2 bg-black/20">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${file.progress}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
