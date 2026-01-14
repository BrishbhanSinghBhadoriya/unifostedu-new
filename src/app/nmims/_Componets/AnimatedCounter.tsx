'use client';
import { useEffect, useState } from "react";

type CounterProps = {
  target: number;
  duration?: number; 
};

const AnimatedCounter = ({ target, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = 20;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}+</span>;
};

export default AnimatedCounter;
