import React, { useState, useEffect } from 'react';

// Custom hook for debounce
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

const DebounceExample = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedInputValue, setDebouncedInputValue] = useState('');

  // Use the custom debounce hook
  const debouncedValue = useDebounce(inputValue, 500); // Adjust the delay as needed

  // This useEffect will be triggered when the debouncedValue changes
  useEffect(() => {
    setDebouncedInputValue(debouncedValue);

    // Here, you can perform additional actions, such as making an API call with debouncedValue
    // For simplicity, we'll just log it for demonstration purposes
    console.log('Debounced value:', debouncedValue);
  }, [debouncedValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Actual input value: {inputValue}</p>
      <p>Debounced input value: {debouncedInputValue}</p>
    </div>
  );
};

export default DebounceExample;
