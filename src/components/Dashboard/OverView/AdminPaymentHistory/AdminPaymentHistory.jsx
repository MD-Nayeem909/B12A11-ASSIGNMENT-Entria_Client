import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Pagination2 from "../../../common/Pagination2";
import { useMemo, useState } from "react";
import Searchbar from "../../../common/Searchbar";

const AdminPaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const perPage = 10;

  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("admin/payment-history");
      return res.data;
    },
  });

  const totalPages = Math.ceil(payments.length / perPage);
  const paginatedData = payments.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const filteredData = useMemo(() => {
    return paginatedData.filter((item) =>
      item.user?.email?.toLowerCase().includes(search.toLowerCase())
    );
  }, [payments, search]);

  return (
    <div className="p-6 bg-base-100 rounded-xl shadow">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Payment History</h2>
        <Searchbar search={search} setSearch={setSearch} />
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Contest</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((p, i) => (
              <tr key={p._id}>
                <td>{i + 1}</td>
                <td>{p.user?.name}</td>
                <td>{p.user?.email}</td>
                <td>{p.contestId?.title}</td>
                <td>${p.amount}</td>
                <td className="badge badge-success">Paid</td>
                <td>{new Date(p.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination2
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default AdminPaymentHistory;
