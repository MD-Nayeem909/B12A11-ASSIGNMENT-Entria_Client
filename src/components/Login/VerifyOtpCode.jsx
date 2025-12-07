import React, { useRef } from "react";
import authImage from "../../assets/authImage.png";
import { Link } from "react-router";

const VerifyOtpCode = () => {
  const inputs = useRef([]);
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) return; // only digits allowed

    if (value.length === 1 && index < 5) {
      inputs.current[index + 1].focus(); // move to next
    }
  };
  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus(); // go back
    }
  };

  const handleSubmit = () => {
    const code = inputs.current.map((input) => input.value).join("");
    alert("Your OTP: " + code);
  };

  return (
    <div className="min-h-100vh bg-base-100 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100 w-full rounded-lg">
          <div className="flex flex-col justify-center px-10 lg:px-40">
            <Link to="/" className="mb-20">
              <h2>ENTRIA</h2>
            </Link>

            <div>
              <h1 className="font-extrabold text-[42px] mb-1">Enter Code</h1>
              <p className="font-medium text-xl mb-5">
                Enter 6 digit code that we sent in your email address
              </p>
            </div>
            <div className="flex justify-center gap-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  maxLength="1"
                  className="w-12 h-12 border rounded-xl text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-lime-400"
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleBackspace(e, index)}
                  ref={(el) => (inputs.current[index] = el)}
                />
              ))}
            </div>
            {/* Button */}
            <button
              className="w-full py-3 btn btn-primary text-lg mt-8"
              onClick={handleSubmit}
            >
              Verify Code
            </button>
          </div>
          <div className="bg-[#FAFDF0] flex justify-center items-center min-h-screen">
            <img src={authImage} alt="" />
          </div>
        </div>
    </div>
  );
};

export default VerifyOtpCode;
