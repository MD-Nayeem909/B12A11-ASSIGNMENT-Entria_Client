import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Pagination2 from "../../../common/Pagination2";
import { useMemo, useState } from "react";
import Searchbar from "../../../common/Searchbar";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Calendar, ArrowUpRight, Hash } from "lucide-react";

const AdminPaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const perPage = 8;

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("admin/payment-history");
      return res.data;
    },
  });

  // ফিল্টারিং লজিক (প্রথমে ফিল্টার তারপর প্যাজিনেশন - এটা সঠিক নিয়ম)
  const filteredData = useMemo(() => {
    return payments.filter(
      (item) =>
        item.user?.email?.toLowerCase().includes(search.toLowerCase()) ||
        item.transactionId?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, payments]);

  const totalPages = Math.ceil(filteredData.length / perPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="bg-base-100 rounded-xl border border-base-200 overflow-hidden shadow-sm">
      {/* Header & Search Area */}
      <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-base-200 bg-base-200/20">
        <div>
          <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase">
            Payment <span className="text-primary">History</span>
          </h2>
          <p className="text-[10px] opacity-50 font-bold uppercase tracking-widest mt-1">
            Financial Transactions Log
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Searchbar search={search} setSearch={setSearch} />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="table w-full border-separate border-spacing-y-2 px-6">
          <thead>
            <tr className="text-[11px] font-black uppercase tracking-[0.15em] text-base-content/40 border-none">
              <th className="bg-transparent">#</th>
              <th className="bg-transparent text-center px-4">
                <Hash size={14} />
              </th>
              <th className="bg-transparent">User Details</th>
              <th className="bg-transparent">Contest</th>
              <th className="bg-transparent">Amount</th>
              <th className="bg-transparent text-center">Status</th>
              <th className="bg-transparent text-right">Date</th>
            </tr>
          </thead>

          <tbody className="space-y-4">
            <AnimatePresence mode="popLayout">
              {paginatedData.map((p, i) => (
                <motion.tr
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={p._id}
                  className="group bg-base-200/30 hover:bg-base-200/60 transition-all cursor-default"
                >
                  <td className="font-bold opacity-30">
                    {(currentPage - 1) * perPage + i + 1}
                  </td>

                  {/* Transaction ID Mini Badge */}
                  <td className="px-4">
                    <span className="text-[10px] font-mono bg-base-300 px-2 py-1 rounded text-base-content/60">
                      {p.transactionId?.slice(-8) || "N/A"}
                    </span>
                  </td>

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar placeholder">
                        <div className="bg-primary/10 text-primary rounded-xl w-10 flex items-center justify-center">
                          <span className="text-xs font-black uppercase">
                            {p.user?.name?.slice(0, 2)}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-sm tracking-tight">
                          {p.user?.name}
                        </p>
                        <p className="text-[10px] opacity-50 font-medium">
                          {p.user?.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="max-w-45">
                    <p
                      className="text-sm font-semibold truncate opacity-80"
                      title={p.contestId?.title}
                    >
                      {p.contestId?.title}
                    </p>
                  </td>

                  <td>
                    <div className="flex items-center gap-1 font-black text-sm">
                      <span className="text-success">$</span>
                      {p.amount.toLocaleString()}
                    </div>
                  </td>

                  <td className="text-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Paid
                    </span>
                  </td>

                  <td className="text-right">
                    <div className="flex flex-col items-end">
                      <p className="text-xs font-bold opacity-70">
                        {new Date(p.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </p>
                      <p className="text-[10px] opacity-40 font-medium uppercase">
                        {new Date(p.createdAt).getFullYear()}
                      </p>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>

        {/* Loading & Empty State Handling */}
        {isLoading && (
          <div className="p-20 text-center flex flex-col items-center gap-4">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="text-sm font-bold animate-pulse">
              Fetching transactions...
            </p>
          </div>
        )}

        {!isLoading && paginatedData.length === 0 && (
          <div className="p-20 text-center opacity-30">
            <CreditCard size={48} className="mx-auto mb-4" />
            <p className="text-lg font-bold italic">No payment history found</p>
          </div>
        )}
      </div>

      {/* Pagination Footer */}
      <div className="p-6 border-t border-base-200 bg-base-200/10">
        <Pagination2
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default AdminPaymentHistory;
