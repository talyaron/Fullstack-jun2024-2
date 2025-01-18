import { useEffect, useState } from "react";
import { ballonGameMV } from "./BallonGameMV";
import { Ballon } from "../../../model/ballon/ballon";
import style from "./BallonGame.module.scss";
import ballonPic from '../../../pics/ballon.png';
import ballonExplode from '../../../pics/explode.png';

const StartPlay = () => {
    const { ballons, setBallons, score, setScore, timer, setTimer } = ballonGameMV();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            const timerInterval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 0.5);
            }, 1000);

            const ballonInterval = setInterval(createBallon, 1500);

            return () => {
                clearInterval(timerInterval);
                clearInterval(ballonInterval);
            };
        }
    }, [isPlaying, setTimer, setBallons]);

    function createBallon() {
        const leftMove = Math.floor(Math.random() * 1000);
        const topMove = Math.floor(Math.random() * 1000);
        const newBallon: Ballon = {
            id: Math.floor(Math.random() * 1000).toString(),
            imageUrl: ballonPic,
            left: leftMove,
            top: topMove
        };
        setBallons([...ballons, newBallon]);
    }

    function popTheBallon(currentBallon: string) {
        setBallons(ballons.map(b =>
            b.id === currentBallon
                ? { ...b, imageUrl: ballonExplode }
                : b
        ));
    }

    function start() {
        setIsPlaying(true);
    }

    return (
        <div>
            <p className={style.timer}>Timer: {timer}</p>
            <p className={style.score}>Score: {score}</p>
            <button className={style.play} onClick={start}>Lets Play</button>
            {ballons.map(ballon =>
                <div className={style.ballons} key={ballon.id}>
                    <img
                        src={ballon.imageUrl}
                        alt={ballon.id}
                        style={{ position: "absolute", left: ballon.left, top: ballon.top }}
                        onClick={() => {
                            popTheBallon(ballon.id);
                            setScore(score + 1);
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default StartPlay;
