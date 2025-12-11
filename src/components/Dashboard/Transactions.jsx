export default function Transactions({ list }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4">Transactions</h3>

      <table className="table w-full">
        <thead>
          <tr>
            <th>User</th>
            <th>Contest</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {list.map((t) => (
            <tr key={t.id}>
              <td>{t.user}</td>
              <td>{t.contest}</td>
              <td className="text-green-600">${t.amount}</td>
              <td>{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
