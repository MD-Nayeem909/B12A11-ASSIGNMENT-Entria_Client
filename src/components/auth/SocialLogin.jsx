import { GoogleIcon } from "./AuthIcons";

const SocialLogin = ({ handleGoogle }) => {
  return (
    <button
      onClick={handleGoogle}
      className="w-full flex items-center justify-center px-4 py-3 border border-base-300 rounded-lg bg-base-200 text-base-content hover:bg-base-300 transition-colors font-medium"
    >
      <GoogleIcon />
      <span className="ml-3">Continue with Google</span>
    </button>
  );
};

export default SocialLogin;
