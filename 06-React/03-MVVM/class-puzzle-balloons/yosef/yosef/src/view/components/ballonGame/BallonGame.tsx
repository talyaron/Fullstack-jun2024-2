import { useEffect, useState } from "react";
import { ballonGameMV } from "./BallonGameMV";
import { Ballon } from "../../../model/ballon/ballon";
import style from "./BallonGame.module.scss";
import ballonPic from '../../../pics/ballon.png';
import ballonExplode from '../../../pics/explode.png';

// let leftMove = 190;
// let topMove = -50;

const StartPlay = () => {
    const { ballons, setBallons, score, setScore, timer, setTimer } = ballonGameMV();
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);
    const [flyClass, setFlyClass] = useState(false);

    useEffect(() => {
        if (isPlaying2 || isPlaying1) {
            const timerInterval = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);

            const ballonInterval = setInterval(createBallon, 2000);

            return () => {
                clearInterval(timerInterval);
                clearInterval(ballonInterval);
            };
        }
    }, [isPlaying1, isPlaying2, setTimer, setBallons]);

    function createBallon() {

        if (isPlaying1){
        const leftMove = Math.floor(Math.random() * 1000);
        const topMove = Math.floor(Math.random() * 1000);
        const newBallon: Ballon = {
            id: Math.floor(Math.random() * 1000).toString(),
            imageUrl: ballonPic,
            left: leftMove,
            top: topMove}
        setBallons((prevBalloons) => [...prevBalloons, newBallon]);
    }
    if (isPlaying2){
        const leftMove = Math.floor(Math.random() * 900);
        const topMove = 0;
        const newBallon: Ballon = {
            id: Math.floor(Math.random() * 1000).toString(),
            imageUrl: ballonPic,
            left: leftMove,
            top: topMove}
            //setBallons([...prevBalloons, newBallon] לא עובד כי הוא לא מוסיף את הבלון לאריי 
            setBallons((prevBalloons) => [...prevBalloons, newBallon]);
        }
}

    function popTheBallon(currentBallon: string) {
        setBallons(ballons.map(b =>
            b.id === currentBallon
                ? { ...b, imageUrl: ballonExplode}
                : b
        ));
    }

    function level_1_start() {
        setIsPlaying1(true);
        setFlyClass(false);   /* מבטל את הקלאס שמעיף בלונים למעלה */
    }

    function level_2_start() {
        setIsPlaying2(true);
        setFlyClass(true);  /* מפעיל את הקלאס שמעיף בלונים למעלה */
    }

    return (
        <div>
            <p className={style.timer}>Timer: {timer}</p>
            <p className={style.score}>Score: {score}</p>
            <button className={style.play} onClick={level_2_start}>Level 2</button>
            <button className={style.play} style={{left:"399px"}} onClick={level_1_start}>Level 1</button>
            {ballons.map(ballon =>
                <div className={style.ballons} key={ballon.id}>
                    <img
                        className={flyClass? style.fly : ""}
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
