import React from "react";

const Contests = ({ contests, handleClose, handleDelete, handleView }) => {
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
          {contests.map((c) => (
            <tr key={c.id}>
              <td>{c.title}</td>
              <td>{c.type}</td>
              <td>
                <span
                  className={`badge ${
                    c.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : c.status === "Closed"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {c.status}
                </span>
              </td>
              <td>{c.entries}</td>
              <td>{c.prize}</td>
              <td>
                <div className="flex items-center gap-2">
                  {c.status !== "Active" && (
                    <button
                      className="btn btn-xs"
                      onClick={() => handleView(c.id)}
                    >
                      Confirm
                    </button>
                  )}
                  {c.status !== "Closed" && (
                    <button
                      className="btn btn-xs btn-warning"
                      onClick={() => handleClose(c.id)}
                    >
                      Reject
                    </button>
                  )}

                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => handleDelete(c.id)}
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
