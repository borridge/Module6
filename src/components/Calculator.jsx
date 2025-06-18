import React, { useState } from 'react';

// Input component for number entry
function InputField({ label, value, onChange }) {
  return (
    <label>
      {label}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        required
      />
    </label>
  );
}

// Operator selection component
function OperatorSelect({ operator, onChange }) {
  return (
    <label>
      Operator
      <select value={operator} onChange={(e) => onChange(e.target.value)}>
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
    </label>
  );
}

// Output component for result
function ResultDisplay({ result }) {
  return <p><strong>Result:</strong> {result}</p>;
}

// Main calculator component
function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let res;
    switch (operator) {
      case '+': res = num1 + num2; break;
      case '-': res = num1 - num2; break;
      case '*': res = num1 * num2; break;
      case '/': res = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'; break;
      default: res = 'Invalid operator';
    }
    setResult(res);
  };

  return (
    <div className="Calculator componentBox">
      <h2>🧮 Simple Calculator</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculate();
        }}
      >
        <InputField label="Number 1: " value={num1} onChange={setNum1} />
        <OperatorSelect operator={operator} onChange={setOperator} />
        <InputField label="Number 2: " value={num2} onChange={setNum2} />
        <br />
        <button type="submit">Calculate</button>
      </form>
      {result !== null && <ResultDisplay result={result} />}
    </div>
  );
}

export default Calculator;
