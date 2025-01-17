import React from 'react';
import { useBalloonsViewModel } from '../viewmodels/BalloonsViewModel';

const Balloons = () => {
  const { balloons, clearBalloons } = useBalloonsViewModel();

  return (
    <div
      className="screen"
      onClick={clearBalloons}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        backgroundColor: '#f0f8ff',
        overflow: 'hidden',
      }}
    >
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          style={{
            position: 'absolute',
            left: `${balloon.x}px`,
            top: `${balloon.y}px`,
            width: '50px',
            height: '70px',
            backgroundColor: 'red',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.3)',
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
