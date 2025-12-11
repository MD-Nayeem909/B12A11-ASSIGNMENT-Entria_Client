import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import logoIcon from "../../assets/logo.png";

import { AtSignIcon } from "../auth/AuthIcons";
import PasswordField from "../auth/PasswordField";
import SocialLogin from "../auth/SocialLogin";
import toast from "react-hot-toast";
import LoadingSpinner from "../common/LoadingSpinner";

const LoginCard = () => {
  const { register, handleSubmit } = useForm();
  const { user, loading, setLoading, signIn, signInWithGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  if (loading) return <LoadingSpinner />;
  if (user) return <Navigate to={from} replace={true} />;

  // Email login
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await signIn(data.email, data.password);
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message || err.code || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message || err.code || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white dark:bg-black">
      {/* Left Banner (Desktop Only) */}
      <div className="hidden lg:flex items-center justify-center lg:w-1/2 animated-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
          <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl p-2 flex items-center justify-center mb-8">
            <img src={logoIcon} alt="" className="" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-center">Entria</h1>
          <p className="text-xl text-center text-white/90 max-w-md">
            Entries made easy.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-4 opacity-60">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white/40 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-3xl font-bold text-center">Sign in</h2>

          {/* Google Login */}
          <SocialLogin handleGoogle={handleGoogle} />

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-black text-gray-500 dark:text-gray-400">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 inset-y-0 flex items-center text-gray-400">
                  <AtSignIcon />
                </span>

                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <PasswordField register={register} />

            {/* checkbox */}

            <div className="flex items-center justify-between mb-6">
              {" "}
              <div className="flex items-center">
                {" "}
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-400 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900"
                />{" "}
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                >
                  {" "}
                  Keep me signed in{" "}
                </label>{" "}
              </div>{" "}
              <Link
                to="/auth/forgot-password"
                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
              >
                {" "}
                Forgot password{" "}
              </Link>{" "}
            </div>

            {/* Submit */}
            <button className="w-full animated-gradient text-white font-semibold py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-600 dark:hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transform transition-all duration-200 hover:scale-[1.01] shadow-lg">
              Sign in
            </button>
          </form>

          <p className="text-center text-sm">
            New here?{" "}
            <Link
              className="text-indigo-600 hover:underline"
              to="/auth/register"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
