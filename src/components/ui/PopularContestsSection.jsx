import { Link, useNavigate } from "react-router";
import ContestCard from "../contest/ContestsCards/ContestCard";


export default function PopularContestsSection({ contests = [], user }) {
  const navigate = useNavigate();

  function handleDetails(id) {
    if (!user) return navigate("/auth/login");
    const matchingContest = contests.find((contest) => contest._id === id);
    navigate(`/contest-details/${id}`, { state: { contest: matchingContest } });
  }

  return (
    <section className="my-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Popular Contests</h2>
        <Link to="/contests" className="btn btn-outline btn-sm">
          Show All
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contests.slice(0, 6).map((contest) => (
          <ContestCard
            key={contest._id}
            contest={contest}
            handleDetails={handleDetails}
          />
        ))}
        {
          // if there are no contests, show a message
          !contests.length && <p className="text-center">No contests found.</p>
        }
      </div>
    </section>
  );
}
