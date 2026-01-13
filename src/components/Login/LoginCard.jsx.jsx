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
  const { register, handleSubmit, setValue } = useForm();
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

  const fillDemoData = (role) => {
    if (role === "admin") {
      setValue("email", "admin@entria.com");
      setValue("password", "Admin@123");
    } else {
      setValue("email", "user@entria.com");
      setValue("password", "User@123");
    }
    toast.success(
      `${role.charAt(0).toUpperCase() + role.slice(1)} data filled!`
    );
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
    <div className="min-h-screen flex">
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

          {/* Demo Credentials Section */}
          <div className="p-4 bg-base-200/80 border border-base-300 rounded-2xl">
            <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">
              Quick Demo Access
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => fillDemoData("user")}
                className="flex-1 py-2 px-4 bg-base-200 border border-base-300 rounded-xl text-xs font-bold hover:bg-base-300 transition-all"
              >
                User Demo
              </button>
              <button
                onClick={() => fillDemoData("admin")}
                className="flex-1 py-2 px-4 bg-primary/20 border border-primary/10 rounded-xl text-xs font-bold hover:bg-base-300 transition-all"
              >
                Admin Demo
              </button>
            </div>
          </div>

          {/* Google Login */}
          <SocialLogin handleGoogle={handleGoogle} />

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-base-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-base-300 text-neutral">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm text-neutral font-bold mb-2">
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 inset-y-0 flex items-center text-neutral">
                  <AtSignIcon />
                </span>

                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="block w-full pl-10 pr-3 py-3 border border-base-300 rounded-lg bg-base-100 text-base-content placeholder-neutral focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-transparent transition-all duration-200"
                  placeholder="Email"
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
                  className="h-4 w-4 text-primary focus:ring-indigo-500 border-base-300 rounded bg-base-content"
                />{" "}
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-neutral"
                >
                  {" "}
                  Keep me signed in{" "}
                </label>{" "}
              </div>{" "}
              <Link
                to="/auth/forgot-password"
                className="text-sm font-medium text-primary/80 hover:text-primary transition-colors"
              >
                {" "}
                Forgot password{" "}
              </Link>{" "}
            </div>

            {/* Submit */}
            <button className="w-full animated-gradient text-white font-semibold py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-all duration-200 hover:scale-[1.01] shadow-lg">
              Sign in
            </button>
          </form>

          <p className="text-center text-base-content text-sm">
            New here?{" "}
            <Link className="text-primary hover:underline" to="/auth/register">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
