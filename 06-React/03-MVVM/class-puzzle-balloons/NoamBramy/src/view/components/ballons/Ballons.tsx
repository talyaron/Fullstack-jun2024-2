import { useEffect } from "react";
import { useBallonMV } from "./BallonMV";
import styles from "../ballons/ballons.module.scss";

const Ballons = () => {
  const { ballon, setBallon } = useBallonMV();

  useEffect(() => {
    const interval = setInterval(() => {
      const newBallon = {
        id: crypto.randomUUID(),
        imgURL: "https://t3.ftcdn.net/jpg/04/22/29/14/240_F_422291475_PvIsYRLsI14jE1uokCKpUEAJwL4YbEAq.jpg",
        x: Math.floor(Math.random() * 600),
        y: 0,
      };
      setBallon((prev) => [...prev, newBallon]);
    }, 2000);

    return () => clearInterval(interval);
  }, [setBallon]);

  const deleteBallon = (id: string) => {
    try {
      setBallon((prev) => prev.filter((ballons) => ballons.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Our Ballons</h1>
      {ballon.map((ballons) => (
        <div key={ballons.id}>
          <img
            className={styles.img}
            onClick={() => {
              deleteBallon(ballons.id);
            }}
            style={{
              position: "absolute",
              left: ballons.x,
              bottom: ballons.y,
              animation: `${styles.flyUp} 5s linear forwards`,
            }}
            src={ballons.imgURL}
            alt={`Ballon ${ballons.id}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Ballons;
