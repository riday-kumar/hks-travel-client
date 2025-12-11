import React, { useEffect, useState } from "react";

const Countdown = ({ departure }) => {
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    const targetDate = new Date(departure).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { expired: true };
    }

    return {
      expired: false,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [departure]);

  if (timeLeft?.expired) {
    return <p className="text-red-500 font-semibold">⏳ Time Expired</p>;
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="text-center">
          <div className="bg-gradient-to-b from-green-600 to-emerald-700 rounded-2xl py-6 text-4xl font-bold shadow-lg">
            {timeLeft.days}
          </div>
          <p className="text-gray-400 text-xs mt-2">DAYS</p>
        </div>
        <div className="text-center">
          <div className="bg-gradient-to-b from-green-600 to-emerald-700 rounded-2xl py-6 text-4xl font-bold shadow-lg">
            {timeLeft.hours}
          </div>
          <p className="text-gray-400 text-xs mt-2">HOURS</p>
        </div>
        <div className="text-center">
          <div className="bg-gradient-to-b from-green-600 to-emerald-700 rounded-2xl py-6 text-4xl font-bold shadow-lg">
            {timeLeft.minutes}
          </div>
          <p className="text-gray-400 text-xs mt-2">MINUTES</p>
        </div>
        <div className="text-center">
          <div className="bg-gradient-to-b from-green-600 to-emerald-700 rounded-2xl py-6 text-4xl font-bold shadow-lg">
            {timeLeft.seconds}
          </div>
          <p className="text-gray-400 text-xs mt-2">SECONDS</p>
        </div>
      </div>
    </>
  );
};

export default Countdown;
