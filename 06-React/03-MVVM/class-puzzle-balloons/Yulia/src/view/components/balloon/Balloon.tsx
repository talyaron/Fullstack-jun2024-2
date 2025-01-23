import { useBalloonMV } from "./balloonMV";
import styles from "./balloon.module.scss";

const BalloonView = () => {
  const { balloons, popBalloon } = useBalloonMV();

  console.log("Balloons array:", balloons); // check the array of balloons

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
            bottom: `${balloon.y}%`, // vertical position
            left: `${balloon.x}%`, // horizontal position 
          }}
          onClick={() => popBalloon(balloon.id)}
        />
      ))}
    </div>
  );
};

export default BalloonView;
