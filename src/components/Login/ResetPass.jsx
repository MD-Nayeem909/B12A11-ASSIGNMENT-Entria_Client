import React from "react";
import authImage from "../../assets/authImage.png";
import Logo from "../../utils/Logo";
import { Link } from "react-router";
import Container from "../../utils/Container";

const ResetPass = () => {
  return (
      <div className="min-h-100vh bg-base-100 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-base-100 w-full rounded-lg">
          <div className="flex flex-col justify-center px-10 lg:px-40">
            <Link to="/" className="mb-20">
              <Logo></Logo>
            </Link>

            <div>
              <h1 className="font-extrabold text-[42px] mb-1">
                Reset Password
              </h1>
              <p className="font-medium text-xl mb-5">Reset your password</p>
            </div>

            <fieldset className="fieldset">
              <label className="label font-semibold">New Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <label className="label font-semibold">Confirm Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <button className="btn btn-primary mt-4">Reset Password</button>
            </fieldset>
          </div>
          <div className="bg-[#FAFDF0] flex justify-center items-center min-h-screen">
            <img src={authImage} alt="" />
          </div>
        </div>
      </div>
  );
};

export default ResetPass;
