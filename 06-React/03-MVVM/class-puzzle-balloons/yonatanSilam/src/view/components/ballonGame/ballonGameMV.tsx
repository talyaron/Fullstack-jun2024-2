import { useEffect, useState } from "react";
import { Balloon } from "../../../model/balloons/balloonModel";

export function useBalloonGameMV() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  useEffect(() => {//the effect runs only once, after the component is mounted (first render).
    const generateBalloons = () => {
      const newBalloons = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        positionX: Number(Math.random() * window.innerHeight),
        positionY: Number(Math.random() * window.innerWidth),
        isItPop:false
      }));
      setBalloons(newBalloons)
    };
    generateBalloons();
  },[]);
  return {
    balloons,
    setBalloons,
  };
}
