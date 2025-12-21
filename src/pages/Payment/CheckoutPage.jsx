import { useLocation } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CheckoutPage = () => {
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const { contestId, contestTitle, contestPrice } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axiosSecure.post("/payments/create-checkout-session", {
      contestId,
      contestTitle,
      contestPrice,
    });

    window.location.href = res.data.url;
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="btn btn-primary mt-4">Pay ${contestPrice}</button>
    </form>
  );
};

export default CheckoutPage;
