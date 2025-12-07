import React from "react";
import Lottie from "lottie-react";
import animationData from "./Forget_password_animation.json";

const ForgotPassAnimat = () => {
  return (
    <div className="">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
      />
    </div>
  );
};

export default ForgotPassAnimat;
