import React, { useEffect, useState } from "react";
import BalloonGameViewModel from "../viewmodel/BalloonGameViewModel";
import "./BalloonGame.css";

const BalloonGame = () => {
  const [viewModel] = useState(new BalloonGameViewModel());
  const [balloons, setBalloons] = useState(viewModel.balloons);

  useEffect(() => {
    viewModel.onUpdate = () => setBalloons([...viewModel.balloons]);

    const spawnInterval = setInterval(() => {
      viewModel.addBalloon();
    }, 1000);

    const moveInterval = setInterval(() => {
      viewModel.updateBalloons();
    }, 50);

    return () => {
      clearInterval(spawnInterval);
      clearInterval(moveInterval);
    };
  }, [viewModel]);

  return (
    <div className="game-container">
      {balloons.map((balloon, index) => (
        <div
          key={index}
          className="balloon"
          style={{ left: `${balloon.x}px`, top: `${balloon.y}px` }}
        />
      ))}
    </div>
  );
};

export default BalloonGame;
