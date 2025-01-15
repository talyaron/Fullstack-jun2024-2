import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './BalloonGame.module.scss';

interface Balloon {
  id: number;
  x: number;
}

const BalloonGame: React.FC = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalloons((prevBalloons) => [
        ...prevBalloons,
        {
          id: prevBalloons.length,
          x: Math.random() * (window.innerWidth - 50),
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleBalloonClick = (id: number) => {
    setBalloons((prevBalloons) => prevBalloons.filter((balloon) => balloon.id !== id));
  };

  const handleRestart = () => {
    setBalloons([]); 
  };

  return (
    <div className={styles['balloon-container']}>
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className={styles.balloon}
          style={{
            left: `${balloon.x}px`,
          }}
          onClick={() => handleBalloonClick(balloon.id)}
        >
          <i className="bi bi-balloon"></i>
        </div>
      ))}

      {balloons.length === 0 && (
        <div className={styles['message-container']}>
          <p>You popped all the balloons!</p>
          <button className={styles['restart-button']} onClick={handleRestart}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default BalloonGame;
