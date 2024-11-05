import React, { useState, useEffect } from "react";
import { Stack } from "react-bootstrap";

const Timer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-11-20") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <Stack
      direction="horizontal"
      gap={3}
    >
      <div className="countdown-item text-center">
        <span className="countdown-label">Days</span>
        <span className="countdown-number">
          {timeLeft.days?.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item text-center">
        <span className="countdown-label">Hours</span>

        <span className="countdown-number">
          {timeLeft.hours?.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item text-center">
        <span className="countdown-label">Minutes</span>

        <span className="countdown-number">
          {timeLeft.minutes?.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="countdown-separator">:</div>
      <div className="countdown-item text-center">
        <span className="countdown-label">Seconds</span>

        <span className="countdown-number">
          {timeLeft.seconds?.toString().padStart(2, "0")}
        </span>
      </div>
    </Stack>
  );
};

export default Timer;
