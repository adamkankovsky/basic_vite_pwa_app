import { useState } from 'react';
import PWABadge from './PWABadge.jsx';
import './App.css';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('+');

  const handleCalculate = () => {
    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);
    let res = 0;

    switch (operation) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        break;
      default:
        res = 'Invalid operation';
    }

    setResult(res);
  };

  return (
    <div className="container">
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <input
          type="number"
          placeholder="Enter first number"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          placeholder="Enter second number"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <button onClick={handleCalculate}>
          Calculate
        </button>
        {result !== null && (
          <p className="result">Result: {result}</p>
        )}
      </div>
      <PWABadge />
    </div>
  );
}

export default App;
