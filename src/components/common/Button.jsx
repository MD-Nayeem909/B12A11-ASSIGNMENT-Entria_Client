import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="group relative overflow-hidden overflow-x-hidden rounded-lg animated-gradient px-4 py-2 text-neutral-50 font-medium"
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
        </span>
      </button>
    </div>
  );
};

export default Button;
