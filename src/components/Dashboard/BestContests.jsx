export default function BestContests({ contests }) {
  return (
    <div className="bg-base-100 p-6 rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-4">Best Performing Contests</h3>

      <div className="space-y-4">
        {contests.slice(0, 5).map((c) => (
          <div key={c._id} className="flex items-center gap-4 border-b pb-4">
            <img
              src={c.image}
              alt={c.name}
              className="w-16 h-16 object-cover rounded-xl"
            />

            <div className="flex-1">
              <h4 className="font-semibold">{c.name}</h4>
              <p className="text-sm text-gray-500">
                Participants: <b>{c.participants}</b>
              </p>
            </div>

            <span className="badge badge-success">Top</span>
          </div>
        ))}
      </div>
    </div>
  );
}
