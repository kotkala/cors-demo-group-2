import React, { useState } from 'react';

function App() {
  const [lastClickCount, setLastClickCount] = useState(0);

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:3000/click');
      const data = await response.json();
      setLastClickCount(data.count);
    } catch (error) {
      console.error('Error incrementing count:', error);
    }
  };

  return (
    <div className="App">
      <h1>Trang B</h1>
      <button onClick={handleClick}>Click me!</button>
      <p>Số lần click cuối cùng: {lastClickCount}</p>
    </div>
  );
}

export default App;