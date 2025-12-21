import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import PaymentMethod from "../../../components/PaymentMethod/PaymentMethod";

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: contests } = useQuery({
    queryKey: ["contests", id],
    queryFn: async () => {
      // Fetch payment details from backend
      const response = await axiosSecure.get(`/api/payments/${id}`);
      return response.data;
    },
  });
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="">
      <h1>Payment Page</h1>
      <PaymentMethod/>
    </div>
  );
};

export default Payment;
