import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
      <DotLottieReact
        src="https://lottie.host/e2cd019f-e675-4b2a-a1f7-d8cfbbf1e863/HgUeSAvHvm.lottie"
        loop
        autoplay
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

export default LoadingSpinner;
