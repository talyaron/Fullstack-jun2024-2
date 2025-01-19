import React, { useState, useEffect } from "react";
import styles from "./BalloonGame.module.scss";

interface Balloon {
  id: number;
  x: number;
  y: number;
}

const BalloonGame: React.FC = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      addBalloon();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const addBalloon = () => {
    const id = Date.now();
    const x = Math.random() * 90;
    setBalloons((prev) => [...prev, { id, x, y: 0 }]);
  };

  const updateBalloons = () => {
    setBalloons((prev) =>
      prev.map((balloon) => ({ ...balloon, y: balloon.y + 10 }))
    );
  };


  useEffect(() => {
    const animationInterval = setInterval(() => {
      updateBalloons();
    }, 350); 
    return () => clearInterval(animationInterval);
  }, []);


  const removeBalloon = (id: number) => {
    setBalloons((prev) => prev.filter((balloon) => balloon.id !== id));
  };

  return (
    <div className={styles.container}>
      <button onClick={addBalloon} className={styles.addButton}>
        Add Balloon
      </button>
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className={styles.balloon}
          style={{ left: `${balloon.x}%`, bottom: `${balloon.y}%` }}
          onClick={() => removeBalloon(balloon.id)}
        ></div>
      ))}
    </div>
  );
};

export default BalloonGame;
