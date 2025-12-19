import Countdown from "react-countdown";
import Button from "../../common/Button";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import SubmitTaskModal2 from "../../common/SubmitTaskModal/SubmitTaskModal2";
import PaymentMethod from "../../PaymentMethod/PaymentMethod";

export default function ContestDetails({ user }) {
  const location = useLocation();
  const contest = location.state.contest;
  const [isRegistered, setIsRegistered] = useState(false);
  const [isCompletionOpen, setIsCompletionOpen] = useState(false);

  console.log(contest);

  // Mock: check registration
  useEffect(() => {
    if (user && contest?.registeredUsers?.includes(user.email)) {
      setIsRegistered(true);
    }
  }, [user, contest]);

  if (user)
    return (
      <div className="text-center py-10 text-xl">
        Please Login to view contest details.
      </div>
    );
  if (!contest)
    return <div className="text-center py-10">Contest not found.</div>;

  const isEnded = new Date(contest.deadline) < new Date();

  const submitTask = () => {
    setIsCompletionOpen(true);
  };

  const handleSubmitTask = () => {
    alert("Task Submitted!");
    setIsCompletionOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{contest.name}</h1>

      {/* Banner */}
      <img
        src={contest.image}
        alt={contest.title}
        className="w-full h-200 object-cover rounded-xl shadow mb-6"
      />

      {/* Participants */}
      <p className="text-lg font-semibold mb-2">
        Participants: {contest.participants + (isRegistered ? 1 : 0)}
      </p>

      {/* Prize Money */}
      <p className="text-lg font-semibold mb-4 text-green-600">
        Prize Money: ${contest.prize}
      </p>

      {/* Winner */}
      {contest.winner ? (
        <div className="bg-base-200 p-4 rounded-xl mb-4">
          <p className="font-bold text-xl mb-2">Winner Announced 🎉</p>
          <div className="flex items-center gap-4">
            <img
              src={contest.winner.photo}
              alt={contest.winner.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{contest.winner.name}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 italic mb-4">Winner not announced yet</p>
      )}

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Description</h2>
        <p className="text-gray-700">{contest.description}</p>
      </div>

      {/* Task Instructions */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Task Instructions</h2>
        <p className="text-gray-700">{contest.instruction}</p>
      </div>

      {/* Countdown */}
      <div className="mb-6 text-lg font-semibold">
        {isEnded ? (
          <span className="text-red-500">Contest Ended</span>
        ) : (
          <div className="p-4 bg-base-200 rounded-xl w-fit">
            Deadline: <Countdown date={new Date(contest.deadline)} />
          </div>
        )}
      </div>

      {/* Register / Submit Buttons */}
      <div className="flex gap-4 mt-6">
        {!isRegistered && !isEnded && (
          <Button
            id="my_modal_3"
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="btn btn-primary"
          >
            Register / Pay
          </Button>
        )}
        {isRegistered && !isEnded && (
          <Button onClick={submitTask} className="btn btn-secondary">
            Submit Task
          </Button>
        )}
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <PaymentMethod
            contest={{
              contestId: contest._id,
              contestTitle: contest.title,
              contestPrice: contest.price,
            }}
          />
        </div>
      </dialog>

      {/* Submit Task Modal */}
      {/* {isCompletionOpen && (
        <div className="fixed inset-0 bg-base-200 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-lg">
            <h3 className="text-xl font-bold mb-3">Submit Your Task</h3>
            <textarea
              className="textarea textarea-bordered w-full mb-4"
              placeholder="Provide Google Drive/YouTube/GitHub links here"
              rows={4}
            ></textarea>
            <div className="flex justify-end gap-3">
              <button onClick={() => setIsCompletionOpen(false)} className="btn btn-error">
                Cancel
              </button>
              <Button onClick={handleSubmitTask} className="btn btn-primary">
                Submit
              </Button>
            </div>
          </div>
        </div>
      )} */}
      {isCompletionOpen && (
        <SubmitTaskModal2
          isCompletionOpen={isCompletionOpen}
          setIsCompletionOpen={setIsCompletionOpen}
        />
      )}
    </div>
  );
}
