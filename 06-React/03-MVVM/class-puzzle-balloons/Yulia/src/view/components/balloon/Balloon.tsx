import { useBalloonMV } from "./BalloonMV";
import styles from "./balloon.module.scss";

const BalloonView = () => {
  const { balloons, popBalloon } = useBalloonMV();

  return (
    <div className={styles.balloonContainer}>
      {balloons.map((balloon) => (
        <img
          key={balloon.id}
          src={balloon.img}
          alt="Balloon"
          className={`${styles.balloon} ${
            balloon.isPopped ? styles.popped : ""
          }`}
          style={{
            bottom: `${balloon.y}%`,
            left: `${balloon.x}%`,
          }}
          onClick={() => popBalloon(balloon.id)}
        />
      ))}
    </div>
  );
};

export default BalloonView;
