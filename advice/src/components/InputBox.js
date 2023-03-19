import { useState } from 'react';
import OutputBox from './OutputBox';

function InputBox() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutputValue(inputValue)
    
  }

  const handleClick = () => {
    // Here I would send the input value to the backend and receive the response
    // For now, I'll just set the output value to the input value
    setOutputValue(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text-input">Input:</label>
        <input
          id="text-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
      <button onClick={handleClick}>Submit</button>
      <OutputBox outputValue={outputValue} />
    </div>
  );
}

export default InputBox;