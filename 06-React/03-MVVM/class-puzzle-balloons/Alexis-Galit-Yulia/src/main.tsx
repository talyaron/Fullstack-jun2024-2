import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import React, { useState } from 'react';

const Balloons = () => {
  const [balloons, setBalloons] = useState([
    { id: 1, x: 50, y: 100 },
    { id: 2, x: 150, y: 200 },
    { id: 3, x: 250, y: 300 },
    { id: 4, x: 350, y: 400 },
  ]);

  const handleScreenClick = () => {
    setBalloons([]); 
  };

  return (
    <div 
      className="screen" 
      onClick={handleScreenClick} 
      style={{ width: '100vw', height: '100vh', position: 'relative', backgroundColor: '#f0f8ff', overflow: 'hidden' }}
    >
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="balloon"
          style={{
            position: 'absolute',
            left: `${balloon.x}px`,
            top: `${balloon.y}px`,
            width: '50px',
            height: '70px',
            backgroundColor: 'red',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.3)',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
        />
      ))}
      <p style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#333' }}>
        Click anywhere to pop the balloons!
      </p>
    </div>
  );
};

export default Balloons;
