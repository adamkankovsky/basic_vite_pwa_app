import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(String(eval(input)));
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <span>{input || '0'}</span>
      </div>
      <div className="buttons">
        <button className="button light" onClick={handleClear}>C</button>
        <button className="button light" onClick={() => handleClick('%')}>%</button>
        <button className="button light" onClick={() => handleClick('/')}>÷</button>
        <button className="button dark" onClick={() => handleClick('7')}>7</button>
        <button className="button dark" onClick={() => handleClick('8')}>8</button>
        <button className="button dark" onClick={() => handleClick('9')}>9</button>
        <button className="button light" onClick={() => handleClick('*')}>×</button>
        <button className="button dark" onClick={() => handleClick('4')}>4</button>
        <button className="button dark" onClick={() => handleClick('5')}>5</button>
        <button className="button dark" onClick={() => handleClick('6')}>6</button>
        <button className="button light" onClick={() => handleClick('-')}>-</button>
        <button className="button dark" onClick={() => handleClick('1')}>1</button>
        <button className="button dark" onClick={() => handleClick('2')}>2</button>
        <button className="button dark" onClick={() => handleClick('3')}>3</button>
        <button className="button light" onClick={() => handleClick('+')}>+</button>
        <button className="button dark wide" onClick={() => handleClick('0')}>0</button>
        <button className="button dark" onClick={() => handleClick('.')}>.</button>
        <button className="button red" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default App;
