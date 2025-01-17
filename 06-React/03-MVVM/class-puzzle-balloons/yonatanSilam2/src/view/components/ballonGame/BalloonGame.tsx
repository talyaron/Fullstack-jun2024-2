import { useBalloonGameMV } from "./ballonGameMV";
import styles from "./balloonGame.module.scss";

const BalloonGame = () => {
  const { balloons, setBalloons } = useBalloonGameMV();

  function popBalloon(balloonId: number) {
    try {
      const updateBalloons = balloons.map((balloon) =>
        balloon.id == balloonId
          ? { ...balloon, isItPop: true }
          : balloon
      );
      setBalloons(updateBalloons);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <h1>Ballon Game</h1>
      {balloons.map((balloon,index) => (
        <div
          className={balloon.isItPop ? styles.pop : styles.balloon}
          key={balloon.id}
          style={{
            '--index': index,
            bottom: `-200px`,
            right: `${balloon.positionY}px`,
          }as React.CSSProperties}
          onClick={() => popBalloon(balloon.id)}
        ></div>
      ))}
    </div>
  );
};

export default BalloonGame;
