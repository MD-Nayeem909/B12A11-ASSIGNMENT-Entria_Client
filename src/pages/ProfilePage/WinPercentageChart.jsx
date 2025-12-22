import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WinPercentageChart = ({ participated = 0, won = 0 }) => {
  const winPercentage =
    participated > 0 ? Math.round((won / participated) * 100) : 0;

  const data = [
    {
      name: "Participated",
      value: participated,
    },
    {
      name: "Won",
      value: won,
    },
    {
      name: "Win %",
      value: winPercentage,
    },
  ];

  return (
    <div className="w-full rounded-2xl">
      <h3 className="text-lg font-semibold mb-4">Win Percentage</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} barSize={40}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <p className="text-center mt-4 text-sm opacity-70">
        {won} wins out of {participated} contests ({winPercentage}%)
      </p>
    </div>
  );
};

export default WinPercentageChart;
