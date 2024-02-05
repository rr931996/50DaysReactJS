import React, { useState } from 'react';

const ThrottleExample = () => {
  const [inputValue, setInputValue] = useState('');
  const [throttledInputValue, setThrottledInputValue] = useState('');

  const throttle = (func, delay) => {
    let lastCallTime = 0;

    return function (...args) {
      const currentTime = new Date().getTime();

      if (currentTime - lastCallTime >= delay) {
        func.apply(this, args);
        lastCallTime = currentTime;
      }
    };
  };

  const handleInputChangeThrottled = throttle((value) => {
    setThrottledInputValue(value);
  }, 500); // Adjust the delay as needed

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    handleInputChangeThrottled(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        placeholder="Type...."
        onChange={handleInputChange}
      />
      <p>Input value: {inputValue}</p>
      <p>Throttled value: {throttledInputValue}</p>
    </>
  );
};

export default ThrottleExample;
