import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const LoginCard = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-base-200 p-4 w-full">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-8 border border-base-200 rounded-2xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Login to your account</h2>
          <Link to="/auth/register" className="text-sm font-medium hover:underline">
            Sign Up
          </Link>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Enter your email below to login to your account
        </p>

        {/* Email */}
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="m@example.com"
          className="input input-bordered w-full mb-3"
        />

        {/* Password */}
        <div className="flex justify-between items-center">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <Link to="/auth/forgot-password" className="text-sm hover:underline">Forgot your password?</Link>
        </div>
        <input
          type="password"
          className="input input-bordered w-full"
        />

        {/* Login Button */}
        <button className="btn btn-neutral w-full mt-6">Login</button>

        {/* Google Login */}
        <button className="btn btn-outline w-full mt-3">
          <FcGoogle size={22} />
          Login with Google
        </button>
      </div>
    </div>
    </div>
  );
};

export default LoginCard;
