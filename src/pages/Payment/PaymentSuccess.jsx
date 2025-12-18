import { CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router";

const PaymentSuccess = () => {
  const location = useLocation();
  const contestName = location.state?.contestName;

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />

        <h1 className="text-2xl font-bold mb-2">Payment Successful 🎉</h1>

        <p className="text-gray-500 mb-6">
          {contestName
            ? `You have successfully joined "${contestName}".`
            : "You have successfully completed your payment."}
        </p>

        <div className="flex flex-col gap-3">
          <Link to="/dashboard/my_participated_contests" className="btn btn-primary">
            View My Contests
          </Link>

          <Link to="/contests" className="btn btn-outline">
            Explore More Contests
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
