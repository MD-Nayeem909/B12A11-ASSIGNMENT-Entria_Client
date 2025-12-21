import React from "react";

const Contests = ({ contests, handleConfirm, handleDelete, handleReject }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Status</th>
            <th>Entries</th>
            <th>Prize</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contests && contests.map((c) => (
            <tr key={c._id}>
              <td>{c.title}</td>
              <td>{c.type}</td>
              <td>
                <span
                  className={`badge ${
                    c.status === "Active"
                      ? "bg-success text-success-content"
                      : c.status === "Closed"
                      ? "bg-error text-error-content"
                      : "bg-warning text-warning-content"
                  }`}
                >
                  {c.status}
                </span>
              </td>
              <td>{c.participants?.length}</td>
              <td>{c.prize}</td>
              <td>
                <div className="flex items-center gap-2">
                  {c.status !== "approved" && (
                    <button
                      className="btn btn-xs btn-success"
                      onClick={() => handleConfirm(c._id)}
                    >
                      Confirm
                    </button>
                  )}
                  {c.status !== "Closed" && (
                    <button
                      className="btn btn-xs btn-warning"
                      onClick={() => handleReject(c._id)}
                    >
                      Reject
                    </button>
                  )}

                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => handleDelete(c._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contests;
