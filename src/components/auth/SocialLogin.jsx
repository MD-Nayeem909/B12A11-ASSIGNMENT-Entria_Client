import { GoogleIcon } from "./AuthIcons";

const SocialLogin = ({ handleGoogle }) => {
  return (
    <button
      onClick={handleGoogle}
      className="w-full flex items-center justify-center px-4 py-3 border rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-medium"
    >
      <GoogleIcon />
      <span className="ml-3">Continue with Google</span>
    </button>
  );
};

export default SocialLogin;
