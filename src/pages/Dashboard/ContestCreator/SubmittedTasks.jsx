import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import SubmitTaskModal2 from "../../../components/common/SubmitTaskModal/SubmitTaskModal2";
import { useState } from "react";

const SubmittedTasks = () => {
  const contestId = useParams().id;
  const [userInfo, setUserInfo] = useState({});
  const [isCompletionOpen, setIsCompletionOpen] = useState(false);

  const axiosSecure = useAxiosSecure();
  const { data: submissions = {}, refetch } = useQuery({
    queryKey: ["creator-submissions"],
    queryFn: async () => {
      const res = await axiosSecure("contests/" + contestId);
      return res.data;
    },

    enabled: !!contestId,
  });

  const declareMutation = useMutation({
    mutationFn: async ({ contestId, userId }) =>
      axiosSecure.post(`/contests/${contestId}/declare-winner`, {
        winnerUserId: userId,
      }),

    onSuccess: () => {
      toast.success("Winner declared!");
      refetch();
    },
    onError: (err) => toast.error(err.response.data.message),
  });
  return (
    <div className="p-6">
      <dialog id="view-modal" className="modal">
        <div className="">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <SubmitTaskModal2
              {...{ userInfo, isCompletionOpen, setIsCompletionOpen }}
            />
          </form>
        </div>
      </dialog>
      <h2 className="text-2xl font-bold mb-6">Submitted Tasks</h2>

      <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
        <table className="table">
          <thead>
            <tr>
              <th>Contest</th>
              <th>Submission</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {submissions?.participants?.map((sub) => (
              <tr key={sub._id}>
                <td>{submissions.title}</td>
                <td>
                  <button
                    onClick={() => {
                      setUserInfo(sub);
                      document.getElementById("view-modal").showModal();
                    }}
                    className="btn btn-primary btn-sm btn-outline"
                  >
                    View Task
                  </button>
                </td>
                <td>
                  {submissions.winner?.userId === sub?.userId?._id ? (
                    <span className="badge badge-success">Winner</span>
                  ) : (
                    <span className="badge badge-warning">Pending</span>
                  )}
                </td>
                <td>
                  {!submissions.winner?.userId &&
                    !(submissions.winner?.userId === sub._id) && (
                      <button
                        onClick={() =>
                          declareMutation.mutate({
                            contestId: submissions._id,
                            userId: sub.userId._id,
                          })
                        }
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

        {!submissions?.participants?.length && (
          <p className="text-center py-6 text-gray-500">
            No submissions found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SubmittedTasks;
