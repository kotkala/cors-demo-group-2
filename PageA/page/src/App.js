import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('http://localhost:3000/count');
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error fetching count:', error);
      }
    };

    fetchCount();
    const intervalId = setInterval(fetchCount, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>Trang A</h1>
      <p>Số lần click: {count}</p>
    </div>
  );
}

export default App;