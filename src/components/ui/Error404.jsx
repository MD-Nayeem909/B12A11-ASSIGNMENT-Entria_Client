import Lottie from "lottie-react";
import { motion } from "motion/react";
import animationData from "../../assets/Page_Not_Found_404.json";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-[80vh]">
      <Lottie animationData={animationData} loop={true} className="max-w-200"/>
      {/* Animated Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(147, 51, 234, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Go Back!
          </motion.button>
    </div>
  );
};

export default Error404;
