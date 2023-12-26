// AnimatedNumbers.js

import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedNumbers = ({ endValue, label }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: endValue },
    config: { duration: 2000 },
    onRest: () => console.log('Animation finished'),
  });

  useEffect(() => {
    setAnimatedValue(endValue);
  }, [endValue]);

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-2 text-blue-500" data-number={`${animatedValue}+`}>
        <animated.span className="text-blue-500">{number.to(value => Math.floor(value))}</animated.span>+
      </h2>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default AnimatedNumbers;
