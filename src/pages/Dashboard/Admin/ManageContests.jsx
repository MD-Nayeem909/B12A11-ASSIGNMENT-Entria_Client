import { useState } from "react";
import ContestTableCard from "../../../components/ui/ContestTableCard";

const ManageContests = () => {
    const [contests, setContests] = useState([
    {
      id: "c1",
      title: "Logo Design - Startup X",
      type: "Design",
      status: "Active",
      entries: 54,
      prize: "$500",
    },
    {
      id: "c2",
      title: "Write: 1000-word Review",
      type: "Writing",
      status: "Closed",
      entries: 120,
      prize: "$300",
    },
    {
      id: "c3",
      title: "Mobile Game Concept",
      type: "Ideas",
      status: "Pending",
      entries: 0,
      prize: "$1,200",
    },
  ]);
function handleView(contestId) {
    alert(`View contest ${contestId} (replace with navigation)`);
  }

  function handleClose(contestId) {
    // call backend to close contest
    alert(`Close contest ${contestId} (call API)`);
  }
  function handleDelete(contestId) {
    // call backend to delete contest
    alert(`Delete contest ${contestId} (call API)`);
  }
  return (
    <div className="md:m-6">
      <ContestTableCard
        contests={contests}
        handleClose={handleClose}
        handleDelete={handleDelete}
        handleView={handleView}
      />
    </div>
  );
};

export default ManageContests;
