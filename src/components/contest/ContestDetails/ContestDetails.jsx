import Countdown from "react-countdown";
import Button from "../../common/Button";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import PaymentMethod from "../../PaymentMethod/PaymentMethod";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Trophy, Users, Clock, Info, Link as LinkIcon } from "lucide-react";

export default function ContestDetails() {
  // const { user } = useAuth();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const contest = location.state?.contest;

  const [isRegistered, setIsRegistered] = useState(false);
  const [isCompletionOpen, setIsCompletionOpen] = useState(false);
  const [submission, setSubmission] = useState("");

  useEffect(() => {
    if (contest) {
      axiosSecure.get(`/users/is-registered/${contest._id}`).then((res) => {
        setIsRegistered(res.data.isRegistered);
      });
    }
  }, [ contest, axiosSecure]);

  // if (!user)
  //   return (
  //     <div className="text-center py-20 text-xl font-medium">
  //       Please Login to view contest details.
  //     </div>
  //   );
  
  if (!contest)
    return <div className="text-center py-20">Contest not found.</div>;

  const isEnded = new Date(contest.deadline) < new Date();
  const winner = contest.winner?.userId;

  const handleSubmitTask = async () => {
    try {
      await axiosSecure.post(`contests/${contest._id}/submit`, { submission });
      setIsCompletionOpen(false);
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      {/* Title Section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-base-content mb-4">
          {contest.title}
        </h1>
        <div className="flex flex-wrap gap-4 items-center text-sm md:text-base">
          <span className="badge badge-secondary p-4 gap-2">
            <Trophy size={16} /> Prize: ${contest.prize}
          </span>
          <span className="badge badge-ghost p-4 gap-2">
            <Users size={16} /> {contest.participants?.length || 0} Participants
          </span>
          {isEnded ? (
            <span className="badge badge-error p-4 uppercase font-bold text-xs">
              Ended
            </span>
          ) : (
            <div className="flex items-center gap-2 font-bold text-primary">
              <Clock size={18} />{" "}
              <Countdown date={new Date(contest.deadline)} />
            </div>
          )}
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative group overflow-hidden rounded-3xl shadow-2xl mb-10">
        <img
          src={contest?.image}
          alt={contest?.title}
          className="w-full h-75 md:h-125 object-cover group-hover:scale-105 transition duration-700"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Side: Content */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <Info className="text-primary" /> Description
            </h2>
            <p className="text-base-content/80 leading-relaxed text-lg">
              {contest.description}
            </p>
          </section>

          <section className="bg-base-200 p-6 rounded-2xl border-l-4 border-primary">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <LinkIcon className="text-primary" /> Task Instructions
            </h2>
            <p className="text-base-content/80 italic">{contest.instruction}</p>
          </section>

          {/* Action Buttons */}
          <div className="pt-6">
            {!isRegistered && !isEnded && (
              <button
                onClick={() =>
                  document.getElementById("payment_modal").showModal()
                }
                className="btn btn-primary btn-lg px-10 rounded-full shadow-xl shadow-primary/20"
              >
                Register & Pay ${contest.price}
              </button>
            )}
            {isRegistered && !isEnded && (
              <button
                onClick={() => setIsCompletionOpen(true)}
                className="btn btn-secondary btn-lg px-10 rounded-full shadow-xl"
              >
                Submit Your Task
              </button>
            )}
            {isEnded && (
              <div className="alert alert-warning">
                The registration for this contest has ended.
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Winner Card */}
        <div className="lg:col-span-1">
          {contest?.winner?.userId ? (
            <div className="card bg-gradient-to-br from-primary to-secondary text-primary-content shadow-xl sticky top-24">
              <div className="card-body items-center text-center">
                <Trophy
                  size={48}
                  className="mb-2 text-yellow-300 animate-bounce"
                />
                <h2 className="card-title text-2xl font-bold">Winner! 🎉</h2>
                <div className="avatar my-4">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={winner?.image} alt={winner?.name} />
                  </div>
                </div>
                <p className="font-bold text-xl">{winner?.name}</p>
                <p className="text-sm opacity-80">{winner?.email}</p>
              </div>
            </div>
          ) : (
            <div className="card bg-base-200 border-2 border-dashed border-base-300 p-8 text-center sticky top-24">
              <Clock size={40} className="mx-auto mb-4 text-base-content/30" />
              <p className="font-semibold text-base-content/50">
                Winner will be announced after the deadline.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      <dialog id="payment_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
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

      {/* Submit Task Modal - Using DaisyUI Modal Style for consistency */}
      {isCompletionOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Submit Your Entry</h3>
            <textarea
              value={submission}
              onChange={(e) => setSubmission(e.target.value)}
              className="textarea textarea-bordered w-full h-32"
              placeholder="Paste your submission links (Google Drive, GitHub, etc.)"
            ></textarea>
            <div className="modal-action">
              <button
                onClick={() => setIsCompletionOpen(false)}
                className="btn"
              >
                Cancel
              </button>
              <button onClick={handleSubmitTask} className="btn btn-primary">
                Submit Entry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
