import { XCircle } from "lucide-react";
import { Link } from "react-router";

const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="bg-base-100 p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />

        <h1 className="text-2xl font-bold mb-2">Payment Cancelled ❌</h1>

        <p className="text-gray-500 mb-6">
          Your payment was cancelled. No money was charged.
        </p>

        <div className="flex flex-col gap-3">
          <Link to="/contests" className="btn btn-primary">
            Try Again
          </Link>

          <Link to="/" className="btn btn-outline">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
