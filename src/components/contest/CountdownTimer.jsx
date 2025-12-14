import { useEffect, useState } from "react";

export default function CountdownTimer({ endDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(endDate).getTime() - now;

      if (distance <= 0) return clearInterval(interval);

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      });
    }, 1000);
  }, [endDate]);

  return (
    <div className="p-4 bg-secondary rounded-xl text-secondary-content text-center shadow">
      <h2 className="text-lg font-semibold">Time Left</h2>
      <p className="text-xl font-bold">
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.mins}m
      </p>
    </div>
  );
}
