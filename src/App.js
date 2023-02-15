import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  let counterColor = 'green';
  if (count >= 5 && count <= 9) {
    counterColor = 'blue';
  } else if (count === 10) {
    counterColor = 'red';
  }

  return (
    <div className="App">
      <h1 style={{ color: counterColor }}>{count}</h1>
      <div className="buttons">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default App;
