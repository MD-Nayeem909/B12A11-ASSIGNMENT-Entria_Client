import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const SubmittedTasks = () => {
  const axiosSecure = useAxiosSecure();
  const { data: submissions = [], refetch } = useQuery({
    queryKey: ["creator-submissions"],
    queryFn: async () => {
      const res = await axiosSecure("/submissions/creator");
      return res.data;
    },
  });

  const declareMutation = useMutation({
    mutationFn: async (id) =>
      axiosSecure.patch(`/submissions/declare-winner/${id}`),
    onSuccess: () => {
      toast.success("Winner declared!");
      refetch();
    },
    onError: (err) => toast.error(err.response.data.message),
  });
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Submitted Tasks</h2>

      <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
        <table className="table">
          <thead>
            <tr>
              <th>Contest</th>
              <th>Participant</th>
              <th>Email</th>
              <th>Submission</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {submissions.map((sub) => (
              <tr key={sub._id}>
                <td>{sub.contest.name}</td>
                <td>{sub.participant.name}</td>
                <td>{sub.participant.email}</td>
                <td>
                  <a
                    href={sub.taskText}
                    target="_blank"
                    className="text-indigo-600 underline"
                  >
                    View Task
                  </a>
                </td>
                <td>
                  {sub.isWinner ? (
                    <span className="badge badge-success">Winner</span>
                  ) : (
                    <span className="badge badge-warning">Pending</span>
                  )}
                </td>
                <td>
                  {!sub.isWinner && !sub.contest.winner && (
                    <button
                      onClick={() => declareMutation.mutate(sub._id)}
                      className="btn btn-sm btn-primary"
                    >
                      Declare Winner
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!submissions.length && (
          <p className="text-center py-6 text-gray-500">
            No submissions found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SubmittedTasks;
