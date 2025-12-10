import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

import { AtSignIcon, ShieldIcon } from "../auth/AuthIcons";
import PasswordField from "../auth/PasswordField";
import SocialLogin from "../auth/SocialLogin";

const LoginCard = () => {
  const { register, handleSubmit } = useForm();
  const { user, loading, setLoading, signIn, signInWithGoogle } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  if (loading) return <div>Loading...</div>;
  if (user) return <Navigate to={from} replace={true} />;

  // Email login
  const onSubmit = async (data) => {
    try {
      await signIn(data.email, data.password);
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Google login
  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex bg-white dark:bg-black">
      {/* Left Banner (Desktop Only) */}
      <div className="hidden lg:flex items-center justify-center lg:w-1/2 bg-gradient-to-br from-indigo-600 to-pink-600 text-white relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="z-10 text-center px-10">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShieldIcon />
          </div>
          <h1 className="text-4xl font-bold mb-4">Secure Access</h1>
          <p className="text-white/90 max-w-md mx-auto">
            Login securely using email or Google authentication.
          </p>
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
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white dark:bg-black px-2">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm mb-2">Email</label>
              <div className="relative">
                <span className="absolute left-3 inset-y-0 flex items-center text-gray-400">
                  <AtSignIcon />
                </span>

                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="w-full pl-10 py-3 border rounded-lg bg-white dark:bg-black"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <PasswordField register={register} />

            {/* Submit */}
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
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
