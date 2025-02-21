import { BalloonMV } from "./balloonMV";
import styles from './balloon.module.scss'
import { useEffect } from "react";


function BalloonsGame() {
    const { balloon, setBallon } = BalloonMV();


    const deleteBalloon = (balloonId: string) => {
        setBallon(prevBalloon => prevBalloon.filter(balloon => balloon.id !== balloonId));
    };

    return (
        <>
            {balloon.map((balloon) => (
                <div key={balloon.id}
                    style={{
                        position: 'absolute',
                        right: balloon.xPosition,
                        bottom: balloon.yPosition
                    }}>
                    <img src={balloon.imgUrl}
                        style={{
                            width: '8rem',
                        }}
                        alt={"balloon"}
                        onClick={() => deleteBalloon(balloon.id)}
                        className={styles.balloonImg}
                    />
                </div>
            ))}
        </>
    )
};

export default BalloonsGame;