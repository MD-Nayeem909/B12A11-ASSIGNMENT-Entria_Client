import CountdownTimer from "./CountdownTimer";
import PrizeCard from "./PrizeCard";

export default function ContestInfoCard() {
  return (
    <div className="bg-base-100 p-6 rounded-xl shadow grid grid-cols-1 md:grid-cols-3 gap-4">
      <PrizeCard amount="$200" subtitle="Guaranteed" />
      <PrizeCard amount="$100" subtitle="Runner-Up" />
      <CountdownTimer endDate="2025-12-20T23:59:59" />
    </div>
  );
}
