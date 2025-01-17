import { useState } from 'react';
import { BalloonModel } from '../models/BalloonModel';

export const useBalloonsViewModel = () => {
  const [balloons, setBalloons] = useState([
    new BalloonModel(1, 50, 100),
    new BalloonModel(2, 150, 200),
    new BalloonModel(3, 250, 300),
    new BalloonModel(4, 350, 400),
  ]);

  const clearBalloons = () => {
    setBalloons([]); // Clears all balloons
  };

  return {
    balloons,
    clearBalloons,
  };
};
