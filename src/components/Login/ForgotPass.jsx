import React from "react";
import { Link } from "react-router";
import ForgotPassAnimat from "./ForgotPassAnimat";

const ForgotPass = () => {
  return (
    <div className="flex h-screen">
      <div className="flex items-center gap-8">
        <div className="flex items-center justify-center p-4 font-sans relative overflow-hidden">
          <div className=" max-w-md w-full">
            <h1 className="text-foreground text-3xl md:text-4xl font-light mb-3 text-center tracking-tight">
              Recover Password
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-8 text-center leading-relaxed">
              Enter your email to receive a reset link
            </p>

            <div className="mb-6 relative">
              <label
                htmlFor="email"
                className="block text-foreground text-sm font-medium mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary border border-border hover:border-primary/50 transition-all duration-200 text-base"
                  aria-label="Email address for password recovery"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-600 dark:hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transform transition-all duration-200 hover:scale-[1.01] shadow-lg"
              aria-label="Send password reset link"
            >
              Send Reset Link
            </button>

            <p className="text-muted-foreground text-center text-sm mt-6 mb-8 leading-relaxed">
              We&apos;ll send you a secure link to reset your password.
            </p>

            <div className="border-t border-t-gray-400 pt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Remembered your password?{" "}
                <Link
                  to="/auth/login"
                  className="text-primary hover:underline hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary rounded-md transition-colors duration-200"
                  aria-label="Log in to your account"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex justify-center items-center mx-auto w-1/2 hidden">
            <ForgotPassAnimat />
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
