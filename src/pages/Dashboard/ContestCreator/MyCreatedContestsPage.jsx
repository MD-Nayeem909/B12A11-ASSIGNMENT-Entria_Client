import React from "react";
import { useState } from "react";
import { Edit, Trash2, Users } from "lucide-react";
import StatusBadge from "../../../components/Dashboard/ContestCreator/MyCreatedContest/StatusBadge";
const MyCreatedContestsPage = () => {
  const [search, setSearch] = useState("");

  const contests = [
    {
      id: 1,
      name: "Creative Agency Rebrand/Logo",
      type: "@frigatemediaFL",
      winningEntry: "#989 – Rebrand Logo",
      prize: "190 USD",
      status: "Confirmed",
    },
    {
      id: 1,
      name: "Creative Agency Rebrand/Logo",
      type: "@frigatemediaFL",
      winningEntry: "#989 – Rebrand Logo",
      prize: "190 USD",
      status: "Rejected",
    },
    {
      id: 1,
      name: "Creative Agency Rebrand/Logo",
      type: "@frigatemediaFL",
      winningEntry: "#989 – Rebrand Logo",
      prize: "190 USD",
      status: "Pending",
    },
  ];

  const filtered = contests.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">My Created Contests</h1>

      {/* SEARCH + SHOW COUNT */}
      <div className="flex items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search Contests and Users"
          className="input input-bordered w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="select select-bordered w-24">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
      </div>
      {/* TABLE */}
      <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
        <table className="table">
          <thead>
            <tr>
              <th>Contest Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.type}</td>
                <td>
                  <StatusBadge status={c.status} />
                </td>

                <td>
                  <div className="flex items-center gap-2">
                    {/* CONDITIONAL: Edit/Delete ONLY for pending */}
                    {c.status === "Pending" && (
                      <>
                        <button className="btn btn-xs btn-outline flex gap-1">
                          <Edit size={14} /> Edit
                        </button>
                        <button className="btn btn-xs btn-error flex gap-1">
                          <Trash2 size={14} /> Delete
                        </button>
                      </>
                    )}

                    {/* ALWAYS SHOW: SEE SUBMISSIONS */}
                    <button className="btn btn-xs btn-primary flex gap-1">
                      <Users size={14} /> See Submissions
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCreatedContestsPage;
