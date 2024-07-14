// components/ClientComponent.tsx
import React, { useState, useEffect } from 'react';

const ClientComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Effect that runs only on the client-side
    console.log('Component mounted on client');
    return () => {
      // Cleanup function for client-side effect
      console.log('Component unmounted from client');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ClientComponent;
